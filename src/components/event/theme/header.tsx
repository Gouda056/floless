import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { Formik, FormikValues, useFormik, useFormikContext } from "formik";
import { blueHorizonGlide } from "./data";
import axios from "axios";
import { forwardRef, useEffect, useState } from "react";
import ColorPalette from "../colorPalette";
import { IconColorPicker } from "@tabler/icons-react";
import CustomFormLabel from "../../forms/theme-elements/customFormLabel";
import CustomOutlinedInput from "../../forms/theme-elements/customOutlinedInput";

interface props {
  savedThemeValues?: any;
}
export default function Header({ savedThemeValues }: props) {
  const formik: FormikValues = useFormikContext();
  const [headerBgOpen, setHeaderBgOpen] = useState(false);
  const [headerBg, setHeaderBg] = useState("#F1F2F5");
  const [headerMenuIconColor, setHeaderMenuIconColor] = useState("#0000");
  const [headerMenuIconOpen, setHeaderMenuIconOpen] = useState(false);
  const [headerNavIconColor, setHeaderNavIconColor] = useState("#4C535F");
  const [headerNavIconOpen, setHeaderNavIconOpen] = useState(false);
  const [headerNavActiveTextColor, setHeaderNavActiveTextColor] =
    useState("#F1F2F5");
  const [headerNavActiveTextOpen, setHeaderNavActiveTextOpen] = useState(false);
  const [headerNavActiveBgColor, setHeaderNavActiveBgColor] = useState("#000");
  const [headerNavActiveBgColorOpen, setHeaderNavActiveBgColorOpen] =
    useState(false);
  const [headerNavActiveIconColor, setHeaderNavActiveIconColor] =
    useState("#F1F2F5");
  const [headerNavActiveIconOpen, setHeaderNavActiveIconOpen] = useState(false);
  const [dividerColorPalleteOpen, setDividerColorPalleteOpen] = useState(false);
  const [dividerColor, setDividerColor] = useState("#000");

  useEffect(() => {
    if (savedThemeValues !== null) {
      formik.setFieldValue("divider", savedThemeValues?.divider);
      formik.setFieldValue(
        "header.background_color",
        savedThemeValues?.header.background_color
      );
      formik.setFieldValue(
        "header.menu_icon_color",
        savedThemeValues?.header.menu_icon_color
      );
      formik.setFieldValue(
        "header.navigation.icon_color",
        savedThemeValues?.header?.navigation.icon_color
      );
      formik.setFieldValue(
        "header.navigation.active_text_color",
        savedThemeValues?.header?.navigation.active_text_color
      );
      formik.setFieldValue(
        "header.navigation.active_background_color",
        savedThemeValues?.header?.navigation.active_background_color
      );
      formik.setFieldValue(
        "header.navigation.active_icon_color",
        savedThemeValues?.header?.navigation.active_icon_color
      );
      setDividerColor(savedThemeValues?.divider);
      setHeaderBg(savedThemeValues?.header.background_color);
      setHeaderMenuIconColor(savedThemeValues?.header.menu_icon_color);
      setHeaderNavIconColor(savedThemeValues?.header?.navigation.icon_color);
      setHeaderNavActiveTextColor(
        savedThemeValues?.header?.navigation.active_text_color
      );
      setHeaderNavActiveBgColor(
        savedThemeValues?.header?.navigation.active_background_color
      );
      setHeaderNavActiveIconColor(
        savedThemeValues?.header?.navigation.active_icon_color
      );
    }
  }, [savedThemeValues]);

  //   Functionality for header starts here

  // Divider color
  const handleCloseDividerColor = () => {
    setDividerColorPalleteOpen(false);
  };
  const onDividerColor = (data: string) => {
    setDividerColor(data);
    formik.setFieldValue("divider", data);
  };
  // header bg field functionality
  const headerBgClose = () => {
    setHeaderBgOpen(false);
  };
  const handleHeaderBg = (data: string) => {
    setHeaderBg(data);
    formik.setFieldValue("header.background_color", data);
  };

  const headerMICLose = () => {
    setHeaderMenuIconOpen(false);
  };

  const handleHeaderMI = (data: string) => {
    setHeaderMenuIconColor(data);
    formik.setFieldValue("header.menu_icon_color", data);
  };

  // Header navigation icon functionality
  const headerNavClose = () => {
    setHeaderNavIconOpen(false);
  };
  const handleHeaderNavIcon = (data: string) => {
    setHeaderNavIconColor(data);
    formik.setFieldValue("header.navigation.icon_color", data);
  };

  // Header navigation text active color functionality
  const headerNavActiveTextClose = () => {
    setHeaderNavActiveTextOpen(false);
  };
  const handleHeaderNavActiveText = (data: string) => {
    setHeaderNavActiveTextColor(data);
    formik.setFieldValue("header.navigation.active_text_color", data);
  };

  // Header navigation active background color functionality
  const headerNavActiveBgColorClose = () => {
    setHeaderNavActiveBgColorOpen(false);
  };
  const handleHeaderNavActiveBgColor = (data: string) => {
    setHeaderNavActiveBgColor(data);
    formik.setFieldValue("header.navigation.active_background_color", data);
  };

  // Header navigation active background color functionality
  const headerNavActiveIconClose = () => {
    setHeaderNavActiveIconOpen(false);
  };
  const handleHeaderNavActiveIconColor = (data: string) => {
    setHeaderNavActiveIconColor(data);
    formik.setFieldValue("header.navigation.active_icon_color", data);
  };

  return (
    <Box sx={{ paddingX: 2 }}>
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
          htmlFor="divider"
          sx={{
            fontSize: "12px",
            fontWeight: "700",
            whiteSpace: "nowrap",
          }}
        >
          Choose divider color:
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
            onClick={() => setDividerColorPalleteOpen(true)}
            name="divider"
            id="divider"
            value={formik?.values?.divider}
            onChange={formik.handleChange}
            sx={{ width: "30%" }}
          >
            {dividerColor}
          </CustomOutlinedInput>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "15%",
            }}
          >
            <Box
              onClick={() => setDividerColorPalleteOpen(true)}
              sx={{
                border: `1px solid #dedede`,
                width: "60%",
                height: "44px",
                cursor: "pointer",
                borderRadius: "0",
                borderTopLeftRadius: "7px",
                borderBottomLeftRadius: "7px",
                backgroundColor: dividerColor,
              }}
            >
              {" "}
            </Box>
            <Box
              onClick={() => setDividerColorPalleteOpen(true)}
              sx={{
                border: "1px solid #dedede",
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
          open={dividerColorPalleteOpen}
          handleClose={handleCloseDividerColor}
          onColorSelect={onDividerColor}
        />
      </Box>
      <Typography variant="h4" sx={{ marginBottom: 1 }}>
        Header
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
              htmlFor="background_color"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Chose header background color:
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
                onClick={() => setHeaderBgOpen(true)}
                name="background_color"
                id="background_color"
                value={formik.values.header.background_color}
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {headerBg}
              </CustomOutlinedInput>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <Box
                  onClick={() => setHeaderBgOpen(true)}
                  sx={{
                    border: `1px solid #dedede`,
                    width: "60%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor: headerBg,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() => setHeaderBgOpen(true)}
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
              open={headerBgOpen}
              handleClose={headerBgClose}
              onColorSelect={handleHeaderBg}
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
              htmlFor="menu_icon_color"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Chose header menu icon color:
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
                onClick={() => setHeaderMenuIconOpen(true)}
                name="menu_icon_color"
                id="menu_icon_color"
                value={formik.values.header.menu_icon_color}
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {headerMenuIconColor}
              </CustomOutlinedInput>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <Box
                  onClick={() => setHeaderMenuIconOpen(true)}
                  sx={{
                    border: `1px solid #dedede`,
                    width: "60%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor: headerMenuIconColor,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() => setHeaderMenuIconOpen(true)}
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
              open={headerMenuIconOpen}
              handleClose={headerMICLose}
              onColorSelect={handleHeaderMI}
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
              htmlFor="header.navigation.icon_color"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select header navigation icon color:
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
                onClick={() => setHeaderNavIconOpen(true)}
                name="header.navigation.icon_color"
                id="header.navigation.icon_color"
                value={formik.values.header.navigation.icon_color}
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {headerNavIconColor}
              </CustomOutlinedInput>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <Box
                  onClick={() => setHeaderNavIconOpen(true)}
                  sx={{
                    border: `1px solid #dedede`,
                    width: "60%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor: headerNavIconColor,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() => setHeaderNavIconOpen(true)}
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
              open={headerNavIconOpen}
              handleClose={headerNavClose}
              onColorSelect={handleHeaderNavIcon}
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
              htmlFor="header.navigation.active_text_color"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select header active text color:
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
                onClick={() => setHeaderNavActiveTextOpen(true)}
                name="header.navigation.active_text_color"
                id="header.navigation.active_text_color"
                value={formik.values.header.navigation.active_text_color}
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {headerNavActiveTextColor}
              </CustomOutlinedInput>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <Box
                  onClick={() => setHeaderNavActiveTextOpen(true)}
                  sx={{
                    border: `1px solid #dedede`,
                    width: "60%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor: headerNavActiveTextColor,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() => setHeaderNavActiveTextOpen(true)}
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
              open={headerNavActiveTextOpen}
              handleClose={headerNavActiveTextClose}
              onColorSelect={handleHeaderNavActiveText}
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
              htmlFor="header.navigation.active_background_color"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select header active background color:
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
                onClick={() => setHeaderNavActiveBgColorOpen(true)}
                name="header.navigation.active_background_color"
                id="header.navigation.active_background_color"
                value={formik.values.header.navigation.active_background_color}
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {headerNavActiveBgColor}
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
                    setHeaderNavActiveBgColorOpen(true)
                  }
                  sx={{
                    border: `1px solid #dedede`,
                    width: "60%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor: headerNavActiveBgColor,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() =>
                    setHeaderNavActiveBgColorOpen(true)
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
              open={headerNavActiveBgColorOpen}
              handleClose={headerNavActiveBgColorClose}
              onColorSelect={handleHeaderNavActiveBgColor}
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
              htmlFor="header.navigation.active_icon_color"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select header active icon color:
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
                onClick={() => setHeaderNavActiveIconOpen(true)}
                name="header.navigation.active_icon_color"
                id="header.navigation.active_icon_color"
                value={formik.values.header.navigation.active_icon_color}
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {headerNavActiveIconColor}
              </CustomOutlinedInput>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <Box
                  onClick={() => setHeaderNavActiveIconOpen(true)}
                  sx={{
                    border: `1px solid #dedede`,
                    width: "60%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor: headerNavActiveIconColor,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() => setHeaderNavActiveIconOpen(true)}
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
              open={headerNavActiveIconOpen}
              handleClose={headerNavActiveIconClose}
              onColorSelect={handleHeaderNavActiveIconColor}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
