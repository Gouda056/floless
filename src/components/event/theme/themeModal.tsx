// @ts-nocheck
import { useEffect, useState, useRef } from "react";
import { themesList, videoThemeList, reelsThemeList } from "../data";
import {
  Box,
  Button,
  Divider,
  MenuItem,
  Dialog,
  Tabs,
  Tab,
  Tooltip,
  Alert,
  Stack,
  Grid,
} from "@mui/material";
import "react-color-palette/css";
import { useFormik } from "formik";
import CustomFormLabel from "../../forms/theme-elements/customFormLabel";
import CustomSelect from "../../forms/theme-elements/customSelect";
import BlankCard from "../../shared/BlankCard";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { setInitialValues } from "./utils/setInitailValues";
import axios from "axios";
import BlueHorizonTheme from "./blueHorizonTheme";
import ConstrastSplitTheme from "./constrastSplitTheme";
import DesertDelightTheme from "./desertDelightTheme";
import ShadowSteelTheme from "./shadowSteelTheme";
import SubtleBlendTheme from "./subtleBlendTheme";
import { useRouter } from "next/router";
import Lottie from "lottie-react";
import animationData from "../../../../src/assets/theme-loader.json";
import { useSession } from "next-auth/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface props {
  open: boolean;
  handleClose: () => void;
  imageCrudOperation: boolean;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function ThemeModal({
  open,
  handleClose,
  imageCrudOperation,
}: props) {
  const [value, setValue] = useState(0);
  const [type, setType] = useState("Select preferred theme");
  const [selectedValue, setSelectedValue] = useState("images");
  const [selectedTheme, setSelectedTheme] = useState(1);
  const [slectedVideoTheme, setSelectedVideoTheme] = useState("video-preview");
  const [slectedReelTheme, setSelectedReelTheme] = useState(
    "auto-scroll-horizontally"
  );
  const [eventCode, setEventCode] = useState("");
  const router = useRouter();
  const { maineventid: eventid } = router.query;
  const [themes, setThemes] = useState([]);
  const [selectedThemeSavedValue, setSelectedThemeSavedValue] = useState(null);
  const [galleryDataLength, setGalleryDataLength] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [userId, setUserId] = useState("");
  const [roleId, setRoleId] = useState("");
  const { data: session } = useSession();
  const [previewImageUrls, setPreviewImageUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [previewDisable, setPreviewDisable] = useState(true);
  const BASEURL = process.env.NEXT_PUBLIC_URL;
  const handleChangeThemeType = (event: any) => {
    setSelectedValue(event.target.value);
    setType(event.target.value);
  };
  const [onSaved, setOnSaved] = useState(false);
  const [canUserSelectTheme, setCanUserSelectTheme] = useState(true);
  const canUserSelectThemeRef = useRef(canUserSelectTheme);
  const styles = `
  .MuiTabs-indicator {
    display: none;
  }
`;
  const formik = useFormik({
    initialValues: setInitialValues(selectedTheme),
  });

  // Fetch session
  useEffect(() => {
    if (session) {
      setUserId(session?.userdetails?.id);
      setRoleId(session?.userdetails?.role_id);
    }
  }, [session]);

  // Fetching all themes
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASEURL}/all-themes`)
      .then((response) => {
        setThemes(response?.data?.data);
      })
      .catch((error) => {
        // console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Fetching data of individual theme based on theme is changed
  useEffect(() => {
    setLoading(true);
    if (selectedTheme && eventid !== undefined) {
      axios
        .get(`${BASEURL}/event-theme`, {
          params: {
            theme_id: selectedTheme,
            event_id: eventid,
          },
        })
        .then((response) => {
          setPreviewImageUrls(response?.data?.data?.urls);
          const themeSettings = response?.data?.data?.theme_settings;
          setImageUrls(response?.data?.data?.urls);
          if (themeSettings) {
            const themeSettingsObject = JSON.parse(themeSettings);
            setSelectedThemeSavedValue(themeSettingsObject);
            setSelectedVideoTheme(themeSettingsObject.video.slug);
            setSelectedReelTheme(themeSettingsObject.reels.slug);
          }
        })
        .catch((error) => {
          // console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [selectedTheme, eventid, onSaved]);

  const handleEventCode = () => {
    if (eventid !== undefined) {
      setLoading(true);
      axios
        .get(`${BASEURL}/events/${eventid}`)
        .then((response) => {
          setEventCode(response?.data?.data?.password);
        })
        .catch((error) => {
          // console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    handleEventCode();
  }, []);

  // Handler for theme type eg: photos videos or reels
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // To check teh uploaded video reels and image length

  const handleFetchData = () => {
    setLoading(true);
    setPreviewDisable(true);
    // event-stats
    axios
      .get(`${BASEURL}/event-stats/${eventid}`)
      .then((response) => {
        if (value === 0 && response?.data?.images_count < 9) {
          setPreviewDisable(true);
        } else if (value === 1 && response?.data?.videos_count < 9) {
          setPreviewDisable(true);
        } else if (value === 2 && response?.data?.reels_count < 9) {
          setPreviewDisable(true);
        } else {
          setPreviewDisable(false);
        }
      })
      .catch((error) => {
        // console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    handleFetchData();
  }, [value]);

  // Fetch gallery count each time crud functionality triggered
  useEffect(() => {
    if (imageCrudOperation) handleFetchData();
  }, [imageCrudOperation]);

  // save data based on value saved from the video and reels
  const handleSave = () => {
    axios
      .post(`${BASEURL}/update-theme/${selectedTheme}`, {
        theme: JSON.stringify(selectedThemeSavedValue),
        event_id: eventid,
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Theme saved successfully");
        }
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  // On confirm data saved
  const onDataSaved = (value: boolean) => {
    if (value === true) {
      axios
        .get(`${BASEURL}/event-theme`, {
          params: {
            theme_id: selectedTheme,
            event_id: eventid,
          },
        })
        .then((response) => {
          const themeSettings = response?.data?.data?.theme_settings;
          setPreviewImageUrls(response?.data?.data?.urls);
          if (themeSettings) {
            const themeSettingsObject = JSON.parse(themeSettings);
            setSelectedThemeSavedValue(themeSettingsObject);
            setSelectedVideoTheme(themeSettingsObject.video.slug);
            setSelectedReelTheme(themeSettingsObject.reels.slug);
          }
        })
        .catch((error) => {
          // console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box>{children}</Box>}
      </div>
    );
  }

  const handleThemeChange = (theme: any) => {
    setSelectedTheme(theme.target.value);
  };

  //Video theme change
  const handleChangeVideoTheme = (theme: any) => {
    setSelectedVideoTheme(theme.target.value);
  };

  // Reel theme change
  const handleChangeReelTheme = (theme: any) => {
    setSelectedReelTheme(theme.target.value);
  };

  useEffect(() => {
    formik.setValues(setInitialValues(selectedTheme));
  }, [selectedTheme]);

  // Handler for submitting preview
  const handleSubmitPreview = () => {
    if (value === 0) {
      window.open(
        `https://floless-guest.vercel.app/home-preview?token=${eventCode}`,
        "_blank"
      );
    } else if (value === 1) {
      window.open(
        `https://floless-guest.vercel.app/video-preview?token=${eventCode}`,
        "_blank"
      );
    } else if (value === 2) {
      window.open(
        `https://floless-guest.vercel.app/reels-preview?token=${eventCode}`,
        "_blank"
      );
    }
  };

  // Set video name and slug to save the theme
  useEffect(() => {
    if (selectedThemeSavedValue && selectedThemeSavedValue.video) {
      selectedThemeSavedValue.video.slug = slectedVideoTheme;
      selectedThemeSavedValue.video.name = slectedVideoTheme.replaceAll(
        "-",
        " "
      );
    }
  }, [slectedVideoTheme]);

  // Set reels name and slug to save the theme
  useEffect(() => {
    if (selectedThemeSavedValue && selectedThemeSavedValue.reel) {
      selectedThemeSavedValue.reeel.slug = slectedReelTheme;
      selectedThemeSavedValue.reel.name = slectedReelTheme.replaceAll("-", " ");
    }
  }, [slectedReelTheme]);

  return (
    <Dialog open={open} onClose={() => true} fullWidth maxWidth="md">
      <BlankCard>
        <Box sx={{ paddingX: 2 }}>
          {/* <form onSubmit={formik.handleSubmit}> */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <p className="title-theme">Theme settings</p>
              <p className="sub-title-theme">
                Fine-tune the theme settings to achieve a polished and
                personalized appearance.
              </p>
            </Box>
            <Box
              sx={{
                textAlign: "center",
                marginBottom: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <Button
                disabled={previewDisable}
                onClick={() => handleSubmitPreview()}
                type="button"
                variant="contained"
                color="secondary"
              >
                Preview
              </Button>
              <Button
                type="button"
                variant="contained"
                color="error"
                onClick={() => handleClose()}
              >
                Cancel
              </Button>
            </Box>
          </Box>
          <Divider></Divider>
          <SimpleBar style={{ maxHeight: 550 }}>
            {loading ? (
              <Box
                sx={{
                  width: "100%",
                  height: "20rem",
                  alignItems: "center",
                  justifyContent: "center",
                  marginY: "auto",
                }}
              >
                <Lottie
                  style={{ height: 250 }}
                  animationData={animationData}
                ></Lottie>
              </Box>
            ) : (
              <Box sx={{ paddingX: 2 }}>
                <Box sx={{ maxWidth: { xs: 320, sm: 480 }, marginTop: 2 }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    scrollButtons="auto"
                    aria-label="basic tabs example"
                  >
                    <Tab
                      sx={{
                        height: "2rem",
                        backgroundColor: "white",
                        color: "rgba(0, 0, 0, 0.60)",
                        borderRadius: "15px",
                        fontWeight: 600,
                        padding: 0,
                        "&.Mui-selected": {
                          backgroundColor: "#ecebeb",
                          color: "black",
                        },
                        "&.MuiTab-root": {
                          minHeight: "10px",
                        },
                        "&:hover": {
                          backgroundColor: "lightgray",
                        },
                      }}
                      iconPosition="start"
                      // onClick={() => setMediaToRender("photos")}
                      // icon={<IconUserCircle size="22" />}
                      label="Photos"
                      {...a11yProps(0)}
                    />
                    <Tab
                      sx={{
                        height: "2rem",
                        backgroundColor: "white",
                        color: "rgba(0, 0, 0, 0.60)",
                        fontWeight: 600,
                        borderRadius: "15px",
                        padding: 0,
                        "&.Mui-selected": {
                          backgroundColor: "#ecebeb",
                          color: "black",
                        },
                        "&.MuiTab-root": {
                          minHeight: "10px",
                        },
                        "&:hover": {
                          backgroundColor: "lightgray",
                        },
                      }}
                      iconPosition="start"
                      // onClick={() => setMediaToRender("videos")}
                      // icon={<IconBuilding size="22" />}
                      label="Videos"
                      {...a11yProps(1)}
                    />
                    <Tab
                      sx={{
                        height: "2rem",
                        backgroundColor: "white",
                        color: "rgba(0, 0, 0, 0.60)",
                        fontWeight: 600,
                        borderRadius: "15px",
                        padding: 0,
                        "&.Mui-selected": {
                          backgroundColor: "#ecebeb",
                          color: "black",
                        },
                        "&.MuiTab-root": {
                          minHeight: "10px",
                        },
                        "&:hover": {
                          backgroundColor: "lightgray",
                        },
                      }}
                      iconPosition="start"
                      // onClick={() => setMediaToRender("reels")}
                      // icon={<IconArticle size="22" />}
                      label="Reels"
                      {...a11yProps(2)}
                    />
                    <style>{styles}</style>
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  {previewDisable ? (
                    <Alert severity="info">
                      Please ensure a minimum of 9 images are uploaded to the
                      image gallery to preview theme.
                    </Alert>
                  ) : (
                    ""
                  )}
                  <Grid container spacing={1} my={4} ml={1}>
                    <Grid item xs={6}>
                      <Box>
                        <CustomFormLabel htmlFor="theme">
                          Select Theme*
                        </CustomFormLabel>
                        <CustomSelect
                          id="theme"
                          name="theme"
                          value={selectedTheme}
                          onChange={handleThemeChange}
                          customWidth={"60%"}
                          variant="outlined"
                        >
                          {themes?.map((theme, i) => (
                            <MenuItem key={i} value={theme.id}>
                              {theme.name}
                            </MenuItem>
                          ))}
                        </CustomSelect>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      {selectedTheme === 1 && value === 0 ? (
                        <img
                          src="/images/theme/blue-horizon.png"
                          alt="theme"
                          width={350}
                          height={200}
                        />
                      ) : selectedTheme === 2 && value === 0 ? (
                        <img
                          src="/images/theme/contrast-split.png"
                          alt="theme"
                          width={350}
                          height={200}
                        />
                      ) : selectedTheme === 3 && value === 0 ? (
                        <img
                          src="/images/theme/desert-delight.png"
                          alt="theme"
                          width={350}
                          height={200}
                        />
                      ) : selectedTheme === 4 && value === 0 ? (
                        <img
                          src="/images/theme/shadow-steel.png"
                          alt="theme"
                          width={350}
                          height={200}
                        />
                      ) : selectedTheme === 5 && value === 0 ? (
                        <img
                          src="/images/theme/subtle-blend.png"
                          alt="theme"
                          width={350}
                          height={200}
                        />
                      ) : null}
                    </Grid>
                  </Grid>

                  {selectedTheme !== undefined && (
                    <Box>
                      <Box>
                        {selectedTheme === 1 && (
                          <BlueHorizonTheme
                            eventId={eventid}
                            themeId={selectedTheme}
                            savedThemeValues={selectedThemeSavedValue}
                            onDataSaved={onDataSaved}
                            imageUrls={imageUrls}
                            previewImageUrls={previewImageUrls}
                            loader={loading}
                          />
                        )}
                        {selectedTheme === 2 && (
                          <ConstrastSplitTheme
                            eventId={eventid}
                            themeId={selectedTheme}
                            savedThemeValues={selectedThemeSavedValue}
                            onDataSaved={onDataSaved}
                            imageUrls={imageUrls}
                            previewImageUrls={previewImageUrls}
                            loader={loading}
                          />
                        )}
                        {selectedTheme === 3 && (
                          <DesertDelightTheme
                            eventId={eventid}
                            themeId={selectedTheme}
                            savedThemeValues={selectedThemeSavedValue}
                            onDataSaved={onDataSaved}
                            imageUrls={imageUrls}
                            previewImageUrls={previewImageUrls}
                            loader={loading}
                          />
                        )}
                        {selectedTheme === 4 && (
                          <ShadowSteelTheme
                            eventId={eventid}
                            themeId={selectedTheme}
                            savedThemeValues={selectedThemeSavedValue}
                            onDataSaved={onDataSaved}
                            imageUrls={imageUrls}
                            previewImageUrls={previewImageUrls}
                            loader={loading}
                            imageUrls={imageUrls}
                            previewImageUrls={previewImageUrls}
                            loader={loading}
                          />
                        )}
                        {selectedTheme === 5 && (
                          <SubtleBlendTheme
                            eventId={eventid}
                            themeId={selectedTheme}
                            savedThemeValues={selectedThemeSavedValue}
                            onDataSaved={onDataSaved}
                            imageUrls={imageUrls}
                            previewImageUrls={previewImageUrls}
                            loader={loading}
                          />
                        )}
                      </Box>
                    </Box>
                  )}
                </TabPanel>
                {/* videos tab panel */}
                <TabPanel value={value} index={1}>
                  {previewDisable ? (
                    <Alert severity="info">
                      Please ensure a minimum of 9 videos are uploaded to the
                      video gallery to preview theme.
                    </Alert>
                  ) : (
                    ""
                  )}
                  <Grid container spacing={1} my={4} ml={1}>
                    <Grid item xs={6}>
                      <CustomFormLabel htmlFor="theme">
                        Select Theme*
                      </CustomFormLabel>
                      <CustomSelect
                        id="theme"
                        name="theme"
                        value={slectedVideoTheme}
                        onChange={handleChangeVideoTheme}
                        customWidth={"60%"}
                        variant="outlined"
                      >
                        {canUserSelectThemeRef.current ? (
                          videoThemeList.map((theme, i) => (
                            <MenuItem key={i} value={theme.value}>
                              {theme.label}
                            </MenuItem>
                          ))
                        ) : (
                          <MenuItem value="video-preview">
                            Video Preview
                          </MenuItem>
                        )}
                      </CustomSelect>
                    </Grid>
                    {/* video preview */}
                    <Grid item xs={6}>
                      {slectedVideoTheme === "background-preview" &&
                      value === 1 ? (
                        <img
                          src="/images/theme/background-preview.png"
                          alt="theme"
                          width={350}
                          height={200}
                        />
                      ) : slectedVideoTheme === "video-preview" &&
                        value === 1 ? (
                        <img
                          src="/images/theme/video-preview.png"
                          alt="theme"
                          width={350}
                          height={200}
                        />
                      ) : slectedVideoTheme === "timed-card-opening" &&
                        value === 1 ? (
                        <img
                          src="/images/theme/timed-card.png"
                          alt="theme"
                          width={350}
                          height={200}
                        />
                      ) : slectedVideoTheme === "3d-carousel" && value === 1 ? (
                        <img
                          src="/images/theme/3d-carousel.png"
                          alt="theme"
                          width={350}
                          height={200}
                        />
                      ) : slectedVideoTheme === "auto-scrolling" &&
                        value === 1 ? (
                        <img
                          src="/images/theme/auto-scroll.png"
                          alt="theme"
                          width={350}
                          height={200}
                        />
                      ) : null}
                    </Grid>
                  </Grid>
                  <Box marginY={2} sx={{ height: "17rem" }}>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      gap={1}
                      sx={{ marginTop: 4 }}
                    >
                      <Button
                        onClick={() => handleSave()}
                        type="button"
                        variant="contained"
                        color="primary"
                      >
                        Save
                      </Button>
                      <Button
                        onClick={() => handleResetTheme()}
                        type="button"
                        variant="contained"
                        color="warning"
                      >
                        Reset
                      </Button>
                    </Stack>
                    <ToastContainer />
                  </Box>
                </TabPanel>
                {/* reels tab panel */}
                <TabPanel value={value} index={2}>
                  {previewDisable ? (
                    <Alert severity="info">
                      Please ensure a minimum of 9 reels are uploaded to the
                      reels gallery to preview theme.
                    </Alert>
                  ) : (
                    ""
                  )}
                  <Box marginY={2} sx={{ height: "17rem" }}>
                    <Grid container>
                      <Grid item xs={6}>
                        <CustomFormLabel htmlFor="theme">
                          Select Theme*
                        </CustomFormLabel>
                        <CustomSelect
                          id="theme"
                          name="theme"
                          value={slectedReelTheme}
                          onChange={handleChangeReelTheme}
                          customWidth={"40%"}
                          variant="outlined"
                        >
                          {reelsThemeList.map((theme, i) => (
                            <MenuItem key={i} value={theme.value}>
                              {theme.label}
                            </MenuItem>
                          ))}
                        </CustomSelect>
                      </Grid>
                      <Grid item xs={6}>
                        {slectedReelTheme === "auto-scroll-horizontally" &&
                        value === 2 ? (
                          <img
                            src="/images/theme/auto-scroll-horizontally.png"
                            alt="theme"
                            width={350}
                            height={200}
                          />
                        ) : null}
                      </Grid>
                    </Grid>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      gap={1}
                      sx={{ marginTop: 4 }}
                    >
                      <Button
                        onClick={() => handleSave()}
                        type="button"
                        variant="contained"
                        color="primary"
                      >
                        Save
                      </Button>
                      <Button
                        onClick={() => handleResetTheme()}
                        type="button"
                        variant="contained"
                        color="warning"
                      >
                        Reset
                      </Button>
                    </Stack>
                    <ToastContainer />
                  </Box>
                </TabPanel>
              </Box>
            )}
          </SimpleBar>
          {/* </form> */}
        </Box>
      </BlankCard>
    </Dialog>
  );
}
