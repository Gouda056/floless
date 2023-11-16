// @ts-nocheck
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
  Typography,
} from "@mui/material";
import * as yup from "yup";
import { useFormik, FormikValues } from "formik";
import CustomFormLabel from "../forms/theme-elements/customFormLabel";
import CustomTextField from "../forms/theme-elements/customTextField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { Dayjs, FormatObject } from "dayjs";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import GlobalLoader from "../common/globalLoader";

interface props {
  open: boolean;
  handleClose: () => void;
  onSuccessfulCoupon: any;
}

// Validation schema
const validationSchema = yup.object({
  name: yup
    .string()
    .transform((value) => (typeof value === "string" ? value.trim() : value))

    .min(3, "Coupon name should be of minimum 3 characters length")
    .max(50, "Coupon name should be of maximum 50 characters length")
    .required("Name is required"),
  percent_off: yup.string().required("Discount percentage is required"),
});

const addCouponModal = ({ open, handleClose, onSuccessfulCoupon }: props) => {
  const [value, setValue] = useState<Dayjs | null>(null);
  const [loading, setLoading] = useState(false);
  const BASEURL = process.env.NEXT_PUBLIC_URL;

  const formik = useFormik({
    initialValues: {
      name: "",
      percent_off: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: FormikValues) => {
      setLoading(true);
      axios
        .post(`${BASEURL}/stripe-coupon`, {
          name: values?.name,
          percentage: values?.percent_off,
          redeemby: value,
        })
        .then((response: any) => {
          onSuccessfulCoupon("success", response?.data?.data);
        })
        .catch((error) => {
          onSuccessfulCoupon("fail", error?.data?.data);
        })
        .finally(() => {
          setLoading(false);
          handleClose();
        });
    },
  });
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
      {loading && <GlobalLoader />}
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          {/* ------------------------------------------- */}
          {/* Add Edit title */}
          {/* ------------------------------------------- */}
          <Typography variant="h4" sx={{ mb: 2 }}>
            Add Coupon Details
          </Typography>
          <Divider />
          <Box mt={2}>
            <CustomFormLabel htmlFor="name" sx={{ marginTop: 0 }}>
              Coupon Name*
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
            <CustomFormLabel htmlFor="phone" sx={{ marginTop: 1 }}>
              Discount*
            </CustomFormLabel>
            <CustomTextField
              id="percent_off"
              name="percent_off"
              variant="outlined"
              fullWidth
              type="number"
              value={formik.values.percent_off}
              onChange={formik.handleChange}
              error={
                formik.touched.percent_off && Boolean(formik.errors.percent_off)
              }
              helperText={
                formik.touched.percent_off && formik.errors.percent_off
              }
            />
          </Box>
          <Box mt={2}>
            <CustomFormLabel htmlFor="name" sx={{ marginTop: 0 }}>
              Coupon Expiry
            </CustomFormLabel>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(props: any) => (
                  <CustomTextField
                    {...props}
                    fullWidth
                    size="small"
                    sx={{
                      "& .MuiSvgIcon-root": {
                        width: "18px",
                        height: "18px",
                      },
                      "& .MuiFormHelperText-root": {
                        display: "none",
                      },
                    }}
                  />
                )}
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
              />
            </LocalizationProvider>
          </Box>
        </DialogContent>
        {/* ------------------------------------------- */}
        {/* Action for dialog */}
        {/* ------------------------------------------- */}
        <DialogActions
          sx={{
            pb: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button sx={{ paddingX: 4 }} type="submit" variant="contained">
            Save
          </Button>
          <Button
            color="error"
            variant="contained"
            onClick={() => handleClose()}
            sx={{ paddingX: 3 }}
          >
            Cancel
          </Button>
        </DialogActions>
        {/* ------------------------------------------- */}
        {/* End Calendar */}
        {/* ------------------------------------------- */}
      </form>
      <ToastContainer />
    </Dialog>
  );
};

export default addCouponModal;
