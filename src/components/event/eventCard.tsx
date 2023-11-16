import Link from "next/link";
import {
  CardContent,
  Typography,
  Grid,
  Chip,
  Avatar,
  Box,
  MenuItem,
  Menu,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import BlankCard from "../shared/BlankCard";
import { useState } from "react";
import {
  IconCalendarEvent,
  IconDotsVertical,
  IconTrash,
} from "@tabler/icons-react";
import { ToastContainer } from "react-toastify";
import ConfirmDeleteModal from "../common/confirmDeleteModal";
import GlobalLoader from "../common/globalLoader";

interface props {
  eventsList?: any[];
  handleCrud: any;
}
const EventCard = ({ eventsList, handleCrud }: props) => {
  const [loading, setLoading] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const [eventId, setEventId] = useState<Number>();
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleClose = (eventId: any) => {
    // setAnchorEl(null);
    // setConfirmDelete(true);
    // onConfirmDelete(eventId);
    setConfirmDelete(true);
  };

  const handleDeleteClick = () => {
    setAnchorEl(null);
  };

  const handleModalClose = () => {
    setAnchorEl(null);
    setConfirmDelete(true);
  };

  const onConfirmDelete = (value: any) => {
    handleCrud("delete", eventId);
  };

  return (
    <>
      {loading && <GlobalLoader />}
      <Grid container spacing={3}>
        {eventsList?.map((event, index) => (
          <Grid item xs={12} sm={4} lg={3} key={index}>
            <BlankCard className="hoverCard">
              <Typography
                component={Link}
                href={`events/${event.id}/${event.sub_event_id}/image-gallery`}
              >
                <img
                  src={
                    event.display_image
                      ? event.display_image
                      : "/images/profile/blank-image-skeleton.png"
                  }
                  alt="img"
                  width="100%"
                  height="220px"
                />
              </Typography>
              {/* <Tooltip title="Add To Cart">
                  <Fab
                      size="small"
                      color="primary"
                      sx={{ bottom: "75px", right: "15px", position: "absolute" }}
                  >
                      <IconBasket size="16" />
                  </Fab>
                  </Tooltip> */}
              <CardContent
                sx={{
                  padding: 0,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    paddingY: 1,
                    paddingX: 1,
                  }}
                >
                  <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
                    {event.name}
                  </Typography>
                  <Chip
                    avatar={
                      <Avatar>{<IconCalendarEvent height={14} />}</Avatar>
                    }
                    label={event.event_type}
                    color="primary"
                    size="small"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    paddingX: 1,
                  }}
                >
                  <Box>
                    <Typography variant="subtitle2" mt={1}>
                      {event.date}
                    </Typography>
                  </Box>
                  <Box>
                    <IconButton
                      id={`menu-button-${index}`}
                      aria-controls={`menu-${index}`}
                      aria-haspopup="true"
                      onClick={(e) => {
                        setEventId(event.id);
                        handleClick(e);
                      }}
                    >
                      <IconDotsVertical width={18} />
                    </IconButton>
                    <Menu
                      id={`menu-${index}`}
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleDeleteClick}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      // getContentAnchorEl={null}
                    >
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <IconTrash width={18} />
                        </ListItemIcon>
                        Delete
                      </MenuItem>
                    </Menu>
                  </Box>
                </Box>

                {/* ***********************************commenting crud operation part*************************************** */}
                {/* <Box>
                  <IconButton
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
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
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <IconWorldUpload width={18} />
                      </ListItemIcon>
                      Publish Event
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <IconTrash width={18} />
                      </ListItemIcon>
                      Delete
                    </MenuItem>
                  </Menu>
                </Box> */}
              </CardContent>
            </BlankCard>
          </Grid>
        ))}
        <ConfirmDeleteModal
          open={confirmDelete}
          title={`Are you sure you want to delete ?`}
          handleClose={() => {
            handleDeleteClick();
            setConfirmDelete(false);
          }}
          onConfirmDelete={onConfirmDelete}
          cancel={"Delete"}
          close={"Cancel"}
        />
        <ToastContainer />
      </Grid>
    </>
  );
};

export default EventCard;
