import React, { useEffect, useRef, useState } from "react";
import { IconCloudUpload } from "@tabler/icons-react";
import { Avatar, Box, Typography } from "@mui/material";
import axios from "axios";

interface Props {
  onFileUpload: (files: FormData) => void;
  formik: any;
  isMultiple: boolean;
  clearImages: boolean;
}

export default function ThemeFileUpload({
  onFileUpload,
  isMultiple,
  clearImages,
}: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const BASEURL = process.env.NEXT_PUBLIC_URL;
  const [files, setFiles] = useState([]);
  const [filesLength, setFilesLength] = useState(0);

  const selectedFiles = (file: any) => {
    setFiles(Array.from(file.target.files));
  };

  // Clear images on reset
  useEffect(() => {
    if (clearImages) {
      setFiles([]);
      setFilesLength(0);
    }
  }, [clearImages]);

  // Storing the uploaded images
  useEffect(() => {
    setFilesLength(files.length);
    handleFileChange(files);
  }, [files]);

  const handleFileChange = (files: any) => {
    const formData = new FormData();
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        formData.append(`image[${i}]`, files[i]);
      }
      handleupload(formData);
    }
  };
  const handleupload = (files: any) => {
    onFileUpload(files);
  };

  return (
    <>
      <Box border="0.5px solid gray">
        <input
          ref={inputRef}
          aria-label="image file upload"
          onChange={(e) => selectedFiles(e)}
          type="file"
          style={{ display: "none" }}
          multiple={isMultiple}
          accept="image/*"
        />
        <Box
          onClick={() => inputRef.current?.click()}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 1,
            width: "100%",
          }}
        >
          <Avatar
            variant="rounded"
            sx={{
              bgcolor: "grey.100",
              color: "grey.500",
              width: 30,
              height: 30,
            }}
          >
            <IconCloudUpload size="22" />
          </Avatar>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              color="primary"
              sx={{ fontSize: "0.75rem", fontWeight: 700, cursor: "pointer" }}
            >
              Click to upload
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
