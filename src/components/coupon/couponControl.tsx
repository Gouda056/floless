// @ts-nocheck

import {
  Box,
  Button,
  Card,
  CircularProgress,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import { IconDotsVertical, IconEdit, IconTrash } from "@tabler/icons-react";
import axios from "axios";
import { useEffect, useState } from "react";
import ConfirmDeleteModal from "../common/confirmDeleteModal";
import AddCouponModal from "./addCouponModal";
import { toast, ToastContainer } from "react-toastify";

const couponControl = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const borderColor = theme.palette.divider;
  const BASEURL = process.env.NEXT_PUBLIC_URL;
  const [allCoupons, setAllCoupons] = useState([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const openAnchor = Boolean(anchorEl);
  const [openCouponModal, setOpenCouponModal] = useState(false);
  const [couponId, setCouponId] = useState("");

  const fetchCoupons = () => {
    axios
      .get(`${BASEURL}/all-coupon`)
      .then((response: any) => {
        const coupons = response?.data?.data;
        if (coupons) {
          coupons.forEach((coupon: any) => {
            if (coupon.redeem_by) {
              const date = new Date(coupon.redeem_by * 1000); // Convert seconds to milliseconds
              const formattedDate = date.toLocaleString();
              const expiry = formattedDate.split(",");
              coupon.redeem_by = expiry;
            }
          });
        }
        setAllCoupons(coupons);
      })
      .catch((error: any) => {
        // console.log(error);
      })
      .then(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchCoupons();
  }, []);

  const handleClickMemberId = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    setCouponId(id);
    setAnchorEl(event.currentTarget);
  };

  const handleCloseAnchor = () => {
    setAnchorEl(null);
  };

  const handleCrudOperation = (operation: any) => {
    switch (operation) {
      case "Delete":
        setConfirmDelete(true);
        setAnchorEl(null);
        break;
      default:
        setLoading(false);
        break;
    }
  };

  const handleCloseDeleteModal = () => {
    setConfirmDelete(false);
  };

  const handleClose = () => {
    setOpenCouponModal(false);
  };

  const onSuccessfulCoupon = (status: any, data: any) => {
    if (status === "success") {
      toast.success("Coupon created successfully");
      fetchCoupons();
    } else toast.error("Coupon was not generated");
  };

  const onConfirmDelete = (value: any) => {
    setLoading(true);
    if (value) {
      axios
        .delete(`${BASEURL}/delete-coupon/${couponId}`)
        .then((response) => {
          if (response.status === 200) {
            toast.success(response?.data?.message);
            fetchCoupons();
          }
        })
        .catch((error) => {
          toast.error(error?.response?.data?.message);
        })
        .finally(() => {
          setTimeout(() => {
            setLoading(false);
            fetchCoupons();
          }, 2000);
        });
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Button
          onClick={() => setOpenCouponModal(true)}
          variant="contained"
          color="primary"
        >
          Add Coupon
        </Button>
      </Box>
      <Card sx={{ padding: 4, border: `1px solid ${borderColor}` }}>
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
                    Coupon Code
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Name
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Discount
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Expiry
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
              ) : allCoupons.length > 0 && loading === false ? (
                allCoupons?.map((user: any) => (
                  <TableRow
                    key={user.id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell>
                      <Typography variant="subtitle1" color="textSecondary">
                        {user.id}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Box>
                          <Typography variant="subtitle1">
                            {user.name}
                          </Typography>
                        </Box>
                      </Stack>
                    </TableCell>
                    <TableCell scope="row">
                      <Typography variant="subtitle1" color="textSecondary">
                        {user.percent_off}%
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle1" color="textSecondary">
                        {user.redeem_by ? user.redeem_by[0] : "No expiry"}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {user.redeem_by ? user.redeem_by[1] : ""}
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
                            <IconTrash width={18} />
                          </ListItemIcon>
                          Delete
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
          <ConfirmDeleteModal
            open={confirmDelete}
            handleClose={handleCloseDeleteModal}
            onConfirmDelete={onConfirmDelete}
            title={"Are you sure you want to delete?"}
          />
          <AddCouponModal
            open={openCouponModal}
            handleClose={handleClose}
            onSuccessfulCoupon={onSuccessfulCoupon}
          />
          {/* <Box
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
        </Box> */}
        </TableContainer>
        <ToastContainer />
      </Card>
    </>
  );
};

export default couponControl;
