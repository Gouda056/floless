// @ts-nocheck
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomTextField from "../forms/theme-elements/customTextField";
import CustomFormLabel from "../forms/theme-elements/customFormLabel";
import { Stack } from "@mui/system";
import { FormikValues, useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import GlobalLoader from "../common/globalLoader";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});

const AuthTwoSteps = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [enableButton, setEnableButton] = useState(false);
  const BASEURL = process.env.NEXT_PUBLIC_URL;

  
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleEmailVerification(values);
    },
  });

  const handleEmailVerification = (data: FormikValues) => {
    setLoading(true);
    setEnableButton(true);
    axios.post(`${BASEURL}/forgot-password`, {
      email: data.email
    }).then((res) => {
      if (res?.data?.message !== undefined) {
        toast.info(res?.data?.message);
      }
  }).catch((err) => {
    toast.error(err.response.data.message);
    setError(err)
    setEnableButtons(false);
  }).finally(() => {
    setLoading(false);
  })
  }


  return (
    <form onSubmit={formik.handleSubmit}>
      <Box mt={2}>
        <Stack mb={3}>
          <CustomFormLabel htmlFor="email">
            Enter your email address*
          </CustomFormLabel>
          <Stack spacing={2} direction="row">
            <CustomTextField
              id="email"
              name="email"
              variant="outlined"
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              placeholder={"Enter your email address"}
            />
          </Stack>
        </Stack>
        <Button
        disabled={enableButton}
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          type="submit"
        >
          {loading ? (
            <Stack direction="row" alignItems="center" gap={1}>
              <CircularProgress
                sx={{ height: "15px !important", width: "15px !important" }}
              />
              <Typography>Submitting...</Typography>
            </Stack>) : "Submit"}
        </Button>
      </Box>
        <ToastContainer />
    </form>
  );
};

export default AuthTwoSteps;
