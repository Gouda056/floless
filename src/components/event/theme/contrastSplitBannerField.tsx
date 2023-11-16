import { Box, Grid, Typography } from "@mui/material";
import CustomFormLabel from "../../forms/theme-elements/customFormLabel";
import CustomOutlinedInput from "../../forms/theme-elements/customOutlinedInput";
import ThemeFileUpload from "../themeFileUpload";
import { FormikValues, useFormikContext } from "formik";
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

export default function ContrastSplitBannerField({
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

  // Set theme field value
  useEffect(() => {
    formik.setFieldValue(
      "banner.left_banner.above_section.title.text",
      savedThemeValues?.banner?.left_banner?.above_section?.title?.text
    );
    formik.setFieldValue(
      "banner.left_banner.above_section.sub_title.text",
      savedThemeValues?.banner?.left_banner?.above_section?.sub_title?.text
    );
    formik.setFieldValue(
      "banner.left_banner.below_section.title.text",
      savedThemeValues?.banner?.left_banner?.below_section?.title?.text
    );
    formik.setFieldValue(
      "banner.left_banner.below_section.description.text",
      savedThemeValues?.banner?.left_banner?.below_section?.description?.text
    );
  }, [savedThemeValues]);

  return (
    <Grid container>
      {/* Left Banner Above Section Title: */}
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
            htmlFor="banner.left_banner.above_section.title.text"
            sx={{
              fontSize: "12px",
              fontWeight: "700",
              whiteSpace: "nowrap",
            }}
          >
            Left Banner Above Section Title:
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
              name="banner.left_banner.above_section.title.text"
              id="banner.left_banner.above_section.title.text"
              value={
                formik.values?.banner?.left_banner?.above_section?.title?.text
              }
              onChange={formik.handleChange}
              sx={{ width: "60%" }}
            >
              {formik.values?.banner?.left_banner?.above_section?.title?.text}
            </CustomOutlinedInput>
          </Box>
        </Box>
      </Grid>

      {/* Left banner above section subtitle text */}
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
            htmlFor="banner.left_banner.above_section.sub_title.text"
            sx={{
              fontSize: "12px",
              fontWeight: "700",
              whiteSpace: "nowrap",
            }}
          >
            Left Banner above section subtitle text
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
              name="banner.left_banner.above_section.sub_title.text"
              id="banner.left_banner.above_section.sub_title.text"
              value={
                formik.values?.banner?.left_banner?.above_section?.sub_title
                  ?.text
              }
              onChange={formik.handleChange}
              sx={{ width: "60%" }}
            >
              {
                formik.values?.banner?.left_banner?.above_section?.sub_title
                  ?.text
              }
            </CustomOutlinedInput>
          </Box>
        </Box>
      </Grid>

      {/* Left banner below section title */}
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
            htmlFor="banner.left_banner.below_section.title.text"
            sx={{
              fontSize: "12px",
              fontWeight: "700",
              whiteSpace: "nowrap",
            }}
          >
            Left Banner Below Section Title:
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
              name="banner.left_banner.below_section.title.text"
              id="banner.left_banner.below_section.title.text"
              value={
                formik.values?.banner?.left_banner?.below_section?.title?.text
              }
              onChange={formik.handleChange}
              sx={{ width: "60%" }}
            >
              {formik.values?.banner?.left_banner?.below_section?.title?.text}
            </CustomOutlinedInput>
          </Box>
        </Box>
      </Grid>

      {/* Left banner below section description */}
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
            htmlFor="banner.left_banner.below_section.description.text"
            sx={{
              fontSize: "12px",
              fontWeight: "700",
              whiteSpace: "nowrap",
            }}
          >
            Left banner below section description
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
              name="banner.left_banner.below_section.description.text"
              id="banner.left_banner.below_section.description.text"
              value={
                formik.values?.banner?.left_banner?.below_section?.description
                  ?.text
              }
              onChange={formik.handleChange}
              customHeight="70px"
              sx={{ width: "90%" }}
            >
              {
                formik.values?.banner?.left_banner?.below_secton?.description
                  ?.text
              }
            </CustomTextarea>
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
            htmlFor="banner.right_banner.image"
            sx={{
              fontSize: "12px",
              fontWeight: "700",
              whiteSpace: "nowrap",
            }}
          >
            Select right banner image:
          </CustomFormLabel>
          <Box
            sx={{
              width: "50%",
              height: "10%",
              // marginTop: 2.5,
            }}
          >
            <ThemeFileUpload
              formik={formik}
              onFileUpload={handleImageUpload}
              isMultiple={false}
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
