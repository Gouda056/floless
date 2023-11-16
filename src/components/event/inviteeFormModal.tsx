import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import CustomFormLabel from "../forms/theme-elements/customFormLabel";
import CustomTextField from "../forms/theme-elements/customTextField";
import { FormikValues, useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";

const validationSchema = yup.object({
  name: yup
    .string()
    .transform((value) => (typeof value === "string" ? value.trim() : value))
    .matches(
      /^[A-Za-z\s]+$/,
      "Event name should only contain letters and spaces"
    )
    .min(3, "Invitee name should be of minimum 3 characters length")
    .max(50, "Event name should be of maximum 50 characters length")
    .required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/\d{7}$/, "Phone number must be atleast 7 digits.")
    .required("Phone number is required"),
});

export default function InviteeFormModal() {
  const [loading, setLoading] = useState(false);
  const BASEURL = process.env.NEXT_PUBLIC_URL;
  const router = useRouter();
  const { user } = router.query;
  const { maineventid } = router.query;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: FormikValues) => {
      handleSubmit(values);
    },
  });
  const handleSubmit = (values: FormikValues) => {
    setLoading(true);
    axios
      .post(`${BASEURL}/create/invitee`, {
        first_name: values.name,
        email: values.email,
        phone: values.phone,
        id: user,
        event_id: maineventid,
      })
      .then((repsonse) => {
        if (repsonse.status === 200) {
          toast.success("Invitee details successfully saved");
          if (values) {
            values.name = "";
            values.email = "";
            values.phone = "";
          }
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box>
        <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
          Please register guest information.
        </Typography>
        <Box>
          <CustomFormLabel htmlFor="name" sx={{ marginTop: 0 }}>
            Name*
          </CustomFormLabel>
          <CustomTextField
            id="name"
            name="name"
            variant="outlined"
            fullWidth
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Box>
        <Box>
          <CustomFormLabel htmlFor="email" sx={{ marginTop: 1 }}>
            Email Address*
          </CustomFormLabel>
          <CustomTextField
            id="email"
            name="email"
            variant="outlined"
            fullWidth
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Box>
        <Box>
          <CustomFormLabel htmlFor="phone" sx={{ marginTop: 1 }}>
            Phone Number*
          </CustomFormLabel>
          <CustomTextField
            id="phone"
            name="phone"
            variant="outlined"
            fullWidth
            type="tel"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
        </Box>
      </Box>
      <Button
        sx={{ paddingX: 2, marginTop: 2 }}
        type="submit"
        variant="contained"
        fullWidth
        disabled={loading}
      >
        {loading ? (
          <Stack direction="row" alignItems="center" gap={1}>
            <CircularProgress
              sx={{ height: "15px !important", width: "15px !important" }}
            />
            <Typography>Saving...</Typography>
          </Stack>
        ) : (
          "Save"
        )}
      </Button>
      <ToastContainer />
    </form>
  );
}
