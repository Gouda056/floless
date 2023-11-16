import { Box, Typography, Dialog, Stack, Button } from "@mui/material";
import Image from "next/image";
import { useRef, useState } from "react";

interface props {
  open: boolean;
  handleClose: () => void;
  onMediaUpload: (files: any) => void;
  fileExtensions?: string;
  fileType?: string;
}

export default function ExcelUpload({
  open,
  handleClose,
  onMediaUpload,
}: props) {
  const [files, setFiles] = useState<any>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  //   Uplaoded files
  const selectedFiles = (file: any) => {
    setFiles(Array.from(file.target.files));
  };

  // Functionality for upload files
  const uploadFiles = (files: Array<any>) => {
    const fd = new FormData();
    for (let i = 0; i < files.length; i++) {
      fd.append(`file`, files[i]);
    }
    onMediaUpload(fd);
    handleClose();
    setFiles([]);
  };

  // Drag an ddrop functionality
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(droppedFiles);
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

  return (
    <Dialog open={open} onClose={() => true} fullWidth maxWidth="md">
      <Box sx={{ display: "flex" }}>
        <Box className={`file_upload__image_wrapper`} sx={{ width: "98%" }}>
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
              disabled={files.length > 0 ? true : false}
            />
            <Box
              onClick={() => inputRef.current?.click()}
              sx={{ cursor: files.length > 0 ? "not-allowed" : "pointer", width: "100%", height: "100%" }}
            >
              <div className="file_upload_image_container">
                <Image
                  src={"/images/event/excel.png"}
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
                <Typography sx={{ color: files.length === 1 ? "red" : "blue", fontWeight: 600 }}>
                  Upload a file
                </Typography>
                <Typography> or drag and drop CSV up to 50MB</Typography>
              </Stack>
              {/* <Typography sx={{ textAlign: "center" }}>
                {fileExtensions}
              </Typography> */}
              <Typography sx={{textAlign: "center"}}>{files[0]?.name}</Typography>
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
              onClick={() => {handleClose(); setFiles([])}}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}
