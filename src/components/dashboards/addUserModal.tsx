// @ts-nocheck
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import { useFormik, FormikValues } from "formik";
import * as yup from "yup";
import CustomFormLabel from "../forms/theme-elements/customFormLabel";
import CustomTextField from "../forms/theme-elements/customTextField";
import { useEffect, useState } from "react";
import CustomSelect from "../forms/theme-elements/customSelect";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

// props interface
interface props {
  open: boolean;
  handleClose: () => void;
  userDataSaved: (data: FormikValues) => any;
  individualUserDetails: any;
  loading: boolean;
}

const rolesData = [
  { id: "1", label: "Photographer", value: "Photographer" },
  { id: "2", label: "Admin", value: "Admin" },
];

// Validation schema
const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, "User name too short")
    .max(50, "User name must be less than 50 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/\d{7}$/, "Phone number must be atleast 7 digits."),

  role: yup.string().required("User role is required"),
});

export default function GuestModal({
  open,
  handleClose,
  onUserDataSaved,
  individualUserDetails,
  loading,
}: props) {
  const URL = process.env.NEXT_PUBLIC_URL;
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (value: string, country: any) => {
    const localPhoneNumber = value.substring(country?.dialCode?.length);
    formik.setFieldValue("phone", localPhoneNumber);
    formik.setFieldValue("country_code", country.dialCode);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      country_code: "",
      role: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: FormikValues) => {
      const modifiedData = {};
      const fieldNames = Object.keys(values);
      if (values) {
        fieldNames.forEach((fieldName) => {
          if (values[fieldName] !== initialValues[fieldName]) {
            modifiedData[fieldName] = values[fieldName];
          }
        });
        if (Object.keys(modifiedData).length > 0) {
          onUserDataSaved(modifiedData);
          setPhone("");
          handleClose();
          formik.setFieldValue("country_code", "");
          formik.values.name = "";
          formik.values.phone = "";
          formik.values.email = "";
          formik.values.role = "";
        }
      }
    },
  });

  const initialFormValuesPost = {
    name: "",
    email: "",
    phone: "",
    // country_code: "",
    role: "",
  };

  const [initialValues, setInitialValues] = useState(
    individualUserDetails
      ? {
          name: individualUserDetails.first_name || "",
          email: individualUserDetails.email || "",
          phone: individualUserDetails.phone || "",
          role: individualUserDetails.role || "",
        }
      : initialFormValuesPost
  );

  useEffect(() => {
    setInitialValues({
      name: individualUserDetails.first_name || "",
      email: individualUserDetails.email || "",
      phone: individualUserDetails.phone || "",
      role: individualUserDetails.role || "",
      country_code: individualUserDetails.country_code || "",
    });
    setPhone(
      `${individualUserDetails.country_code}+${individualUserDetails.phone}`
    );
    formik.setValues({
      name: individualUserDetails.first_name || "",
      email: individualUserDetails.email || "",
      phone: individualUserDetails.phone || "",
      role: individualUserDetails.role || "",
    });
    formik.setFieldValue(
      "country_code",
      individualUserDetails.country_code || ""
    );
  }, [individualUserDetails]);

  const isFormDirty =
    JSON.stringify(formik.values) !== JSON.stringify(initialValues) ||
    `${formik?.values?.country_code}+ ${formik?.values?.phone}` !==
      `${individualUserDetails.country_code}+ ${individualUserDetails.phone}`;

  const handleCloseModal = () => {
    formik.setValues({
      name: "",
      email: "",
      phone: "",
      role: "",
    });
    setPhone("");
    formik.setFieldValue("country_code", "");
    handleClose();
  };

  return (
    <Dialog open={open} onClose={() => false} fullWidth maxWidth="xs">
      {/* {loading && <GlobalLoader />} */}
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          {/* ------------------------------------------- */}
          {/* Add Edit title */}
          {/* ------------------------------------------- */}
          <Typography variant="h4" sx={{ mb: 2 }}>
            Add User Details
          </Typography>
          <Box>
            <CustomFormLabel htmlFor="name" sx={{ marginTop: 0 }}>
              User Name*
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
          <Box>
            <CustomFormLabel htmlFor="role">Select User Role*</CustomFormLabel>
            <Box
              sx={{
                cursor: formik.values.role !== "" ? "not-allowed" : "pointer",
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
                disabled={individualUserDetails?.role ? true : false}
              >
                <MenuItem value="">
                  <em>Choose invitees role</em>
                </MenuItem>
                {rolesData.map((role, i) => (
                  <MenuItem
                    sx={{
                      cursor:
                        formik.values.role !== "" ? "not-allowed" : "pointer",
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
            sx={{
              paddingX: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
            disabled={!isFormDirty}
            type="submit"
            variant="contained"
          >
            {loading ? (
              <CircularProgress
                sx={{
                  height: "15px !important",
                  width: "15px !important",
                  color: "white",
                }}
              />
            ) : (
              ""
            )}
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
