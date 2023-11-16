import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Typography,
  Stack,
} from "@mui/material";
import { IconTrashFilled } from "@tabler/icons-react";
import { IconPencil } from "@tabler/icons-react";
import { IconUpload } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import ImageUploading from "react-images-uploading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ImageViewer from "react-simple-image-viewer";

interface props {
  open: boolean;
  handleClose: () => void;
  onFileToUpload: (formData: any) => any;
  type: string;
}
export default function ImageUploader({
  open,
  handleClose,
  onFileToUpload,
  type,
}: props) {
  const [images, setImages] = useState<any>([]);

  const maxNumber = 1;
  const onChange = (imageList: any) => {
    setImages(imageList);
  };
  const handleImageListUpload = (imageList: any) => {
    const formData = new FormData();
    if (images.length > 0) {
      formData.append("image", images[0].file);
      formData.append("type", type);
      onFileToUpload(formData);
      handleClose();
      setImages([]);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogContent>
        <ImageUploading
          multiple={false}
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <Box className="upload_image_container">
              <Box className="upload__image-wrapper">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ justifyContent: "end" }}
                    mt={3}
                  >
                    <button
                      disabled={images.length > 0 ? true : false}
                      className={
                        images.length > 0
                          ? "image_upload_button_disable"
                          : "image_upload_button"
                      }
                      type="button"
                      style={
                        isDragging
                          ? { backgroundColor: "error" }
                          : { backgroundColor: "primary" }
                      }
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      <Image
                        src={"/images/profile/photo-upload-icon.png"}
                        alt={"Image is loading"}
                        height={100}
                        width={100}
                      />
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            color: "rgb(75 85 99)",
                            fontSize: "0.875rem",
                            lineHeight: "1.25rem",
                            flexDirection: "row",
                          }}
                        >
                          <Box
                            sx={{
                              cursor: "pointer",
                              borderRadius: "0.375rem",
                              backgroundColor: "#FFFFFF",
                              fontWeight: "500",
                              color: "#4F46E5",
                              outline: "none",
                              "&:focus-within": {
                                borderColor: "#667EEA",
                                outlineOffset: "2px",
                              },
                              "&:hover": {
                                color: "#667EEA",
                              },
                            }}
                            // htmlFor="file-upload"
                          >
                            <Typography color={images.length > 0 ? "#e1112a" : "#0a33aa"} fontWeight={600} sx={{cursor: images.length > 0 ? "not-allowed" : "pointer"}}>
                              Upload Images
                            </Typography>
                          </Box>
                          <Typography paddingLeft={1}>
                            or drag and drop up to 10MB
                          </Typography>
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "1rem",
                            color: "#718096",
                            marginTop: 1,
                          }}
                        >
                          Type:PNG, JPG or JPEG
                        </Typography>
                      </Box>
                    </button>
                  </Stack>
                    <Button onClick={() => handleClose()} variant="contained" color="error">Cancel</Button>
                </Box>
              </Box>
              <Box>
                {images.map((image: any, index: number) => (
                  <div key={index} className="image-item">
                    <Image
                      src={image["data_url"]}
                      alt=""
                      width={150}
                      height={200}
                    />
                    <div className="image-item__btn-wrapper">
                      <button
                        title="update"
                        className="image_upload_edit"
                        type="button"
                        onClick={() => onImageUpdate(index)}
                      >
                        <IconPencil height={18} />
                      </button>
                      <button
                        title="delete"
                        className="image_upload_delete"
                        type="button"
                        onClick={() => onImageRemove(index)}
                      >
                        <IconTrashFilled height={18} color="#fff" />
                      </button>
                    </div>
                  </div>
                ))}
                {imageList.length > 0 && (
                  <Button
                    onClick={handleImageListUpload}
                    color="primary"
                    variant="contained"
                    sx={{ mt: 5 }}
                  >
                    <IconUpload height={18} />
                    Upload Image
                  </Button>
                )}
              </Box>
            </Box>
          )}
        </ImageUploading>
        <ToastContainer />
      </DialogContent>
    </Dialog>
  );
}
