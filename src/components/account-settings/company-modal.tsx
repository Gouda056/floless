import { Box, Button, Dialog, Divider, Typography } from "@mui/material";
import CustomTextField from "../forms/theme-elements/customTextField";
import CustomFormLabel from "../forms/theme-elements/customFormLabel";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Company name is required")
    .matches(/^[A-Za-z\s]+$/, "Name should only contain letters and spaces"),
});

interface props {
    open : boolean;
    handleClose: () => void;
}
export default function CompanyModal({open, handleClose}: props) {
    const BASEURL = process.env.NEXT_PUBLIC_URL;
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (values) {
        handleClose();
        axios.post(`${BASEURL}/create-tenant`, {
            name: values.name
        })
        .then((response) => {
            if(response.status === 200) {
                handleClose();
                toast.success("Company name added successfully")
            }
        })
      }
    },
  });
  return (
    <Dialog open={open} onClose={() => true} fullWidth>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ paddingX: 5, paddingY: 3 }}>
          <Typography variant="h4" sx={{ paddingBottom: 1 }}>
            Add Company name to Proceed Further
          </Typography>
          <Divider></Divider>
          <Box sx={{ marginTop: 1 }}>
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
            />
          </Box>
          <Box
            sx={{
              marginTop: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button variant="contained" color="primary" type="submit">
              save
            </Button>
          </Box>
        </Box>
      </form>
      <ToastContainer />
    </Dialog>
  );
}
