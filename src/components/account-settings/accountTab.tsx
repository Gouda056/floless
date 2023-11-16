// @ts-nocheck
import { useEffect, useState } from "react";
import {
  CardContent,
  Grid,
  Typography,
  Box,
  Avatar,
  Button,
  CircularProgress,
  Divider,
} from "@mui/material";

import { Stack } from "@mui/system";
import BlankCard from "../shared/BlankCard";
import CustomFormLabel from "../forms/theme-elements/customFormLabel";
import CustomTextField from "../forms/theme-elements/customTextField";
import CustomSelect from "../forms/theme-elements/customSelect";
import { useFormik } from "formik";
import axios from "axios";
import ImageUploader from "./imageUploader";
import GlobalLoader from "../common/globalLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  first_name: yup
    .string()
    .matches(/^[A-Za-z\s]+$/, "Name should only contain letters and spaces")
    .required("Name is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/\d{7}$/, "Phone number must be atleast 7 digits."),
});

const AccountTab = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const [open, setOpen] = useState(false);
  const BASEURL = process.env.NEXT_PUBLIC_URL;
  const [initialFormValues, setInitialFormValues] = useState({
    first_name: "",
    email: "",
    phone: "",
  });

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      first_name: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmitProfileUpdate(values);
    },
  });

  // Get Api
  const getUserData = () => {
    setLoading(true);
    axios
      .get(`${BASEURL}/profile`)
      .then((response) => {
        setInitialFormValues({
          first_name: response?.data?.data?.first_name,
          email: response?.data?.data?.email,
          phone: response?.data?.data?.phone,
        });
        setImageUrl(response?.data?.data?.profile_photo);
        localStorage.setItem(
          "userProfileImageUrl",
          JSON.stringify(response?.data?.data?.profile_photo)
        );
        localStorage.setItem(
          "userName",
          JSON.stringify(response?.data?.data?.first_name)
        );
        localStorage.setItem(
          "email",
          JSON.stringify(response?.data?.data?.email)
        );
        formik.setFieldValue("email", response?.data?.data?.email);
        formik.setFieldValue("phone", response?.data?.data?.phone);
        formik.setFieldValue("first_name", response?.data?.data?.first_name);
      })
      .catch((err) => {
        // console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Profile upload
  const onFileToUpload = (file: any) => {
    setLoading(true);
    axios
      .post(`${BASEURL}/profile/upload`, file)
      .then((response) => {
        if (response.status === 200) {
          toast.success(response?.data?.message);
          getUserData();
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 4000);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  // Profile update
  const handleSubmitProfileUpdate = (data: FormikValues) => {
    setLoading(true);
    const updatedData = {};

    for (const key in data) {
      if (data[key] !== initialFormValues[key]) {
        updatedData[key] = data[key];
      }
    }
    axios
      .patch(`${BASEURL}/profile-update`, {
        ...updatedData,
        // first_name: data.name,
        // email: data.email,
        // phone: data.phone,
        // social_media_links: data.social_media_links
      })
      .then((response) => {
        if (response.status === 200) {
          setErrorMessage("");
          toast.success(response?.data?.message);
          getUserData();
        }
      })
      .catch((error) => {
        setError(true);
        setErrorMessage(error?.response?.data?.errors);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const isFormDirty = Object.keys(initialFormValues).some(
    (key) => initialFormValues[key] !== formik.values[key]
  );

  return (
    <Grid container spacing={3}>
      {loading && <GlobalLoader />}
      {/* Change Profile */}
      <Grid item xs={12} lg={6}>
        <BlankCard>
          <CardContent>
            <Typography variant="h5" mb={1}>
              Change Profile
            </Typography>
            <Typography color="textSecondary" mb={5}>
              Change your profile picture from here
            </Typography>
            <Box textAlign="center" display="flex" justifyContent="center">
              <Box>
                <Avatar
                  src={imageUrl}
                  alt={"Image is loading..."}
                  sx={{ width: 120, height: 120, margin: "0 auto" }}
                />
                <Stack
                  direction="row"
                  justifyContent="center"
                  spacing={2}
                  my={2}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    component="label"
                    onClick={() => setOpen(true)}
                  >
                    Upload
                  </Button>
                  <ImageUploader
                    open={open}
                    handleClose={handleClose}
                    onFileToUpload={onFileToUpload}
                    type={"profile_photo"}
                  />
                </Stack>
                <Typography variant="subtitle1" color="textSecondary" mb={1}>
                  Allowed JPG, JPEG or PNG.
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </BlankCard>
      </Grid>

      <Grid item xs={12} lg={6}>
        <BlankCard>
          <CardContent>
            <Typography variant="h4" mb={1}>
              Personal Details
            </Typography>
            <Typography color="textSecondary" mb={1}>
              To change your personal detail , edit and save from here
            </Typography>
            <Divider></Divider>
            {error && (
              <Box sx={{ marginTop: 1 }}>
                <Typography color={"error"} mb={2} sx={{ fontWeight: 600 }}>
                  {errorMessage?.email}
                </Typography>
                <Typography color={"error"} mb={2} sx={{ fontWeight: 600 }}>
                  {errorMessage?.phone}
                </Typography>
                <Typography color={"error"} mb={2} sx={{ fontWeight: 600 }}>
                  {errorMessage?.first_name}
                </Typography>
              </Box>
            )}
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="first_name"
                  >
                    Name*
                  </CustomFormLabel>
                  <CustomTextField
                    id="first_name"
                    name="first_name"
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.first_name &&
                      Boolean(formik.errors.first_name)
                    }
                    helperText={
                      formik.touched.first_name && formik.errors.first_name
                    }
                    variant="outlined"
                    fullWidth
                    placeholder={"Enter your name"}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  {/* 5 */}
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="email"
                  >
                    Email*
                  </CustomFormLabel>
                  <CustomTextField
                    id="email"
                    value={formik.values.email}
                    variant="outlined"
                    fullWidth
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    placeholder={"Enter your email address"}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  {/* 6 */}
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="phone"
                  >
                    Phone*
                  </CustomFormLabel>
                  <CustomTextField
                    id="phone"
                    value={formik.values.phone}
                    variant="outlined"
                    fullWidth
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                    placeholder={"Enter phone number"}
                  />
                </Grid>
              </Grid>
              <Stack
                direction="row"
                spacing={2}
                sx={{ justifyContent: "start" }}
                mt={3}
              >
                <Button
                  type="submit"
                  size="large"
                  variant="contained"
                  color="primary"
                  disabled={!isFormDirty}
                >
                  Save
                </Button>
              </Stack>
            </form>
          </CardContent>
        </BlankCard>
        <ToastContainer />
      </Grid>
    </Grid>
  );
};

export default AccountTab;
