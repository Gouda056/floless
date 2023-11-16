import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Stack,
  Typography,
  OutlinedInput,
  TextField,
} from "@mui/material";
import GlobalLoader from "../../common/globalLoader";
import React, { useState } from "react";
import CustomFormLabel from "../../forms/theme-elements/customFormLabel";
import CustomTextField from "../../forms/theme-elements/customTextField";
import CustomCheckbox from "../../forms/theme-elements/customCheckbox";
import * as yup from "yup";
import { FormikValues, useFormik } from "formik";
import CustomOutlinedInput from "../../forms/theme-elements/customOutlinedInput";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";

const validationSchema = yup.object({
  firstName: yup
    .string()
    .min(3, "Name should be minimum 3 characters length")
    .matches(/^[A-Za-z\s]+$/, "Name should only contain letters and spaces")
    .max(50, "Name should be maximum 50 characters length")
    .required("First Name is required"),
  lastName: yup
    .string()
    .min(1, "Name should be minimum 1 characters length")
    .matches(/^[A-Za-z\s]+$/, "Name should only contain letters and spaces")
    .max(50, "Name should be maximum 50 characters length")
    .required("Last Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/\d{7}$/, "Phone number must be atleast 7 digits.")
    .required("Phone number is required"),
  message: yup
    .string()
    .max(3400, "Message should be of maximum 3400 characters length")
    .required("Your message is required"),
  privacyPolicy: yup
    .boolean()
    .oneOf([true], "You must accept the Privacy Policy"),
});

const GetInTouch = () => {
  const BASEURL = process.env.NEXT_PUBLIC_URL;
  const [loading, setLoading] = useState(false);
  const [errorStates, setErrorStates] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    message: false,
    privacyPolicy: false,
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      phone: "",
      privacyPolicy: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleBlurFirstName = () => {
    if (
      !errorStates.firstName &&
      formik.touched.firstName &&
      formik.errors.firstName
    ) {
      setErrorStates((prevState) => ({ ...prevState, firstName: true }));
    }
  };

  const handleBlurLastName = () => {
    if (
      !errorStates.lastName &&
      formik.touched.lastName &&
      formik.errors.lastName
    ) {
      setErrorStates((prevState) => ({ ...prevState, lastName: true }));
    }
  };

  const handleBlurEmail = () => {
    if (!errorStates.email && formik.touched.email && formik.errors.email) {
      setErrorStates((prevState) => ({ ...prevState, email: true }));
    }
  };

  const handleBlurPhone = () => {
    if (!errorStates.phone && formik.touched.phone && formik.errors.phone) {
      setErrorStates((prevState) => ({ ...prevState, phone: true }));
    }
  };

  const handleBlurMessage = () => {
    if (
      !errorStates.message &&
      formik.touched.message &&
      formik.errors.message
    ) {
      setErrorStates((prevState) => ({ ...prevState, message: true }));
    }
  };

  const handleSubmit = (values: FormikValues) => {
    setLoading(true);
    axios
      .post(`${BASEURL}/store/contact-us`, {
        name: values.firstName,
        phone: values.phone,
        email: values.email,
        message: values.message,
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success(response?.data?.message);
          formik.values.firstName = "";
          formik.values.lastName = "";
          formik.values.phone = "";
          formik.values.email = "";
          formik.values.message = "";
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error?.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Box
      className="container "
      sx={{
        marginTop: "11vh !important",
        Height: "100vh",
      }}
    >
      <Grid
        container
        spacing={{ xs: 1, md: "4rem" }}
        sx={{
          padding: "2rem 2rem 6rem ",
        }}
      >
        <Grid item xs={12} lg={6} display="flex" justifyContent="center">
          <Box
            sx={{
              marginTop: "1rem",
            }}
          >
            <Typography
              className="font-visby"
              sx={{
                color: "var(--gray-900, #101828)",
                fontSize: "2.25rem",
                fontStyle: "normal",
                fontWeight: "900",
                WebkitTextStrokeWidth: "2px",

                WebkitTextStrokeColor: "black",
                lineHeight: "2.75rem",
                letterSpacing: "1px",
              }}
            >
              Get in touch
            </Typography>
            <Typography
              className="font-visby"
              sx={{
                color: "var(--gray-900, #101828)",
                fontSize: "1.25rem",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "1.875rem",
                marginTop: "1.25rem",
              }}
            >
              Our friendly team would love to hear from you.
            </Typography>
            {loading && <GlobalLoader />}

            <form
              onSubmit={formik.handleSubmit}
              style={{
                marginTop: "1rem",
                maxWidth: "20rem",
              }}
            >
              <Stack
                sx={{
                  gap: "2rem",
                  flexDirection: {
                    xs: "column",
                    lg: "row",
                  },
                }}
              >
                <Stack>
                  <CustomTextField
                    label="First Name*"
                    type="text"
                    className=" font-visby"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.firstName &&
                      Boolean(formik.errors.firstName)
                    }
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
                    onBlur={handleBlurFirstName}
                    sx={{
                      display: "flex",
                      width: {
                        xs: "19rem",
                        sm: "25rem",
                        md: "30rem",
                        lg: "14rem",
                      },
                      gap: "0.5rem",
                      alignSelf: "stretch",
                      marginTop: "0.5rem",
                      borderRadius: "0.5rem",
                      fontSize: "1rem",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "1.5rem",
                    }}
                  />
                </Stack>
                <Stack>
                  <CustomTextField
                    label="Last Name*"
                    type="text"
                    name="lastName"
                    className=" font-visby"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.lastName && Boolean(formik.errors.lastName)
                    }
                    onBlur={handleBlurLastName}
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
                    sx={{
                      display: "flex",
                      width: {
                        xs: "19rem",
                        sm: "25rem",
                        md: "30rem",
                        lg: "14rem",
                      },
                      gap: "0.5rem",
                      alignSelf: "stretch",
                      marginTop: "0.5rem",
                      borderRadius: "0.5rem",
                      background: "var(--base-white, #FFF)",
                      color: "var(--gray-500, #667085)",
                      fontSize: "1rem",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "1.5rem",
                    }}
                  />
                </Stack>
              </Stack>
              <Box
                sx={{
                  paddingTop: "1.5rem",
                }}
              >
                <CustomTextField
                  label="Email*"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  className=" font-visby"
                  onBlur={handleBlurEmail}
                  sx={{
                    display: "flex",
                    width: {
                      xs: "19rem",
                      sm: "25rem",
                      md: "30rem",
                    },
                    gap: "0.5rem",
                    alignSelf: "stretch",
                    marginTop: "0.5rem",
                    borderRadius: "0.5rem",
                    background: "var(--base-white, #FFF)",
                    color: "var(--gray-500, #667085)",
                    fontFamily: "sans-serif",
                    fontSize: "1rem",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "1.5rem",
                  }}
                />
              </Box>
              <Box
                sx={{
                  paddingTop: "1.5rem",
                }}
              >
                <CustomTextField
                  label="Phone Number*"
                  type="tel"
                  name="phone"
                  className=" font-visby"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                  onBlur={handleBlurPhone}
                  sx={{
                    display: "flex",
                    width: {
                      xs: "19rem",
                      sm: "25rem",
                      md: "30rem",
                    },
                    border: "var(--gray-500, #667085)",
                    gap: "0.5rem",
                    alignSelf: "stretch",
                    marginTop: "0.5rem",
                    borderRadius: "0.5rem",
                    background: "var(--base-white, #FFF)",
                    color: "var(--gray-500, #667085)",
                    fontFamily: "sans-serif",
                    fontSize: "1rem",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "1.5rem",
                  }}
                />
              </Box>
              <Box mt={3}>
                <CustomTextField
                  label="Message*"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                  helperText={formik.touched.message && formik.errors.message}
                  multiline
                  rows={2}
                  variant="outlined"
                  fullWidth
                  onBlur={handleBlurMessage}
                  className=" font-visby"
                  sx={{
                    borderRadius: "0.5rem",
                    width: {
                      xs: "19rem",
                      sm: "25rem",
                      md: "30rem",
                    },
                    gap: "0.5rem",
                    alignSelf: "stretch",
                    marginTop: "0.5rem",
                    background: "var(--base-white, #FFF)",
                    color: "var(--gray-500, #667085)",
                    fontFamily: "sans-serif",
                    fontSize: "1rem",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "1.5rem",
                  }}
                />
              </Box>
              <FormControlLabel
                control={
                  <CustomCheckbox
                    name="privacyPolicy"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    color="primary"
                  />
                }
                style={{
                  color: "var(--gray-600, #475467)",
                  fontFamily: "sans-serif",
                  fontSize: "1rem",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "1.5rem",
                  marginTop: "1.5rem",
                }}
                label=""
              />
              <Box component={Link} href="/privacy-policy" target="_blank">
                <FormControlLabel
                  label="You agree to our privacy policy"
                  control={<></>}
                  style={{
                    marginTop: "1.5rem",
                    color: "black",
                  }}
                />
              </Box>
              {formik.errors.privacyPolicy && !errorStates.privacyPolicy && (
                <Typography sx={{ fontSize: "0.75rem", color: "#FA896B" }}>
                  {formik.errors.privacyPolicy}
                </Typography>
              )}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "2rem",
                }}
              ></Box>
              <Button
                type="submit"
                sx={{
                  gap: "0.5rem",
                  padding: "0.75rem 1.25rem",
                  alignSelf: "stretch",
                  border: "none",
                  color: "white",
                  width: {
                    xs: "19rem",
                    sm: "25rem",
                    md: "30rem",
                  },
                  borderRadius: "0.5rem",
                  background: "var(--Primary, #2970FF)",
                  boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                }}
                className=" font-visby"
              >
                Send Message
              </Button>
            </form>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            display: {
              xs: "none",
              lg: "flex",
            },
          }}
          display="flex"
          justifyContent="center"
        >
          <img
            src="/images/landing/contactUs.jpeg"
            style={{
              width: "30rem",
              height: "38rem",
            }}
            alt=""
          />
        </Grid>
        <ToastContainer />
      </Grid>
    </Box>
  );
};

export default GetInTouch;
