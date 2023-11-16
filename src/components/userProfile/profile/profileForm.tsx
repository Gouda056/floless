import { Alert, Box, Button, Grid, MenuItem } from "@mui/material";
import CustomSelect from "../../forms/theme-elements/customSelect";
import CustomFormLabel from "../../forms/theme-elements/customFormLabel";
import CustomTextField from "../../forms/theme-elements/customTextField";
import { useState } from "react";
import { UploadButton } from "react-uploader";
import { Uploader } from "uploader";
import { IconUpload } from "@tabler/icons-react";
import { useFormik } from "formik";
import * as yup from "yup";
import { IconDeviceFloppy } from "@tabler/icons-react";

// Validation schema
const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  phone: yup.string().required("Phone number is required")
  .matches(/\d{7}$/, "Phone number must be atleast 7 digits."),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  companyName: yup.string().required("Company name is required"),
  gstNumber: yup.string().required("GST Number is required"),
});

// File upload component
const uploader = Uploader({ apiKey: "free" });
const uploaderOptions = {
  multi: false,
  styles: {
    colors: {
      primary: "#377dff",
    },
  },
};

const countries = [
  {
    value: "india",
    label: "India",
  },
  {
    value: "uk",
    label: "United Kingdom",
  },
  {
    value: "srilanka",
    label: "Srilanka",
  },
];

export default function ProfileForm() {
  // Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      companyName: "",
      gstNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
    },
  });
  const [country, setCountry] = useState("");
  const handleChangeCountry = (event: any) => {
    setCountry(event.target.value);
  };

  return (
    <Box mt={3}>
      <Alert severity="info">Person Info</Alert>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3} mb={3}>
          <Grid item lg={6} md={12} sm={12}>
            <CustomFormLabel htmlFor="name">Name*</CustomFormLabel>
            <CustomTextField
              id="name"
              name="name"
              placeholder="Enter name"
              variant="outlined"
              fullWidth
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <CustomFormLabel htmlFor="phone">Phone number</CustomFormLabel>
            <CustomTextField
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter 10 digit phone number"
              variant="outlined"
              fullWidth
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />

            {/* Custom select */}
            {/* <CustomFormLabel htmlFor="standard-select-currency">Select Gender</CustomFormLabel>
                <CustomSelect
                  id="standard-select-currency"
                  value={currency}
                  onChange={handleChange2}
                  fullWidth
                  variant="outlined"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </CustomSelect> */}
            {/* Custom select */}
            {/* <CustomFormLabel>Membership</CustomFormLabel>

                <FormControl
                  sx={{
                    width: '100%',
                  }}
                >
                  <Box>
                    <FormControlLabel
                      checked={selectedValue === 'a'}
                      onChange={handleChange3}
                      value="a"
                      label="Free"
                      name="radio-button-demo"
                      control={<CustomRadio />}
                     
                    />
                    <FormControlLabel
                      checked={selectedValue === 'b'}
                      onChange={handleChange3}
                      value="b"
                      label="Paid"
                      control={<CustomRadio />}
                      name="radio-button-demo"
                    />
                  </Box>
                </FormControl> */}
          </Grid>
          <Grid item lg={6} md={12} sm={12}>
            <CustomFormLabel htmlFor="email">Email address*</CustomFormLabel>

            <CustomTextField
              id="email"
              name="email"
              placeholder="Enter email address"
              variant="outlined"
              fullWidth
              alue={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            {/* <CustomFormLabel htmlFor="date">Date of Birth</CustomFormLabel>

                <CustomTextField
                  id="date"
                  type="date"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                /> */}
          </Grid>
        </Grid>
        <Alert severity="info">Company Details</Alert>
        <Grid container spacing={3} mt={1}>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="city-text"
            >
              Company name*
            </CustomFormLabel>
            <CustomTextField
              id="companyName"
              name="companyName"
              placeholder="Enter company name"
              variant="outlined"
              fullWidth
              value={formik.values.companyName}
              onChange={formik.handleChange}
              error={
                formik.touched.companyName && Boolean(formik.errors.companyName)
              }
              helperText={
                formik.touched.companyName && formik.errors.companyName
              }
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="state-text"
            >
              GST number*
            </CustomFormLabel>
            <CustomTextField
              id="gstNumber"
              name="gstNumber"
              placeholder="ENter company GST number"
              variant="outlined"
              fullWidth
              value={formik.values.gstNumber}
              onChange={formik.handleChange}
              error={
                formik.touched.gstNumber && Boolean(formik.errors.gstNumber)
              }
              helperText={formik.touched.gstNumber && formik.errors.gstNumber}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} mb={3} mt={1}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="street-text"
            >
              Company description
            </CustomFormLabel>

            <CustomTextField
              id="description"
              name="description"
              placeholder="Enter company description"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="street-text"
            >
              Street
            </CustomFormLabel>

            <CustomTextField
              id="street"
              name="street"
              placeholder="Enter street"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="city-text"
            >
              City
            </CustomFormLabel>
            <CustomTextField
              id="city"
              name="city"
              placeholder="Enter city"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="state-text"
            >
              State
            </CustomFormLabel>
            <CustomTextField
              id="state"
              name="state"
              placeholder="Enter state"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="post-text"
            >
              Pin Code
            </CustomFormLabel>
            <CustomTextField
              id="pincode"
              name="pincode"
              placeholder="Enter pin code"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
              htmlFor="country-text"
            >
              Country
            </CustomFormLabel>
            <CustomSelect
              id="country-select"
              value={country}
              name="country"
              onChange={handleChangeCountry}
              fullWidth
              variant="outlined"
            >
              {countries.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </CustomSelect>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          mb={1}
          mt={1}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <UploadButton
            uploader={uploader}
            options={uploaderOptions}
            onComplete={(files) =>
              alert(files.map((x) => x.fileUrl).join("\n"))
            }
          >
            {({ onClick }) => (
              <Button
                sx={{ display: "flex", gap: 1, alignItems: "center" }}
                onClick={onClick}
              >
                <IconUpload />
                Upload Company logo...
              </Button>
            )}
          </UploadButton>
        </Grid>
        <Button
        sx={{paddingX: 5,paddingY: 1, display: "flex",alignItems: "center", justifyContent: "center", fontWeight: "bold",gap: "2px"}}
        variant="contained" color="success" type="submit">
          <IconDeviceFloppy height={18} width={18}/>
          Save
        </Button>
      </form>
    </Box>
  );
}
