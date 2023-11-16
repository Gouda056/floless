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
import CustomFormLabel from "../forms/theme-elements/customFormLabel";
import CustomSelect from "../forms/theme-elements/customSelect";
import CustomTextField from "../forms/theme-elements/customTextField";
import { useFormik, FormikValues } from "formik";
import * as yup from "yup";
import { useState } from "react";

// props interface
interface props {
  open: boolean;
  handleClose: () => void;
  ceateEventData: (data: FormikValues) => any;
  eventTypes: Array<any>;
}
const currentDate = new Date().toISOString().split("T")[0];
// Validation schema
const validationSchema = yup.object({
  name: yup
    .string()
    .transform((value) => (typeof value === "string" ? value.trim() : value))
    .matches(
      /^[A-Za-z0-9\s!@#$%^&*()_+{}\[\]:;"'<>,.?/~`|-]+$/,
      "Event name should only contain letters and spaces"
    )
    .required("Event name is required")
    .min(3, "Event name should be of minimum 3 characters length")
    .max(50, "Event name should be of maximum 50 characters length"),
  date: yup
    .string()
    .matches(
      /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
      "Date must be in DD-MM-YYYY format"
    )
    .test("is-future-date", "Date cannot be in the past", (value) => {
      if (!value) {
        return true;
      }
      const selectedDate = new Date(value);
      const today = new Date(currentDate);
      return selectedDate >= today;
    }),
  eventType: yup.string().required("Event type is required"),
});

export default function CreateEvent({
  open,
  handleClose,
  ceateEventData,
  eventTypes,
}: props) {
  const [isdatePickerOpen, setIsdatePickerOpen] = useState(false);

  // Handler for clearing data on cancel
  const handleClear = () => {
    handleClose();
    formik.values.name = "";
    formik.values.date = "";
    formik.values.eventType = "";
    formik.errors.name = "";
    formik.errors.date = "";
    formik.errors.eventType = "";
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      date: "",
      eventType: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: FormikValues) => {
      ceateEventData(values);
      if (values) {
        handleClose();
        values.name = "";
        values.date = "";
        values.eventType = "";
      }
    },
  });

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          {/* ------------------------------------------- */}
          {/* Add Edit title */}
          {/* ------------------------------------------- */}
          <Typography variant="h4" sx={{ mb: 2 }}>
            Add New Event
          </Typography>
          <Typography mb={3} variant="subtitle2">
            To create new event kindly fill up the mandatory fields and press
            the add button
          </Typography>

          <Box>
            <CustomFormLabel htmlFor="name" sx={{ marginTop: 0 }}>
              Event Name*
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
                max: currentDate.substring(0, 4),
              }}
              onClick={() => setIsdatePickerOpen(true)}
            />
          </Box>
          <Box>
            <div>
              <CustomFormLabel htmlFor="eventType">
                Select Event Type*
              </CustomFormLabel>
              <CustomSelect
                id="eventType"
                name="eventType"
                value={formik.values.eventType}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                error={
                  formik.touched.eventType && Boolean(formik.errors.eventType)
                }
                helperText={formik.touched.eventType && formik.errors.eventType}
              >
                <MenuItem value="">
                  <em>Choose event type</em>
                </MenuItem>
                {eventTypes?.map((event, i) => (
                  <MenuItem
                    // onClick={}
                    key={i}
                    value={event.id}
                  >
                    {event.name}
                  </MenuItem>
                ))}
              </CustomSelect>
              {formik.touched.eventType && formik.errors.eventType && (
                <Typography
                  sx={{
                    fontSize: "12px",
                    paddingLeft: "1rem",
                    color: "#FA896B",
                  }}
                >
                  {formik.errors.eventType}
                </Typography>
              )}
            </div>
          </Box>
        </DialogContent>
        {/* ------------------------------------------- */}
        {/* Action for dialog */}
        {/* ------------------------------------------- */}
        <DialogActions sx={{ p: 3 }}>
          <Button
            color="error"
            variant="contained"
            onClick={() => handleClear()}
          >
            Cancel
          </Button>

          <Button
          disabled={!formik.dirty}
          type="submit" variant="contained">
            Add Event
          </Button>
        </DialogActions>
        {/* ------------------------------------------- */}
        {/* End Calendar */}
        {/* ------------------------------------------- */}
      </form>
    </Dialog>
  );
}
