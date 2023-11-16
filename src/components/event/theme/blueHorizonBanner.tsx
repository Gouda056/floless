import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { FormikValues, useFormikContext } from "formik";
import { IconColorPicker } from "@tabler/icons-react";
import ColorPalette from "../colorPalette";
import CustomFormLabel from "../../forms/theme-elements/customFormLabel";
import CustomOutlinedInput from "../../forms/theme-elements/customOutlinedInput";
import ThemeFileUpload from "../themeFileUpload";
import CustomSelect from "../../forms/theme-elements/customSelect";
import { fontFamilies, fontSizes } from "../data";
import CustomTextField from "../../forms/theme-elements/customTextField";
interface props {
  imageUploaded: (files: any) => void;
  savedThemeValues: any;
  clearImages: boolean;
}
export default function BlueHorizonBanner({
  imageUploaded,
  savedThemeValues,
  clearImages,
}: props) {
  const formik: FormikValues = useFormikContext();
  const [bannerBackgroundColorOpen, setBannerBackgrounColorOpen] =
    useState(false);
  const [bannerBackgrounColor, setBannerBackgroundColor] = useState("#dedede");
  const [mainBannerBackgrounColorOpen, setMainBannerBackgrounColorOpen] =
    useState(false);
  const [mainBannerBackgrounColor, setMainBannerBackgroundColor] =
    useState("#dedede");
  const [bannerColorOpen, setBannerColorOpen] = useState(false);
  const [bannerColor, setBannerColor] = useState("#dedede");
  const [bannerTitleFontSize, setBannerTitleFontSize] = useState("1rem");
  const [bannerTitleFontFamily, setBannerTitleFontFamily] =
    useState("pacifico");
  const [bannerDescriptionColor, setBannerDescriptionColor] =
    useState("#dedede");
  const [bannerDesriptionOpen, setBannerDescriptionOpen] = useState(false);
  const [bannerDescriptionFontSize, setBannerDescriptionFontSize] =
    useState("1rem");
  const [bannerDescriptionFontFamily, setBannerDescriptionFontFamily] =
    useState("pacifico");

  //   Handler for banner background color open
  const handleBannerBackgrounColorClose = () => {
    setBannerBackgrounColorOpen(false);
  };
  const handleBannerBackgroundColorChange = (data: string) => {
    setBannerBackgroundColor(data);
    formik.setFieldValue("banner.backgroundColor", data);
  };

  //   Handler for main banner color pallete
  const handleMainBannerBackgrounColorClose = () => {
    setMainBannerBackgrounColorOpen(false);
  };
  const handleMainBannerBackgroundColorChange = (data: string) => {
    setMainBannerBackgroundColor(data);
    formik.setFieldValue("banner.main_banner.backgroundColor", data);
  };

  //   Handler for banner title color
  const handleBannerColorClose = () => {
    setBannerColorOpen(false);
  };

  const handleBannerColorChange = (data: string) => {
    setBannerColor(data);
    formik.setFieldValue("banner.title.style.color", data);
  };

  //   Handler for banner title font size
  const handleBannerTitleFontSizeChange = (value: string) => {
    setBannerTitleFontSize(value);
    formik.setFieldValue("banner.title.style.fontSize", value);
  };

  // Banner title font family functionality
  const handleBannerTitleFontFamilyChange = (value: string) => {
    setBannerTitleFontFamily(value);
    formik.setFieldValue("banner.title.style.fontFamily", value);
  };

  //   Handler for banner description color
  const handleBannerDescriptionColorClose = () => {
    setBannerDescriptionOpen(false);
  };
  const handleBannerDescriptionColorChange = (value: string) => {
    setBannerDescriptionColor(value);
    formik.setFieldValue("banner.description.style.color", value);
  };

  // Handler for banner description font size
  const handleBannerDescriptionFontSizeChange = (value: string) => {
    setBannerDescriptionFontSize(value);
    formik.setFieldValue("banner.description.style.fontSize", value);
  };

  //   Handler for banner description font family
  const handleBannerDescriptionFontFamilyChange = (value: string) => {
    setBannerDescriptionFontFamily(value);
    formik.setFieldValue("banner.description.style.fontFamily", value);
  };

  //   Hnadler for main banner images
  const handleImageUpload = (files: any) => {
    imageUploaded(files);
  };

  useEffect(() => {
    if (savedThemeValues !== null) {
      formik.setFieldValue(
        "banner.backgroundColor",
        savedThemeValues?.banner?.backgroundColor
      );
      formik.setFieldValue(
        "banner.main_banner.backgroundColor",
        savedThemeValues?.banner?.main_banner?.backgroundColor
      );
      formik.setFieldValue(
        "banner.title.text",
        savedThemeValues?.banner?.title?.text
      );
      formik.setFieldValue(
        "banner.title.style.color",
        savedThemeValues?.banner?.title?.style?.color
      );
      formik.setFieldValue(
        "banner.title.style.fontSize",
        savedThemeValues?.banner?.title?.style?.fontSize
      );
      formik.setFieldValue(
        "banner.title.style.fontFamily",
        savedThemeValues?.banner?.title?.style?.fontFamily
      );
      formik.setFieldValue(
        "banner.description.text",
        savedThemeValues?.banner?.description?.text
      );
      formik.setFieldValue(
        "banner.description.style.color",
        savedThemeValues?.banner?.description?.style?.color
      );
      formik.setFieldValue(
        "banner.description.style.fontSize",
        savedThemeValues?.banner?.description?.style?.fontSize
      );
      formik.setFieldValue(
        "banner.description.style.fontFamily",
        savedThemeValues?.banner?.description?.style?.fontFamily
      );
      setBannerBackgroundColor(savedThemeValues?.banner?.backgroundColor);
      setBannerBackgroundColor(savedThemeValues?.banner?.backgroundColor);
      setMainBannerBackgroundColor(
        savedThemeValues?.banner?.main_banner?.backgroundColor
      );
      setBannerColor(savedThemeValues?.banner?.title?.style?.color);
      setBannerTitleFontSize(savedThemeValues?.banner?.title?.style?.fontSize);
      setBannerTitleFontFamily(
        savedThemeValues?.banner?.title?.style?.fontFamily
      );
      setBannerDescriptionColor(
        savedThemeValues?.banner?.description?.style.color
      );
      setBannerDescriptionFontSize(
        savedThemeValues?.banner?.description?.style?.fontSize
      );
      setBannerDescriptionFontFamily(
        savedThemeValues?.banner?.description?.style?.fontFamily
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
        {/* Banner backgoround */}
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
              htmlFor="banner.backgroundColor"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select Banner Background Color:
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
                onClick={() => setBannerBackgrounColorOpen(true)}
                name="banner.backgroundColor"
                id="banner.backgroundColor"
                value={formik?.values?.banner?.backgroundColor}
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {bannerBackgrounColor}
              </CustomOutlinedInput>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <Box
                  onClick={() => setBannerBackgrounColorOpen(true)}
                  sx={{
                    border: `1px solid ${bannerBackgrounColor}`,
                    width: "60%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor: formik?.values?.banner?.backgroundColor,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() => setBannerBackgrounColorOpen(true)}
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
              open={bannerBackgroundColorOpen}
              handleClose={handleBannerBackgrounColorClose}
              onColorSelect={handleBannerBackgroundColorChange}
            />
          </Box>
        </Grid>
        {/* Main banner background color */}
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
              htmlFor="banner.main_banner.backgroundColor"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select Main Banner Background Color:
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
                  setMainBannerBackgrounColorOpen(true)
                }
                name="banner.main_banner.backgrounColor"
                id="banner.main_banner.backgrounColor"
                value={formik.values?.banner?.main_banner?.backgroundColor}
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {formik.values.banner?.main_banner?.backgroundColor}
              </CustomOutlinedInput>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <Box
                  onClick={() => setMainBannerBackgrounColorOpen(true)}
                  sx={{
                    border: `1px solid ${mainBannerBackgrounColor}`,
                    width: "60%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor:
                      formik.values?.banner?.main_banner?.backgroundColor,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() => setMainBannerBackgrounColorOpen(true)}
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
              open={mainBannerBackgrounColorOpen}
              handleClose={handleMainBannerBackgrounColorClose}
              onColorSelect={handleMainBannerBackgroundColorChange}
            />
          </Box>
        </Grid>
        {/* Banner title */}
        {/* <Grid item xs={6}>
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
              </CustomOutlinedInput>
            </Box>
          </Box>
        </Grid> */}
        {/* Banner title color */}
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
              htmlFor="banner.title.style.color"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select Banner Title Color:
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
                onClick={() => setBannerColorOpen(true)}
                name="banner.title.style.color"
                id="banner.title.style.color"
                value={formik.values?.banner?.title?.style?.color}
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {formik.value?.banner?.title?.style?.color}
              </CustomOutlinedInput>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <Box
                  onClick={() => setBannerColorOpen(true)}
                  sx={{
                    border: `1px solid ${bannerColor}`,
                    width: "60%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor: formik.values?.banner?.title?.style?.color,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() => setBannerColorOpen(true)}
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
              open={bannerColorOpen}
              handleClose={handleBannerColorClose}
              onColorSelect={handleBannerColorChange}
            />
          </Box>
        </Grid>
        {/* Banner title font size */}
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
              htmlFor="banner.title.style.fontSize"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select title font size:
            </CustomFormLabel>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <CustomSelect
                id="banner.title.style.fontSize"
                name="banner.title.style.fontSize"
                value={formik?.values?.banner?.title?.style?.fontSize}
                onChange={(e: any) =>
                  handleBannerTitleFontSizeChange(e.target.value)
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
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: bannerTitleFontSize,
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
        {/* Banner title font family */}
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
              htmlFor="banner.title.style.fontFamily"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select title font family:
            </CustomFormLabel>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CustomSelect
                id="banner.title.style.fontFamily"
                name="banner.title.style.fontFamily"
                value={formik?.values?.banner?.title?.style?.fontFamily}
                onChange={(e: any) =>
                  handleBannerTitleFontFamilyChange(e.target.value)
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
                      fontFamily: bannerTitleFontFamily,
                      paddingX: 1,
                      fontSize: "1.75rem",
                    }}
                  >
                    Font family
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        {/* Banner description color */}
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
              htmlFor="banner.description.style.color"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select Banner Description Color:
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
                onClick={() => setBannerDescriptionOpen(true)}
                name="banner.description.style.color"
                id="banner.description.style.color"
                value={formik.values?.banner?.description?.style?.color}
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {bannerDescriptionColor}
              </CustomOutlinedInput>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <Box
                  onClick={() => setBannerDescriptionOpen(true)}
                  sx={{
                    border: `1px solid ${bannerDescriptionColor}`,
                    width: "60%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor:
                      formik.values?.banner?.description?.style?.color,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() => setBannerDescriptionOpen(true)}
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
              open={bannerDesriptionOpen}
              handleClose={handleBannerDescriptionColorClose}
              onColorSelect={handleBannerDescriptionColorChange}
            />
          </Box>
        </Grid>
        {/* Banner description font size */}
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
              htmlFor="banner.description.style.fontSize"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select banner description font size:
            </CustomFormLabel>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CustomSelect
                id="banner.description.style.fontSize"
                name="banner.description.style.fontSize"
                value={formik.values.banner?.description?.style?.fontSize}
                onChange={(e: any) =>
                  handleBannerDescriptionFontSizeChange(e.target.value)
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
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: bannerDescriptionFontSize,
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
        {/* Banner description font family */}
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
              htmlFor="banner.description.style.fontFamily"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select banner description font family:
            </CustomFormLabel>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CustomSelect
                id="banner.title.description.fontFamily"
                name="banner.title.description.fontFamily"
                value={formik.values.banner?.description?.style?.fontFamily}
                onChange={(e: any) =>
                  handleBannerDescriptionFontFamilyChange(e.target.value)
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
                      fontFamily: bannerDescriptionFontFamily,
                      paddingX: 1,
                      fontSize: "1.75rem",
                    }}
                  >
                    Font family
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        {/* <Grid item xs={6}>
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
                isMultiple={true}
                formik={formik}
                clearImages={clearImages}
              />
            </Box>
          </Box>
        </Grid> */}
      </Grid>
    </Box>
  );
}
