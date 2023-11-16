// @ts-nocheck
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Button,
  DialogActions,
  Toolbar,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { FormikValues, useFormik } from "formik";
import * as yup from "yup";
import CustomFormLabel from "../forms/theme-elements/customFormLabel";
import CustomTextarea from "../forms/theme-elements/customTextArea";
import { useEffect, useState } from "react";
import CustomTextField from "../forms/theme-elements/customTextField";
import { IconX } from "@tabler/icons-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface props {
  handleClose?: () => void;
  open?: boolean;
  onDataReceived?: (data: FormikValues, urls: any, videoCode: string) => void;
  videoData?: any;
  loading?: boolean;
  videoCode: number;
}

const validationSchema = yup.object({
  title: yup
    .string()
    .transform((value) => (typeof value === "string" ? value.trim() : value))
    .required("Title is required")
    .max(15, "Video title should be of maximum 30 characters length"),
  description: yup
    .string()
    .transform((value) => (typeof value === "string" ? value.trim() : value))
    .required("Description is required")
    .min(15, "Video description should be of minimum 50 characters length")
    .max(100, "Video description should be of maximum 100 characters length"),
});
export default function VideoDescriptionModal({
  open,
  handleClose,
  onDataReceived,
  videoData,
  loading,
  videoCode
}: props) {
  const initialFormValue = {
    description: "",
    title: "",
  };
  const [isDirty, setIsDirty] = useState(false);
  const VIMEOTOKEN = process.env.NEXT_PUBLIC_VIMEO_TOKEN;
  const [thumbnailUrl, setThumbnailUrl] = useState([]);
  const [initialValues, setInitialValues] = useState(
    videoData
      ? {
          title: videoData?.title !== null ? videoData?.title : "",
          description: videoData?.description !== null ? videoData?.description : "",
        }
      : initialFormValue
  );
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onDataReceived(values, thumbnailUrl, videoCode);
      if (values) {
        handleClose();
        handleEmptyValue();
      }
    },
  });

  // Check if form values have changed
  useEffect(() => {
    const formIsDirty =
      JSON.stringify(formik.values) !== JSON.stringify(initialValues);
    setIsDirty(formIsDirty);
  }, [formik.values, initialValues]);

  // Append values as and ehne teh data receivied 
  useEffect(() => {
    formik.setFieldValue("description", videoData?.description !== null ? videoData?.description : "");
    formik.setFieldValue("title", videoData?.title !== null ? videoData?.title : "");
    if(videoData?.description === null ) formik.errors.description = "";
  }, [videoData]);

  // Empty value when modal closed
  const handleEmptyValue = () => {
    formik.values.description = "";
    formik.errors.description = "";
    formik.values.title = "";
    formik.errors.title = "";
    setThumbnailUrl([])
  };

  useEffect(() => {
    handleFetchVideoThumbnail();
  }, [videoCode])

const handleFetchVideoThumbnail = () => {
    fetch(`https://api.vimeo.com/videos/${videoCode}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${VIMEOTOKEN}`,
        }
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        return response.json();
      })
      .then((videoData) => {
        const thumbnailLink = videoData.pictures.sizes[3].link;
        setThumbnailUrl(thumbnailLink);
      })
      .catch((error) => {
        console.error("Error during Vimeo API request:", error);
      });
  };

  return (
    <Dialog open={open} onClose={() => false} fullWidth maxWidth="xs">
      <form onSubmit={formik.handleSubmit}>
        <Toolbar sx={{ position: "absolute", top: -8, right: 0 }}>
          <IconButton
            sx={{
              zIndex: 9999,
              border: "1px solid #B8B8B8",
              borderRadius: "5px",
              "&:active": {
                borderColor: "blue",
                outline: "2px solid blue",
              },
              "&:focus": {
                outline: "2px solid blue",
              },
            }}
            edge="end"
            color="inherit"
            onClick={() => {
              handleClose();
              handleEmptyValue();
            }}
            aria-label="close"
          >
            <IconX height={18} />
          </IconButton>
        </Toolbar>
        {loading ? (
          <Box
            sx={{
              height: "20rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <CircularProgress />
            <Typography variant="h6">Loading...</Typography>
          </Box>
        ) : (
          <Box>
            <DialogContent>
              <Typography variant="h4" sx={{ mb: 2 }}>
                Add video title and description
              </Typography>
              <Typography mb={3} variant="subtitle2">
                To include a video title and description for the selected video.
              </Typography>
              <Box>
                <CustomFormLabel htmlFor="title">Title*</CustomFormLabel>
                <CustomTextField
                  id="title"
                  name="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  error={formik.touched.title && Boolean(formik.errors.title)}
                  helperText={formik.touched.title && formik.errors.title}
                  placeholder="Enter video title"
                  variant="outlined"
                  fullWidth
                />
              </Box>
              <Box>
                <CustomFormLabel htmlFor="description">
                  Description*
                </CustomFormLabel>
                <CustomTextarea
                  id="description"
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.description &&
                    Boolean(formik.errors.description)
                  }
                  helperText={
                    formik.touched.description && formik.errors.description
                  }
                  placeholder="Enter video description"
                  variant="outlined"
                  fullWidth
                  customHeight="70px"
                />
                {formik.errors.description && formik.touched.description && (
                  <Typography sx={{ fontSize: "0.75rem", color: "#FA896B" }}>
                    {formik.errors.description}
                  </Typography>
                )}
              </Box>
            </DialogContent>
            <DialogActions sx={{ pb: 1, pt: 0 }}>
              <Button
                onClick={() => {
                  handleClose();
                  handleEmptyValue();
                }}
                color="error"
                variant="contained"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{ paddingX: 3 }}
                disabled={!isDirty}
              >
                save
              </Button>
            </DialogActions>
          </Box>
        )}
      </form>
      <ToastContainer />
    </Dialog>
  );
}
