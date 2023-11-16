// @ts-nocheck
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Fab,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import CustomFormLabel from "../forms/theme-elements/customFormLabel";
import CustomTextField from "../forms/theme-elements/customTextField";
import { useState } from "react";
import { useFormik, FormikValues } from "formik";
import * as yup from "yup";

const currentDate = new Date().toISOString().split("T")[0];

const validationSchema = yup.object({
  name: yup
  .string()
  .transform((value) => (typeof value === "string" ? value.trim() : value))
  .required("Sub Event name is required")
  .matches(/^[A-Za-z\s]+$/, "Sub Event name should only contain letters and spaces")
  .min(3, "Sub Event name should be of minimum 3 characters length")
  .max(50, "Sub Event name should be of maximum 50 characters length"),
  privacy: yup.string().required(""),
  // date: yup
  // .string()
  // .required("Sub Event Date is required")
  // .matches(
  //   /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/, // YYYY-MM-DD format
  //   "Date must be in DD-MM-YYYY format"
  // ).test(
  //   "is-future-date",
  //   "Date cannot be in the past",
  //   (value) => {
  //     const selectedDate = new Date(value);
  //     const today = new Date(currentDate);
  //     return selectedDate >= today;
  //   }
  // ),
});

type EvType = {
  title: string;
  allDay?: boolean;
  start?: Date;
  end?: Date;
  color?: string;
};

interface Props {
  heading: string;
  handleClose: () => void;
  open: boolean;
  onDataReceived: (data: FormikValues) => void;
}

export default function AddEventModal({
  heading,
  handleClose,
  open,
  onDataReceived,
}: Props) {
  const formik = useFormik({
    initialValues: {
      name: "",
      privacy: false,
      // date: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onDataReceived(values);
      if (values) {
        handleClose();
        values.name = "";
        values.privacy = false;
        // values.date = "";
      }
    },
  });
  const [eventTitle, setEventTitle] = useState<any | null>(null);

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <Typography variant="h4" sx={{ mb: 2 }}>
            {heading ? heading : "Loading..."}
          </Typography>
          <Typography mb={3} variant="subtitle2">
            To add sub events kindly fillup the title press the add button
          </Typography>
          <Box>
            <CustomFormLabel htmlFor="name">Sub Event Name*</CustomFormLabel>
            <CustomTextField
              id="name"
              name="name"
              variant="outlined"
              fullWidth
              value={formik.values.name}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.name)}
              helperText={formik.errors.name}
            />
          </Box>
          {/* Commenting date as the date si not displayed */}
          {/* <Box>
            <CustomFormLabel htmlFor="date" sx={{ marginTop: 1 }}>
              Event Date*
            </CustomFormLabel>
            <CustomTextField
              id="date"
              name="date"
              variant="outlined"
              fullWidth
              type="date"
              value={formik.values.date}
              onChange={formik.handleChange}
              error={formik.touched.date && Boolean(formik.errors.date)}
              helperText={formik.touched.date && formik.errors.date}
              inputProps={{
                min: currentDate,
                max: currentDate.substring(0, 4)
              }}
            />
          </Box> */}
          <Box sx={{marginTop: 2}}>
            <RadioGroup
            aria-label="privacy"
              name="privacy"
              value={formik.values.privacy ? "private" : "public"}
              onChange={(event) => formik.setFieldValue('privacy', event.target.value === 'private')}
              // defaultValue={false}
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <FormControlLabel
                value="public"
                control={<Radio sx={{ color: "#B0B0B0" }} />}
                label="Public"
              />
              <FormControlLabel
                value="private"
                control={<Radio sx={{ color: "#B0B0B0" }} />}
                label="Private"
              />
            </RadioGroup>
          </Box>
        </DialogContent>
        <DialogActions sx={{ pb: 1, pt: 0 }}>
          <Button onClick={handleClose} color="error" variant="contained">Cancel</Button>
          <Button type="submit" variant="contained">
            Add Event
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
