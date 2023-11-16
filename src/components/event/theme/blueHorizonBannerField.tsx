import { Box, Grid, Typography } from "@mui/material";
import CustomFormLabel from "../../forms/theme-elements/customFormLabel";
import CustomOutlinedInput from "../../forms/theme-elements/customOutlinedInput";
import { FormikValues, useFormikContext } from "formik";
import ThemeFileUpload from "../themeFileUpload";
import { useEffect } from "react";
import Image from "next/image";
import CustomTextarea from "../../forms/theme-elements/customTextArea";

interface props {
  imageUploaded: (files: any) => void;
  savedThemeValues: any;
  clearImages: boolean;
  imageurls: string[];
  loading: boolean;
}

export default function BlueHorizonBannerFieldBanner({
  imageUploaded,
  clearImages,
  savedThemeValues,
  imageurls,
  loading,
}: props) {
  const formik: FormikValues = useFormikContext();

  //   Hnadler for main banner images
  const handleImageUpload = (files: any) => {
    imageUploaded(files);
  };
  useEffect(() => {
    formik.setFieldValue(
      "banner.title.text",
      savedThemeValues?.banner?.title?.text
    );
    formik.setFieldValue(
      "banner.description.text",
      savedThemeValues?.banner?.description?.text
    );
  }, [savedThemeValues]);

  return (
    <Grid container>
      <Grid item xs={6}>
        <Box
          sx={{
            marginTop: 1,
            marginBottom: 3,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <CustomFormLabel
            htmlFor="banner.title.text"
            sx={{
              fontSize: "12px",
              fontWeight: "700",
              whiteSpace: "nowrap",
            }}
          >
            Banner title:
          </CustomFormLabel>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              // marginTop: 2.5,
            }}
          >
            <CustomOutlinedInput
              id="banner.title.text"
              name="banner.title.text"
              value={formik.values?.banner?.title?.text}
              onChange={formik.handleChange}
              sx={{ width: "60%" }}
            >
              {/* {formik.values?.banner?.title?.text}  */}
            </CustomOutlinedInput>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            marginTop: 1,
            marginBottom: 3,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <CustomFormLabel
            htmlFor="banner.description.text"
            sx={{
              fontSize: "12px",
              fontWeight: "700",
              whiteSpace: "nowrap",
            }}
          >
            Banner description:
          </CustomFormLabel>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              // marginTop: 2.5,
            }}
          >
            <CustomTextarea
              type="text"
              name="banner.description.text"
              id="banner.description.text"
              value={formik.values?.banner?.description?.text}
              onChange={formik.handleChange}
              customHeight="70px"
              sx={{ width: "90%" }}
            ></CustomTextarea>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            marginTop: 3,
            marginBottom: 3,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <CustomFormLabel
            htmlFor="banner.main_banner.slider.images[0].src"
            sx={{
              fontSize: "12px",
              fontWeight: "700",
              whiteSpace: "nowrap",
            }}
          >
            Select Slider image:
          </CustomFormLabel>
          <Box
            sx={{
              width: "50%",
              height: "10%",
            }}
          >
            <ThemeFileUpload
              onFileUpload={handleImageUpload}
              isMultiple={true}
              formik={formik}
              clearImages={clearImages}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6} sx={{ marginY: "auto" }}>
        <Box
          sx={{
            borderRadius: 0,
            overflowX: "auto",
            display: "flex",
            flexDirection: "row",
            gap: 1,
            marginY: "auto",
            maxWidth: "400px",
            maxHeight: "400px",
            marginTop: 5,
          }}
        >
          {imageurls?.length === 0
            ? null
            : imageurls?.map((image, index) => (
                <Image
                  key={index}
                  alt={"image is loading"}
                  src={image}
                  width={100}
                  height={100}
                  style={{ flex: "0 0 auto" }}
                />
              ))}
        </Box>
      </Grid>
    </Grid>
  );
}
