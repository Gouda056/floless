// @ts-nocheck
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Toolbar,
  IconButton,
} from "@mui/material";
import CustomTextField from "../../forms/theme-elements/customTextField";
import CustomFormLabel from "../../forms/theme-elements/customFormLabel";
import { useFormik, FormikValues } from "formik";
import * as yup from "yup";
import { IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import GlobalLoader from "../../common/globalLoader";

interface props {
  open: boolean;
  setOpen: (value: boolean) => void;
  handleClose: (event: React.SyntheticEvent | any) => void;
  onDataSaved: (data: FormikValues) => void;
  memberId: string;
  individualMemberDetails: any;
  loading: boolean;
}

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  name: yup
    .string()
    .min(3, "Name should be minimum 3 characters length")
    .matches(/^[A-Za-z\s]+$/, "Name should only contain letters and spaces")
    .max(50, "Name should be maximum 50 characters length")
    .required("Name is required")
    .transform((value) => (typeof value === "string" ? value.trim() : value)),
  number: yup
    .string()
    .matches(/\d{7}$/, "Phone number must be atleast 7 digits.")
    .required("Phone number is required"),
});
export default function AddTeamMemberModal({
  open,
  handleClose,
  setOpen,
  onDataSaved,
  individualMemberDetails,
  loading,
}: props) {
  const initialFormValuesPost = {
    name: "",
    email: "",
    number: "",
  };

  const [initialValues, setInitialValues] = useState(
    individualMemberDetails
      ? {
          name: individualMemberDetails.first_name || "",
          email: individualMemberDetails.email || "",
          number: individualMemberDetails.phone || "",
        }
      : initialFormValuesPost
  );

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      // role: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (values) {
        const changedValues = {};
        for (const key in values) {
          if (values[key] !== initialValues[key]) {
            changedValues[key] = values[key];
          }
        }
        onDataSaved(changedValues);
        formik.values.name = "";
        formik.values.email = "";
        formik.values.number = "";
        // setOpen(false);
      }
    },
  });

  useEffect(() => {
    setInitialValues({
      name: individualMemberDetails.first_name || "",
      email: individualMemberDetails.email || "",
      number: individualMemberDetails.phone || "",
    });
    formik.setValues({
      name: individualMemberDetails.first_name || "",
      email: individualMemberDetails.email || "",
      number: individualMemberDetails.phone || "",
    });
  }, [individualMemberDetails]);

  const isFormDirty =
    JSON.stringify(formik.values) !== JSON.stringify(initialValues);

  const handleEmptyValue = () => {
    formik.values.name = "";
    formik.values.email = "";
    formik.values.number = "";
    formik.errors.name = "";
    formik.errors.email = "";
    formik.errors.number = "";
  };
  return (
    <Dialog open={open} onClose={() => false}>
      <form onSubmit={formik.handleSubmit}>
        <Toolbar sx={{ position: "absolute", top: 0, right: 0 }}>
          <IconButton
            sx={{
              border: "1px solid #B8B8B8",
              borderRadius: "5px",
              "&:active": {
                borderColor: "blue",
                outline: "2px solid blue",
              },
              "&:focus": {
                outline: "2px solid blue",
              },
            }}
            edge="end"
            color="inherit"
            onClick={() => {
              handleClose();
              handleEmptyValue();
            }}
            aria-label="close"
          >
            <IconX height={18} />
          </IconButton>
        </Toolbar>
        <DialogTitle>Manage Team Member Details</DialogTitle>
        <DialogContent>
          <DialogContentText width={"30rem"}>
            {initialValues.name === ""
              ? "Please provide the team member's name, email address and phone number."
              : "Please Update the team member's name, email address and phone number."}
          </DialogContentText>
          <Box mt={2}>
            <CustomFormLabel>Name*</CustomFormLabel>
            <CustomTextField
              id="name"
              name="name"
              variant="outlined"
              type="text"
              fullWidth
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Box>
          <Box mt={2}>
            <CustomFormLabel>Email address*</CustomFormLabel>
            <CustomTextField
              id="email"
              name="email"
              variant="outlined"
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Box>
          <Box mt={2}>
            <CustomFormLabel>Phone Number*</CustomFormLabel>
            <CustomTextField
              id="number"
              name="number"
              variant="outlined"
              type="tel"
              fullWidth
              value={formik.values.number}
              onChange={formik.handleChange}
              error={formik.touched.number && Boolean(formik.errors.number)}
              helperText={formik.touched.number && formik.errors.number}
            />
          </Box>
          {/* <Box mt={2}>
            <CustomFormLabel>Role played*</CustomFormLabel>
            <CustomTextField
              id="role"
              name="role"
              variant="outlined"
              fullWidth
              value={formik.values.role}
              onChange={formik.handleChange}
              error={formik.touched.role && Boolean(formik.errors.role)}
              helperText={formik.touched.role && formik.errors.role}
            />
          </Box> */}
        </DialogContent>
        <DialogActions>
          <Button
            disabled={!isFormDirty}
            variant="contained"
            color="primary"
            type="submit"
            sx={{ paddingX: 3 }}
          >
            Save
          </Button>
          <Button
            variant="contained"
            type="button"
            color="error"
            onClick={() => {
              handleClose();
              handleEmptyValue();
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
