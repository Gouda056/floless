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
  IconButton,
  Menu,
  ListItemIcon,
  InputAdornment,
} from "@mui/material";
import { IconEdit, IconFileDownload } from "@tabler/icons-react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IconDotsVertical } from "@tabler/icons-react";
import CustomPlanModal from "./customPlanModal";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import Calendar from "./CalendarModal";
import CustomOutlinedInput from "../forms/theme-elements/customOutlinedInput";
import { IconCalendar } from "@tabler/icons-react";
import CustomTextField from "../forms/theme-elements/customTextField";

export default function SubscriptionTable() {
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
  const [userDetails, setUserDetails] = useState([]);
  const [pageCount, setPageCount] = useState<any>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [userId, setUserId] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [selectedYear, setSelectedYear] = useState(null);
  const BASEURL = process.env.NEXT_PUBLIC_URL;
  const [years, setYears] = useState([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openAnchor = Boolean(anchorEl);
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

  const handleReset = () => {
    setFilterSearch({ startDate: "", endDate: "" });
  };

  // Handler to fetch all user details
  const handleFetchUser = (page: number) => {
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
        setUserDetails(response?.data?.data);
        setPageCount(response?.data?.meta);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Handler to call fetch user details on load
  useEffect(() => {
    handleFetchUser(1);
  }, [filterSearch]);

  // Pagination functionality
  const handlePageClick = (event: any, page: number) => {
    setCurrentPage(page);
    handleFetchUser(page);
    window.scrollTo(0, 0);
  };

  // handler to close the add and edit user modal
  const handleClose = () => {
    setOpenModal(false);
    // handleFetchUser(currentPage);
  };

  // Close the crud operation select options
  const handleCloseAnchor = () => {
    setAnchorEl(null);
  };

  // Handler for setting the member id for crud operations
  const handleClickMemberId = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    setUserId(id);
    setAnchorEl(event.currentTarget);
  };

  // Crud operation
  const handleCrudOperation = (operation: string) => {
    switch (operation) {
      case "Add cutom plan":
        setOpenModal(true);
        setAnchorEl(null);
        break;
      default:
        setLoading(false);
        break;
    }
  };

  const onCustomPlanDataReceived = (
    checked: any[],
    name: string,
    storage: string,
    selectedSpace: string,
    price: any,
    interval: string
  ) => {
    setLoading(true);
    axios
      .patch(`${BASEURL}/stripe-create-plans`, {
        enable: checked,
        tenant_id: userId,
        name: name,
        size: `${storage} ${selectedSpace}`,
        price: price,
        interval: interval,
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Plan created successfully");
          handleFetchUser(currentPage);
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCalendarClick = () => {
    if (showCalendar) setShowCalendar(false);
    else setShowCalendar(true);
  };

  return (
    <Card sx={{ padding: 5, border: `1px solid ${borderColor}` }}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 4,
        }}
      >
        <Box width="40%">
          <Typography variant="h3">Subscription Control</Typography>
        </Box>
        <Box width="24%">
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
                  Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Company
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
              <TableCell></TableCell>
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
            ) : userDetails.length > 0 && loading === false ? (
              userDetails.map((user: any) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <Typography
                      color="textSecondary"
                      variant="subtitle2"
                      fontWeight={400}
                    >
                      {user.user_name}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">
                      {user.company_name}
                    </Typography>
                    <Typography variant="subtitle2">{user.phone}</Typography>
                    <Typography variant="subtitle2">{user.email}</Typography>
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={2}>
                      <Box>
                        <Typography variant="subtitle1" fontWeight={500}>
                          {user.subscription}
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
                      {user.amount_paid}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">
                      {user.due_for_renewal}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography variant="subtitle1">
                      <Stack direction="column" alignItems="center" spacing={2}>
                        <Stack
                          direction="row"
                          alignItems="center"
                          justifyContent={"space-between"}
                          spacing={2}
                          sx={{ width: "90%" }}
                        >
                          <Typography variant="subtitle1" color="textSecondary">
                            Space alotted:
                          </Typography>
                          <Typography variant="subtitle2" color="textSecondary">
                            {user.space_alloted} GB
                          </Typography>
                        </Stack>
                        <Stack
                          direction="row"
                          alignItems="center"
                          justifyContent={"space-between"}
                          spacing={2}
                          sx={{ width: "90%" }}
                        >
                          <Typography variant="subtitle1" color="textSecondary">
                            Space used:
                          </Typography>
                          <Typography variant="subtitle2" color="textSecondary">
                            {user.used_percentage} %
                          </Typography>
                        </Stack>
                      </Stack>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      id="basic-button"
                      aria-controls={openAnchor ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={openAnchor ? "true" : undefined}
                      onClick={(event) => handleClickMemberId(event, user.id)}
                    >
                      <IconDotsVertical width={18} />
                    </IconButton>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={openAnchor}
                      onClose={handleCloseAnchor}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem
                        onClick={(event) =>
                          handleCrudOperation(event.currentTarget.textContent)
                        }
                      >
                        <ListItemIcon>
                          <IconEdit width={18} />
                        </ListItemIcon>
                        Add cutom plan
                      </MenuItem>
                    </Menu>
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
            marginBottom: 3,
          }}
        >
          {pageCount?.last_page > 1 &&
            loading === false &&
            userDetails.length !== 0 && (
              <Pagination
                onChange={handlePageClick}
                count={pageCount.last_page}
                color="primary"
                page={currentPage}
              />
            )}
        </Box>
      </TableContainer>
      <ToastContainer />
      <CustomPlanModal
        open={openModal}
        handleClose={handleClose}
        userId={userId}
        onCustomPlanDataReceived={onCustomPlanDataReceived}
      />
    </Card>
  );
}
