// @ts-nocheck
import {
  CardContent,
  Box,
  Stack,
  Avatar,
  Grid,
  Typography,
  Chip,
  Divider,
  Button,
  CircularProgress,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import BlankCard from "../../shared/BlankCard";
import { IconPlus, IconSearch, IconTrash } from "@tabler/icons-react";
import AddTeamMemberModal from "./addTeamMemberModal";
import TeamDetails from "./detailsModal";
import { FormikValues } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalLoader from "../../common/globalLoader";
import NoDataFound from "../../common/noDataFound";
import { IconDotsVertical } from "@tabler/icons-react";
import { IconPencil } from "@tabler/icons-react";
import ConfirmDeleteModal from "../../common/confirmDeleteModal";

const TeamCard = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openCrud = Boolean(anchorEl);
  const [open, setOpen] = useState(false);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [allTeamMembers, setAllTeamMembers] = useState([]);
  const [memberId, setMemberId] = useState(0);
  const [individualMemberDetails, setIndividualMemberDetails] = useState("");
  const [teamMemberEventDetails, setTeamMemberEventDetails] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [type, setType] = useState("");
  const [modalLoader, setMoadlLoader] = useState(false);

  const BASEURL = process.env.NEXT_PUBLIC_URL;

  // To fetch team members
  const handleAllTeamMembers = () => {
    setLoading(true);
    axios
      .get(`${BASEURL}/team-members`)
      .then((response) => {
        setAllTeamMembers(response?.data.data);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // To fectch all team members on load
  useEffect(() => {
    handleAllTeamMembers();
  }, []);

  // On data received from add team modal
  const onDataSaved = (data: FormikValues) => {
    setMoadlLoader(true);
    if (type === "patch")
      axios
        .patch(`${BASEURL}/update-member/${memberId}`, {
          first_name: data.name,
          phone: data.number,
          email: data.email,
        })
        .then((response) => {
          if (response.status === 200) {
            toast.success(response?.data?.message);
            handleAllTeamMembers();
            setOpen(false);
          }
        })
        .catch((error) => {
          toast.error(error?.response?.data?.message.split("(")[0]);
          setOpen(true);
        })
        .finally(() => {
          setTimeout(() => {
            setMoadlLoader(false);
          }, 2000);
        });
    else {
      setMoadlLoader(true);
      axios
        .post(`${BASEURL}/add-member`, {
          name: data.name,
          phone: data.number,
          email: data.email,
        })
        .then((response) => {
          if (response.status === 200) {
            toast.success(response?.data?.message);
            handleAllTeamMembers();
            setOpen(false);
          }
        })
        .catch((error) => {
          toast.error(error?.response?.data?.message.split("(")[0]);
          setOpen(true);
        })
        .finally(() => {
          setTimeout(() => {
            setMoadlLoader(false);
          }, 2000);
        });
    }
  };

  // To close the crud operation menu items
  const handleCloseCrud = () => {
    setAnchorEl(null);
  };

  // Handler for setting the member id for crud operations
  const handleClickMemberId = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    setMemberId(id);
    setAnchorEl(event.currentTarget);
  };

  // Handler for closing ateh add and edit team members modal
  const handleClose = () => {
    setOpen(false);
  };

  // Handler for showing the team members details
  const handleCloseDetailsModal = () => {
    setOpenDetailsModal(false);
  };

  // Handler for fetch team member event details
  const handleFetchTeamMemberEventDetails = (userId) => {
    setMemberId(userId);
    axios
      .get(`${BASEURL}/team-member-events`, {
        params: {
          user_id: userId,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setTeamMemberEventDetails(response?.data?.data);
          setOpenDetailsModal(true);
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
        // console.log(error);
      });
  };

  // handle close delete modal
  const handleCloseDeleteModal = () => {
    setConfirmDelete(false);
  };

  const onConfirmDelete = (value) => {
    if (value) {
      axios
        .delete(`${BASEURL}/delete-member/${memberId}`)
        .then((response) => {
          if (response.status === 200) {
            toast.success(response?.data?.message);
            handleAllTeamMembers();
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
    }
  };

  // Crud operations complete funxtionality for delete and edit
  const handleCrudOperation = (operation: string) => {
    switch (operation) {
      case "Delete":
        setConfirmDelete(true);
        setAnchorEl(null);
        break;
      case "Edit":
        setType("patch");
        setLoading(true);
        axios
          .get(`${BASEURL}/team-member/${memberId}`)
          .then((response) => {
            if (response.status === 200) {
              setIndividualMemberDetails(response?.data?.data);
              setOpen(true);
            }
          })
          .catch((error) => {
            toast.error(error?.reposne?.data?.message);
          })
          .finally(() => {
            setLoading(false);
            setAnchorEl(null);
          });
        break;
      default:
        setAnchorEl(null);
        setLoading(false);
        break;
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item sm={12} lg={12}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setOpen(true)}
              >
                <IconPlus width={18} height={30} />
                Add Team Member
              </Button>
            </Box>
          </Box>
          <AddTeamMemberModal
            open={open}
            handleClose={handleClose}
            setOpen={setOpen}
            onDataSaved={onDataSaved}
            individualMemberDetails={individualMemberDetails}
            loading={modalLoader}
          />
        </Grid>
        <TeamDetails
          open={openDetailsModal}
          handleClose={handleCloseDetailsModal}
          teamMemberEventDetails={teamMemberEventDetails}
          teamMemberId={memberId}
        />
        {loading ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "30rem",
              width: "100%",
            }}
          >
            <CircularProgress />
            <Typography variant="h4">Loading...</Typography>
          </Box>
        ) : !loading && allTeamMembers.length === 0 ? (
          <NoDataFound />
        ) : (
          allTeamMembers?.map((member: any) => {
            return (
              <Grid item sm={12} lg={4} key={member.id}>
                <Box>
                  <BlankCard className="hoverCard">
                    <CardContent>
                      <Box sx={{ padding: 0, textAlign: "end" }}>
                        <IconButton
                          sx={{ padding: 0 }}
                          id="basic-button"
                          aria-controls={openCrud ? "basic-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={openCrud ? "true" : undefined}
                          onClick={(event) =>
                            handleClickMemberId(event, member.id)
                          }
                        >
                          <IconDotsVertical width={18} />
                        </IconButton>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={openCrud}
                          onClose={handleCloseCrud}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                          sx={{ paddingBottom: 0 }}
                        >
                          <MenuItem
                            sx={{ paddingY: 0, paddingX: 1 }}
                            onClick={(event) =>
                              handleCrudOperation(
                                event.currentTarget.textContent
                              )
                            }
                          >
                            <ListItemIcon>
                              <IconPencil width={18} />
                            </ListItemIcon>
                            Edit
                          </MenuItem>
                          <MenuItem
                            sx={{ paddingY: 0, paddingX: 1 }}
                            onClick={(event) =>
                              handleCrudOperation(
                                event.currentTarget.textContent
                              )
                            }
                          >
                            <ListItemIcon>
                              <IconTrash width={18} />
                            </ListItemIcon>
                            Delete
                          </MenuItem>
                        </Menu>
                      </Box>

                      <Stack
                        direction={"column"}
                        gap={2}
                        alignItems="center"
                        justifyContent={"center"}
                      >
                        <Avatar
                          alt="Remy Sharp"
                          src={""}
                          sx={{ width: "80px", height: "80px" }}
                        />
                        <Box textAlign={"center"}>
                          <Typography
                            variant="h5"
                            sx={{ textTransform: "capitalize" }}
                          >
                            {member.first_name}
                          </Typography>
                          <Box display={"flex"} flexDirection={"column"}>
                            {/* <Typography variant="caption">
                            {member.role}
                          </Typography> */}
                            <Typography variant="subtitle1">
                              {member.email}
                            </Typography>
                            <Typography variant="caption">
                              {member.phone}
                            </Typography>
                            <Button
                              onClick={() =>
                                handleFetchTeamMemberEventDetails(member?.id)
                              }
                              variant="contained"
                              color={"primary"}
                              sx={{
                                marginTop: 1,
                                padding: 0,
                                width: "3rem",
                                marginX: "auto",
                              }}
                            >
                              View
                            </Button>
                          </Box>
                        </Box>
                      </Stack>
                    </CardContent>
                    <Divider />
                  </BlankCard>
                </Box>
              </Grid>
            );
          })
        )}
      </Grid>
      <ConfirmDeleteModal
        open={confirmDelete}
        title={`Are you sure you want to delete ?`}
        handleClose={handleCloseDeleteModal}
        onConfirmDelete={onConfirmDelete}
      />

      <ToastContainer />
    </>
  );
};

export default TeamCard;
