import { useState } from "react";
import {
  Box,
  CardContent,
  Grid,
  Typography,
  Button,
  Divider,
  CircularProgress,
} from "@mui/material";

// components
import { Stack } from "@mui/system";
import BlankCard from "../shared/BlankCard";
import CustomFormLabel from "../forms/theme-elements/customFormLabel";
import CustomTextField from "../forms/theme-elements/customTextField";
import { useFormik, FormikValues } from "formik";
import * as yup from "yup";
import { IconEyeOff } from "@tabler/icons-react";
import { IconEye } from "@tabler/icons-react";
import { signOut } from "next-auth/react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalLoader from "../common/globalLoader";

const validationSchema = yup.object({
  oldPassword: yup
    .string()
    .required("Current password is required")
    .min(8, "Password should be of minimum 8 characters length")
    .max(12, "Password should be of maximum 12 characters length")
    .transform((value) => (value ? value.trim() : value)),
  newPassword: yup
    .string()
    .required("New password is required")
    .min(8, "Password should be of minimum 8 characters length")
    .max(12, "Password should be of maximum 12 characters length")
    .transform((value) => (value ? value.trim() : value)),
  confirmPassword: yup.string().when("newPassword", {
    is: (val: any) => (val && val.length > 0 ? true : false),
    then: yup
      .string()
      .oneOf([yup.ref("newPassword")], "Both passwords needs to be same")
      .required("Confirm new password is required"),
  }),
});

const SecurityTab = () => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const BASEURL = process.env.NEXT_PUBLIC_URL;

  const handleLogout = () => {
    setLoading(true);
    axios
      .post(`${BASEURL}/logout`)
      .then((response) => {
        if (response.status === 200) {
          signOut({ callbackUrl: "/login" });
          toast.success(response?.data?.message);
          localStorage.clear();
        }
      })
      .catch((error) => {
        toast.error(error.response?.data?.message);
        setLoading(false);
      });
  };

  const handleUpdatePassword = (data: FormikValues) => {
    axios
      .patch(`${BASEURL}/password/update`, {
        old_password: data.oldPassword,
        new_password: data.newPassword,
        confirm_password: data.confirmPassword,
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success(response?.data?.message);
          handleLogout();
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      });
  };

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleUpdatePassword(values);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        {loading && <GlobalLoader />}
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={6}>
            <BlankCard>
              <CardContent>
                <Typography variant="h4" mb={1}>
                  Change Password
                </Typography>
                <Divider></Divider>
                <Box my={2} sx={{ position: "relative" }}>
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="oldPassword"
                  >
                    Old Password*
                  </CustomFormLabel>
                  <CustomTextField
                    id="oldPassword"
                    name="oldPassword"
                    type={showOldPassword ? "text" : "password"}
                    value={formik.values.oldPassword}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.oldPassword &&
                      Boolean(formik.errors.oldPassword)
                    }
                    helperText={
                      formik.touched.oldPassword && formik.errors.oldPassword
                    }
                    placeholder="Old password"
                    variant="outlined"
                    fullWidth
                  />
                  {showOldPassword ? (
                    <IconEyeOff
                      onClick={() => setShowOldPassword(false)}
                      style={{
                        position: "absolute",
                        right: "5",
                        bottom: `${
                          formik.touched.oldPassword &&
                          formik.errors.oldPassword
                            ? "32"
                            : "12"
                        }`,
                      }}
                    />
                  ) : (
                    <IconEye
                      onClick={() => setShowOldPassword(true)}
                      style={{
                        position: "absolute",
                        right: "5",
                        bottom: `${
                          formik.touched.oldPassword &&
                          formik.errors.oldPassword
                            ? "32"
                            : "12"
                        }`,
                      }}
                    />
                  )}
                </Box>
                <Box my={2} sx={{ position: "relative" }}>
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="newPassword"
                  >
                    New Password*
                  </CustomFormLabel>
                  <CustomTextField
                    id="newPassword"
                    name="newPassword"
                    type={showNewPassword ? "text" : "password"}
                    value={formik.values.newPassword}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.newPassword &&
                      Boolean(formik.errors.newPassword)
                    }
                    helperText={
                      formik.touched.newPassword && formik.errors.newPassword
                    }
                    placeholder="New password"
                    variant="outlined"
                    fullWidth
                  />
                  {showNewPassword ? (
                    <IconEyeOff
                      onClick={() => setShowNewPassword(false)}
                      style={{
                        position: "absolute",
                        right: "5",
                        bottom: `${
                          formik.touched.newPassword &&
                          formik.errors.newPassword
                            ? "32"
                            : "12"
                        }`,
                      }}
                    />
                  ) : (
                    <IconEye
                      onClick={() => setShowNewPassword(true)}
                      style={{
                        position: "absolute",
                        right: "5",
                        bottom: `${
                          formik.touched.newPassword &&
                          formik.errors.newPassword
                            ? "32"
                            : "12"
                        }`,
                      }}
                    />
                  )}
                </Box>
                <Box my={2} sx={{ position: "relative" }}>
                  <CustomFormLabel
                    sx={{
                      mt: 0,
                    }}
                    htmlFor="confirmPassword"
                  >
                    Confirm New Password*
                  </CustomFormLabel>
                  <CustomTextField
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.confirmPassword &&
                      Boolean(formik.errors.confirmPassword)
                    }
                    helperText={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                    }
                    placeholder="Confirm new password"
                    variant="outlined"
                    fullWidth
                  />
                  {showConfirmPassword ? (
                    <IconEyeOff
                      onClick={() => setShowConfirmPassword(false)}
                      style={{
                        position: "absolute",
                        right: "5",
                        bottom: `${
                          formik.touched.confirmPassword &&
                          formik.errors.confirmPassword
                            ? "32"
                            : "12"
                        }`,
                      }}
                    />
                  ) : (
                    <IconEye
                      onClick={() => setShowConfirmPassword(true)}
                      style={{
                        position: "absolute",
                        right: "5",
                        bottom: `${
                          formik.touched.confirmPassword &&
                          formik.errors.confirmPassword
                            ? "32"
                            : "12"
                        }`,
                      }}
                    />
                  )}
                </Box>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ justifyContent: "start", alignItems: "center" }}
                  mt={3}
                >
                  <Button
                    disabled={loading}
                    type="submit"
                    size="large"
                    variant="contained"
                    color="primary"
                  >
                    {loading ? (
                      <Stack direction="row" alignItems="center" gap={1}>
                        <CircularProgress
                          sx={{
                            height: "15px !important",
                            width: "15px !important",
                          }}
                        />
                        <Typography>Updating...</Typography>
                      </Stack>
                    ) : (
                      "Update Password"
                    )}
                  </Button>
                </Stack>
              </CardContent>
            </BlankCard>
          </Grid>
          <ToastContainer />
        </Grid>
      </form>
    </>
  );
};

export default SecurityTab;
