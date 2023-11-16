import { useState } from "react";
import DashboardCard from "../shared/DashboardCard";
import { useTheme } from "@mui/material/styles";
import CustomSelect from "../forms/theme-elements/customSelect";
import {
  MenuItem,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
  Chip,
  TableContainer,
  Stack,
  LinearProgress,
  CircularProgress,
  Card,
  Divider,
  InputAdornment,
} from "@mui/material";
import CustomTextField from "../forms/theme-elements/customTextField";
import { IconCalendar } from "@tabler/icons-react";
import Calendar from "./CalendarModal";

interface props {
  topEventsData: any[];
  loading: boolean;
  filter: any;
}
const TopEvents = ({ topEventsData, loading, filter }: props) => {
  // for select
  const [month, setMonth] = useState("1");
  const theme = useTheme();
  const [showCalendar, setShowCalendar] = useState<Boolean>(false);
  const [filterSearch, setFilterSearch] = useState({
    startDate: "",
    endDate: "",
  });
  const borderColor = theme.palette.divider;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
  };

  const onChange = (dates: any) => {
    setFilterSearch(dates);
    filter(dates);
  };

  const handleCalendarClick = () => {
    if (showCalendar) setShowCalendar(false);
    else setShowCalendar(true);
  };

  const handleReset = () => {
    setFilterSearch({ startDate: "", endDate: "" });
  };

  return (
    <Card
      sx={{
        mt: 2,
        paddingY: 3,
        paddingX: 0,
        border: `1px solid ${borderColor}`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 4,
          paddingLeft: 3,
          paddingRight: 4,
        }}
      >
        <Box sx={{ width: "60%" }}>
          <Typography variant="h3">Top Five Events</Typography>
        </Box>
        <Box sx={{ width: "25%" }}>
          {showCalendar ? (
            <Box>
              <Calendar
                onChange={onChange}
                closeCalendar={handleCalendarClick}
                reset={handleReset}
              />
            </Box>
          ) : null}

          <CustomTextField
            onClick={handleCalendarClick}
            sx={{
              cursor: "pointer !important;",
            }}
            value={
              filterSearch.startDate && filterSearch.endDate
                ? `${filterSearch.startDate} to ${filterSearch.endDate}`
                : "Select the dates"
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconCalendar />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
      <Divider></Divider>
      <TableContainer>
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: "nowrap",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Name of Event
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Client Details
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  No of Likes
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  No. of Photos/ Videos
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Storage
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Data Utilized
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={7}>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={2}
                  >
                    <CircularProgress />
                    <Typography variant="h6" sx={{ textAlign: "center" }}>
                      Loading...
                    </Typography>
                  </Stack>
                </TableCell>
              </TableRow>
            ) : topEventsData?.length > 0 && loading === false ? (
              topEventsData?.map((event, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Stack direction="row" spacing={2}>
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600}>
                          {event.event_name}
                        </Typography>
                      </Box>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">
                      {event.client_name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {event.client_phone}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {event.client_email}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1">
                      {event.likes_count}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1">
                      {event.videos_count}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1">
                      {event.storage} GB
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1">
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Box width="100%">
                          <LinearProgress
                            variant="determinate"
                            value={event.data_utilized}
                            color="primary"
                          />
                        </Box>
                        <Typography variant="subtitle2" color="textSecondary">
                          {event.data_utilized}%
                        </Typography>
                      </Stack>
                    </Typography>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7}>
                  <Typography variant="h6" sx={{ textAlign: "center" }}>
                    No data found
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default TopEvents;
