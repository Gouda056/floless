import { Avatar, Box, LinearProgress, Typography } from "@mui/material";
import { IconCircleCheckFilled, IconCloudUpload } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

interface props {
  fileType: "string";
  period: "string" | number;
  isMultiple: boolean;
  onFileUpload: (files: FormData, type: string) => void;
  type: string;
  progress?: number;

}
export default function PreviewFileUploader({
  fileType,
  period,
  isMultiple,
  onFileUpload,
  type,
  progress
}: props) {
        const inputRef = useRef<HTMLInputElement | null>(null);
  const BASEURL  = process.env.NEXT_PUBLIC_URL;
  const [files, setFiles] = useState([])
  const [filesLength, setFilesLength] = useState(0)

  const selectedFiles = (file: any) => {
    setFiles(Array.from(file.target.files));
    handleupload(file.target.files)
  };

  const handleupload = (file: any) => {
    onFileUpload(file, type)
    setFiles([]);
  }

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
          accept={`${fileType}/*`}
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
        {type === "video" && progress ? 
              <Box sx={{width: "90%", marginX: "auto"}}>
                <LinearProgress variant="determinate" value={progress} />
                {progress === 100 ? (
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography>Completed</Typography>
                      <IconCircleCheckFilled height={12} color={"green"} />
                    </Box>
                  ) : (
                    <Typography>{progress}%</Typography>
                  )}
              </Box>
              : null}
            </Box>
            {files.length > 0 && <Typography variant="subtitle2" color="error" textAlign="center" pt={0.5}>*Uploaded images: {filesLength}</Typography>}
      </>
  );

}
