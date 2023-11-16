import { Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { FormikValues, useFormik } from "formik";
import * as yup from "yup";
import { Box } from "@mui/material";

import CustomTextField from "../forms/theme-elements/customTextField";
import CustomFormLabel from "../forms/theme-elements/customFormLabel";
import { useState, useEffect } from "react";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
import GlobalLoader from "../common/globalLoader";
import { signOut } from "next-auth/react";

// Validation Schema
const validationSchema = yup.object({
  newPassword: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .max(12, "Password should be of maximum 12 characters length")
    .transform((value) => (value ? value.trim() : value))
    .required("Password is required"),
  confirmedPassword: yup.string().when("newPassword", {
    is: (val: any) => (val && val.length > 0 ? true : false),
    then: yup
      .string()
      .oneOf([yup.ref("newPassword")], "Both passwords needs to be same")
      .required("Confirm new password is required"),
  }),
});
interface props {
  accessToken?: string;
}
const AuthResetPassword = ({accessToken}: props) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  // Validate access token
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_URL}/password/${accessToken}`)
    .then((response) => {
      // setAccessTokenExpire(response?.data?.message)
    }).catch((error) => {
      setErrorMessage(error?.response?.data?.message);
      // toast.error(error?.response?.data?.message);
    })
   },[])

  const handleResetPassword = (data: FormikValues) => {
    setLoading(true);
    axios.post(`${process.env.NEXT_PUBLIC_URL}/password/reset`, {
      token: accessToken,
      password: data.newPassword
    }).then((response) => {
      if(response.status === 200) {
        toast.success(response.data.message);
        setTimeout(() => {
          router.push("/login")
        },3000)
      }
    }).catch((error) => {
      setErrorMessage(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    }).finally(() => {
      setLoading(false);
    })
  }
  const formik = useFormik({
    initialValues: { newPassword: "", confirmedPassword: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleResetPassword(values);
    },
  });
  const [showNewPassword, setshowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack mt={2} spacing={2}>
        <Typography variant={'subtitle2'} sx={{textAlign: "center", color: "red"}}>{errorMessage}</Typography>
        <Box style={{ position: "relative" }}>
          <CustomFormLabel htmlFor="newPassword">New password*</CustomFormLabel>
          <CustomTextField
            id="newPassword"
            name="newPassword"
            type={showNewPassword ? "text" : "password"}
            variant="outlined"
            fullWidth
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.newPassword)}
            helperText={formik.errors.newPassword}
            placeholder={"Enter your new password"}
          />
          {showNewPassword ? (
            <IconEyeOff
              onClick={() => setshowNewPassword(false)}
              style={{
                position: "absolute",
                right: "5",
                bottom: `${
                  formik.errors.newPassword !== undefined ? "32 !important" : "12 !important"
                }`,
              }}
            />
          ) : (
            <IconEye
              onClick={() => setshowNewPassword(true)}
              style={{
                position: "absolute",
                right: "5",
                bottom: `${
                  formik.errors.newPassword !== undefined ? "32" : "12"
                }`,
              }}
            />
          )}
        </Box>
        <Box style={{ position: "relative" }}>
          <CustomFormLabel
          sx={{marginTop: 1}}
          htmlFor="confirmedPassword">
            Confirm password*
          </CustomFormLabel>
          <CustomTextField
            id="confirmedPassword"
            name="confirmedPassword"
            type={showConfirmPassword ? "text" : "password"}
            variant="outlined"
            fullWidth
            value={formik.values.confirmedPassword}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.confirmedPassword)}
            helperText={formik.errors.confirmedPassword}
            placeholder={"Confirm new password"}
          />
          {showConfirmPassword ? (
            <IconEyeOff
              onClick={() => setShowConfirmPassword(false)}
              style={{
                position: "absolute",
                right: "5",
                bottom: `${formik.errors.confirmedPassword ? "32" : "12"}`,
              }}
            />
          ) : (
            <IconEye
              onClick={() => setShowConfirmPassword(true)}
              style={{
                position: "absolute",
                right: "5",
                bottom: `${formik.errors.confirmedPassword ? "32" : "12"}`,
              }}
            />
          )}
        </Box>

        <Button
          type="submit"
          color="primary"
          variant="contained"
          size="large"
          fullWidth
        >
          Submit
        </Button>
      </Stack>
      <ToastContainer />
    </form>
  );
};

export default AuthResetPassword;
