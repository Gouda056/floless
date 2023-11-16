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

export default function DesertDelightBannerField({
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
      "banner.left_banner.sub_banner.img_banner.title.text",
      savedThemeValues?.banner?.left_banner?.sub_banner?.img_banner?.title.text
    );
    formik.setFieldValue(
      "banner.left_banner.sub_banner.img_banner.main_title.text",
      savedThemeValues?.banner?.left_banner?.sub_banner?.img_banner?.main_title
        .text
    );
    formik.setFieldValue(
      "banner.center_banner.text",
      savedThemeValues?.banner?.center_banner?.text
    );
    formik.setFieldValue(
      "banner.right_banner.sub_banner.title.text",
      savedThemeValues?.banner?.right_banner?.sub_banner?.title?.text
    );
    formik.setFieldValue(
      "banner.right_banner.sub_banner.description.text",
      savedThemeValues?.banner?.right_banner?.sub_banner?.img_banner
        ?.description?.text
    );
    formik.setFieldValue(
      "banner.right_banner.sub_banner.description.text",
      savedThemeValues?.banner?.right_banner?.sub_banner?.description?.text
    );
    formik.setFieldValue(
      "banner.right_banner.sub_banner.bottom_text.text",
      savedThemeValues?.banner?.right_banner?.sub_banner?.bottom_text?.text
    );
  }, [savedThemeValues]);

  return (
    <Grid container>
      {/* Left sub banner title */}
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
            htmlFor="banner.left_banner.sub_banner.img_banner.title.text"
            sx={{
              fontSize: "12px",
              fontWeight: "700",
              whiteSpace: "nowrap",
            }}
          >
            Left sub banner title:
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
              name="banner.left_banner.sub_banner.img_banner.title.text"
              id="banner.left_banner.sub_banner.img_banner.title.text"
              value={
                formik.values?.banner?.left_banner?.sub_banner?.img_banner
                  ?.title?.text
              }
              onChange={formik.handleChange}
              sx={{ width: "60%" }}
            >
              {
                formik.values?.banner?.left_banner?.sub_banner?.img_banner
                  ?.title?.text
              }
            </CustomOutlinedInput>
          </Box>
        </Box>
      </Grid>

      {/* Left sub banner main title */}
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
            htmlFor="banner.left_banner.sub_banner.img_banner.main_title.text"
            sx={{
              fontSize: "12px",
              fontWeight: "700",
              whiteSpace: "nowrap",
            }}
          >
            Left sub banner main title:
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
              name="banner.left_banner.sub_banner.img_banner.main_title.text"
              id="banner.left_banner.sub_banner.img_banner.main_title.text"
              value={
                formik.values?.banner?.left_banner?.sub_banner?.img_banner
                  ?.main_title?.text
              }
              onChange={formik.handleChange}
              sx={{ width: "60%" }}
            >
              {
                formik.values?.banner?.left_banner?.sub_banner?.img_banner
                  ?.main_title?.text
              }
            </CustomOutlinedInput>
          </Box>
        </Box>
      </Grid>

      {/* Center banner section text */}
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
            htmlFor="banner.center_banner.text"
            sx={{
              fontSize: "12px",
              fontWeight: "700",
              whiteSpace: "nowrap",
            }}
          >
            Center banner title:
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
              name="banner.center_banner.text"
              id="banner.center_banner.text"
              value={formik.values?.banner?.center_banner?.text}
              onChange={formik.handleChange}
              sx={{ width: "60%" }}
            >
              {formik.values?.banner?.center_banner?.text}
            </CustomOutlinedInput>
          </Box>
        </Box>
      </Grid>

      {/* Right sub banner title */}
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
            htmlFor="banner.right_banner.sub_banner.title.text"
            sx={{
              fontSize: "12px",
              fontWeight: "700",
              whiteSpace: "nowrap",
            }}
          >
            Center banner title :
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
              name="banner.right_banner.sub_banner.title.text"
              id="banner.right_banner.sub_banner.title.text"
              value={
                formik.values?.banner?.right_banner?.sub_banner?.title?.text
              }
              onChange={formik.handleChange}
              sx={{ width: "60%" }}
            >
              {formik.values?.banner?.right_banner?.sub_banner?.title?.text}
            </CustomOutlinedInput>
          </Box>
        </Box>
      </Grid>

      {/* Right sub banner description */}
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
            htmlFor="banner.right_banner.sub_banner.description.text"
            sx={{
              fontSize: "12px",
              fontWeight: "700",
              whiteSpace: "nowrap",
            }}
          >
            Right sub banner description:
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
              name="banner.right_banner.sub_banner.description.text"
              id="banner.right_banner.sub_banner.description.text"
              value={
                formik.values?.banner?.right_banner?.sub_banner?.description
                  ?.text
              }
              onChange={formik.handleChange}
              customHeight="70px"
              sx={{ width: "90%" }}
            ></CustomTextarea>
          </Box>
        </Box>
      </Grid>

      {/* Right sub banner bottom text */}
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
            htmlFor="banner.right_banner.sub_banner.bottom_text.text"
            sx={{
              fontSize: "12px",
              fontWeight: "700",
              whiteSpace: "nowrap",
            }}
          >
            Right sub banner bottom text:
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
              name="banner.right_banner.sub_banner.bottom_text.text"
              id="banner.right_banner.sub_banner.bottom_text.text"
              value={
                formik.values?.banner?.right_banner?.sub_banner?.bottom_text
                  ?.text
              }
              onChange={formik.handleChange}
              sx={{ width: "60%" }}
            >
              {
                formik.values?.banner?.right_banner?.sub_banner?.bottom_text
                  ?.text
              }
            </CustomOutlinedInput>
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
              // marginTop: 2.5,
            }}
          >
            <ThemeFileUpload
              onFileUpload={handleImageUpload}
              clearImages={clearImages}
              isMultiple={false}
              formik={formik}
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
