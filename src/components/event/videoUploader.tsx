// @ts-nocheck
import {
  Box,
  Typography,
  Dialog,
  Stack,
  Button,
  LinearProgress,
} from "@mui/material";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import axios from "axios";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Upload } from "tus-js-client";
import ffmpeg from "fluent-ffmpeg";
import fs from "fs";
import Lottie from "lottie-react";
import animationData from "../../../src/assets/upload-icon.json";
import Scrollbar from "../custom-scroll/scrollbar";

interface props {
  open: boolean;
  handleClose: () => void;
  onMediaUpload: (files: any) => void;
  fileExtensions?: string;
  fileType?: string;
  eventId: string | undefined;
  type: string;
}

export default function VideoUploader({
  open,
  handleClose,
  onMediaUpload,
  fileExtensions,
  fileType,
  eventId,
  type,
}: props) {
  const [fileDetails, setFileDetails] = useState([]);
  const [filesToUpload, setFilesToUpload] = useState([]);
  const [allUploaded, setAllUploaded] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [fileResponse, setFileResponse] = useState([]);
  const [spaceAvailable, setSpaceAvailable] = useState(0);
  const [spaceUsed, setSpaceUsed] = useState(0);
  const BASEURL = process.env.NEXT_PUBLIC_URL;
  const VIMEOTOKEN = process.env.NEXT_PUBLIC_VIMEO_TOKEN;

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const droppedFiles = Array.from(e.dataTransfer.files);
    // const thumbnailDataUrl = captureVideoThumbnail(file);
    // Add the valid dropped files to the state
    setFileDetails((prevDetails) => [
      ...prevDetails,
      ...droppedFiles.map((file) => ({
        name: file.name,
        progress: 0,
        response: null,
        size: file.size,
      })),
    ]);
    setFilesToUpload((prevUploads) => [...prevUploads, ...droppedFiles]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Check the space alotted for the user
  const handleFetchSpace = () => {
    axios
      .get(`${BASEURL}/calculate-size`)
      .then((response) => {
        setSpaceAvailable(response?.data?.allocated_storage * 1048576);
        setSpaceUsed(Number(response?.data?.used_storage));
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      });
  };

  useEffect(() => {
    handleFetchSpace();
  }, []);
  //   Uplaoded files
  const selectedFiles = async (file: any) => {
    await handleFetchSpace();
    const selectedFiles = Array.from(file.target.files);

    const totalFilesSize = Array.from(selectedFiles).reduce(
      (accumulator, file) => accumulator + Math.round(file.size / 1024),
      0
    );
    const totalSize = totalFilesSize + spaceUsed;
    if (totalSize > spaceAvailable) {
      setFilesToUpload([]);
      toast.error(
        `Oops sorry the file size appears to be greater than the ${spaceAvailable} KB.`
      );
    } else {
      const selectedFilesWithDetails = selectedFiles.map((file: File) => ({
        name: file.name,
        progress: 0,
        response: null,
        size: file.size,
      }));

      setFileDetails((prevDetails) => [
        ...prevDetails,
        ...selectedFilesWithDetails,
      ]);
      setFilesToUpload((prevUploads) => [...prevUploads, ...selectedFiles]);
    }
  };

  useEffect(() => {
    if (fileDetails.length > 0) {
      if (filesToUpload.length > 0) {
        uploadFiles(filesToUpload);
      }
    }
  }, [filesToUpload]);

  // Functionality for upload files
  const uploadFiles = (files: File[]) => {
    files.forEach((file: File) => {
      onVideoUploadToVimeo(file);
    });
  };

  const onVideoUploadToVimeo = (file: any) => {
    let uri = "";
    let response = {};
    fetch("https://api.vimeo.com/me/videos", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${VIMEOTOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        upload: {
          approach: "tus",
          size: file.size,
        },
        name: file.name,
        description: "Your video description here",
        metadata: {
          aspect: "1080x1920",
        },
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        response.iframe = data.player_embed_url;
        response.url_code = data.uri.split("/")[2];
        response.thumbnail = data.pictures.sizes[6].link;
        response.url = data.link;
        response.event_id = eventId;
        response.type = type;
        response.size = Math.round(file.size / 1024);
        uri = data.uri;
        const uploadURL = data.upload.upload_link;
        // Step 2: Use tus.js to Upload
        const upload = new Upload(file, {
          endpoint: uploadURL,
          uploadUrl: uploadURL,
          uploadSize: file.size,
          retryDelays: [0, 1000, 3000, 5000],
          metadata: {
            filename: file.name,
            filetype: file.type,
          },
          onError: (error) => {
            toast.error("Failed because: " + error);
          },
          onProgress: (bytesUploaded, bytesTotal) => {
            const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
            setFileDetails((prevDetails) =>
              prevDetails.map((item) =>
                item.name === file.name
                  ? { ...item, progress: parseFloat(percentage) }
                  : item
              )
            );
          },
          onSuccess: () => {
            setFileResponse((prevResponse) => [...prevResponse, response]);
            setFileDetails((prevDetails) =>
              prevDetails.map((item) =>
                item.name === file.name ? { ...item, response: upload } : item
              )
            );
          },
        });
        upload.start();
      })
      .catch((error) => {
        toast.error("Error during upload initialization:", error);
      });
  };

  const handleSubmit = () => {
    if (fileResponse.length > 0) {
      onMediaUpload(fileResponse);
      setFileResponse([]);
      setFilesToUpload([]);
      setFileDetails([]);
      handleClose();
    }
  };
  // Check if all files are fully uploaded (progress = 100)
  useEffect(() => {
    if (fileDetails.length > 0 && filesToUpload.length > 0) {
      const anyFileNotFullyUploaded = fileDetails.some(
        (file) => file.progress !== 100
      );
      setAllUploaded(!anyFileNotFullyUploaded);
    }
  }, [fileDetails]);

  return (
    <Dialog open={open} onClose={() => true} fullWidth maxWidth="md">
      <Box
        sx={{ display: "flex" }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
      >
        <Box
          className={`file_upload__image_wrapper`}
          sx={{ width: filesToUpload?.length > 0 ? "68%" : "98%" }}
        >
          <Box>
            <input
              ref={inputRef}
              aria-label="video file upload"
              type="file"
              multiple
              onChange={(e) => selectedFiles(e)}
              style={{ display: "none" }}
              accept={`${fileType}/*`}
            />
            <Box
              onClick={() => inputRef.current?.click()}
              sx={{ cursor: "pointer", width: "100%", height: "100%" }}
            >
              <div className="file_upload_image_container">
                <Lottie
                  style={{ height: 200, width: 200 }}
                  animationData={animationData}
                />
              </div>
              <Stack
                display={"flex"}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={0.5}
              >
                <Typography sx={{ color: "blue", fontWeight: 600 }}>
                  Upload medias
                </Typography>
                <Typography>or drag and drop</Typography>
              </Stack>
              <Typography sx={{ textAlign: "center" }}>
                {fileExtensions}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 1,
              gap: 1,
            }}
          >
            <Button
              disabled={!allUploaded}
              onClick={() => handleSubmit()}
              variant="contained"
              color="primary"
              sx={{ textAlign: "center" }}
            >
              Upload
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                handleClose();
                setFilesToUpload([]);
                setFileDetails([]);
              }}
              sx={{ paddingX: 3 }}
            >
              Close
            </Button>
          </Box>
        </Box>
        {filesToUpload.length > 0 ? (
          <Box
            sx={{
              overflowY: filesToUpload.length > 5 ? "auto" : "",
              height: "18rem",
              mt: 1,
              width: "28%",
              position: "relative",
              paddingRight: "5px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                position: "sticky",
                top: 0,
                backgroundColor: "#fff",
                zIndex: "9999",
              }}
            >
              {fileDetails.length > 1 ? "Selected files" : "Selected file"}
            </Typography>
            {fileDetails.map((file: any, i) => (
              <Scrollbar sx={{maxHeight: "500px",}}>
                <ul key={i} style={{ marginLeft: "-40px" }}>
                  <Typography sx={{ wordBreak: "break-word" }}>
                    {file.name}
                  </Typography>
                  <Box>
                    <LinearProgress variant="determinate" value={file.progress} />
                    {file.progress === 100 ? (
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography>Completed</Typography>
                        <IconCircleCheckFilled height={12} color={"green"} />
                      </Box>
                    ) : (
                      <Typography>{file.progress}%</Typography>
                    )}
                  </Box>
                </ul>
              </Scrollbar>
            ))}
          </Box>
        ) : (
          ""
        )}
        {/* {filesToUpload?.length > 0 && (
          <Button
            onClick={() => setFilesToUpload([null])}
            variant="contained"
            color="error"
            sx={{ position: "absolute", right: "100px", bottom: 5 }}
          >
            Clear All
          </Button>
        )} */}
      </Box>
      <ToastContainer />
    </Dialog>
  );
}
