// @ts-nocheck
import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  CardContent,
  Grid,
  IconButton,
  Typography,
  Tooltip,
  Button,
  Divider,
} from "@mui/material";
// components

import { Stack } from "@mui/system";
import BlankCard from "../shared/BlankCard";
import CustomFormLabel from "../forms/theme-elements/customFormLabel";
import CustomTextField from "../forms/theme-elements/customTextField";
import { useFormik, FormikValues } from "formik";
import Image from "next/image";
import axios from "axios";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageUploader from "./imageUploader";
import GlobalLoader from "../common/globalLoader";
import CustomTextarea from "../forms/theme-elements/customTextArea";
import Scrollbar from "../common/custom-scroll/Scrollbar";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .matches(/^[A-Za-z\s]+$/, "Name should only contain letters and spaces"),
  gst_number: yup
    .string()
    .matches(
      /^(?!00)\d{2}[A-Z]{5}\d{4}[A-Z]{1}[0-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/i,
      "Invalid Indian GST number"
    ),
  country: yup
    .string()
    .matches(/^[A-Za-z]+$/, 'Country should contain only letters')
    .min(2, "Country should be of minimum 2 characters length")
    .max(100, "Country should be of maximum 100 characters length"),
  state: yup
    .string()
    .matches(/^[A-Za-z]+$/, 'State should contain only letters')
    .min(2, "State should be of minimum 2 characters length")
    .max(100, "State should be of maximum 100 characters length"),
  city: yup
    .string()
    .matches(/^[A-Za-z]+$/, 'City should contain only letters')
    .min(2, "City should be of minimum 2 characters length")
    .max(100, "City should be of maximum 100 characters length"),
  address_line_1: yup
    .string()
    .min(1, "Address line 1 should be of minimum 1 characters length")
    .max(100, "Address1 should be of maximum 100 characters length"),
  address_line_2: yup
    .string()
    .min(1, "Address line 2 should be of minimum 1 characters length")
    .max(100, "Address2 should be of maximum 100 characters length"),
  about_us: yup
    .string()
    .max(
      3400,
      "Company description should be of maximum 3400 characters length"
    ),
  pincode: yup.string().matches(/^[1-9][0-9]{5}$/, "Invalid pin code"),
  // .required("Pin code is required"),
});

