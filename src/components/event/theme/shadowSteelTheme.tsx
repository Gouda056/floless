import { Box, Button, Stack } from "@mui/material";
import Header from "./header";
import { FormikProvider, useFormik } from "formik";
import Body from "./body";
import Tags from "./tags";
import ShadowSteelBanner from "./shadowSteelBanner";
import { shadowSteel } from "./data";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShadowSteelBannerField from "./shadowSteelBannerField";

interface props {
  eventId: string;
  themeId: string;
  savedThemeValues: any;
  onDataSaved: (data: boolean) => void;
  imageUrls?: any;
  previewImageUrls: any;
  loader: boolean;
}

export default function ShadowSteelTheme({
  eventId,
  themeId,
  savedThemeValues,
  onDataSaved,
  imageUrls,
  previewImageUrls,
  loader
}: props) {
  const [videoTheme, setVideoTheme] = useState(
    savedThemeValues ? savedThemeValues.video.name : "Auto Scroll"
  );
  const [videoThemeSlug, setVideoThemeSlug] = useState(
    savedThemeValues ? savedThemeValues.video.slug : "auto-scroll"
  );
  const [reelsTheme, setReelsTheme] = useState(
    savedThemeValues ? savedThemeValues.reels.name : "Auto scroll Horizontally"
  );
  const [reelsThemeSlug, setReelsThemeSlug] = useState(
    savedThemeValues ? savedThemeValues.reels.slug : "auto-scroll-horizontally"
  );
  const [imageUploaded, setImageUploaded] = useState("");
  const [initialValue, setInitialValue] = useState(savedThemeValues);
  const [clearImages, setClearImages] = useState(false);
  const [customise, setCustomise] = useState(false);
  const [loading, setLoading] = useState(false);
  const BASEURL = process.env.NEXT_PUBLIC_URL;

  const onImageUploaded = (files: any) => {
    files.append("theme", JSON.stringify(formik?.values));
    files.append("event_id", eventId);
    axios
    .post(`${BASEURL}/update-theme/${themeId}/`, files)
    .then((response) => {
    })
    .catch((error) => {
      // console.log(error);
    })
    .finally(() => {
      onDataSaved(true);
    });
    setImageUploaded(files);
  };

  let data = new FormData();
  const formik = useFormik({
    initialValues: shadowSteel,
    onSubmit: (values) => {
      data.append("theme", JSON.stringify(formik.values))
      data.append("event_id", eventId)
      formik.setFieldValue("values.video.name", videoTheme);
      formik.setFieldValue("values.video.slug", videoThemeSlug);
      formik.setFieldValue("vvalues.reels.name", reelsTheme);
      formik.setFieldValue("values.reels.slug", reelsThemeSlug);
      setLoading(true);
      axios
        .post(`${BASEURL}/update-theme/${themeId}/`, data)
        .then((response) => {
          if (response.status === 200) {
            toast.success("Theme saved successfully");
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
          onDataSaved(true);
        });
    },
  });

  // To check if the form is dirty
  const isFormDirty = formik.dirty;

  // to check if the initial value in data.ts and saved theme value is same else enable the save button
  const handleResetTheme = () => {
    formik.resetForm();
    setInitialValue(shadowSteel);
    setClearImages(true);
    setTimeout(() => {
      setClearImages(false);
    }, 1000);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box>
        <Box>
          <FormikProvider value={formik}>
            <ShadowSteelBannerField
              imageUploaded={onImageUploaded}
              savedThemeValues={initialValue}
              clearImages={clearImages}
              imageurls={previewImageUrls}
              loading={loading}
            />
          </FormikProvider>
          {/* <Button variant="contained" color="primary" onClick={() => setCustomise(true)}>Customise</Button> */}
        </Box>

        {customise && (
          <Box>
            <FormikProvider value={formik}>
              <Header
                savedThemeValues={initialValue}
              />
            </FormikProvider>
            {/* Body */}
            <FormikProvider value={formik}>
              <Body
                savedThemeValues={initialValue}
              />
            </FormikProvider>
            {/* Tags */}
            <FormikProvider value={formik}>
              <Tags
                savedThemeValues={initialValue}
              />
            </FormikProvider>
            <FormikProvider value={formik}>
              <ShadowSteelBanner
                imageUploaded={onImageUploaded}
                savedThemeValues={initialValue}
                clearImages={clearImages}
              />
            </FormikProvider>
          </Box>
        )}
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={1}
          sx={{ marginY: 2 }}
        >
          <Button
            variant="outlined"
            color="success"
            onClick={() => setCustomise(!customise)}
            sx={{ paddingX: customise ? 5 : 2 }}
          >
            {customise ? "Hide" : "Customise"}
          </Button>
          <Button
            disabled={loading || imageUrls?.length === 0}
            type="submit"
            variant="contained"
            color="primary"
            sx={{ paddingX: 5 }}
          >
            {loading ? "Saving..." : "Save"}
          </Button>
          <Button
            onClick={() => handleResetTheme()}
            type="button"
            variant="contained"
            color="warning"
            sx={{ paddingX: 5 }}
          >
            Reset
          </Button>
        </Stack>
      </Box>
      <ToastContainer />
    </form>
  );
}
