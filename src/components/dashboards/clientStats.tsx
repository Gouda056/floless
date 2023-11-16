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
  Chip,
  TableContainer,
  Stack,
  Button,
  Divider,
  Card,
  MenuItem,
  LinearProgress,
  Pagination,
  CircularProgress,
  InputAdornment,
} from "@mui/material";
import { IconCalendar, IconFileDownload } from "@tabler/icons-react";
import axios from "axios";
import { toast } from "react-toastify";
import ExcelJS from "exceljs";
import Select from "react-select";
import {
  customEventDateLabel,
  customSelectValue,
} from "../../../utils/selectHelpers";
import Calendar from "./CalendarModal";
import CustomTextField from "../forms/theme-elements/customTextField";

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
  const [clientsData, setClientsData] = useState([]);
  const [excelsData, setExcelsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState<any>("");
  const [loading, setLoading] = useState(false);
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const BASEURL = process.env.NEXT_PUBLIC_URL;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
  };

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

  // To fetch all teh clients stats

  const handleFetchCleintDetails = (page: number) => {
    setLoading(true);

    let options = {};

    if (filterSearch.startDate && filterSearch.endDate) {
      options = {
        paginate: 8,
        page: page,
        from: filterSearch.startDate,
        to: filterSearch.endDate,
      };
    } else {
      options = {
        paginate: 8,
        page: page,
      };
    }

    axios
      .get(`${BASEURL}/all-subscribers`, {
        params: options,
      })
      .then((response) => {
        setClientsData(response?.data?.data);
        setPageCount(response?.data?.meta);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    handleFetchCleintDetails(1);
  }, [filterSearch]);

  // Fetch year
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASEURL}/year-filter`)
      .then((response) => {
        setYears(response?.data);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Handler to select year
  const handleSelectYear = (data: any): void => {
    setSelectedYear(data?.year);
  };

  // Fetching data for excel
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASEURL}/all-subscribers`, {
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

  // Pagination functionality
  const handlePageClick = (event: any, page: number) => {
    setCurrentPage(page);
    handleFetchCleintDetails(page);
    window.scrollTo(0, 0);
  };

  // Handler for downloading excel
  const handleDownloadExcel = async () => {
    if (excelsData?.length > 0) {
      const excelData = [
        {
          field1: "Client name",
          field2: "Company name",
          filed3: "Phone number",
          field4: "Email address",
          field5: "Subscription",
          field6: "Amount paid",
          field7: "Due for renewal",
          field8: "Space alloted in KB",
          field9: "Space available",
        },
      ];
      const allData = excelsData?.map(
        ({
          user_name,
          company_name,
          phone,
          email,
          subscription,
          amount_paid,
          due_for_renewal,
          space_alloted,
          balance_space,
        }: any) => ({
          field1: user_name,
          field2: company_name,
          field3: phone,
          field4: email,
          field5: subscription,
          field6: amount_paid,
          field7: due_for_renewal,
          field8: space_alloted,
          field9: balance_space,
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
    <>
      <Card sx={{ mt: 2, padding: 4, border: `1px solid ${borderColor}` }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 4,
          }}
        >
          <Box sx={{ width: "40%" }}>
            <Typography variant="h3">Client Stats</Typography>
          </Box>
          <Box
            sx={{ width: "40%", display: "flex", alignItems: "center", gap: 1 }}
          >
            <Box sx={{ width: "100%" }}>
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
            <Box sx={{ width: "60%" }}>
              <Button
                disabled={clientsData ? true : false}
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
                    Company Details
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Subscription
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Amount Paid
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Due for Renewal
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Space Alloted
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Balance Space
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
              ) : clientsData.length > 0 && loading === false ? (
                clientsData?.map((client: any) => (
                  <TableRow key={client.id}>
                    <TableCell>
                      <Typography
                        color="textSecondary"
                        variant="subtitle2"
                        fontWeight={400}
                      >
                        {client.user_name}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      {/* <Chip chipcolor={basic.status == 'Active' ? 'success' : basic.status == 'Pending' ? 'warning' : basic.status == 'Completed' ? 'primary' : basic.status == 'Cancel' ? 'error' : 'secondary'} */}
                      <Typography variant="subtitle2">
                        {client.company_name !== null
                          ? client.company_name
                          : "--"}
                      </Typography>
                      <Typography variant="subtitle2">
                        {client.phone !== null ? client.phone : "--"}
                      </Typography>
                      <Typography variant="subtitle2">
                        {client.email !== null ? client.email : "--"}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={2}>
                        <Box>
                          <Typography variant="subtitle1" fontWeight={500}>
                            {client.subscription}
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
                        {client.amount_paid}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">
                        {client.due_for_renewal}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography variant="subtitle1">
                        <Typography variant="subtitle2" color="textSecondary">
                          {client.space_alloted} GB
                        </Typography>
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle1">
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <Box width="100%">
                            <LinearProgress
                              variant="determinate"
                              value={client.used_percentage}
                              color="primary"
                            />
                          </Box>
                          <Typography variant="subtitle2" color="textSecondary">
                            {client.used_percentage}%
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginY: 3,
            }}
          >
            {pageCount?.last_page > 1 &&
              loading === false &&
              clientsData.length !== 0 && (
                <Pagination
                  onChange={handlePageClick}
                  count={pageCount.last_page}
                  color="primary"
                  page={currentPage}
                />
              )}
          </Box>
        </TableContainer>
      </Card>
    </>
  );
}
