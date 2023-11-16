import { Box, Divider, Grid, MenuItem, Typography } from "@mui/material";
import { FormikValues, useFormikContext } from "formik";
import CustomFormLabel from "../../forms/theme-elements/customFormLabel";
import CustomOutlinedInput from "../../forms/theme-elements/customOutlinedInput";
import ColorPalette from "../colorPalette";
import { useEffect, useState } from "react";
import { IconColorPicker } from "@tabler/icons-react";
import CustomSelect from "../../forms/theme-elements/customSelect";
import { fontFamilies, fontSizes } from "../data";
import ThemeFileUpload from "../themeFileUpload";

interface props {
  imageUploaded: (files: any) => void;
  clearImages: boolean;
  savedThemeValues: any;
}
export default function ContrastSplitBanner({
  imageUploaded,
  clearImages,
  savedThemeValues,
}: props) {
  const formik: FormikValues = useFormikContext();
  const [leftBannerAboveSectionTextColor, setLeftBannerAboveSectionTextColor] =
    useState("#dedede");
  const [
    leftBannerAboveSectionTextColorOpen,
    setLeftBannerAboveSectionTextColorOpen,
  ] = useState(false);
  const [leftBannerAboveSectionFontSize, setLeftBannerAboveSectionFontSize] =
    useState("1rem");
  const [
    leftBannerAboveSectionFontFamily,
    setLeftBannerAboveSectionFontFamily,
  ] = useState("pacifico");
  const [
    leftBannerAboveSectionSubtitleColor,
    setLeftBannerAboveSectionSubTitleColor,
  ] = useState("#dedede");
  const [
    leftBannerAboveSectionSubTitleColorOpen,
    setLeftBannerAboveSectionSubTitleColorOpen,
  ] = useState(false);
  const [
    leftBannerAboveSectionSubtitleFontSize,
    setLeftBannerAboveSectionSubtitleFontSize,
  ] = useState("1rem");
  const [
    leftBannerAboveSectionSubTitleFontFamily,
    setLeftBannerAboveSectionSubTitleFontFamily,
  ] = useState("pacifico");
  const [leftBannerBelowSectionTextColor, setLeftBannerBelowSectionTextColor] =
    useState("#dedede");
  const [
    leftBannerBelowSectionTextColorOpen,
    setLeftBannerBelowSectionTextColorOpen,
  ] = useState(false);
  const [leftBannerBelowSectionFontSize, setLeftBannerBelowSectionFontSize] =
    useState("1rem");
  const [
    leftBannerBelowSectionFontFamily,
    setLeftBannerBelowSectionFontFamily,
  ] = useState("pacifico");
  const [
    leftBannerBelowSectionDescriptionColor,
    setLeftBannerBelowSectionDescriptionColor,
  ] = useState("#dedede");
  const [
    leftBannerBelowSectionDescriptionColorOpen,
    setLeftBannerBelowSectionDescriptionColorOpen,
  ] = useState(false);
  const [
    leftBannerBelowSectionDescriptionFontSize,
    setLeftBannerBelowSectionDescriptionFontSize,
  ] = useState("1rem");
  const [
    leftBannerBelowSectionDescriptionFontFamily,
    setLeftBannerBelowSectionDescriptionFontFamily,
  ] = useState("pacifico");

  // Handler for banner above section text color
  const handleLeftBannerAboveSectionTextColorChange = (value: string) => {
    setLeftBannerAboveSectionTextColor(value);
    formik.setFieldValue(
      "banner.left_banner.above_section.title.style.color",
      value
    );
  };

  const handleLeftBannerAboveSectionTextColorClose = () => {
    setLeftBannerAboveSectionTextColorOpen(false);
  };

  // Handler for above section text font size
  const handleLeftBannerAboveSectionFontSizeChange = (value: string) => {
    setLeftBannerAboveSectionFontSize(value);
    formik.setFieldValue(
      "banner.left_banner.above_section.title.style.fontSize",
      value
    );
  };

  //   Handler for banner above section font family
  const handleLeftBannerAboveSectionFontFamilyChange = (value: string) => {
    setLeftBannerAboveSectionFontFamily(value);
    formik.setFieldValue(
      "banner.left_banner.above_section.title.style.fontFamily",
      value
    );
  };

  // Handler for banner above section sub title font color change
  const handleLeftBannerAboveSectionSubTitleColorChange = (value: string) => {
    setLeftBannerAboveSectionSubTitleColor(value);
    formik.setFieldValue(
      "banner.left_banner.above_section.sub_title.style.color",
      value
    );
  };

  // Handler for banner above section sub title font color close
  const handleLeftBannerAboveSectionSubTitleColorClose = () => {
    setLeftBannerAboveSectionSubTitleColorOpen(false);
  };

  // Handler for above section sub title font size
  const handleLeftBannerAboveSectionSubTitleFontSizeChange = (
    value: string
  ) => {
    setLeftBannerAboveSectionSubtitleFontSize(value);
    formik.setFieldValue(
      "banner.left_banner.above_section.sub_title.style.fontSize",
      value
    );
  };

  // Handler for above section sub title font family
  const handleLeftBannerAboveSectionSubTitleFontFamilyChange = (
    value: string
  ) => {
    setLeftBannerAboveSectionSubTitleFontFamily(value);
    formik.setFieldValue(
      "banner.left_banner.above_section.sub_title.style.fontFamily",
      value
    );
  };

  // Handler for banner below section text color
  const handleLeftBannerBelowSectionTextColorChange = (value: string) => {
    setLeftBannerBelowSectionTextColor(value);
    formik.setFieldValue(
      "banner.left_banner.below_section.title.style.color",
      value
    );
  };

  const handleLeftBannerBelowSectionTextColorClose = () => {
    setLeftBannerBelowSectionTextColorOpen(false);
  };

  // Handler for below section text font size
  const handleLeftBannerBelowSectionFontSizeChange = (value: string) => {
    setLeftBannerBelowSectionFontSize(value);
    formik.setFieldValue(
      "banner.left_banner.below_section.title.style.fontSize",
      value
    );
  };

  //   Handler for banner below section font family
  const handleLeftBannerBelowSectionFontFamilyChange = (value: string) => {
    setLeftBannerBelowSectionFontFamily(value);
    formik.setFieldValue(
      "banner.left_banner.below_section.title.style.fontFamily",
      value
    );
  };

  // Handler for banner below section description color
  const handleLeftBannerBelowSectionDescriptionColorChange = (
    value: string
  ) => {
    setLeftBannerBelowSectionDescriptionColor(value);
    formik.setFieldValue(
      "banner.left_banner.below_section.description.style.color",
      value
    );
  };

  const handleLeftBannerBelowSectionDescriptionColorClose = () => {
    setLeftBannerBelowSectionDescriptionColorOpen(false);
  };

  // Handler for below section description font size
  const handleLeftBannerBelowSectionDescriptionFontSizeChange = (
    value: string
  ) => {
    setLeftBannerBelowSectionDescriptionFontSize(value);
    formik.setFieldValue(
      "banner.left_banner.below_section.description.style.fontSize",
      value
    );
  };

  //   Handler for banner below section description font family
  const handleLeftBannerBelowSectionDescriptionFontFamilyChange = (
    value: string
  ) => {
    setLeftBannerBelowSectionDescriptionFontFamily(value);
    formik.setFieldValue(
      "banner.left_banner.below_section.description.style.fontFamily",
      value
    );
  };

  //   Hnadler for main banner images
  const handleImageUpload = (files: any) => {
    imageUploaded(files);
  };

  useEffect(() => {
    if (savedThemeValues) {
      formik.setFieldValue("banner.name", savedThemeValues?.banner?.name);
      formik.setFieldValue(
        "banner.left_banner.above_section.title.text",
        savedThemeValues?.banner?.left_banner?.above_section?.title?.text
      );
      formik.setFieldValue(
        "banner.left_banner.above_section.title.style.color",
        savedThemeValues?.banner?.left_banner?.above_section?.title?.style
          ?.color
      );
      formik.setFieldValue(
        "banner.left_banner.above_section.title.style.fontSize",
        savedThemeValues?.banner?.left_banner?.above_section?.title?.style
          ?.fontSize
      );
      formik.setFieldValue(
        "banner.left_banner.above_section.title.style.fontFamily",
        savedThemeValues?.banner?.left_banner?.above_section?.title?.style
          ?.fontFamily
      );
      formik.setFieldValue(
        "banner.left_banner.above_section.sub_title.text",
        savedThemeValues?.banner?.left_banner?.above_section?.sub_title?.text
      );
      formik.setFieldValue(
        "banner.left_banner.above_section.sub_title.style.color",
        savedThemeValues?.banner?.left_banner?.above_section?.sub_title?.style
          .color
      );
      formik.setFieldValue(
        "banner.left_banner.above_section.sub_title.style.fontSize",
        savedThemeValues?.banner?.left_banner?.above_section?.sub_title?.style
          .fontSize
      );
      formik.setFieldValue(
        "banner.left_banner.above_section.sub_title.style.fontFamily",
        savedThemeValues?.banner?.left_banner?.above_section?.sub_title?.style
          ?.fontFamily
      );
      formik.setFieldValue(
        "banner.left_banner.below_section.title.text",
        savedThemeValues?.banner?.left_banner?.below_section?.title?.text
      );
      formik.setFieldValue(
        "banner.left_banner.below_section.title.style.color",
        savedThemeValues?.banner?.left_banner?.below_section?.title?.style.color
      );
      formik.setFieldValue(
        "banner.left_banner.below_section.title.style.fontSize",
        savedThemeValues?.banner?.left_banner?.below_section?.title?.style
          .fontSize
      );
      formik.setFieldValue(
        "banner.left_banner.below_section.title.style.fontFamily",
        savedThemeValues?.banner?.left_banner?.below_section?.title?.style
          .fontFamily
      );
      formik.setFieldValue(
        "banner.left_banner.below_section.description.text",
        savedThemeValues?.banner?.left_banner?.below_section?.description?.text
      );
      formik.setFieldValue(
        "banner.left_banner.below_section.description.style.color",
        savedThemeValues?.banner?.left_banner?.below_section?.description?.style
          .color
      );
      formik.setFieldValue(
        "banner.left_banner.below_section.description.style.fontSize",
        savedThemeValues?.banner?.left_banner?.below_section?.description?.style
          .fontSize
      );
      formik.setFieldValue(
        "banner.left_banner.below_section.description.style.fontFamily",
        savedThemeValues?.banner?.left_banner?.below_section?.description?.style
          .fontFamily
      );
      setLeftBannerAboveSectionTextColor(
        savedThemeValues?.banner?.left_banner?.above_section?.title.style?.color
      );
      setLeftBannerAboveSectionFontSize(
        savedThemeValues?.banner?.left_banner?.above_section?.title.style
          ?.fontSize
      );
      setLeftBannerAboveSectionFontFamily(
        savedThemeValues?.banner?.left_banner?.above_section?.title.style
          ?.fontFamily
      );
      setLeftBannerAboveSectionSubTitleColor(
        savedThemeValues?.banner?.left_banner?.above_section?.sub_title.style
          ?.color
      );
      setLeftBannerAboveSectionSubtitleFontSize(
        savedThemeValues?.banner?.left_banner?.above_section?.sub_title.style
          ?.fontSize
      );
      setLeftBannerAboveSectionSubTitleFontFamily(
        savedThemeValues?.banner?.left_banner?.above_section?.sub_title.style
          ?.fontFamily
      );
      setLeftBannerBelowSectionTextColor(
        savedThemeValues?.banner?.left_banner?.below_section?.title?.style
          ?.color
      );
      setLeftBannerBelowSectionFontSize(
        savedThemeValues?.banner?.left_banner?.below_section?.title?.style
          ?.fontSize
      );
      setLeftBannerBelowSectionFontFamily(
        savedThemeValues?.banner?.left_banner?.below_section?.title?.style
          ?.fontFamily
      );
      setLeftBannerBelowSectionDescriptionColor(
        savedThemeValues?.banner?.left_banner?.below_section?.description?.style
          ?.color
      );
      setLeftBannerBelowSectionDescriptionFontSize(
        savedThemeValues?.banner?.left_banner?.below_section?.description?.style
          ?.fontSize
      );
      setLeftBannerBelowSectionDescriptionFontFamily(
        savedThemeValues?.banner?.left_banner?.below_section?.description?.style
          ?.fontFamily
      );
    }
  }, [savedThemeValues]);

  return (
    <Box sx={{ paddingX: 2 }}>
      <Typography variant="h4" sx={{ marginBottom: 1 }}>
        Banner
      </Typography>
      <Divider></Divider>
      <Grid container>
        {/* Left banner above section title color */}
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
              htmlFor="banner.left_banner.above_section.title.style.color"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select Left Banner Above Section Title Color:
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
                onClick={() => setLeftBannerAboveSectionTextColorOpen(true)}
                name="banner.left_banner.above_section.title.style.color"
                id="banner.left_banner.above_section.title.style.color"
                value={
                  formik.values?.banner?.left_banner?.above_section?.title
                    ?.style?.color
                }
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {leftBannerAboveSectionTextColor}
              </CustomOutlinedInput>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <Box
                  onClick={() => setLeftBannerAboveSectionTextColorOpen(true)}
                  sx={{
                    border: `1px solid #dedede`,
                    width: "60%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor:
                      formik.values?.banner?.left_banner?.above_section?.title
                        ?.style?.color,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() => setLeftBannerAboveSectionTextColorOpen(true)}
                  sx={{
                    border: `1px solid #dedede`,
                    width: "40%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderTopRightRadius: "7px",
                    borderBottomRightRadius: "7px",
                  }}
                >
                  <IconColorPicker height={18} />
                </Box>
              </Box>
            </Box>
            <ColorPalette
              open={leftBannerAboveSectionTextColorOpen}
              handleClose={handleLeftBannerAboveSectionTextColorClose}
              onColorSelect={handleLeftBannerAboveSectionTextColorChange}
            />
          </Box>
        </Grid>
        {/* Left banner above section title font size */}
        <Grid item xs={12}>
          <Box
            sx={{
              marginY: 3,
              display: "flex",
              flexDirection: "column",
              //   gap: 1,
            }}
          >
            <CustomFormLabel
              htmlFor="banner.left_banner.above_section.title.style.fontSize"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select banner above section title font size:
            </CustomFormLabel>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CustomSelect
                id="banner.left_banner.above_section.title.style.fontSize"
                name="banner.left_banner.above_section.title.style.fontSize"
                value={
                  formik.values.banner?.left_banner?.above_section?.title?.style
                    ?.fontSize
                }
                onChange={(e: any) =>
                  handleLeftBannerAboveSectionFontSizeChange(e.target.value)
                }
                customWidth={"30%"}
                variant="outlined"
              >
                <MenuItem value="">
                  <em>Choose font size</em>
                </MenuItem>
                {fontSizes.map((font, i) => (
                  <MenuItem key={i} value={font.value}>
                    {font.label}
                  </MenuItem>
                ))}
              </CustomSelect>
              <Box
                sx={{
                  backgroundColor: "#dedede",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "7px",
                  height: "8rem",
                  width: "70%",
                  paddingY: "5px",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: leftBannerAboveSectionFontSize,
                      paddingX: 1,
                    }}
                  >
                    Font size
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        {/* Left banner above section title font family */}
        <Grid item xs={12}>
          <Box
            sx={{
              marginY: 3,
              display: "flex",
              flexDirection: "column",
              //   gap: 1,
            }}
          >
            <CustomFormLabel
              htmlFor="banner.left_banner.above_section.title.style.fontFamily"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select Left Banner Above section title font family:
            </CustomFormLabel>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CustomSelect
                id="banner.left_banner.above_section.title.style.fontFamily"
                name="banner.left_banner.above_section.title.style.fontFamily"
                value={
                  formik.values.banner?.left_banner?.above_section?.title?.style
                    ?.fontFamily
                }
                onChange={(e: any) =>
                  handleLeftBannerAboveSectionFontFamilyChange(e.target.value)
                }
                customWidth={"30%"}
                variant="outlined"
              >
                <MenuItem value="">
                  <em>Choose font family</em>
                </MenuItem>
                {fontFamilies.map((font, i) => (
                  <MenuItem key={i} value={font.value}>
                    {font.label}
                  </MenuItem>
                ))}
              </CustomSelect>
              <Box
                sx={{
                  backgroundColor: "#dedede",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "7px",
                  height: "8rem",
                  width: "70%",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontFamily: leftBannerAboveSectionFontFamily,
                      paddingX: 1,
                    }}
                  >
                    Preview my font family
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Left banner above section subtitle color */}
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
              htmlFor="banner.left_banner.above_section.sub_title.style.color"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select Left Banner Above Section Subtitle Color:
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
                onClick={() => setLeftBannerAboveSectionSubTitleColorOpen(true)}
                name="banner.left_banner.above_section.sub_title.style.color"
                id="banner.left_banner.above_section.sub_title.style.color"
                value={
                  formik.values?.banner?.left_banner?.above_section?.sub_title
                    ?.style?.color
                }
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {leftBannerAboveSectionSubtitleColor}
              </CustomOutlinedInput>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <Box
                  onClick={() =>
                    setLeftBannerAboveSectionSubTitleColorOpen(true)
                  }
                  sx={{
                    border: `1px solid #dedede`,
                    width: "60%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor:
                      formik.values?.banner?.left_banner?.above_section
                        ?.sub_title?.style?.color,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() =>
                    setLeftBannerAboveSectionSubTitleColorOpen(true)
                  }
                  sx={{
                    border: `1px solid #dedede`,
                    width: "40%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderTopRightRadius: "7px",
                    borderBottomRightRadius: "7px",
                  }}
                >
                  <IconColorPicker height={18} />
                </Box>
              </Box>
            </Box>
            <ColorPalette
              open={leftBannerAboveSectionSubTitleColorOpen}
              handleClose={handleLeftBannerAboveSectionSubTitleColorClose}
              onColorSelect={handleLeftBannerAboveSectionSubTitleColorChange}
            />
          </Box>
        </Grid>
        {/* Left banner above section subtitle font size */}
        <Grid item xs={12}>
          <Box
            sx={{
              marginY: 3,
              display: "flex",
              flexDirection: "column",
              //   gap: 1,
            }}
          >
            <CustomFormLabel
              htmlFor="banner.left_banner.above_section.sub_title.style.fontSize"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select left banner above section subtitle font size:
            </CustomFormLabel>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CustomSelect
                id="banner.left_banner.below_section.title.style.fontSize"
                name="banner.left_banner.below_section.title.style.fontSize"
                value={
                  formik.values.banner?.left_banner?.above_section?.sub_title
                    ?.style?.fontSize
                }
                onChange={(e: any) =>
                  handleLeftBannerAboveSectionSubTitleFontSizeChange(
                    e.target.value
                  )
                }
                customWidth={"30%"}
                variant="outlined"
              >
                <MenuItem value="">
                  <em>Choose font size</em>
                </MenuItem>
                {fontSizes.map((font, i) => (
                  <MenuItem key={i} value={font.value}>
                    {font.label}
                  </MenuItem>
                ))}
              </CustomSelect>
              <Box
                sx={{
                  backgroundColor: "#dedede",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "7px",
                  height: "8rem",
                  width: "70%",
                  paddingY: "5px",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: leftBannerAboveSectionSubtitleFontSize,
                      paddingX: 1,
                    }}
                  >
                    Font size
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        {/* Left banner above section sub title font family */}
        <Grid item xs={12}>
          <Box
            sx={{
              marginY: 3,
              display: "flex",
              flexDirection: "column",
              //   gap: 1,
            }}
          >
            <CustomFormLabel
              htmlFor="banner.left_banner.above_section.sub_title.style.fontFamily"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select left banner above section subtitle font family:
            </CustomFormLabel>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CustomSelect
                id="banner.left_banner.above_section.sub_title.style.fontFamily"
                name="banner.left_banner.above_section.sub_title.style.fontFamily"
                value={
                  formik.values.banner?.left_banner?.above_section?.sub_title
                    ?.style?.fontFamily
                }
                onChange={(e: any) =>
                  handleLeftBannerAboveSectionSubTitleFontFamilyChange(
                    e.target.value
                  )
                }
                customWidth={"30%"}
                variant="outlined"
              >
                <MenuItem value="">
                  <em>Choose font family</em>
                </MenuItem>
                {fontFamilies.map((font, i) => (
                  <MenuItem key={i} value={font.value}>
                    {font.label}
                  </MenuItem>
                ))}
              </CustomSelect>
              <Box
                sx={{
                  backgroundColor: "#dedede",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "7px",
                  height: "8rem",
                  width: "70%",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontFamily: leftBannerAboveSectionSubTitleFontFamily,
                      paddingX: 1,
                    }}
                  >
                    Preview my font family
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Left banner below section title color */}
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
              htmlFor="banner.left_banner.below_section.title.style.color"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select Left Banner below Section Title Color:
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
                onClick={() => setLeftBannerBelowSectionTextColorOpen(true)}
                name="banner.left_banner.below_section.title.style.color"
                id="banner.left_banner.below_section.title.style.color"
                value={
                  formik.values?.banner?.left_banner?.below_section?.title
                    ?.style?.color
                }
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {
                  formik.values?.banner?.left_banner?.below_section?.title
                    ?.style?.color
                }
              </CustomOutlinedInput>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <Box
                  onClick={() => setLeftBannerBelowSectionTextColorOpen(true)}
                  sx={{
                    border: `1px solid #dedede`,
                    width: "60%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor: leftBannerBelowSectionTextColor,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() => setLeftBannerBelowSectionTextColorOpen(true)}
                  sx={{
                    border: `1px solid #dedede`,
                    width: "40%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderTopRightRadius: "7px",
                    borderBottomRightRadius: "7px",
                  }}
                >
                  <IconColorPicker height={18} />
                </Box>
              </Box>
            </Box>
            <ColorPalette
              open={leftBannerBelowSectionTextColorOpen}
              handleClose={handleLeftBannerBelowSectionTextColorClose}
              onColorSelect={handleLeftBannerBelowSectionTextColorChange}
            />
          </Box>
        </Grid>
        {/* Left banner below section title font size */}
        <Grid item xs={12}>
          <Box
            sx={{
              marginY: 3,
              display: "flex",
              flexDirection: "column",
              //   gap: 1,
            }}
          >
            <CustomFormLabel
              htmlFor="banner.left_banner.above_section.title.style.fontSize"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select left banner below section font size:
            </CustomFormLabel>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CustomSelect
                id="banner.left_banner.below_section.title.style.fontSize"
                name="banner.left_banner.below_section.title.style.fontSize"
                value={
                  formik.values.banner?.left_banner?.below_section?.title?.style
                    ?.fontSize
                }
                onChange={(e: any) =>
                  handleLeftBannerBelowSectionFontSizeChange(e.target.value)
                }
                customWidth={"30%"}
                variant="outlined"
              >
                <MenuItem value="">
                  <em>Choose font size</em>
                </MenuItem>
                {fontSizes.map((font, i) => (
                  <MenuItem key={i} value={font.value}>
                    {font.label}
                  </MenuItem>
                ))}
              </CustomSelect>
              <Box
                sx={{
                  backgroundColor: "#dedede",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "7px",
                  height: "8rem",
                  width: "70%",
                  paddingY: "5px",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: leftBannerBelowSectionFontSize,
                      paddingX: 1,
                    }}
                  >
                    Font size
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        {/* Left banner below section title font family */}
        <Grid item xs={12}>
          <Box
            sx={{
              marginY: 3,
              display: "flex",
              flexDirection: "column",
              //   gap: 1,
            }}
          >
            <CustomFormLabel
              htmlFor="banner.left_banner.below_section.title.style.fontFamily"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select left banner below section title font family:
            </CustomFormLabel>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CustomSelect
                id="banner.left_banner.below_section.title.style.fontFamily"
                name="banner.left_banner.below_section.title.style.fontFamily"
                value={
                  formik.values.banner?.left_banner?.below_section?.title?.style
                    ?.fontFamily
                }
                onChange={(e: any) =>
                  handleLeftBannerBelowSectionFontFamilyChange(e.target.value)
                }
                customWidth={"30%"}
                variant="outlined"
              >
                <MenuItem value="">
                  <em>Choose font family</em>
                </MenuItem>
                {fontFamilies.map((font, i) => (
                  <MenuItem key={i} value={font.value}>
                    {font.label}
                  </MenuItem>
                ))}
              </CustomSelect>
              <Box
                sx={{
                  backgroundColor: "#dedede",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "7px",
                  height: "8rem",
                  width: "70%",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontFamily: leftBannerBelowSectionFontFamily,
                      paddingX: 1,
                    }}
                  >
                    Font family
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Left banner below section description color */}
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
              htmlFor="banner.left_banner.below_section.description.style.color"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Left banner below section description color
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
                onClick={() =>
                  setLeftBannerBelowSectionDescriptionColorOpen(true)
                }
                name="banner.left_banner.below_section.description.style.color"
                id="banner.left_banner.below_section.description.style.color"
                value={
                  formik.values?.banner?.left_banner?.below_section?.description
                    ?.style?.color
                }
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {
                  formik.values?.banner?.left_banner?.below_section?.description
                    ?.style?.color
                }
              </CustomOutlinedInput>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <Box
                  onClick={() =>
                    setLeftBannerBelowSectionDescriptionColorOpen(true)
                  }
                  sx={{
                    border: `1px solid #dedede`,
                    width: "60%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor: leftBannerBelowSectionDescriptionColor,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() =>
                    setLeftBannerBelowSectionDescriptionColorOpen(true)
                  }
                  sx={{
                    border: `1px solid #dedede`,
                    width: "40%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderTopRightRadius: "7px",
                    borderBottomRightRadius: "7px",
                  }}
                >
                  <IconColorPicker height={18} />
                </Box>
              </Box>
            </Box>
            <ColorPalette
              open={leftBannerBelowSectionDescriptionColorOpen}
              handleClose={handleLeftBannerBelowSectionDescriptionColorClose}
              onColorSelect={handleLeftBannerBelowSectionDescriptionColorChange}
            />
          </Box>
        </Grid>
        {/* Left banner below section description font size */}
        <Grid item xs={12}>
          <Box
            sx={{
              marginY: 3,
              display: "flex",
              flexDirection: "column",
              //   gap: 1,
            }}
          >
            <CustomFormLabel
              htmlFor="banner.left_banner.above_section.description.style.fontSize"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select left banner below section description font size:
            </CustomFormLabel>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CustomSelect
                id="banner.left_banner.below_section.description.style.fontSize"
                name="banner.left_banner.below_section.description.style.fontSize"
                value={leftBannerBelowSectionDescriptionFontSize}
                onChange={(e: any) =>
                  handleLeftBannerBelowSectionDescriptionFontSizeChange(
                    e.target.value
                  )
                }
                customWidth={"30%"}
                variant="outlined"
              >
                <MenuItem value="">
                  <em>Choose font size</em>
                </MenuItem>
                {fontSizes.map((font, i) => (
                  <MenuItem key={i} value={font.value}>
                    {font.label}
                  </MenuItem>
                ))}
              </CustomSelect>
              <Box
                sx={{
                  backgroundColor: "#dedede",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingY: "5px",
                  borderRadius: "7px",
                  height: "8rem",
                  width: "70%",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: leftBannerBelowSectionDescriptionFontSize,
                      paddingX: 1,
                    }}
                  >
                    Font size
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        {/* Left banner below section description font family */}
        <Grid item xs={12}>
          <Box
            sx={{
              marginY: 3,
              display: "flex",
              flexDirection: "column",
              //   gap: 1,
            }}
          >
            <CustomFormLabel
              htmlFor="banner.left_banner.below_section.description.style.fontFamily"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select left banner below section description font family:
            </CustomFormLabel>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CustomSelect
                id="banner.left_banner.below_section.description.style.fontFamily"
                name="banner.left_banner.below_section.description.style.fontFamily"
                value={leftBannerBelowSectionDescriptionFontFamily}
                onChange={(e: any) =>
                  handleLeftBannerBelowSectionDescriptionFontFamilyChange(
                    e.target.value
                  )
                }
                customWidth={"30%"}
                variant="outlined"
              >
                <MenuItem value="">
                  <em>Choose font family</em>
                </MenuItem>
                {fontFamilies.map((font, i) => (
                  <MenuItem key={i} value={font.value}>
                    {font.label}
                  </MenuItem>
                ))}
              </CustomSelect>
              <Box
                sx={{
                  backgroundColor: "#dedede",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "7px",
                  height: "8rem",
                  width: "70%",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontFamily: leftBannerBelowSectionDescriptionFontFamily,
                      paddingX: 1,
                    }}
                  >
                    Preview my font family
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
