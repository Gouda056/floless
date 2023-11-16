import { Grid, Box, MenuItem, Typography, Divider } from "@mui/material";
import CustomOutlinedInput from "../../forms/theme-elements/customOutlinedInput";
import CustomFormLabel from "../../forms/theme-elements/customFormLabel";
import { FormikValues, useFormikContext } from "formik";
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

export default function ShadowSteelBanner({
  imageUploaded,
  clearImages,
  savedThemeValues,
}: props) {
  const formik: FormikValues = useFormikContext();
  const [bannerTitleTextColor, setBannerTitleTextColor] = useState("#dedede");
  const [bannerTitleTextColorOpen, setBannerTitleTextColorOpen] =
    useState(false);
  const [bannerTitleTextFontsize, setBannerTitleTextFontsize] =
    useState("1rem");
  const [bannerTitleTextFontfamily, setBannerTitleTextFontfamily] =
    useState("pacifico");

  const [bannerDescriptionTextColor, setBannerDescriptionTextColor] =
    useState("#dedede");
  const [bannerDescriptionTextColorOpen, setBannerDescriptionTextColorOpen] =
    useState(false);
  const [bannerDescriptionTextFontsize, setBannerDescriptionTextFontsize] =
    useState("1rem");
  const [bannerDescriptionTextFontfamily, setBannerDescriptionTextFontfamily] =
    useState("pacifico");

  //   Hnadler for main banner images
  const handleImageUpload = (files: any) => {
    imageUploaded(files);
  };

  // Handler for setting banner text color
  const handleBannerTitleColorClose = () => {
    setBannerTitleTextColorOpen(false);
  };
  const handleBannerTitleColorChange = (value: string) => {
    setBannerTitleTextColor(value);
    formik.setFieldValue("banner.title.style.color", value);
  };

  // Handler for banner title font size
  const handleBannerTitleFontSizeChange = (value: string) => {
    setBannerTitleTextFontsize(value);
    formik.setFieldValue("banner.title.style.fontSize", value);
  };

  // Handler for banner title font family
  const handleBannerTitleFontFamilyChange = (value: string) => {
    setBannerTitleTextFontfamily(value);
    formik.setFieldValue("banner.title.style.fontFamily", value);
  };

  // Handler for setting banner description text color
  const handleBannerDescriptionColorClose = () => {
    setBannerDescriptionTextColorOpen(false);
  };
  const handleBannerDescriptionColorChange = (value: string) => {
    setBannerDescriptionTextColor(value);
    formik.setFieldValue("banner.description.style.color", value);
  };

  // Handler for banner description font size
  const handleBannerDescriptionFontSizeChange = (value: string) => {
    setBannerDescriptionTextFontsize(value);
    formik.setFieldValue("banner.description.style.fontSize", value);
  };

  // Handler for banner description font family
  const handleBannerDescriptionFontFamilyChange = (value: string) => {
    setBannerDescriptionTextFontfamily(value);
    formik.setFieldValue("banner.description.style.fontFamily", value);
  };

  useEffect(() => {
    if (savedThemeValues) {
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
    }
  }, [savedThemeValues]);

  return (
    <Box sx={{ paddingX: 2 }}>
      <Typography variant="h4" sx={{ marginBottom: 1 }}>
        Banner
      </Typography>
      <Divider></Divider>
      <Grid container>
        {/*  Banner title text  color  */}
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
              Select banner title color:
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
                onClick={() => setBannerTitleTextColorOpen(true)}
                name="banner.title.style.color"
                id="banner.title.style.color"
                value={formik.values?.banner?.title?.style?.color}
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {formik.values?.banner?.title?.style?.color}
              </CustomOutlinedInput>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <Box
                  onClick={() => setBannerTitleTextColorOpen(true)}
                  sx={{
                    border: `1px solid ${formik.values?.banner?.title?.style?.color}`,
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
                  onClick={() => setBannerTitleTextColorOpen(true)}
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
              open={bannerTitleTextColorOpen}
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
              htmlFor="banner.title.style.fontSize"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select banner title font size:
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
                      fontSize: formik?.values?.banner?.title?.style?.fontSize,
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

        {/*  Banner titile text fontFamily */}
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
              htmlFor="banner.title.text.style.fontFamily"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select banner title text font family:
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
                      fontFamily:
                        formik?.values?.banner?.title?.style?.fontFamily,
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
              htmlFor="banner.description.style.color"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select banner description text color:
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
                  setBannerDescriptionTextColorOpen(true)
                }
                name="banner.description.style.color"
                id="banner.description.style.color"
                value={formik.values?.banner?.description?.style?.color}
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {formik.values?.banner?.description?.style?.color}
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
                    setBannerDescriptionTextColorOpen(true)
                  }
                  sx={{
                    border: `1px solid ${formik.values?.banner?.description?.style?.color}`,
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
                  onClick={() =>
                    setBannerDescriptionTextColorOpen(true)
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
              open={bannerDescriptionTextColorOpen}
              handleClose={handleBannerDescriptionColorClose}
              onColorSelect={handleBannerDescriptionColorChange}
            />
          </Box>
        </Grid>

        {/* banner description fontSize */}
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
                value={formik?.values?.banner?.description?.style?.fontSize}
                onChange={(e: any) =>
                  handleBannerDescriptionFontSizeChange(e.target.value)
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
                        formik?.values?.banner?.description?.style?.fontSize,
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

        {/*  banner description text fontFamily */}
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
              Select right sub banner text font family:
            </CustomFormLabel>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CustomSelect
                id="banner.description.style.fontFamily"
                name="banner.description.style.fontFamily"
                value={formik?.values?.banner?.description?.style?.fontFamily}
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
                      fontFamily:
                        formik?.values?.banner?.description?.style?.fontFamily,
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
