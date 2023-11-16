import {
  Box,
  Button,
  styled,
  Divider,
  Typography,
  Stack,
  CircularProgress,
} from "@mui/material";
import { IconPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import AddEventModal from "../../components/event/createSubEventModal";
import EventSideBar from "../../components/event/eventsSideBar";
import { FormikValues } from "formik";
import axios from "axios";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import GlobalLoader from "../../components/common/globalLoader";
import UploadLoader from "../../components/common/uploadLoader";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}));
interface props {
  children: React.ReactNode;
  percentageValue?: number;
  loader?: boolean;
  filesLength?: number;
  filesUploaded?: number;
  onCancel?: () => void;
}

export default function EventLayout({
  children,
  percentageValue,
  loader,
  filesLength,
  filesUploaded,
  onCancel,
}: props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [subEvents, setSubEvents] = useState([]);
  const [eventName, setEventName] = useState("");
  const { maineventid } = router.query;
  const { subeventid } = router.query;
  const [eventPublishing, setEventPublishing] = useState(false);
  const[publishStatus, setPublishStatus] = useState("");
  const BASEURL = process.env.NEXT_PUBLIC_URL;
  

  // Handler for fetching all sub events
  const handleSubEventsList = () => {
    setLoading(true);
    axios
      .get(`${BASEURL}/events`, {
        params: {
          is_subEvent: true,
          event_id: maineventid,
        },
      })
      .then((response) => {
        setSubEvents(response?.data?.data);
        setEventName(response?.data?.data[0]?.event_name);
      })
      .catch((error) => {
        // console.log("error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //   Call all sub events on load
  useEffect(() => {
    handleSubEventsList();
  }, []);

  // On side bar update
  const onSubEventsUpdated = (value: boolean) => {
    if (value) handleSubEventsList();
  };

  // Subevent creation on data received from addEvent modal
  const onDataReceived = (data: FormikValues) => {
    setLoading(true);
    axios
      .post(`${BASEURL}/events`, {
        event_id: maineventid,
        name: data.name,
        private: data.privacy,
        date: moment(data.date).format("DD-MM-YYYY"),
      })
      .then((response) => {
        if (response.status === 200) {
          handleSubEventsList();
          // toast.success(response?.data?.message);
          toast.success("Sub event created successfully");
        }
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  // Handle close for closing event moda;
  const handleClose = () => {
    setOpen(false);
  };

  // Hnadler to check the event production status
  const handleEventFetch = () => {
    axios
      .get(`${BASEURL}/events/${maineventid}}`)
      .then((response) => {
        const eventStatus = response?.data?.data?.production_status;
        setPublishStatus(eventStatus);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  useEffect(() => {
    handleEventFetch();
  }, [])

  // handle publish event
  const handlePublish = () => {
    setEventPublishing(true);
    axios
      .post(`${BASEURL}/ai-collection`, {
        event_id: maineventid,
      })
      .then((response) => {
        if (response.status === 200) {
          axios
            .post(`${BASEURL}/ai-add-faces`, {
              event_id: maineventid,
            })
            .then((resposne) => {
              if (resposne.status === 200) {
                toast.success("Event published successfully");
                handleEventFetch();
              }
            })
            .catch((error) => {
              toast.error(error?.response?.data?.message);
            })
            .finally(() => {
              setEventPublishing(false);
            });
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      });
  };

  return (
    <MainWrapper sx={{ zIndex: -1 }}>
      {/* {loading && <GlobalLoader />} */}
      {loader && (
        <UploadLoader percentageValue={percentageValue ? percentageValue : 0} filesLength={filesLength} filesUploaded={filesUploaded} onCancel={onCancel} />
      )}
      <Box width={"100%"}>
        <Divider sx={{ position: "sticky", top: "70px", zIndex: 1 }}></Divider>
        <Box display={"flex"} width={"100%"} paddingX={1}>
          <Box
            sx={{
              width: "15%",
              paddingX: 1,
              position: "fixed",
              backgroundColor: "white",
              zIndex: 1,
              height: "100vh",
              top: "70.9px",
              borderRadius: 0,
            }}
          >
            <Button
              onClick={() => setOpen(true)}
              sx={{
                // backgroundColor: "white",
                // color: "#656262",
                display: "flex",
                // border: "2px solid #C0C0C0",
                width: "14rem",
                paddingY: 1,
                marginTop: 2.5,
                marginBottom: 1,
                fontWeight: "600",
                "&:hover": {
                  // backgroundColor: "#E8E8E8",
                  // color: "#656262",
                },
              }}
              variant="outlined"
              color="primary"
              type="button"
            >
              Add sub events
              <IconPlus height={18} />
            </Button>
            {/* my favourites */}
            <Button
              onClick={() =>
                router.push(
                  `/events/${maineventid}/${subeventid}/my-collection`
                )
              }
              sx={{
                backgroundColor: router.asPath.split("/")[4] === "my-collection" ? "#ecebeb !important" : "white !important",
                color: "rgba(0, 0, 0, 0.87)",
                display: "flex",
                border: "1px solid rgba(0, 0, 0, 0.87)",
                width: "14rem",
                paddingY: 1,
                marginTop: 1,
                marginBottom: 1,
                fontWeight: "600",
                "&:hover": {
                  border: "1px solid rgba(0, 0, 0, 0.87)",
                  backgroundColor: "#fcfbfb",
                  color: "#656262",
                },
              }}
              variant="outlined"
              color="primary"
              type="button"
            >
              View my collection
            </Button>
            {/* Sub event modal */}
            <AddEventModal
              heading={"Add sub events"}
              open={open}
              handleClose={handleClose}
              onDataReceived={onDataReceived}
            />
            <EventSideBar
              subEvents={subEvents}
              onSubEventsUpdated={onSubEventsUpdated}
            />
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              zIndex: 1,
              position: "relative",
              left: { sm: "15rem", md: "14rem", lg: "15rem", xl: "16rem" },
            }}
          />
          <Divider orientation="horizontal" flexItem />
          <Box sx={{ width: "80%", paddingX: 1, position: "sticky", top: 0 }}>
            {/* <SubEventHeader onGalleryComponent={galleryComponent} /> */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingX: 1,
                paddingTop: 1,
                paddingBottom: 1,
                position: "relative",
                left: { sm: "15rem", lg: "14rem", xl: "16rem" },
              }}
            >
              <Typography variant="h2" sx={{textTransform: "capitalize"}}>
                {eventName ? eventName : "Loading..."}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  mt: 1,
                }}
              >
                <Button
                  onClick={() => handlePublish()}
                  sx={{ paddingX: eventPublishing ? 5 : 7 }}
                  variant="contained"
                  color="primary"
                  disabled={eventPublishing}
                >
                  {eventPublishing ? (
                    <Stack direction="row" alignItems="center" gap={0.5}>
                      <CircularProgress
                        sx={{
                          height: "15px !important",
                          width: "15px !important",
                        }}
                      />
                      <Typography>{publishStatus === "completed" ? "Republishing" : "Publishing"}</Typography>
                    </Stack>
                  ) : (
                    publishStatus === "completed" ? "Republish" : "Publish"
                  )}
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    paddingX: 5.5,
                    color: "rgba(0, 0, 0, 0.60)",
                    border: "1.5px solid rgba(0, 0, 0, 0.60) !important",
                    paddingY: "5px",
                    "&:hover": {
                      backgroundColor: "#fbf8f8",
                      border: "1.5px solid black !important",
                      color: "black",
                    },
                  }}
                  onClick={() =>
                    router.push(
                      `/events/${maineventid}/${subeventid}/guestList`
                    )
                  }
                >
                  Invitees List
                </Button>
              </Box>
            </Box>

            {/* Pages */}

            <Box
              sx={{
                minHeight: "calc(100vh - 170px)",
                position: "relative",
                left: { sm: "15rem", lg: "14rem", xl: "16rem" },
              }}
            >
              {children}
            </Box>
          </Box>
        </Box>
      </Box>
      <ToastContainer />
    </MainWrapper>
  );
}