const CompanyDetails = () => {
  const [logoUrl, setLogoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const BASEURL = process.env.NEXT_PUBLIC_URL;
  const [initialFormValues, setInitialFormValues] = useState({
    name: "",
    gst_number: "",
    about_us: "",
    social_media_links: {
      facebook: "",
      youtube: "",
      instagram: "",
      website: "",
    },
    state: "",
    city: "",
    address_line_1: "",
    address_line_2: "",
    country: "",
    pincode: "",
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      gst_number: "",
      about_us: "",
      social_media_links: {
        facebook: "",
        youtube: "",
        instagram: "",
        website: "",
      },
      state: "",
      city: "",
      address_line_1: "",
      address_line_2: "",
      country: "",
      pincode: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmitComapanyDetails(values);
    },
  });
  // Hnadle close for madal
  const handleClose = () => {
    setOpen(false);
  };

  // Get Api for comapny details
  const getComapnyDetails = () => {
    setLoading(true);
    axios
      .get(`${BASEURL}/company`)
      .then((response) => {
        localStorage.setItem(
          "companyLogo",
          response?.data?.data?.logo ||
            "/images/profile/blank-image-skeleton.png"
        );
        localStorage.setItem("companyName", response?.data?.data?.name);

        setInitialFormValues({
          name: response?.data?.data?.name,
          gst_number: response?.data?.data?.gst_number,
          about_us: response?.data?.data?.about_us,
          state: response?.data?.data?.state,
          city: response?.data?.data?.city,
          address_line_1: response?.data?.data?.address_line_1,
          address_line_2: response?.data?.data?.address_line_2,
          country: response?.data?.data?.country,
          pincode: response?.data?.data?.pincode,
          social_media_links: {
            facebook: response?.data?.data?.social_media_links.facebook,
            youtube: response?.data?.data?.social_media_links.youtube,
            instagram: response?.data?.data?.social_media_links.instagram,
            website: response?.data?.data?.social_media_links.website,
          },
        });
        setLogoUrl(response?.data?.data?.logo);
        formik.setFieldValue("name", response?.data?.data?.name);
        formik.setFieldValue("gst_number", response?.data?.data?.gst_number);
        formik.setFieldValue("about_us", response?.data?.data?.about_us);
        formik.setFieldValue(
          "address_line_1",
          response?.data?.data?.address_line_1
        );
        formik.setFieldValue(
          "address_line_2",
          response?.data?.data?.address_line_2
        );
        formik.setFieldValue("state", response?.data?.data?.state);
        formik.setFieldValue("city", response?.data?.data?.city);
        formik.setFieldValue("country", response?.data?.data?.country);
        formik.setFieldValue(
          "pincode",
          response?.data?.data?.pincode !== null
            ? response?.data?.data?.pincode
            : ""
        );
        formik.setFieldValue(
          "social_media_links.facebook",
          response?.data?.data?.social_media_links.facebook
        );
        formik.setFieldValue(
          "social_media_links.youtube",
          response?.data?.data?.social_media_links.youtube
        );
        formik.setFieldValue(
          "social_media_links.instagram",
          response?.data?.data?.social_media_links.instagram
        );
        formik.setFieldValue(
          "social_media_links.website",
          response?.data?.data?.social_media_links.website
        );
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Comapny logo upload
  const onFileToUpload = (file: any) => {
    setLoading(true);
    axios
      .post(`${BASEURL}/profile/upload`, file)
      .then((response) => {
        if (response.status === 200) {
          toast.success(response?.data?.message);
          getComapnyDetails();
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 5000);
      });
  };
  useEffect(() => {
    getComapnyDetails();
  }, []);

  // company-update api call
  const handleSubmitComapanyDetails = (data: FormikValues) => {
    setLoading(true);
    const updatedData = {};

    for (const key in data) {
      if (key !== "social_media_links") {
        if (data[key] !== initialFormValues[key]) {
          updatedData[key] = data[key];
        }
      }
    }
    updatedData["social_media_links"] = data["social_media_links"];

    // for (const key in data) {
    //   if (key === "social_media_links") {
    // For the social_media_links object, check each subfield
    //     updatedData[key] = {};

    //     for (const subKey in data[key]) {
    //       if (data[key][subKey] !== initialFormValues[key][subKey]) {
    //         updatedData[key][subKey] = data[key][subKey];
    //       }
    //     }
    //     if (Object.keys(updatedData[key]).length === 0) {
    //       delete updatedData[key];
    //     }
    //   } else if (data[key] !== initialFormValues[key]) {
    // For other fields, compare their values and add them to updatedData if different
    //     updatedData[key] = data[key];
    //   }
    // }

    axios
      .patch(`${BASEURL}/company/profile-update`, {
        ...updatedData,
      })
      .then((response) => {
        if (response.status === 200) {
          getComapnyDetails();
          toast.success(response?.data?.message);
        }
      })
      .catch((error) => {
        setErrorMessage(error?.response?.data?.message);
        toast.error(error?.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const isFormDirty = Object.keys(initialFormValues).some((key) => {
    if (key === "social_media_links") {
      // For the social_media_links object, check if any of its subfields are dirty
      return Object.keys(initialFormValues[key]).some(
        (subKey) =>
          initialFormValues[key][subKey] !== formik.values[key][subKey]
      );
    } else {
      // For other fields, simply compare their values
      return initialFormValues[key] !== formik.values[key];
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          {loading && <GlobalLoader />}
          <BlankCard>
            <CardContent>
              <Typography variant="h5" mb={1}>
                Change Company Logo
              </Typography>
              <Typography color="textSecondary" mb={3}>
                Change your company logo from here
              </Typography>
              <Box textAlign="center" display="flex" justifyContent="center">
                <Box>
                  <Avatar
                    // variant="rounded"
                    sx={{
                      width: 120,
                      height: 120,
                      margin: "0 auto",
                      backgroundColor: "#F5F5F5",
                    }}
                  >
                    <Image
                      src={
                        logoUrl !== null && logoUrl !== ""
                          ? logoUrl
                          : "/images/profile/blank-image-skeleton.png"
                      }
                      alt={"Image is loading..."}
                      height={100}
                      width={100}
                      onError={(e) => {
                        e.target.src =
                          "/images/profile/blank-image-skeleton.png";
                      }}
                    />
                  </Avatar>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    spacing={2}
                    my={3}
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
                      type={"logo"}
                    />
                  </Stack>
                  <Typography variant="subtitle1" color="textSecondary" mb={4}>
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
                Company Details
              </Typography>
              <Divider></Divider>
              {/* <Typography color={"error"} mb={2} sx={{ fontWeight: 600 }}>
                {errorMessage}
              </Typography> */}
              <SimpleBar style={{ maxHeight: 315 }}>
                <Grid container spacing={3} mt={0} px={2}>
                  <Grid item lg={6} md={12} sm={12} xs={12}>
                    <CustomFormLabel
                      sx={{
                        mt: 0,
                      }}
                      htmlFor="name"
                    >
                      Company Name*
                    </CustomFormLabel>
                    <CustomTextField
                      id="name"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                      placeholder="Enter company name"
                      variant="outlined"
                      fullWidth
                      // value={formik.values.companyName}
                      // onChange={formik.handleChange}
                      // error={
                      //   formik.touched.companyName && Boolean(formik.errors.companyName)
                      // }
                      // helperText={
                      //   formik.touched.companyName && formik.errors.companyName
                      // }
                    />
                  </Grid>
                  <Grid item lg={6} md={12} sm={12} xs={12}>
                    <CustomFormLabel
                      sx={{
                        mt: 0,
                      }}
                      htmlFor="gst_number"
                    >
                      GST Number
                    </CustomFormLabel>
                    <CustomTextField
                      id="gst_number"
                      name="gst_number"
                      value={formik.values.gst_number}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.gst_number &&
                        Boolean(formik.errors.gst_number)
                      }
                      helperText={
                        formik.touched.gst_number && formik.errors.gst_number
                      }
                      placeholder="Enter company GST number"
                      variant="outlined"
                      fullWidth
                      // value={formik.values.gstNumber}
                      // onChange={formik.handleChange}
                      // error={
                      //   formik.touched.gstNumber && Boolean(formik.errors.gstNumber)
                      // }
                      // helperText={formik.touched.gstNumber && formik.errors.gstNumber}
                    />
                  </Grid>
                  <Grid item lg={6} md={12} sm={12} xs={12}>
                    <CustomFormLabel
                      sx={{
                        mt: 0,
                      }}
                      htmlFor="country"
                    >
                      Country
                    </CustomFormLabel>
                    <CustomTextField
                      id="country"
                      name="country"
                      value={formik.values.country}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.country && Boolean(formik.errors.country)
                      }
                      helperText={
                        formik.touched.country && formik.errors.country
                      }
                      placeholder="country"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item lg={6} md={12} sm={12} xs={12}>
                    <CustomFormLabel
                      sx={{
                        mt: 0,
                      }}
                      htmlFor="state"
                    >
                      State
                    </CustomFormLabel>
                    <CustomTextField
                      id="state"
                      name="state"
                      value={formik.values.state}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.state && Boolean(formik.errors.state)
                      }
                      helperText={formik.touched.state && formik.errors.state}
                      placeholder="State"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item lg={6} md={12} sm={12} xs={12}>
                    <CustomFormLabel
                      sx={{
                        mt: 0,
                      }}
                      htmlFor="city"
                    >
                      City
                    </CustomFormLabel>
                    <CustomTextField
                      id="city"
                      name="city"
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      error={formik.touched.city && Boolean(formik.errors.city)}
                      helperText={formik.touched.city && formik.errors.city}
                      placeholder="city"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item lg={6} md={12} sm={12} xs={12}>
                    <CustomFormLabel
                      sx={{
                        mt: 0,
                      }}
                      htmlFor="pincode"
                    >
                      Pin Code
                    </CustomFormLabel>
                    <CustomTextField
                      type="text"
                      id="pincode"
                      name="pincode"
                      value={formik.values.pincode}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.pincode && Boolean(formik.errors.pincode)
                      }
                      helperText={
                        formik.touched.pincode && formik.errors.pincode
                      }
                      placeholder="Pin Code"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <CustomFormLabel
                      sx={{
                        mt: 0,
                      }}
                      htmlFor="address_line_1"
                    >
                      Address line 1
                    </CustomFormLabel>
                    <CustomTextarea
                      id="address_line_1"
                      name="address_line_1"
                      value={formik.values.address_line_1}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.address_line_1 &&
                        Boolean(formik.errors.address_line_1)
                      }
                      helperText={
                        formik.touched.address_line_1 &&
                        formik.errors.address_line_1
                      }
                      placeholder="Enter company address"
                      variant="outlined"
                      fullWidth
                      customHeight="70px"
                    />
                    {formik.errors.address_line_1 && (
                      <Typography
                        sx={{ fontSize: "0.75rem", color: "#FA896B" }}
                      >
                        {formik.errors.address_line_1}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <CustomFormLabel
                      sx={{
                        mt: 0,
                      }}
                      htmlFor="address_line_2"
                    >
                      Address line 2
                    </CustomFormLabel>
                    <CustomTextarea
                      id="address_line_2"
                      name="address_line_2"
                      value={formik.values.address_line_2}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.address_line_2 &&
                        Boolean(formik.errors.address_line_2)
                      }
                      helperText={
                        formik.touched.address_line_2 &&
                        formik.errors.address_line_2
                      }
                      placeholder="Enter company address"
                      variant="outlined"
                      fullWidth
                      customHeight="70px"
                    />
                    {formik.errors.address_line_2 && (
                      <Typography
                        sx={{ fontSize: "0.75rem", color: "#FA896B" }}
                      >
                        {formik.errors.address_line_2}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <CustomFormLabel
                      sx={{
                        mt: 0,
                      }}
                      htmlFor="about_us"
                    >
                      Company Description
                    </CustomFormLabel>
                    <CustomTextarea
                      id="about_us"
                      name="about_us"
                      value={formik.values.about_us}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.about_us &&
                        Boolean(formik.errors.about_us)
                      }
                      helperText={
                        formik.touched.about_us && formik.errors.about_us
                      }
                      placeholder="Enter company description"
                      variant="outlined"
                      fullWidth
                      customHeight="100px"
                    />
                    {formik.errors.about_us && (
                      <Typography
                        sx={{ fontSize: "0.75rem", color: "#FA896B" }}
                      >
                        {formik.errors.about_us}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    {/* 6 */}
                    <CustomFormLabel
                      sx={{
                        mt: 0,
                      }}
                      htmlFor="social_media_links.facebook"
                    >
                      Facebook
                    </CustomFormLabel>
                    <CustomTextField
                      id="facebook"
                      name="social_media_links.facebook"
                      value={formik.values.social_media_links.facebook}
                      variant="outlined"
                      fullWidth
                      placeholder="https://"
                      onChange={formik.handleChange}
                      // error={
                      //   formik.touched.social_media_links.facebook && Boolean(formik.errors.social_media_links.facebook)
                      // }
                      // helperText={
                      //   formik.touched.social_media_links.facebook && formik.errors.social_media_links.facebook
                      // }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    {/* 6 */}
                    <CustomFormLabel
                      sx={{
                        mt: 0,
                      }}
                      htmlFor="social_media_links.youtube"
                    >
                      YouTube
                    </CustomFormLabel>
                    <CustomTextField
                      id="youtube"
                      name="social_media_links.youtube"
                      value={formik.values.social_media_links.youtube}
                      variant="outlined"
                      fullWidth
                      placeholder="https://"
                      onChange={formik.handleChange}
                      // error={
                      //   formik.touched.social_media_links.youtube && Boolean(formik.errors.social_media_links.youtube)
                      // }
                      // helperText={formik.touched.social_media_links.youtube && formik.errors.social_media_links.youtube}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    {/* 6 */}
                    <CustomFormLabel
                      sx={{
                        mt: 0,
                      }}
                      htmlFor="social_media_links.instagram"
                    >
                      Instagram
                    </CustomFormLabel>
                    <CustomTextField
                      id="social_media_links.instagram"
                      name="social_media_links.instagram"
                      value={formik.values.social_media_links.instagram}
                      variant="outlined"
                      fullWidth
                      placeholder="https://"
                      onChange={formik.handleChange}
                      // error={
                      //   formik.touched.social_media_links.instagram &&
                      //   Boolean(formik.errors.social_media_links.instagram)
                      // }
                      // helperText={
                      //   formik.touched.social_media_links.instagram && formik.errors.social_media_links.instagram
                      // }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    {/* 6 */}
                    <CustomFormLabel
                      sx={{
                        mt: 0,
                      }}
                      htmlFor="social_media_links.website"
                    >
                      Website
                    </CustomFormLabel>
                    <CustomTextField
                      id="social_media_links.website"
                      name="social_media_links.website"
                      value={formik.values.social_media_links.website}
                      variant="outlined"
                      fullWidth
                      placeholder="https://"
                      onChange={formik.handleChange}
                      // error={
                      //   formik.touched.social_media_links.instagram &&
                      //   Boolean(formik.errors.social_media_links.instagram)
                      // }
                      // helperText={
                      //   formik.touched.social_media_links.instagram && formik.errors.social_media_links.instagram
                      // }
                    />
                  </Grid>
                </Grid>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ justifyContent: "start" }}
                  mt={4}
                  pl={2}
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
              </SimpleBar>
            </CardContent>
            <ToastContainer />
          </BlankCard>
        </Grid>
      </Grid>
    </form>
  );
};

export default CompanyDetails;
