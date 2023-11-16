import { Grid, Box, MenuItem, Typography, Divider } from "@mui/material";
import { FormikValues, useFormikContext } from "formik";
import CustomFormLabel from "../../forms/theme-elements/customFormLabel";
import CustomOutlinedInput from "../../forms/theme-elements/customOutlinedInput";
import { IconColorPicker } from "@tabler/icons-react";
import ColorPalette from "../colorPalette";
import { useEffect, useState } from "react";
import CustomSelect from "../../forms/theme-elements/customSelect";
import { fontFamilies, fontSizes } from "../data";
import ThemeFileUpload from "../themeFileUpload";

interface props {
  imageUploaded: (files: any) => void;
  clearImages: boolean;
  savedThemeValues: any;
}

export default function DesertDelightBanner({
  imageUploaded,
  clearImages,
  savedThemeValues,
}: props) {
  const formik: FormikValues = useFormikContext();

  const [leftBannerBackgroundColor, setLeftBannerBackgroundColor] =
    useState("#dedede");
  const [leftBannerBackgrounColorOpen, setLeftBannerBackgroundColorOpen] =
    useState(false);
  const [
    leftSubBannerBackgroundColorOpen,
    setLeftSubBannerBackgroundColorOpen,
  ] = useState(false);
  const [leftSubBannerBackgroundColor, setLeftSubBannerBackgroundColor] =
    useState("#dedede");
  const [leftSubImageBannertitleColor, setLeftSubImageBannertitleColor] =
    useState("#dedede");
  const [
    leftSubImageBannertitleColorOpen,
    setLeftSubImageBannertitleColorOpen,
  ] = useState(false);
  const [leftSubImageBannertitleFontsize, setLeftSubImageBannertitleFontsize] =
    useState("1rem");
  const [
    leftSubImageBannerTitleFontfamily,
    setLeftSubImageBannerTitleFontfamily,
  ] = useState("pacifico");
  const [
    leftSubImageBannerMaintitleColorOpen,
    setLeftSubImageBannerMaintitleColorOpen,
  ] = useState(false);
  const [
    leftSubImageBannerMaintitleColor,
    setLeftSubImageBannerMaintitleColor,
  ] = useState("#dedede");
  const [
    leftSubImageBannerMaintitleFontsize,
    setLeftSubImageBannerMaintitleFontsize,
  ] = useState("1rem");
  const [
    leftSubImageBannerMaintitleFontFamily,
    setLeftSubImageBannerMaintitleFontFamily,
  ] = useState("pacifico");
  const [centerBannerBackgroundColorOpen, setCenterBannerBackgroundColorOpen] =
    useState(false);
  const [centerBannerTextBackgroundColor, setCenterBannerTextBackgroundColor] =
    useState("#dedede");
  const [centerBannerTextColor, setCenterBannerTextColor] = useState("#dedede");
  const [centerBannerTextColorOpen, setCenterBannerTextColorOpen] =
    useState(false);
  const [centerBannerTextFontFamily, setCenterBannerTextFontFamily] =
    useState("pacifico");
  const [centerBannerTextFontSize, setCenterBannerTextFontSize] =
    useState("1rem");
  const [rightBannerBackgroundColor, setRightBannerBackgroundColor] =
    useState("#dedede");
  const [rightBannerBackgroundColorOpen, setRightBannerBackgroundColorOpen] =
    useState(false);
  const [rightSubBannerBackgroundColor, setRightSubBannerBackgroundColor] =
    useState("#dedede");
  const [
    rightSubBannerBackgroundColorOpen,
    setRightSubBannerBackgroundColorOpen,
  ] = useState(false);
  const [rightSubBannerTitleColor, setRightSubBannerTitleColor] =
    useState("#dedede");
  const [rightSubBannerTitleColorOpen, setRightSubBannerTitleColorOpen] =
    useState(false);
  const [rightSubBannerTitleFontSize, setRightSubBannerTitleFontSize] =
    useState("1rem");
  const [rightSubBannerTitleFontfamily, setRightSubBannerTitleFontfamily] =
    useState("pacifico");

  const [rightSubBannerDescriptionColor, setRightSubBannerDescriptionColor] =
    useState("#dedede");
  const [
    rightSubBannerDescriptionColorOpen,
    setRightSubBannerDescriptionColorOpen,
  ] = useState(false);
  const [
    rightSubBannerDescriptionFontSize,
    setRightSubBanneDescriptionFontSize,
  ] = useState("1rem");
  const [
    rightSubBannerDescriptionFontfamily,
    setRightSubBannerDescriptionFontfamily,
  ] = useState("pacifico");
  const [
    rightSubBannerBottomTextColorOpen,
    setRightSubBannerBottomTextColorOpen,
  ] = useState(false);
  const [rightSubBannerBottomTextColor, setRightSubBannerBottomTextColor] =
    useState("#dedede");
  const [rightSubBannerBottomTextFontSize, setRightSubBanneBottomTextFontSize] =
    useState("1rem");
  const [
    rightSubBannerBottomTextFontfamily,
    setRightSubBannerBottomTextFontfamily,
  ] = useState("pacifico");

  // Handler for left banner background color
  const handleLeftBannerBackgroundColorChange = (value: string) => {
    setLeftBannerBackgroundColor(value);
    formik.setFieldValue("banner.left_banner.backgroundColor", value);
  };

  const handleLeftBannerBackgroundColorClose = () => {
    setLeftBannerBackgroundColorOpen(false);
  };

  //   Handler for sub banner background color
  const handleLeftSubBannerBackgroundColorChange = (value: string) => {
    setLeftSubBannerBackgroundColor(value);
    formik.setFieldValue(
      "banner.left_banner.sub_banner.backgroundColor",
      value
    );
  };

  const handleLeftSubBannerBackgroundColorClose = () => {
    setLeftSubBannerBackgroundColorOpen(false);
  };

  //   Hnadler for sub image banner title color
  const handleLeftSubImageBannertitleColorChange = (value: string) => {
    setLeftSubImageBannertitleColor(value);
    formik.setFieldValue(
      "banner.left_banner.sub_banner.img_banner.title.style.color",
      value
    );
  };

  const handleLeftSubImageBannerTitleClose = () => {
    setLeftSubImageBannertitleColorOpen(false);
  };

  //   Hnadler for sub image banner font size
  const handleLeftSubBannerTitleFontsizeChange = (value: string) => {
    setLeftSubImageBannertitleFontsize(value);
    formik.setFieldValue(
      "banner.left_banner.sub_banner.img_banner.title.style.fontSize",
      value
    );
  };

  // Handler for sub image banner font family
  const handleLeftSubBannerTitleFontfamilyChange = (value: string) => {
    setLeftSubImageBannerTitleFontfamily(value);
    formik.setFieldValue(
      "banner.left_banner.sub_banner.img_banner.title.style.fontFamily",
      value
    );
  };
  //   Hnadler for sub image banner main title color
  const handleLeftSubImageBannerMaintitleColorChange = (value: string) => {
    setLeftSubImageBannerMaintitleColor(value);
    formik.setFieldValue(
      "banner.left_banner.sub_banner.img_banner.main_title.style.color",
      value
    );
  };

  const handleLeftSubImageBannerMainTitleClose = () => {
    setLeftSubImageBannerMaintitleColorOpen(false);
  };

  // Hnadler for aub banner main title font size
  const handleLeftSubBannerMainTitleFontsizeChange = (value: string) => {
    setLeftSubImageBannerMaintitleFontsize(value);
    formik.setFieldValue(
      "banner.left_banner.sub_banner.img_banner.main_title.style.fontSize",
      value
    );
  };

  // Handler for sub banner main title font family
  const handleLeftSubBannerMainTitleFontFamilyChange = (value: string) => {
    setLeftSubImageBannerMaintitleFontFamily(value);
    formik.setFieldValue(
      "banner.left_banner.sub_banner.img_banner.main_title.style.fontFamily",
      value
    );
  };

  // Handler for center banner background color
  const handleCenterBannerBackgroundColorChange = (value: string) => {
    setCenterBannerTextBackgroundColor(value);
    formik.setFieldValue("banner.center_banner.style.backgroundColor", value);
  };

  const handleCenterBannerBackgroundColorClose = () => {
    setCenterBannerBackgroundColorOpen(false);
  };

  //   Handler for center banner text color
  const handleCenterBannerTextColorChange = (value: string) => {
    setCenterBannerTextColor(value);
    formik.setFieldValue("banner.center_banner.style.color", value);
  };

  const handleCenterBannerTextColorClose = () => {
    setCenterBannerTextColorOpen(false);
  };

  // Handler for center banner text font family
  const handleCenterBannerFontFamilyChange = (value: string) => {
    setCenterBannerTextFontFamily(value);
    formik.setFieldValue("banner.center_banner.style.fontFamily", value);
  };

  // Handler for center banner font size
  const handleCenterBannerFontSizeChange = (value: string) => {
    setCenterBannerTextFontSize(value);
    formik.setFieldValue("banner.center_banner.style.fontSize", value);
  };

  // Hnadler for right banner background color
  const handleRightBannerBackgroundColorChange = (value: string) => {
    setRightBannerBackgroundColor(value);
    formik.setFieldValue("banner.right_banner.background_color", value);
  };

  const handleRightBannerBackgroundColorClose = () => {
    setRightBannerBackgroundColorOpen(false);
  };

  //  handler forright sub banner background color
  const handleRightSubBannerBackgroundColorChange = (value: string) => {
    setRightSubBannerBackgroundColor(value);
    formik.setFieldValue(
      "banner.right_banner.sub_banner.background_color",
      value
    );
  };

  const handleRightSubBannerBackgroundColorClose = () => {
    setRightSubBannerBackgroundColorOpen(false);
  };

  //  handler forright sub banner background color
  const handleRightSubBannerTextColorChange = (value: string) => {
    setRightSubBannerTitleColor(value);
    formik.setFieldValue(
      "banner.right_banner.sub_banner.title.style.color",
      value
    );
  };

  const handleRightSubBannerTextColorClose = () => {
    setRightSubBannerTitleColorOpen(false);
  };

  // Hnadler for right sub banner main title font size
  const handleRightSubBannerTitleFontsizeChange = (value: string) => {
    setRightSubBannerTitleFontSize(value);
    formik.setFieldValue(
      "banner.right_banner.sub_banner.title.style.fontSize",
      value
    );
  };

  // Handler for sub banner main title font family
  const handleRightSubBannerTitleFontFamilyChange = (value: string) => {
    setRightSubBannerTitleFontfamily(value);
    formik.setFieldValue(
      "banner.right_banner.sub_banner.title.style.fontFamily",
      value
    );
  };

  //  handler for right sub banner description color
  const handleRightSubBannerDescriptionColorChange = (value: string) => {
    setRightSubBannerDescriptionColor(value);
    formik.setFieldValue(
      "banner.right_banner.sub_banner.description.style.color",
      value
    );
  };

  const handleRightSubBannerDescriptionColorClose = () => {
    setRightSubBannerDescriptionColorOpen(false);
  };

  // Hnadler for right sub banner main title font size
  const handleRightSubBannerDescriptionFontsizeChange = (value: string) => {
    setRightSubBanneDescriptionFontSize(value);
    formik.setFieldValue(
      "banner.right_banner.sub_banner.description.style.fontSize",
      value
    );
  };

  // Handler for sub banner main title font family
  const handleRightSubBannerDescriptionFontFamilyChange = (value: string) => {
    setRightSubBannerDescriptionFontfamily(value);
    formik.setFieldValue(
      "banner.right_banner.sub_banner.description.style.fontFamily",
      value
    );
  };

  //   Handler for sub banner bottom text color
  const handleRightSubBannerBottomTextColorChange = (value: string) => {
    setRightSubBannerBottomTextColor(value);
    formik.setFieldValue(
      "banner.right_banner.sub_banner.bottom_text.style.color",
      value
    );
  };

  const handleRightSubBannerBottomTextColorClose = () => {
    setRightSubBannerBottomTextColorOpen(false);
  };

  // Hnadler for right sub banner main title font size
  const handleRightSubBannerBottomTextFontsizeChange = (value: string) => {
    setRightSubBanneBottomTextFontSize(value);
    formik.setFieldValue(
      "banner.right_banner.sub_banner.bottom_text.style.fontSize",
      value
    );
  };

  // Handler for sub banner main title font family
  const handleRightSubBannerBottomTextFontFamilyChange = (value: string) => {
    setRightSubBannerBottomTextFontfamily(value);
    formik.setFieldValue(
      "banner.right_banner.sub_banner.bottom_text.style.fontFamily",
      value
    );
  };

  useEffect(() => {
    if (savedThemeValues) {
      formik.setFieldValue(
        "banner.left_banner.backgroundColor",
        savedThemeValues?.banner?.left_banner?.backgroundColor
      );
      formik.setFieldValue(
        "banner.left_banner.sub_banner.backgroundColor",
        savedThemeValues?.banner?.left_banner?.sub_banner?.backgroundColor
      );
      formik.setFieldValue(
        "banner.left_banner.sub_banner.img_banner.title.text",
        savedThemeValues?.banner?.left_banner?.sub_banner?.img_banner?.title
          .text
      );
      formik.setFieldValue(
        "banner.left_banner.sub_banner.img_banner.title.style.color",
        savedThemeValues?.banner?.left_banner?.sub_banner?.img_banner?.title
          ?.style?.color
      );
      formik.setFieldValue(
        "banner.left_banner.sub_banner.img_banner.title.style.fontSize",
        savedThemeValues?.banner?.left_banner?.sub_banner?.img_banner?.title
          ?.style?.fontSize
      );
      formik.setFieldValue(
        "banner.left_banner.sub_banner.img_banner.title.style.fontFamily",
        savedThemeValues?.banner?.left_banner?.sub_banner?.img_banner?.title
          ?.style?.fontFamily
      );
      formik.setFieldValue(
        "banner.left_banner.sub_banner.img_banner.main_title.text",
        savedThemeValues?.banner?.left_banner?.sub_banner?.img_banner
          ?.main_title.text
      );
      formik.setFieldValue(
        "banner.left_banner.sub_banner.img_banner.main_title.style.color",
        savedThemeValues?.banner?.left_banner?.sub_banner?.img_banner
          ?.main_title?.style?.color
      );
      formik.setFieldValue(
        "banner.left_banner.sub_banner.img_banner.main_title.style.fontSize",
        savedThemeValues?.banner?.left_banner?.sub_banner?.img_banner
          ?.main_title?.style?.fontSize
      );
      formik.setFieldValue(
        "banner.left_banner.sub_banner.img_banner.main_title.style.fontFamily",
        savedThemeValues?.banner?.left_banner?.sub_banner?.img_banner
          ?.main_title?.style?.fontFamily
      );
      formik.setFieldValue(
        "banner.left_banner.sub_banner.img_banner.center_banner.text",
        savedThemeValues?.banner?.left_banner?.sub_banner?.img_banner
          ?.center_banner?.text
      );
      formik.setFieldValue(
        "banner.left_banner.sub_banner.img_banner.center_banner.style.backgroundColor",
        savedThemeValues?.banner?.left_banner?.sub_banner?.img_banner
          ?.center_banner?.style?.backgroundColor
      );
      formik.setFieldValue(
        "banner.left_banner.sub_banner.img_banner.center_banner.style.color",
        savedThemeValues?.banner?.left_banner?.sub_banner?.img_banner
          ?.center_banner?.style?.color
      );
      formik.setFieldValue(
        "banner.left_banner.sub_banner.img_banner.center_banner.style.fontSize",
        savedThemeValues?.banner?.left_banner?.sub_banner?.img_banner
          ?.center_banner?.style?.fontSize
      );
      formik.setFieldValue(
        "banner.left_banner.sub_banner.img_banner.center_banner.style.fontFamily",
        savedThemeValues?.banner?.left_banner?.sub_banner?.img_banner
          ?.center_banner?.style?.fontFamily
      );

      formik.setFieldValue(
        "banner.right_banner.backgroundColor",
        savedThemeValues?.banner?.right_banner?.backgroundColor
      );
      formik.setFieldValue(
        "banner.right_banner.sub_banner.backgroundColor",
        savedThemeValues?.banner?.right_banner?.sub_banner?.backgroundColor
      );
      formik.setFieldValue(
        "banner.right_banner.sub_banner.img_banner.title.text",
        savedThemeValues?.banner?.right_banner?.sub_banner?.img_banner?.title
          ?.text
      );
      formik.setFieldValue(
        "banner.right_banner.sub_banner.img_banner.title.style.color",
        savedThemeValues?.banner?.right_banner?.sub_banner?.img_banner?.title
          ?.style?.color
      );
      formik.setFieldValue(
        "banner.right_banner.sub_banner.img_banner.title.style.fontSize",
        savedThemeValues?.banner?.right_banner?.sub_banner?.img_banner?.title
          ?.style?.fontSize
      );
      formik.setFieldValue(
        "banner.right_banner.sub_banner.img_banner.title.style.fontFamily",
        savedThemeValues?.banner?.right_banner?.sub_banner?.img_banner?.title
          ?.style?.fontFamily
      );
      formik.setFieldValue(
        "banner.right_banner.sub_banner.img_banner.description.text",
        savedThemeValues?.banner?.right_banner?.sub_banner?.img_banner
          ?.description?.text
      );
      formik.setFieldValue(
        "banner.right_banner.sub_banner.img_banner.description.style.color",
        savedThemeValues?.banner?.right_banner?.sub_banner?.img_banner
          ?.description?.style?.color
      );
      formik.setFieldValue(
        "banner.right_banner.sub_banner.img_banner.description.style.fontSize",
        savedThemeValues?.banner?.right_banner?.sub_banner?.img_banner
          ?.description?.style?.fontSize
      );
      formik.setFieldValue(
        "banner.right_banner.sub_banner.img_banner.description.style.fontFamily",
        savedThemeValues?.banner?.right_banner?.sub_banner?.img_banner
          ?.description?.style?.fontFamily
      );
      formik.setFieldValue(
        "banner.right_banner.sub_banner.img_banner.bottom_text.text",
        savedThemeValues?.banner?.right_banner?.sub_banner?.img_banner
          ?.bottom_text?.text
      );
      formik.setFieldValue(
        "banner.right_banner.sub_banner.img_banner.bottom_text.style.color",
        savedThemeValues?.banner?.right_banner?.sub_banner?.img_banner
          ?.bottom_text?.style?.color
      );
      formik.setFieldValue(
        "banner.right_banner.sub_banner.img_banner.bottom_text.style.fontSize",
        savedThemeValues?.banner?.right_banner?.sub_banner?.img_banner
          ?.bottom_text?.style?.fontSize
      );
      formik.setFieldValue(
        "banner.right_banner.sub_banner.img_banner.bottom_text.style.fontFamily",
        savedThemeValues?.banner?.right_banner?.sub_banner?.img_banner
          ?.bottom_text?.style?.fontFamily
      );
    }
  }, [savedThemeValues]);

  //   Hnadler for main banner images
  const handleImageUpload = (files: any) => {
    imageUploaded(files);
  };

  return (
    <Box sx={{ paddingX: 2 }}>
      <Typography variant="h4" sx={{ marginBottom: 1 }}>
        Banner
      </Typography>
      <Divider></Divider>
      <Grid container>
        {/* banner left banner background color */}
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
              htmlFor="banner.left_banner.backgroundColor"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select left banner background color:
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
                  setLeftBannerBackgroundColorOpen(true)
                }
                name="banner.left_banner.backgroundColor"
                id="banner.left_banner.backgroundColor"
                value={formik.values?.banner?.left_banner?.backgroundColor}
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {formik.values?.banner?.left_banner?.backgroundColor}
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
                    setLeftBannerBackgroundColorOpen(true)
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
                      formik.values?.banner?.left_banner?.backgroundColor,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() =>
                    setLeftBannerBackgroundColorOpen(true)
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
              open={leftBannerBackgrounColorOpen}
              handleClose={handleLeftBannerBackgroundColorClose}
              onColorSelect={handleLeftBannerBackgroundColorChange}
            />
          </Box>
        </Grid>

        {/* banner sub banner background color */}
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
              htmlFor="banner.sub_banner.backgroundColor"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select left sub banner background color:
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
                  setLeftSubBannerBackgroundColorOpen(true)
                }
                name="banner.sub_banner.backgroundColor"
                id="banner.sub_banner.backgroundColor"
                value={
                  formik.values?.banner?.left_banner?.sub_banner
                    ?.backgroundColor
                }
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {
                  formik.values?.banner?.left_banner?.sub_banner
                    ?.backgroundColor
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
                    setLeftSubBannerBackgroundColorOpen(true)
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
                      formik.values?.banner?.left_banner?.sub_banner
                        ?.backgroundColor,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() =>
                    setLeftSubBannerBackgroundColorOpen(true)
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
              open={leftSubBannerBackgroundColorOpen}
              handleClose={handleLeftSubBannerBackgroundColorClose}
              onColorSelect={handleLeftSubBannerBackgroundColorChange}
            />
          </Box>
        </Grid>

        {/* Left sub img banner title color */}
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
              htmlFor="banner.left_banner.sub_banner.img_banner.title.style.color"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select Left sub banner title color:
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
                  setLeftSubImageBannertitleColorOpen(true)
                }
                name="banner.left_banner.sub_banner.img_banner.title.style.color"
                id="banner.left_banner.sub_banner.img_banner.title.style.color"
                value={
                  formik.values?.banner?.left_banner?.sub_banner?.img_banner
                    ?.title?.style?.color
                }
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {
                  formik.values?.banner?.left_banner?.sub_banner?.img_banner
                    ?.title?.style?.color
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
                    setLeftSubImageBannertitleColorOpen(true)
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
                      formik.values?.banner?.left_banner?.sub_banner?.img_banner
                        ?.title?.style?.color,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() =>
                    setLeftSubImageBannertitleColorOpen(true)
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
              open={leftSubImageBannertitleColorOpen}
              handleClose={handleLeftSubImageBannerTitleClose}
              onColorSelect={handleLeftSubImageBannertitleColorChange}
            />
          </Box>
        </Grid>

        {/* Left banner img banner section title font size */}
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
              htmlFor="banner.left_banner.sub_banner.img_banner.title.style.fontSize"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select Left sub banner title font size:
            </CustomFormLabel>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CustomSelect
                id="banner.left_banner.sub_banner.img_banner.title.style.fontSize"
                name="banner.left_banner.sub_banner.img_banner.title.style.fontSize"
                value={
                  formik.values?.banner?.left_banner?.sub_banner?.img_banner
                    ?.title?.style?.fontSize
                }
                onChange={(e: any) =>
                  handleLeftSubBannerTitleFontsizeChange(e.target.value)
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
                      fontSize:
                        formik.values?.banner?.left_banner?.sub_banner
                          ?.img_banner?.title?.style?.fontSize,
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
              htmlFor="banner.left_banner.sub_banner.img_banner.title.style.fontFamily"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select left sub image banner title:
            </CustomFormLabel>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CustomSelect
                id="banner.left_banner.sub_banner.img_banner.title.style.fontFamily"
                name="banner.left_banner.sub_banner.img_banner.title.style.fontFamily"
                value={
                  formik.values.banner?.left_banner?.sub_banner?.img_banner
                    ?.title?.style?.fontFamily
                }
                onChange={(e: any) =>
                  handleLeftSubBannerTitleFontfamilyChange(e.target.value)
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
                      fontFamily: leftSubImageBannerTitleFontfamily,
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

        {/* Left sub img banner main title color */}
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
              htmlFor="banner.left_banner.sub_banner.img_banner.main_title.style.color"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select Left sub banner main title color:
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
                  setLeftSubImageBannerMaintitleColorOpen(true)
                }
                name="banner.left_banner.sub_banner.img_banner.main_title.style.color"
                id="banner.left_banner.sub_banner.img_banner.main_title.style.color"
                value={
                  formik.values?.banner?.left_banner?.sub_banner?.img_banner
                    ?.main_title?.style?.color
                }
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {leftSubImageBannerMaintitleColor}
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
                    setLeftSubImageBannerMaintitleColorOpen(true)
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
                      formik.values?.banner?.left_banner?.sub_banner?.img_banner
                        ?.main_title?.style?.color,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() =>
                    setLeftSubImageBannerMaintitleColorOpen(true)
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
              open={leftSubImageBannerMaintitleColorOpen}
              handleClose={handleLeftSubImageBannerMainTitleClose}
              onColorSelect={handleLeftSubImageBannerMaintitleColorChange}
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
              htmlFor="banner.left_banner.sub_banner.img_banner.main_title.style.fontSize"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select Left sub banner main title font size:
            </CustomFormLabel>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CustomSelect
                id="banner.left_banner.sub_banner.img_banner.main_title.style.fontSize"
                name="banner.left_banner.sub_banner.img_banner.main_title.style.fontSize"
                value={
                  formik.values?.banner?.left_banner?.sub_banner?.img_banner
                    ?.main_title?.style?.fontSize
                }
                onChange={(e: any) =>
                  handleLeftSubBannerMainTitleFontsizeChange(e.target.value)
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
                      fontSize:
                        formik.values?.banner?.left_banner?.sub_banner
                          ?.img_banner?.main_title?.style?.fontSize,
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

        {/* Left banner section main title font family */}
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
              htmlFor="banner.left_banner.sub_banner.img_banner.main_title.style.fontFamily"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select left sub image banner title:
            </CustomFormLabel>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CustomSelect
                id="banner.left_banner.sub_banner.img_banner.main_title.style.fontFamily"
                name="banner.left_banner.sub_banner.img_banner.main_title.style.fontFamily"
                value={
                  formik.values.banner?.left_banner?.sub_banner?.img_banner
                    ?.main_title?.style?.fontFamily
                }
                onChange={(e: any) =>
                  handleLeftSubBannerMainTitleFontFamilyChange(e.target.value)
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
                      fontFamily: leftSubImageBannerMaintitleFontFamily,
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

        {/* Center banner background color */}
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
              htmlFor="banner.center_banner.style.backgroundColor"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select center banner background color:
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
                  setCenterBannerBackgroundColorOpen(true)
                }
                name="banner.center_banner.style.backgroundColor"
                id="banner.center_banner.style.backgroundColor"
                value={
                  formik.values?.banner?.center_banner?.style?.backgroundColor
                }
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {formik.values?.banner?.center_banner?.style?.backgroundColor}
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
                    setCenterBannerBackgroundColorOpen(true)
                  }
                  sx={{
                    border: `1px solid ${formik.values?.banner?.center_banner?.style?.backgroundColor}`,
                    width: "60%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor:
                      formik.values?.banner?.center_banner?.style
                        ?.backgroundColor,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() =>
                    setCenterBannerBackgroundColorOpen(true)
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
              open={centerBannerBackgroundColorOpen}
              handleClose={handleCenterBannerBackgroundColorClose}
              onColorSelect={handleCenterBannerBackgroundColorChange}
            />
          </Box>
        </Grid>

        {/*Center banner text color  */}
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
              htmlFor="banner.center_banner.style.color"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select center banner title color:
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
                onClick={() => setCenterBannerTextColorOpen(true)}
                name="banner.center_banner.style.color"
                id="banner.center_banner.style.color"
                value={formik.values?.banner?.center_banner?.style?.color}
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {formik.values?.banner?.center_banner?.style?.color}
              </CustomOutlinedInput>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <Box
                  onClick={() => setCenterBannerTextColorOpen(true)}
                  sx={{
                    border: `1px solid ${formik.values?.banner?.center_banner?.style?.color}`,
                    width: "60%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor:
                      formik.values?.banner?.center_banner?.style?.color,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() => setCenterBannerTextColorOpen(true)}
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
              open={centerBannerTextColorOpen}
              handleClose={handleCenterBannerTextColorClose}
              onColorSelect={handleCenterBannerTextColorChange}
            />
          </Box>
        </Grid>

        {/* Center banner text font family */}
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
              htmlFor="banner.center_banner.style.fontFamily"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select center banner text font family:
            </CustomFormLabel>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CustomSelect
                id="banner.center_banner.style.fontFamily"
                name="banner.center_banner.style.fontFamily"
                value={formik.values.banner?.center_banner?.style?.fontFamily}
                onChange={(e: any) =>
                  handleCenterBannerFontFamilyChange(e.target.value)
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
                      fontFamily: centerBannerTextFontFamily,
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

        {/* Center banner text font size */}
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
              htmlFor="banner.center_banner.style.fontSize"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select center banner text font Size:
            </CustomFormLabel>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CustomSelect
                id="banner.center_banner.style.fontSize"
                name="banner.center_banner.style.fontSize"
                value={formik.values.banner?.center_banner?.style?.fontSize}
                onChange={(e: any) =>
                  handleCenterBannerFontSizeChange(e.target.value)
                }
                customWidth={"30%"}
                variant="outlined"
              >
                <MenuItem value="">
                  <em>Choose font family</em>
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
                  paddingY: "5px",
                  height: "8rem",
                  width: "70%",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize:
                        formik.values.banner?.center_banner?.style?.fontSize,
                      paddingX: 1,
                    }}
                  >
                    font size
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Right banne rbackgroun color */}
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
              htmlFor="banner.right_banner.background_color"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select right banner background color:
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
                  setRightBannerBackgroundColorOpen(true)
                }
                name="banner.right_banner.background_color"
                id="banner.right_banner.background_color"
                value={formik.values?.banner?.right_banner?.background_color}
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {formik.values?.banner?.right_banner?.background_color}
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
                    setRightBannerBackgroundColorOpen(true)
                  }
                  sx={{
                    border: `1px solid ${formik.values?.banner?.right_banner?.background_color}`,
                    width: "60%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor:
                      formik.values?.banner?.right_banner?.background_color,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() =>
                    setRightBannerBackgroundColorOpen(true)
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
              open={rightBannerBackgroundColorOpen}
              handleClose={handleRightBannerBackgroundColorClose}
              onColorSelect={handleRightBannerBackgroundColorChange}
            />
          </Box>
        </Grid>

        {/* Right sub banner background color */}
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
              htmlFor="banner.right_banner.sub_banner.background_color"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select right sub banner background color:
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
                  setRightSubBannerBackgroundColorOpen(true)
                }
                name="banner.right_banner.sub_banner.background_color"
                id="banner.right_banner.sub_banner.background_color"
                value={
                  formik.values?.banner?.right_banner?.sub_banner
                    ?.background_color
                }
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {
                  formik.values?.banner?.right_banner?.sub_banner
                    ?.background_color
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
                    setRightSubBannerBackgroundColorOpen(true)
                  }
                  sx={{
                    border: `1px solid ${formik.values?.banner?.right_banner?.sub_banner?.background_color}`,
                    width: "60%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor:
                      formik.values?.banner?.right_banner?.sub_banner
                        ?.background_color,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() =>
                    setRightSubBannerBackgroundColorOpen(true)
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
              open={rightSubBannerBackgroundColorOpen}
              handleClose={handleRightSubBannerBackgroundColorClose}
              onColorSelect={handleRightSubBannerBackgroundColorChange}
            />
          </Box>
        </Grid>

        {/*  right banner sub banner text color  */}
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
              htmlFor="banner.right_banner.sub_banner.title.style.color"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select right sub banner title color:
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
                  setRightSubBannerTitleColorOpen(true)
                }
                name="banner.right_banner.sub_banner.title.style.color"
                id="banner.right_banner.sub_banner.title.style.color"
                value={
                  formik.values?.banner?.right_banner?.sub_banner?.title?.style
                    ?.color
                }
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {
                  formik.values?.banner?.right_banner?.sub_banner?.title?.style
                    ?.color
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
                    setRightSubBannerTitleColorOpen(true)
                  }
                  sx={{
                    border: `1px solid ${formik.values?.banner?.right_banner?.sub_banner?.title?.style?.color}`,
                    width: "60%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor:
                      formik.values?.banner?.right_banner?.sub_banner?.title
                        ?.style?.color,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() =>
                    setRightSubBannerTitleColorOpen(true)
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
              open={rightSubBannerTitleColorOpen}
              handleClose={handleRightSubBannerTextColorClose}
              onColorSelect={handleRightSubBannerTextColorChange}
            />
          </Box>
        </Grid>

        {/* right banner sub banner text fontSize */}
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
              htmlFor="banner.right_banner.sub_banner.title.style.fontSize"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select right sub banner text font size:
            </CustomFormLabel>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CustomSelect
                id="banner.right_banner.sub_banner.title.style.fontSize"
                name="banner.right_banner.sub_banner.title.style.fontSize"
                value={
                  formik?.values?.banner?.right_banner?.sub_banner?.title?.style
                    ?.fontSize
                }
                onChange={(e: any) =>
                  handleRightSubBannerTitleFontsizeChange(e.target.value)
                }
                customWidth={"30%"}
                variant="outlined"
              >
                <MenuItem value="">
                  <em>Choose font family</em>
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
                  paddingY: "5px",
                  height: "8rem",
                  width: "60%",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize:
                        formik?.values?.banner?.right_banner?.sub_banner?.title
                          ?.style?.fontSize,
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

        {/*  right banner sub banner text fontFamily */}
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
              htmlFor="banner.right_banner.sub_banner.title.style.fontFamily"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select right sub banner text font family:
            </CustomFormLabel>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CustomSelect
                id="banner.right_banner.sub_banner.title.style.fontFamily"
                name="banner.right_banner.sub_banner.title.style.fontFamily"
                value={
                  formik.values.banner?.right_banner?.sub_banner?.title?.style
                    ?.fontFamily
                }
                onChange={(e: any) =>
                  handleRightSubBannerTitleFontFamilyChange(e.target.value)
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
                      fontFamily:
                        formik.values.banner?.right_banner?.sub_banner?.title
                          ?.style?.fontFamily,
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

        {/*  right sub banner description color  */}
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
              htmlFor="banner.right_banner.sub_banner.description.style.color"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select right sub banner description color:
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
                  setRightSubBannerDescriptionColorOpen(true)
                }
                name="banner.right_banner.sub_banner.description.style.color"
                id="banner.right_banner.sub_banner.description.style.color"
                value={
                  formik.values?.banner?.right_banner?.sub_banner?.description
                    ?.style?.color
                }
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {
                  formik.values?.banner?.right_banner?.sub_banner?.description
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
                    setRightSubBannerDescriptionColorOpen(true)
                  }
                  sx={{
                    border: `1px solid ${formik.values?.banner?.right_banner?.sub_banner?.description?.style?.color}`,
                    width: "60%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor:
                      formik.values?.banner?.right_banner?.sub_banner
                        ?.description?.style?.color,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() =>
                    setRightSubBannerDescriptionColorOpen(true)
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
              open={rightSubBannerDescriptionColorOpen}
              handleClose={handleRightSubBannerDescriptionColorClose}
              onColorSelect={handleRightSubBannerDescriptionColorChange}
            />
          </Box>
        </Grid>

        {/* right banner sub banner description text fontSize */}
        <Grid item xs={12}>
          <Box
            sx={{
              marginTop: 1,
              marginBottom: 3,
              display: "flex",
              flexDirection: "column",
              //   gap: 1,
            }}
          >
            <CustomFormLabel
              htmlFor="banner.right_banner.sub_banner.description.style.fontSize"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select right sub banner description font size:
            </CustomFormLabel>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CustomSelect
                id="banner.right_banner.sub_banner.description.style.fontSize"
                name="banner.right_banner.sub_banner.description.style.fontSize"
                value={
                  formik?.values?.banner?.right_banner?.sub_banner?.description
                    ?.style?.fontSize
                }
                onChange={(e: any) =>
                  handleRightSubBannerDescriptionFontsizeChange(e.target.value)
                }
                customWidth={"30%"}
                variant="outlined"
              >
                <MenuItem value="">
                  <em>Choose font family</em>
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
                  paddingY: "5px",
                  height: "8rem",
                  width: "70%",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize:
                        formik?.values?.banner?.right_banner?.sub_banner
                          ?.description?.style?.fontSize,
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

        {/*  right banner sub banner description text fontFamily */}
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
              htmlFor="banner.right_banner.sub_banner.description.style.fontFamily"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select right sub banner text font family:
            </CustomFormLabel>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CustomSelect
                id="banner.right_banner.sub_banner.description.style.fontFamily"
                name="banner.right_banner.sub_banner.description.style.fontFamily"
                value={
                  formik.values.banner?.right_banner?.sub_banner?.description
                    ?.style?.fontFamily
                }
                onChange={(e: any) =>
                  handleRightSubBannerDescriptionFontFamilyChange(
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
                      fontFamily: rightSubBannerDescriptionFontfamily,
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

        {/*  right sub banner bottom text color  */}
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
              htmlFor="banner.right_banner.sub_banner.bottom_text.style.color"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select right sub banner bottom text color:
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
                  setRightSubBannerBottomTextColorOpen(true)
                }
                name="banner.right_banner.sub_banner.bottom_text.style.color"
                id="banner.right_banner.sub_banner.bottom_text.style.color"
                value={
                  formik.values?.banner?.right_banner?.sub_banner?.bottom_text
                    ?.style?.color
                }
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {
                  formik.values?.banner?.right_banner?.sub_banner?.bottom_text
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
                    setRightSubBannerBottomTextColorOpen(true)
                  }
                  sx={{
                    border: `1px solid ${formik.values?.banner?.right_banner?.sub_banner?.bottom_text?.style?.color}`,
                    width: "60%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor:
                      formik.values?.banner?.right_banner?.sub_banner
                        ?.bottom_text?.style?.color,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() =>
                    setRightSubBannerBottomTextColorOpen(true)
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
              open={rightSubBannerBottomTextColorOpen}
              handleClose={handleRightSubBannerBottomTextColorClose}
              onColorSelect={handleRightSubBannerBottomTextColorChange}
            />
          </Box>
        </Grid>

        {/* right banner sub banner bottom text fontSize */}
        <Grid item xs={12}>
          <Box
            sx={{
              marginTop: 1,
              marginBottom: 3,
              display: "flex",
              flexDirection: "column",
              //   gap: 1,
            }}
          >
            <CustomFormLabel
              htmlFor="banner.right_banner.sub_banner.bottom_text.style.fontSize"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select right sub banner bottom text font size:
            </CustomFormLabel>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CustomSelect
                id="banner.right_banner.sub_banner.bottom_text.style.fontSize"
                name="banner.right_banner.sub_banner.bottom_text.style.fontSize"
                value={
                  formik?.values?.banner?.right_banner?.sub_banner?.bottom_text
                    ?.style?.fontSize
                }
                onChange={(e: any) =>
                  handleRightSubBannerBottomTextFontsizeChange(e.target.value)
                }
                customWidth={"30%"}
                variant="outlined"
              >
                <MenuItem value="">
                  <em>Choose font family</em>
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
                  paddingY: "5px",
                  height: "8rem",
                  width: "70%",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize:
                        formik?.values?.banner?.right_banner?.sub_banner
                          ?.bottom_text?.style?.fontSize,
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

        {/*  right banner sub banner bottom text fontFamily */}
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
              htmlFor="banner.right_banner.sub_banner.bottom_text.style.fontFamily"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select right sub banner text font family:
            </CustomFormLabel>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CustomSelect
                id="banner.right_banner.sub_banner.bottom_text.style.fontFamily"
                name="banner.right_banner.sub_banner.bottom_text.style.fontFamily"
                value={
                  formik.values.banner?.right_banner?.sub_banner?.bottom_text
                    ?.style?.fontFamily
                }
                onChange={(e: any) =>
                  handleRightSubBannerBottomTextFontFamilyChange(e.target.value)
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
                      fontFamily: rightSubBannerBottomTextFontfamily,
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

      </Grid>
    </Box>
  );
}
