// @ts-nocheck
import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Typography,
  Chip,
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  AvatarGroup,
  Button,
  Pagination,
  CircularProgress,
  capitalize,
} from "@mui/material";
import BlankCard from "../../shared/BlankCard";
import { Box, Stack } from "@mui/system";
import {
  IconDotsVertical,
  IconEdit,
  IconPencil,
  IconPlus,
  IconTrash,
} from "@tabler/icons-react";
import GuestModal from "./addGuestModal";
import ExcelUpload from "./excelUpload";
import { FormikValues } from "formik";
import ExcelJS from "exceljs";
import axios from "axios";
import GlobalLoader from "../../common/globalLoader";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IconMoodHappy } from "@tabler/icons-react";
import ConfirmDeleteModal from "../../common/confirmDeleteModal";

const GuestListTable = () => {
  const [openGuestModal, setOpenGuestModal] = useState(false);
  const [openMediaModal, setOpenMediaModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [loading, setLoading] = useState(false);
  const [guestList, setGuestList] = useState<any>([]);
  const router = useRouter();
  const eventId = router.asPath.split("/")[2];
  const [pageCount, setPageCount] = useState<any>(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [guestId, setGuestId] = useState(0);
  const [type, setType] = useState("");
  const [individualGuestDetails, setIndividualGuestDetails] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);
  const BASEURL = process.env.NEXT_PUBLIC_URL;

  const handleGetGuestId = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    setAnchorEl(event.currentTarget);
    setGuestId(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Handler to close guest modal
  const handleCloseGuestModal = () => {
    setOpenGuestModal(false);
  };

  // To fetch all guest list
  const handleGuestList = (page) => {
    setLoading(true);
    axios
      .get(`${BASEURL}/all-invitees`, {
        params: {
          event_id: eventId,
          page: page,
          paginate: 8,
        },
      })
      .then((response) => {
        setGuestList(response?.data?.data);
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
    handleGuestList(currentPage);
  }, []);

  // On data received from guest modal
  const guestData = (data: FormikValues) => {
    setLoading(true);
    if (type === "patch")
      axios
        .patch(`${BASEURL}/update-invitee/${guestId}`, {
          first_name: data.name,
          phone: data.phone,
          email: data.email,
          role: data.role,
          event_id: eventId,
        })
        .then((response) => {
          if (response.status === 200) {
            toast.success(<Typograpghy sx={{textTransform: "capitalize"}}>{response?.data?.message}</Typograpghy>);
            handleGuestList(currentPage);
          }
        })
        .catch((error) => {
          toast.error(error?.response?.data?.message);
        })
        .finally(() => {
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        });
    else {
      axios
        .post(`${BASEURL}/create-invitee`, {
          first_name: data.name,
          phone: data.phone,
          email: data.email,
          role: data.role,
          event_id: eventId,
        })
        .then((response) => {
          if (response.status === 200) {
            toast.success(response?.data?.message);
            // toast.success(response?.data?.message);
            handleGuestList(1);
          }
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  // Excel file upload
  const onMediaUpload = (files: any) => {
    setLoading(true);
    axios
      .post(`${BASEURL}/import-invitees?event_id=${eventId}`, files)
      .then((response) => {
        if (response.status === 200) {
          toast.success(response?.data?.message);
          handleGuestList(1);
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message.split("(")[0]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCloseMediaModal = () => {
    setOpenMediaModal(false);
  };

  // Excel donwload
  const downloadExcelTemplate = async () => {
    const fieldHeadings = [
      {
        filed1: "first_name",
        field2: "last_name",
        field3: "phone",
        field4: "email",
        field5: "role",
      },
    ];
    const workbook = new ExcelJS.Workbook();
    const workSheet1 = workbook.addWorksheet("Guest List");
    fieldHeadings.forEach((row) => {
      workSheet1.addRow(Object.values(row));
    });
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Guest List Template.xlsx";
    link.click();
    URL.revokeObjectURL(url);
  };

  // Crud operation functionality
  const handleCrudOperation = (operation: string) => {
    switch (operation) {
      case "Edit":
        setType("patch");
        // setLoading(true);
        axios
          .get(`${BASEURL}/show-invitee/${guestId}`)
          .then((response) => {
            setOpenGuestModal(true);
            setIndividualGuestDetails(response?.data?.data);
            setAnchorEl(null);
          })
          .catch((error) => {
            toast.error(error?.response?.data?.message);
            setAnchorEl(null);
          })
          .finally(() => {
            // setLoading(false);
          });
        break;
      case "Delete":
        setConfirmDelete(true);
        setAnchorEl(null);
        break;
    }
  };

  // handle close delete modal
  const handleCloseDeleteModal = () => {
    setConfirmDelete(false);
  };

  const onConfirmDelete = (value: boolean) => {
    if (value) {
      axios
        .delete(`${BASEURL}/delete-invitee/${guestId}`)
        .then((response) => {
          if (response.status === 200) {
            toast.success(response?.data?.message);
            handleGuestList(currentPage);
          }
        })
        .catch((error) => {
          toast.error(error?.response?.data?.message.split("(")[0]);
        })
        .finally(() => {
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        });
    }
  };

  // Handler for pagination
  function handlePageClick(event: any, page: number) {
    setCurrentPage(page);
    handleGuestList(page);
    window.scrollTo(0, 0);
  }

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          paddingX: 1,
          marginBottom: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Button
            onClick={() => setOpenGuestModal(true)}
            variant="contained"
            color="primary"
            sx={{px: 3}}
          >
            Add New Invitee
          </Button>
          <Button
            onClick={() => setOpenMediaModal(true)}
            variant="contained"
            color="success"
          >
            Import Invitees List
          </Button>
        </Box>
        <Button onClick={() => downloadExcelTemplate()}>Excel Template</Button>
      </Box>
      <GuestModal
        open={openGuestModal}
        handleClose={handleCloseGuestModal}
        guestData={guestData}
        individualGuestDetails={individualGuestDetails}
      />
      <ExcelUpload
        onMediaUpload={onMediaUpload}
        open={openMediaModal}
        handleClose={handleCloseMediaModal}
      />
      <BlankCard>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Invitee Name</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Invitee Role</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Email Address</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Phone Number</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Code</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Status</Typography>
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
              ) : loading === false && guestList?.length > 0 ? (
                guestList?.map((guest: any) => (
                  <TableRow
                    key={guest.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Box>
                          <Typography variant="h6">
                            {guest.first_name}
                          </Typography>
                        </Box>
                      </Stack>
                    </TableCell>
                    <TableCell scope="row">
                      <Chip
                        label={guest.role}
                        color={
                          guest.role === "Client" || guest.role === "client"
                            ? "success"
                            : "warning"
                        }
                        sx={{ textTransform: "capitalize" }}
                      />
                    </TableCell>
                    <TableCell scope="row">
                      <Typography variant="subtitle1" color="textSecondary">
                        {guest.email}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle1" color="textSecondary">
                        {guest.phone}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle1" color="textSecondary">
                        {guest.code}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle1" color="textSecondary" sx={{textTransform: "capitalize"}}>
                        {guest.status}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <IconButton
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={(event) => handleGetGuestId(event, guest.id)}
                      >
                        <IconDotsVertical width={18} />
                      </IconButton>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
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
                            <IconPencil width={18} />
                          </ListItemIcon>
                          Edit
                        </MenuItem>
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
        </TableContainer>
      </BlankCard>
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
      <ConfirmDeleteModal
        title="Are you sure want to delete ?"
        open={confirmDelete}
        handleClose={handleCloseDeleteModal}
        onConfirmDelete={onConfirmDelete}
      />
    </Box>
  );
};

export default GuestListTable;
