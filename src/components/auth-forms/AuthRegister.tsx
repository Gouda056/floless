import {
  Box,
  Typography,
  Button,
  Divider,
  CircularProgress,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useFormik, FormikValues } from "formik";
import * as yup from "yup";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import CustomFormLabel from "../forms/theme-elements/customFormLabel";
import CustomTextField from "../forms/theme-elements/customTextField";
import { registerType } from "../../types/auth/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, "Name should be minimum 3 characters length")
    .matches(/^[A-Za-z\s]+$/, "Name should only contain letters and spaces")
    .max(50, "Name should be maximum 50 characters length")
    .required("Name is required"),
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
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/\d{7}$/, "Phone number must be atleast 7 digits."),
});

const AuthRegister = ({ title, subtitle, subtext }: registerType) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (value: string, country: any) => {
    const localPhoneNumber = value.substring(country.dialCode.length);
    formik.setFieldValue("phone", localPhoneNumber);
    formik.setFieldValue("country_code", country.dialCode);
  };
  const BASEURL = process.env.NEXT_PUBLIC_URL;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      country_code: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleRegister(values);
    },
  });

  // Register and sign in
  // const handleSignIn = async (data: FormikValues) => {
  //   setLoading(true);
  //   const userCredentials = await signIn("credentials", {
  //     email: data.email,
  //     password: data.password,
  //     api: `${BASEURL}/login`,
  //     redirect: false,
  //     callbackUrl: "/dashboard",
  //   });
  //   if (userCredentials?.ok === true) router.push("/dashboard");
  //   else {
  //     setLoading(false);
  //   }
  // };
  const handleRegister = async (data: FormikValues) => {
    setLoading(true);
    setLoader(true);
    setError("");
    axios
      .post(`${BASEURL}/register`, {
        name: data.name,
        country_code: data.country_code,
        password: data.password.trim(),
        phone: data.phone,
        email: data.email,
      })
      .then((res) => {
        if (res.status === 201) {
          toast.success(res?.data?.message);
          setLoading(false);
        }
      })
      .catch((err) => {
        setError(err?.response?.data?.message.split("(")[0]);
        setLoading(false);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          display: {
            xs: "flex",
            lg: "none",
          },
        }}
      >
        <Image
          alt={"floless-logo"}
          src={"/images/logo.png"}
          height={170}
          width={200}
        />
      </Box>
      {title ? (
        <Typography fontWeight="700" variant="h3" mb={1} textAlign={"center"}>
          {title}
        </Typography>
      ) : null}

      <Typography sx={{ textAlign: "end" }}>{subtext}</Typography>
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
      <Box pb={5}>
        <Stack mb={3}>
          <CustomFormLabel htmlFor="name">Name*</CustomFormLabel>
          <CustomTextField
            id="name"
            name="name"
            type="text"
            variant="outlined"
            fullWidth
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.name)}
            helperText={formik.touched.email && formik.errors.name}
            placeholder={"Enter user name"}
          />
          <Box>
            <CustomFormLabel htmlFor="email">Email*</CustomFormLabel>
            <CustomTextField
              id="email"
              name="email"
              variant="outlined"
              type="email"
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              placeholder={"Enter your email address"}
            />
          </Box>
          <Box>
            <CustomFormLabel htmlFor="phone">Phone number*</CustomFormLabel>
            <PhoneInput
              country={"in"}
              value={phone}
              onChange={handlePhoneChange}
              specialLabel=""
              inputProps={{
                name: "phone",
                id: "phone",
              }}
              inputStyle={{
                width: "100%",
              }}
            />
            <Box
              component="p"
              sx={{
                ml: "16px",
                mt: "5px !important",
                color: "#f44336",
                fontSize: "11px",
              }}
            >
              {formik.touched.phone && formik.errors.phone}
            </Box>
            {/* <CustomTextField
              id="phone"
              name="phone"
              variant="outlined"
              type="tel"
              fullWidth
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              placeholder={"Enter phone number"}
            /> */}
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
                    formik.errors.password && formik.touched.password
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
                    formik.errors.password && formik.touched.password
                      ? "32"
                      : "12"
                  }`,
                }}
              />
            )}
          </Box>
        </Stack>
        <Button
          disabled={loading}
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          type="submit"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          {loading ? (
            <Stack direction="row" alignItems="center" gap={1}>
              {loader ? (
                <CircularProgress
                  sx={{ height: "15px !important", width: "15px !important" }}
                />
              ) : (
                ""
              )}
              <Typography>Signing up...</Typography>
            </Stack>
          ) : (
            "Sign up"
          )}
        </Button>
        {subtitle}
      </Box>
      <ToastContainer />
    </form>
  );
};

export default AuthRegister;
