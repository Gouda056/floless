// @ts-nocheck
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  MenuItem,
  Typography,
} from "@mui/material";
import { useFormik, FormikValues } from "formik";
import * as yup from "yup";
import CustomFormLabel from "../../forms/theme-elements/customFormLabel";
import CustomTextField from "../../forms/theme-elements/customTextField";
import CustomSelect from "../../forms/theme-elements/customSelect";
import { useEffect, useState } from "react";

// props interface
interface props {
  open: boolean;
  handleClose: () => void;
  guestData: (data: FormikValues) => any;
  individualGuestDetails;
}

const rolesData = [
  { id: "1", label: "Guest", value: "guest" },
  { id: "2", label: "Client", value: "client" },
];
// Validation schema
const validationSchema = yup.object({
  name: yup
    .string()
    .transform((value) => (typeof value === "string" ? value.trim() : value))
    .matches(
      /^[A-Za-z\s]+$/,
      "Event name should only contain letters and spaces"
    )
    .min(3, "Invitee name should be of minimum 3 characters length")
    .max(50, "Invitee name should be of maximum 50 characters length")
    .required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/\d{7}$/, "Phone number must be atleast 7 digits."),
  role: yup.string().required("Invitee role is required"),
});

export default function GuestModal({
  open,
  handleClose,
  guestData,
  individualGuestDetails,
}: props) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      role: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: FormikValues) => {
      guestData(values);
      if (values) {
        handleClose();
        values.name = "";
        values.email = "";
        values.phone = "";
        values.role = "";
      }
    },
  });

  const initialFormValuesPost = {
    name: "",
    email: "",
    phone: "",
    role: "",
  };

  const [initialValues, setInitialValues] = useState(
    individualGuestDetails
      ? {
          name: individualGuestDetails.first_name || "",
          email: individualGuestDetails.email || "",
          phone: individualGuestDetails.phone || "",
          role: individualGuestDetails.role || "",
        }
      : initialFormValuesPost
  );

  useEffect(() => {
    setInitialValues({
      name: individualGuestDetails.first_name || "",
      email: individualGuestDetails.email || "",
      phone: individualGuestDetails.phone || "",
      role: individualGuestDetails.role || "",
    });
    formik.setValues({
      name: individualGuestDetails.first_name || "",
      email: individualGuestDetails.email || "",
      phone: individualGuestDetails.phone || "",
      role: individualGuestDetails.role || "",
    });
  }, [individualGuestDetails]);

  const isFormDirty =
    JSON.stringify(formik.values) !== JSON.stringify(initialValues);

  const handleCloseModal = () => {
    formik.setValues({
      name: "",
      email: "",
      phone: "",
      role: "",
    });
    handleClose();
  };
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          {/* ------------------------------------------- */}
          {/* Add Edit title */}
          {/* ------------------------------------------- */}
          <Typography variant="h4" sx={{ mb: 2 }}>
            Add Invitee Details
          </Typography>
          <Box>
            <CustomFormLabel htmlFor="name" sx={{ marginTop: 0 }}>
              Invitee Name*
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
          <Box>
            <CustomFormLabel htmlFor="role">
              Select Invitee Role*
            </CustomFormLabel>
            <Box
              sx={{
                cursor: individualGuestDetails?.role
                  ? "not-allowed"
                  : "pointer",
              }}
            >
              <CustomSelect
                id="role"
                name="role"
                value={formik.values.role}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                error={formik.touched.role && Boolean(formik.errors.role)}
                helperText={formik.touched.role && formik.errors.role}
                disabled={individualGuestDetails?.role ? true : false}
              >
                <MenuItem value="">
                  <em>Choose invitees role</em>
                </MenuItem>
                {rolesData.map((role, i) => (
                  <MenuItem
                    sx={{
                      cursor: individualGuestDetails?.role
                        ? "not-allowed"
                        : "pointer",
                    }}
                    // onClick={}
                    key={i}
                    value={role.value}
                  >
                    {role.label}
                  </MenuItem>
                ))}
              </CustomSelect>
            </Box>
            {formik.touched.role && formik.errors.role && (
              <Typography
                sx={{
                  fontSize: "12px",
                  paddingLeft: "1rem",
                  color: "#FA896B",
                }}
              >
                {formik.errors.role}
              </Typography>
            )}
          </Box>
        </DialogContent>
        {/* ------------------------------------------- */}
        {/* Action for dialog */}
        {/* ------------------------------------------- */}
        <DialogActions
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <Button
            sx={{ paddingX: 4 }}
            disabled={!isFormDirty}
            type="submit"
            variant="contained"
          >
            Save
          </Button>
          <Button
            color="error"
            variant="contained"
            onClick={() => handleCloseModal()}
            sx={{ paddingX: 3 }}
          >
            Cancel
          </Button>
        </DialogActions>
        {/* ------------------------------------------- */}
        {/* End Calendar */}
        {/* ------------------------------------------- */}
      </form>
    </Dialog>
  );
}
