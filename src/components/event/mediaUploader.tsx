// @ts-nocheck
import { AlbumRounded } from "@mui/icons-material";
import { Button, Dialog, Stack, Typography, Box } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface props {
  modalOpen: boolean;
  handleClose: () => void;
  onMediaUpload: (files: any) => void;
  fileType: string;
}
export default function MediaUploader({
  modalOpen,
  handleClose,
  onMediaUpload,
  fileType,
}: props) {
  const [files, setFiles] = useState([]);
  const [spaceAvailable, setSpaceAvailable] = useState(0);
  const [spaceUsed, setSpaceUsed] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const BASEURL = process.env.NEXT_PUBLIC_URL;

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

  const updateSelectedFiles = (newFiles: File[]) => {
    handleFetchSpace();
    const totalFilesSize = newFiles.reduce(
      (accumulator, file) => accumulator + Math.round(file.size / 1024),
      0
    );
    const totalSize = totalFilesSize + spaceUsed;
    if (totalSize > spaceAvailable) {
      setFiles([]);
      toast.error(
        `Oops, sorry! The file size appears to be greater than ${spaceAvailable} KB.`
      );
    } else {
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  function selectedFiles(event: React.ChangeEvent<HTMLInputElement>) {
    const selected = event.target.files;
    updateSelectedFiles(Array.from(selected));
  }

  // Functionality for upload files
  const uploadFiles = (files: any) => {
    onMediaUpload(files);
    setFiles([]);
    handleClose();
    resetInput();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const allowedFormats = ["image/jpeg", "image/jpg", "image/png"];
    const droppedFiles = Array.from(e.dataTransfer.files);
    const isInvalidFileFormat = droppedFiles.find(
      (file) => !allowedFormats.includes(file.type)
    );

    if (isInvalidFileFormat) {
      setFiles([]);
      toast.error(
        "Invalid file format. Only JPEG, JPG, or PNG formats are allowed."
      );
    } else {
      updateSelectedFiles(droppedFiles);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // To reset the input ref for slecting image
  const resetInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <Dialog open={modalOpen} onClose={() => true} fullWidth maxWidth="md">
      <Box sx={{ display: "flex" }}>
        <Box
          className={`file_upload__image_wrapper`}
          sx={{ width: files?.length > 0 ? "68%" : "98%" }}
        >
          <Box
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            sx={{
              cursor: "pointer",
              width: "100%",
              // height: "100%",
              // border: "2px dashed #ccc",
              borderRadius: "8px",
              padding: "16px",
            }}
          >
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
                <Image
                  src={"/images/gallery/file-upload-icon.png"}
                  alt="Image is laoding"
                  height={80}
                  width={80}
                />
              </div>
              <Stack
                display={"flex"}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                marginTop={1}
                gap={0.5}
              >
                <Typography sx={{ color: "blue", fontWeight: 600 }}>
                  Upload medias
                </Typography>
                <Typography>or drag and drop</Typography>
              </Stack>
              <Typography sx={{ textAlign: "center" }}>
                Type: PNG, JPG, or JPEG
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
              disabled={files.length > 0 ? false : true}
              onClick={() => uploadFiles(files)}
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
                setFiles([]);
              }}
              sx={{ paddingX: 3 }}
            >
              Close
            </Button>
          </Box>
        </Box>
        {files.length > 0 ? (
          <Box
            sx={{
              overflowY: files.length > 5 ? "auto" : "",
              height: "18rem",
              mt: 1,
              width: "30%",
              position: "relative",
            }}
          >
            <Typography
              variant="h5"
              sx={{ position: "sticky", top: 0, backgroundColor: "#fff" }}
            >
              {files.length > 1 ? "Selected files:" : "Selected file:"}
            </Typography>
            {files.map((file, i) => (
              <ul key={i}>{file.name}</ul>
            ))}
          </Box>
        ) : (
          ""
        )}
        {files?.length > 0 && (
          <Button
            onClick={() => {
              setFiles([]);
              resetInput();
            }}
            variant="contained"
            color="error"
            sx={{ position: "absolute", right: "100px", bottom: 5 }}
          >
            Clear All
          </Button>
        )}
      </Box>
      <ToastContainer />
    </Dialog>
  );
}
