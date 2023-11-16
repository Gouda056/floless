// @ts-nocheck
import {
  Box,
  Typography,
  Button,
  Stack,
  CircularProgress,
} from "@mui/material";
import Link from "next/link";
import { loginType } from "../../types/auth/auth";
import CustomTextField from "../forms/theme-elements/customTextField";
import CustomFormLabel from "../forms/theme-elements/customFormLabel";
import { FormikValues, useFormik } from "formik";
import * as yup from "yup";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

// Validation schema
const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .transform((value) => (value ? value.trim() : value))
    .min(3, "Password should be of minimum 8 characters length")
    .max(26, "Password should be of maximum 12 characters length")
    .required("Password is required"),
});

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const BASEURL = process.env.NEXT_PUBLIC_URL;

  // Handler for sign in
  const handleSubmitSignIn = async (data: FormikValues) => {
    setError("");
    setLoading(true);
    const userCredentials = await signIn("credentials", {
      email: data.email,
      password: data.password,
      api: `${BASEURL}/login`,
      redirect: false,
      callbackUrl: "/dashboard",
    });
    if (userCredentials?.ok === true) {
      localStorage.setItem("HasSeenWelcomeModal", "false");
      router.push("/dashboard");
    } else {
      setError(userCredentials.error);
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmitSignIn(values);
    },
  });

  // functionality for disabling the browser back button

  // if (window.location.pathname === "/login") {
  //   window.history.replaceState(null, null, window.location.href);
  // }

  return (
    <form onSubmit={formik.handleSubmit}>
      {title ? (
        <Typography fontWeight="700" variant="h3" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}
      <Typography
        sx={{
          color: "red",
          fontSize: "1rem",
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        {error}
      </Typography>
      <Stack>
        <Box>
          <CustomFormLabel htmlFor="email">Email Address*</CustomFormLabel>
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
        </Box>
        <Box style={{ position: "relative" }}>
          <CustomFormLabel htmlFor="password">Password*</CustomFormLabel>
          <CustomTextField
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            fullWidth
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            placeholder={"Enter your password"}
          />
          {showPassword ? (
            <IconEyeOff
              onClick={() => setShowPassword(false)}
              style={{
                position: "absolute",
                right: "5",
                bottom: `${
                  formik.touched.password && formik.errors.password
                    ? "32"
                    : "12"
                }`,
              }}
            />
          ) : (
            <IconEye
              onClick={() => setShowPassword(true)}
              style={{
                position: "absolute",
                right: "5",
                bottom: `${
                  formik.touched.password && formik.errors.password
                    ? "32"
                    : "12"
                }`,
              }}
            />
          )}
        </Box>
        <Stack
          justifyContent="space-between"
          direction="row"
          alignItems="center"
          my={2}
        >
          {/* <FormGroup>
            <FormControlLabel
              control={<CustomCheckbox defaultChecked />}
              label="Remeber this Device"
            />
          </FormGroup> */}
          <Typography
            component={Link}
            href="/auth/forgot-password"
            fontWeight="600"
            sx={{
              textDecoration: "none",
              color: "primary.main",
              "&:hover": {
                textDecoration: "underline",
                color: "#06c",
              },
            }}
          >
            Forgot Password ?
          </Typography>
        </Stack>
      </Stack>
      <Box>
        <Button
          disabled={loading}
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          // component={Link} //****commenting as can be removed in future******//
          type="submit"
        >
          {loading ? (
            <Stack direction="row" alignItems="center" gap={1}>
              <CircularProgress
                sx={{ height: "15px !important", width: "15px !important" }}
              />
              <Typography>Signing in...</Typography>
            </Stack>
          ) : (
            "Sign in"
          )}
        </Button>
      </Box>
      {subtitle}
    </form>
  );
};

export default AuthLogin;
