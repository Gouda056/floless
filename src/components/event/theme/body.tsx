import { Box, Divider, Grid, MenuItem, Typography } from "@mui/material";
import { IconColorPicker } from "@tabler/icons-react";
import ColorPalette from "../colorPalette";
import { useEffect, useState } from "react";
import { FormikValues, useFormik, useFormikContext } from "formik";
import CustomFormLabel from "../../forms/theme-elements/customFormLabel";
import CustomOutlinedInput from "../../forms/theme-elements/customOutlinedInput";
import CustomSelect from "../../forms/theme-elements/customSelect";
import { fontFamilies, fontSizes } from "../data";

interface props {
  savedThemeValues?: any;
}

export default function Body({ savedThemeValues }: props) {
  const formik: FormikValues = useFormikContext();
  const [bodyBackgroundColor, setBodyBackgroundColor] = useState("#dedede");
  const [bodyBackgroundOpen, setBodyBackgroundOpen] = useState(false);
  const [bodyBorderColor, setBodyBorderColor] = useState("#dedede");
  const [bodyBorderColorOpen, setBodyBorderColorOpen] = useState(false);
  const [bodyTextColor, setBodyTextColor] = useState("#dedede");
  const [bodyTextColorOpen, setBodyTextColorOpen] = useState(false);
  const [bodyFontSize, setBodyFontSize] = useState("1rem");
  const [bodyFontFamily, setBodyFontFamily] = useState("'Bevan', serif");

  // Body background color functionality
  const bodyBackgroundClose = () => {
    setBodyBackgroundOpen(false);
  };
  const handleBodyBackgroundColor = (data: string) => {
    setBodyBackgroundColor(data);
    formik.setFieldValue("body.backgroundColor", data);
  };

  // Body border color functionality
  const bodyBorderColorClose = () => {
    setBodyBorderColorOpen(false);
  };
  const handleBodyBorderColor = (data: string) => {
    setBodyBorderColor(data);
    formik.setFieldValue("body.borderColor", data);
  };

  // Body text color functionality
  const bodyTextColorClose = () => {
    setBodyTextColorOpen(false);
  };
  const handleBodyTextColor = (data: string) => {
    setBodyTextColor(data);
    formik.setFieldValue("body.color", data);
  };

  // Body font size functionality
  const handleFontSizeChange = (value: string) => {
    setBodyFontSize(value);
    formik.setFieldValue("body.fontSize", value);
  };

  // Body font family functionality
  const handleFontFamilyChange = (value: string) => {
    setBodyFontFamily(value);
    formik.setFieldValue("body.fontFamily", value);
  };

  // Set field state variable value on savedtheme value received
  useEffect(() => {
    if (savedThemeValues !== null) {
      formik.setFieldValue(
        "body.backgroundColor",
        savedThemeValues?.body?.backgroundColor
      );
      formik.setFieldValue("body.color", savedThemeValues?.body.color);
      formik.setFieldValue(
        "body.fontFamily",
        savedThemeValues?.body.fontFamily
      );
      formik.setFieldValue(
        "body.borderColor",
        savedThemeValues?.body.borderColor
      );
      formik.setFieldValue("body.fontSize", savedThemeValues?.body.fontSize);
      setBodyBackgroundColor(savedThemeValues?.body.background_color);
      setBodyBorderColor(savedThemeValues?.body.borderColor);
      setBodyTextColor(savedThemeValues?.body.color);
      setBodyFontSize(savedThemeValues?.body.fontSize);
      setBodyFontFamily(savedThemeValues?.body.fontFamily);
    }
  }, [savedThemeValues]);

  return (
    <Box sx={{ paddingX: 2 }}>
      <Typography variant="h4" sx={{ marginBottom: 1 }}>
        Body
      </Typography>
      <Divider></Divider>
      <Grid container spacing={1}>
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
              htmlFor="body.background_color"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select body background color:
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
                onClick={() => setBodyBackgroundOpen(true)}
                name="body.backgroundColor"
                id="body.backgroundColor"
                value={formik.values.body.backgroundColor}
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {bodyBackgroundColor}
              </CustomOutlinedInput>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <Box
                  onClick={() => setBodyBackgroundOpen(true)}
                  sx={{
                    border: `1px solid #dedede`,
                    width: "60%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor: formik.values.body.backgroundColor,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() => setBodyBackgroundOpen(true)}
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
              open={bodyBackgroundOpen}
              handleClose={bodyBackgroundClose}
              onColorSelect={handleBodyBackgroundColor}
            />
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
              htmlFor="body.borderColor"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select body border color:
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
                onClick={() => setBodyBorderColorOpen(true)}
                name="body.borderColor"
                id="body.borderColor"
                value={formik.values.body.borderColor}
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {bodyBorderColor}
              </CustomOutlinedInput>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <Box
                  onClick={() => setBodyBorderColorOpen(true)}
                  sx={{
                    border: `1px solid #dedede`,
                    width: "60%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor: bodyBorderColor,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() => setBodyBorderColorOpen(true)}
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
              open={bodyBorderColorOpen}
              handleClose={bodyBorderColorClose}
              onColorSelect={handleBodyBorderColor}
            />
          </Box>
        </Grid>
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
              htmlFor="body.fontSize"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select body font size:
            </CustomFormLabel>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <CustomSelect
                id="body.fontSize"
                name="body.fontSize"
                value={formik.values.body.fontSize}
                onChange={(e: any) => handleFontSizeChange(e.target.value)}
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
                  flexWrap: "wrap",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: bodyFontSize,
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
              htmlFor="body.fontFamily"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                // whiteSpace: "nowrap",
              }}
            >
              Select body font family:
            </CustomFormLabel>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <CustomSelect
                id="body.fontFamily"
                name="body.fontFamily"
                value={formik.values.body.fontFamily}
                onChange={(e: any) => handleFontFamilyChange(e.target.value)}
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
                      fontFamily: bodyFontFamily,
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
              htmlFor="body.color"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select body text color:
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
                onClick={() => setBodyTextColorOpen(true)}
                name="body.color"
                id="body.color"
                value={formik.values.body.color}
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {bodyTextColor}
              </CustomOutlinedInput>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <Box
                  onClick={() => setBodyTextColorOpen(true)}
                  sx={{
                    border: `1px solid ${bodyTextColor}`,
                    width: "60%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor: bodyTextColor,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() => setBodyTextColorOpen(true)}
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
              open={bodyTextColorOpen}
              handleClose={bodyTextColorClose}
              onColorSelect={handleBodyTextColor}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
