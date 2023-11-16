import { Grid, Box, MenuItem, Typography, Divider } from "@mui/material";
import { IconColorPicker } from "@tabler/icons-react";
import { FormikValues, useFormikContext } from "formik";
import ColorPalette from "../colorPalette";
import CustomFormLabel from "../../forms/theme-elements/customFormLabel";
import CustomSelect from "../../forms/theme-elements/customSelect";
import CustomOutlinedInput from "../../forms/theme-elements/customOutlinedInput";
import { useEffect, useState } from "react";
import { fontFamilies, fontSizes } from "../data";
import ThemeFileUpload from "../themeFileUpload";

interface props {
  imageUploaded: (files: any) => void;
  clearImages: boolean;
  savedThemeValues: any;
}

export default function SubtleBlendBanner({
  imageUploaded,
  clearImages,
  savedThemeValues,
}: props) {
  const formik: FormikValues = useFormikContext();

  const [bannerBackgroundColor, setBannerBackgroundColor] = useState("#dedede");
  const [bannerBackgroundColorOpen, setBannerBackgroundColorOpen] =
    useState(false);
  const [rightBannerTitleTextColor, setRightBannerTitleTextColor] =
    useState("#dedede");
  const [rightBannerTitleTextColorOpen, setRightBannerTitleTextColorOpen] =
    useState(false);
  const [rightBannerTitleFontsize, setRightBannerTitleFontsize] =
    useState("1rem");
  const [rightBannerTitleFontfamily, setRightBannerTitleFontfamily] =
    useState("pacifico");

  const [rightBannerDescriptionTextColor, setRightBannerDescriptionTextColor] =
    useState("#dedede");
  const [
    rightBannerDescriptionTextColorOpen,
    setRightBannerDescriptionTextColorOpen,
  ] = useState(false);
  const [rightBannerDescriptionFontsize, setRightBannerDescriptionFontsize] =
    useState("1rem");
  const [
    rightBannerDescriptionFontfamily,
    setRightBannerDescriptionFontfamily,
  ] = useState("pacifico");

  // Handler for setting right banner text color
  const handleBannerBackgroundColorClose = () => {
    setBannerBackgroundColorOpen(false);
  };
  const handleBannerBackgroundColorChange = (value: string) => {
    setBannerBackgroundColor(value);
    formik.setFieldValue("banner.backgroundColor", value);
  };

  // Handler for setting right banner text color
  const handleBannerTitleColorClose = () => {
    setRightBannerTitleTextColorOpen(false);
  };
  const handleBannerTitleColorChange = (value: string) => {
    setRightBannerTitleTextColor(value);
    formik.setFieldValue("banner.right_banner.title.style.color", value);
  };

  // Handler for right banner title font size
  const handleRightBannerTitleFontSizeChange = (value: string) => {
    setRightBannerTitleFontsize(value);
    formik.setFieldValue("banner.right_banner.title.style.fontSize", value);
  };

  // Handler for right banner title font family
  const handleRightBannerTitleFontFamilyChange = (value: string) => {
    setRightBannerTitleFontfamily(value);
    formik.setFieldValue("banner.right_banner.title.style.fontFamily", value);
  };

  // Handler for setting right banner description text color
  const handleRightBannerDesccriptionColorClose = () => {
    setRightBannerDescriptionTextColorOpen(false);
  };
  const handleRightBannerDescriptionColorChange = (value: string) => {
    setRightBannerDescriptionTextColor(value);
    formik.setFieldValue("banner.right_banner.description.style.color", value);
  };

  // Handler for right banner description font size
  const handleRightBannerDescriptionFontSizeChange = (value: string) => {
    setRightBannerDescriptionFontsize(value);
    formik.setFieldValue(
      "banner.right_banner.description.style.fontSize",
      value
    );
  };

  // Handler for right banner description font family
  const handleRightBannerDescriptionFontFamilyChange = (value: string) => {
    setRightBannerDescriptionFontfamily(value);
    formik.setFieldValue(
      "banner.right_banner.description.style.fontFamily",
      value
    );
  };

  //   Hnadler for main banner images
  const handleImageUpload = (files: any) => {
    imageUploaded(files);
  };

  useEffect(() => {
    if (savedThemeValues) {
      formik.setFieldValue(
        "banner.backgroundColor",
        savedThemeValues?.banner?.backgroundColor
      );
      formik.setFieldValue(
        "banner.right_banner.title.text",
        savedThemeValues?.banner?.right_banner?.title?.text
      );
      formik.setFieldValue(
        "banner.right_banner.title.style.color",
        savedThemeValues?.banner?.right_banner?.title?.style?.color
      );
      formik.setFieldValue(
        "banner.right_banner.title.style.fontSize",
        savedThemeValues?.banner?.right_banner?.title?.style?.fontSize
      );
      formik.setFieldValue(
        "banner.right_banner.title.style.fontFamily",
        savedThemeValues?.banner?.right_banner?.title?.style?.fontFamily
      );
      formik.setFieldValue(
        "banner.right_banner.description.text",
        savedThemeValues?.banner?.right_banner?.description?.text
      );
      formik.setFieldValue(
        "banner.right_banner.description.style.color",
        savedThemeValues?.banner?.right_banner?.description?.style?.color
      );
      formik.setFieldValue(
        "banner.right_banner.description.style.fontSize",
        savedThemeValues?.banner?.right_banner?.description?.style?.fontSize
      );
      formik.setFieldValue(
        "banner.right_banner.description.style.fontFamily",
        savedThemeValues?.banner?.right_banner?.description?.style?.fontFamily
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
        {/* banner backgroun color */}
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
              Select banner background color:
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
                onClick={() => setBannerBackgroundColorOpen(true)}
                name="banner.backgroundColor"
                id="banner.backgroundColor"
                value={formik.values?.banner?.backgroundColor}
                onChange={formik.handleChange}
                sx={{ width: "60%" }}

              >
                {formik.values?.banner?.backgroundColor}
              </CustomOutlinedInput>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <Box
                  onClick={() => setBannerBackgroundColorOpen(true)}
                  sx={{
                    border: `1px solid #dedede`,
                    width: "60%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor: formik.values?.banner?.backgroundColor,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() => setBannerBackgroundColorOpen(true)}
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
              handleClose={handleBannerBackgroundColorClose}
              onColorSelect={handleBannerBackgroundColorChange}
            />
          </Box>
        </Grid>

        {/*  Banner title text  color  */}
        <Grid item xs={6}>
          <Box
            sx={{
              marginTop: 3,
              marginBottom: 3,
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            <CustomFormLabel
              htmlFor="banner.right_banner.title.style.color"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select right banner title text color:
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
                  setRightBannerTitleTextColorOpen(true)
                }
                name="banner.right_banner.title.style.color"
                id="banner.right_banner.title.style.color"
                value={formik.values?.banner?.right_banner?.title?.style?.color}
                onChange={formik.handleChange}
                sx={{ width: "60%" }}

              >
                {formik.values?.banner?.right_banner?.title?.style?.color}
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
                    setRightBannerTitleTextColorOpen(true)
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
                      formik.values?.banner?.right_banner?.title?.style?.color,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() =>
                    setRightBannerTitleTextColorOpen(true)
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
              open={rightBannerTitleTextColorOpen}
              handleClose={handleBannerTitleColorClose}
              onColorSelect={handleBannerTitleColorChange}
            />
          </Box>
        </Grid>

        {/* Banner title text fontSize */}
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
              htmlFor="banner.right_banner.title.text.style.fontSize"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select right banner title font size:
            </CustomFormLabel>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CustomSelect
                id="banner.right_banner.title.style.fontSize"
                name="banner.right_banner.title.style.fontSize"
                value={
                  formik?.values?.banner?.right_banner?.title?.style?.fontSize
                }
                onChange={(e: any) =>
                  handleRightBannerTitleFontSizeChange(e.target.value)
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
                  height: "8rem",
                  width: "70%",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize:
                        formik?.values?.banner?.right_banner?.title?.style
                          ?.fontSize,
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

        {/*  Banner title text fontFamily */}
        <Grid item xs={12}>
          -
          <Box
            sx={{
              marginY: 3,
              display: "flex",
              flexDirection: "column",
              //   gap: 1,
            }}
          >
            <CustomFormLabel
              htmlFor="banner.right_banner.title.style.fontFamily"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select right banner title font family:
            </CustomFormLabel>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CustomSelect
                id="banner.right_banner.title.style.fontFamily"
                name="banner.right_banner.title.style.fontFamily"
                value={
                  formik?.values?.banner?.right_banner?.title?.style?.fontFamily
                }
                onChange={(e: any) =>
                  handleRightBannerTitleFontFamilyChange(e.target.value)
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
                      fontFamily: rightBannerTitleFontfamily,
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

        {/*  banner description text color  */}
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
              htmlFor="banner.right_banner.description.style.color"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select right banner description text color:
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
                  setRightBannerDescriptionTextColorOpen(true)
                }
                name="banner.right_banner.description.style.color"
                id="banner.right_banner.description.style.color"
                value={
                  formik.values?.banner?.right_banner?.description?.style?.color
                }
                onChange={formik.handleChange}
                sx={{ width: "60%" }}

              >
                {formik.values?.banner?.right_banner?.description?.style?.color}
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
                    setRightBannerDescriptionTextColorOpen(true)
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
                      formik.values?.banner?.right_banner?.description?.style
                        ?.color,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() =>
                    setRightBannerDescriptionTextColorOpen(true)
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
              open={rightBannerDescriptionTextColorOpen}
              handleClose={handleRightBannerDesccriptionColorClose}
              onColorSelect={handleRightBannerDescriptionColorChange}
            />
          </Box>
        </Grid>

        {/* right banner sub banner bottom text fontSize */}
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
              htmlFor="banner.right_banner.description.style.fontSize"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select right banner text font size:
            </CustomFormLabel>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CustomSelect
                id="banner.right_banner.description.style.fontSize"
                name="banner.right_banner.description.style.fontSize"
                value={
                  formik?.values?.banner?.right_banner?.description?.style
                    ?.fontSize
                }
                onChange={(e: any) =>
                  handleRightBannerDescriptionFontSizeChange(e.target.value)
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
                  height: "8rem",
                  width: "70%",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize:
                        formik?.values?.banner?.right_banner?.description?.style
                          ?.fontSize,
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
              htmlFor="banner.right_banner.description.style.fontFamily"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select right banner text font family:
            </CustomFormLabel>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CustomSelect
                id="banner.right_banner.description.style.fontFamily"
                name="banner.right_banner.description.style.fontFamily"
                value={
                  formik?.values?.banner?.right_banner?.description?.style
                    ?.fontFamily
                }
                onChange={(e: any) =>
                  handleRightBannerDescriptionFontFamilyChange(e.target.value)
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
                        formik?.values?.banner?.right_banner?.description?.style
                          ?.fontFamily,
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
