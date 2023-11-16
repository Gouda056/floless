// @ts-nocheck
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Stack,
  Button,
  Divider,
  Card,
  Pagination,
  CircularProgress,
  InputAdornment,
} from "@mui/material";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import ExcelJS from "exceljs";
import {
  customEventDateLabel,
  customSelectValue,
} from "../../../utils/selectHelpers";
import Select from "react-select";
import Calendar from "./CalendarModal";
import CustomTextField from "../forms/theme-elements/customTextField";
import { IconCalendar } from "@tabler/icons-react";

export default function ExportStats() {
  const theme = useTheme();
  const borderColor = theme.palette.divider;
  const [showCalendar, setShowCalendar] = useState<Boolean>(false);
  const [filterSearch, setFilterSearch] = useState({
    startDate: "",
    endDate: "",
  });
  const [month, setMonth] = useState("1");
  const [hover, setHover] = useState(false);
  const [loading, setLoading] = useState(false);
  const [clientsData, setClientsData] = useState<any>([]);
  const [excelsData, setExcelsData] = useState([]);
  const [pageCount, setPageCount] = useState<any>(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const BASEURL = process.env.NEXT_PUBLIC_URL;

  const onChange = (dates: any) => {
    if (
      dates.startDate === filterSearch.startDate &&
      dates.endDate === filterSearch.endDate
    )
      return;
    setFilterSearch(dates);
  };

  const handleCalendarClick = () => {
    if (showCalendar) setShowCalendar(false);
    else setShowCalendar(true);
  };

  const handleReset = () => {
    setFilterSearch({ startDate: "", endDate: "" });
  };

  useEffect(() => {
    setLoading(true);

    let params = {};

    if (filterSearch.startDate && filterSearch.endDate) {
      params = {
        paginate: 8,
        page: currentPage,
        from: filterSearch.startDate,
        to: filterSearch.endDate,
      };
    } else {
      params = {
        paginate: 8,
        page: currentPage,
      };
    }

    axios
      .get(`${BASEURL}/client-stats`, {
        params: params,
      })
      .then((response) => {
        if (response?.data?.message) {
          setMessage(response?.data?.message);
        }
        setClientsData(response?.data?.data);
        setPageCount(response?.data?.meta);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentPage, filterSearch]);

  // to fetch excel data
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASEURL}/client-stats`, {
        params: {
          is_paginate: false,
        },
      })
      .then((response) => {
        setExcelsData(response?.data?.data);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Years fetch
  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get(`${BASEURL}/year-filter`)
  //     .then((response) => {
  //       setYears(response?.data);
  //     })
  //     .catch((error) => {
  //       toast.error(error?.response?.data?.message);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  const handleSelectYear = (data: any): void => {
    setSelectedYear(data?.year);
  };

  // Handler for pagination
  function handlePageClick(event: any, page: number) {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }

  // Handler for downloading excel
  const handleDownloadExcel = async () => {
    if (excelsData?.length > 0) {
      const excelData = [
        {
          field1: "Client name",
          field2: "Email address",
          filed3: "Phone number",
          field4: "Name of event",
          field5: "No of guests",
          field6: "No of views",
        },
      ];
      const allData = excelsData.map(
        ({
          client_name,
          email,
          phone,
          event_name,
          total_guests,
          total_views,
        }: any) => ({
          field1: client_name,
          field2: email,
          field3: phone,
          field4: event_name,
          field5: total_guests,
          field6: total_views,
        })
      );
      excelData.push(...allData);
      const workbook = new ExcelJS.Workbook();
      const workSheet1 = workbook.addWorksheet("Client Stats");
      excelData.forEach((row) => {
        workSheet1.addRow(Object.values(row));
      });
      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `client stats.xlsx`;
      link.click();
      URL.revokeObjectURL(url);
    }
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
      {/* {loading && <GlobalLoader />} */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 4,
          paddingLeft: 3,
        }}
      >
        <Box sx={{ width: "40%" }}>
          <Typography variant="h3">Client Stats</Typography>
        </Box>
        <Box
          sx={{ width: "40%", display: "flex", alignItems: "center", gap: 1 }}
        >
          <Box sx={{ width: "60%" }}>
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
          <Box>
            <Button
              disabled={message ? true : false}
              onClick={() => handleDownloadExcel()}
              variant={"contained"}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              color="success"
              // startIcon={<IconFileDownload width={20} />}
            >
              Download Report
            </Button>
          </Box>
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
                  Client Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Contact Details
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Name of Event
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  No of Guests
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  No of Views
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
            ) : clientsData?.length > 0 && loading === false ? (
              clientsData?.map((client: any) => (
                <TableRow
                  key={client.id}
                  sx={{
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#fbf8f8",
                    },
                  }}
                  onClick={() =>
                    router.push(
                      `/events/${client.event_id}/${client.sub_event_id}/guestList`
                    )
                  }
                >
                  <TableCell>
                    <Typography
                      color="textSecondary"
                      variant="subtitle2"
                      fontWeight={600}
                      sx={{ textTransform: "capitalize" }}
                    >
                      {client.client_name}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {/* <Chip chipcolor={basic.status == 'Active' ? 'success' : basic.status == 'Pending' ? 'warning' : basic.status == 'Completed' ? 'primary' : basic.status == 'Cancel' ? 'error' : 'secondary'} */}
                    <Typography variant="subtitle2">{client.email}</Typography>
                    <Typography variant="subtitle2">{client.phone}</Typography>
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={2}>
                      <Box>
                        <Typography variant="subtitle1" fontWeight={500}>
                          {client.event_name}
                        </Typography>
                      </Box>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Typography
                      color="textSecondary"
                      variant="subtitle2"
                      fontWeight={400}
                    >
                      {client.total_guests}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">
                      {client.total_views}
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 3,
          }}
        >
          {pageCount?.last_page > 1 && (
            <Pagination
              onChange={handlePageClick}
              count={pageCount.last_page}
              color="primary"
            />
          )}
        </Box>
        <ToastContainer />
      </TableContainer>
    </Card>
  );
}
