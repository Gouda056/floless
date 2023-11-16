import { Grid, Box } from "@mui/material";
import { Form } from "formik";
import CustomFormLabel from "../forms/theme-elements/customFormLabel";
import CustomOutlinedInput from "../forms/theme-elements/customOutlinedInput";
import { useColor } from "react-color-palette";
import ColorPalette from "./colorPalette";
import { useState } from "react";
import CustomTextField from "../forms/theme-elements/customTextField";
export default function HeaderThemeFields() {
  const [color, setColor] = useColor("#561ecb");
  const [headerBgOpen, setHeaderBgOpen] = useState(false);

  const onHeaderBg = (data: string) => {
    setHeaderBgOpen(false);
  }

  const handleHeaderBg = () => {
    setHeaderBgOpen(false)
  }

  return (
    <Form>
      <ColorPalette
        open={headerBgOpen}
        handleClose={handleHeaderBg}
        onColorSelect={onHeaderBg}
      />

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box
            sx={{
              marginY: 3,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <CustomFormLabel
              htmlFor="header-background-color"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Chose header background color :
            </CustomFormLabel>
            <Box
              sx={{
                display: "flex",
                gap: "2px",
                alignItems: "center",
                marginTop: 2.5,
              }}
            >
              <Box
                sx={{
                  border: "1px solid black",
                  width: "18px",
                  height: "18px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  backgroundColor: color.hex,
                }}
              >
                {" "}
              </Box>
              <CustomOutlinedInput
                name="header-background-color"
                id="header-background-color"
                sx={{ width: "90%" }}
                value={color.hex}
              >
                {color.hex}
              </CustomOutlinedInput>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              marginY: 3,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <CustomFormLabel
              htmlFor="select-theme-color"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Chose header menu icon color :
            </CustomFormLabel>
            <Box
              sx={{
                display: "flex",
                gap: "2px",
                alignItems: "center",
                marginTop: 2.5,
              }}
            >
              <Box
                sx={{
                  border: "1px solid black",
                  width: "18px",
                  height: "18px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  backgroundColor: color.hex,
                }}
              >
                {" "}
              </Box>
              <CustomOutlinedInput
                name="header-background-color"
                id="header-background-color"
                sx={{ width: "90%" }}
                value={color.hex}
              >
                {color.hex}
              </CustomOutlinedInput>
            </Box>
          </Box>
        </Grid>
        <Box sx={{ marginY: 3 }}>
          <CustomFormLabel htmlFor="select-theme-color">
            Select header navigation icon color
          </CustomFormLabel>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CustomTextField
              customWidth={"50%"}
              value={color.hex}
            ></CustomTextField>
          </Box>
        </Box>
        <Box sx={{ marginY: 3 }}>
          <CustomFormLabel htmlFor="select-theme-color">
            Select header active text color
          </CustomFormLabel>
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <CustomTextField
              customWidth={"50%"}
              value={color.hex}
            ></CustomTextField>
           
          </Box>
        </Box>
        <Box sx={{ marginY: 3 }}>
          <CustomFormLabel htmlFor="select-theme-color">
            Select header active background color
          </CustomFormLabel>
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <CustomTextField
              customWidth={"50%"}
              value={color.hex}
            ></CustomTextField>
            
          </Box>
        </Box>
        <Box sx={{ marginY: 3 }}>
          <CustomFormLabel htmlFor="select-theme-color">
            Select header active icon color
          </CustomFormLabel>
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <CustomTextField
              customWidth={"50%"}
              value={color.hex}
            ></CustomTextField>
            
          </Box>
        </Box>
      </Grid>
    </Form>
  );
}
