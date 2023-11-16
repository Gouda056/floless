import React, { useState } from "react";
import PropTypes from "prop-types";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { format, addDays, subDays } from "date-fns";
import { Box, Button, Dialog } from "@mui/material";

const Calendar = ({ onChange, closeCalendar, reset }: any) => {
  const [open, setOpen] = useState(true);
  const [state, setState] = useState([
    {
      startDate: subDays(new Date(), 0),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ]);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleDateChange = (ranges: any) => {
    const { selection } = ranges;
    if (selection.startDate && selection.endDate) {
      const formattedStartDate = format(selection.startDate, "yyyy-MM-dd");
      const formattedEndDate = format(selection.endDate, "yyyy-MM-dd");
      setStartDate(formattedStartDate);
      setEndDate(formattedEndDate);
      setState([selection]);
    }
  };

  const handleClose = () => {
    onChange({ startDate, endDate });
    closeCalendar();
    setOpen(false);
  };

  const handleReset = () => {
    closeCalendar();
    setOpen(false);
    reset();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
      <Box
        sx={{ py: "2rem", mx: "auto" }}
        display="flex"
        flexDirection="column"
      >
        <DateRangePicker
          onChange={handleDateChange}
          moveRangeOnFirstSelection={false}
          months={1}
          showPreview={false}
          ranges={state}
          direction="horizontal"
        />
        <Box display="flex">
          <Button
            color="primary"
            sx={{
              width: "7rem",
              mx: "auto",
              mt: "1rem",
            }}
            onClick={handleClose}
          >
            Save
          </Button>
          {/* <Button
            color="error"
            sx={{
              width: "7rem",
              mx: "auto",
              mt: "1rem",
            }}
            onClick={handleReset}
          >
            Reset
          </Button> */}
        </Box>
      </Box>
    </Dialog>
  );
};

Calendar.propTypes = {
  onChange: PropTypes.func,
  closeCalendar: PropTypes.func,
  reset: PropTypes.func,
};

export default Calendar;
