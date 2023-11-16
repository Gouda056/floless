import { Box, Divider, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ColorPalette from "../colorPalette";
import CustomFormLabel from "../../forms/theme-elements/customFormLabel";
import { IconColorPicker } from "@tabler/icons-react";
import CustomOutlinedInput from "../../forms/theme-elements/customOutlinedInput";
import { FormikValues, useFormikContext } from "formik";

interface props {
  savedThemeValues?: any;
}

export default function Tags({ savedThemeValues }: props) {
  const formik: FormikValues = useFormikContext();
  const [tagStyleColor, setTagStyleColor] = useState("#000");
  const [tagStyleColorOpen, setTagStyleColorOpen] = useState(false);
  const [tagStyleBorderColor, setTagStyleBorderColor] = useState("#C7C7C7");
  const [tagStyleBorderOpen, setTagStyleBorderOpen] = useState(false);
  const [tagStyleBackground, setTagStyleBackground] = useState("#ffff");
  const [tagStyleBackgroundOpen, setTagStyleBackgroundOpen] = useState(false);
  const [tagActiveBackground, setTagActiveBackground] = useState("#2F2F2F");
  const [tagActiveBackgroundOpen, setTagActiveBackgroundOpen] = useState(false);
  const [tagActiveColor, setTagActiveColor] = useState("#FFFFFF");
  const [tagActiveColorOpen, setTagActiveColorOpen] = useState(false);
  const [tagActiveBorderColor, setTagActiveBorderColor] = useState("#2F2F2F");
  const [tagActiveBorderColorOpen, setTagActiveBorderColorOpen] =
    useState(false);

  // Tag style color functionality
  const handleTagStyleColorClose = () => {
    setTagStyleColorOpen(false);
  };
  const handleTagStyleColorChange = (data: string) => {
    setTagStyleColor(data);
    formik.setFieldValue("tags.style.color", data);
  };

  // Tag style border color functionality
  const handleTagStyleBorderClose = () => {
    setTagStyleBorderOpen(false);
  };
  const handleTagStyleBorderChange = (data: string) => {
    setTagStyleBorderColor(data);
    formik.setFieldValue("tags.style.borderColor", data);
  };

  // Tag style background color functionality
  const handleTagStyleBackgroundClose = () => {
    setTagStyleBackgroundOpen(false);
  };
  const handleTagStyleBackgroundChange = (data: string) => {
    setTagStyleBackground(data);
    formik.setFieldValue("tags.style.backgroundColor", data);
  };

  //   Tag style active background color functionality
  const handleTagActiveBackgroundClose = () => {
    setTagActiveBackgroundOpen(false);
  };

  const handleTagActiveBackgroundChange = (data: string) => {
    setTagActiveBackground(data);
    formik.setFieldValue("tags.active.backgroundColor", data);
  };

  // Tag active color functionality
  const handleTagActiveColorClose = () => {
    setTagActiveColorOpen(false);
  };
  const handleTagActiveColorChange = (data: string) => {
    setTagActiveColor(data);
    formik.setFieldValue("tags.active.color", data);
  };

  // Tag active border color functionality
  const handleTagActiveBorderColorClose = () => {
    setTagActiveBorderColorOpen(false);
  };
  const handleTagActiveBorderColorChange = (data: string) => {
    setTagActiveBorderColor(data);
    formik.setFieldValue("tags.active.borderColor", data);
  };

  useEffect(() => {
    if (savedThemeValues !== null) {
      formik.setFieldValue(
        "tags.style.color",
        savedThemeValues?.tags.style.color
      );
      formik.setFieldValue(
        "tags.style.backgroundColor",
        savedThemeValues?.tags.backgroundColor
      );
      formik.setFieldValue(
        "tags.style.borderColor",
        savedThemeValues?.tags.style.borderColor
      );
      formik.setFieldValue(
        "tags.active.backgroundColor",
        savedThemeValues?.tags.active.backgroundColor
      );
      formik.setFieldValue(
        "tags.active.color",
        savedThemeValues?.tags.active.color
      );
      formik.setFieldValue(
        "tags.active.borderColor",
        savedThemeValues?.tags.active.borderColor
      );
      setTagStyleColor(savedThemeValues?.tags.style.color);
      setTagStyleBorderColor(savedThemeValues?.tags.style.borderColor);
      setTagStyleBackground(savedThemeValues?.tags.backgroundColor);
      setTagActiveBackground(savedThemeValues?.tags.active.backgroundColor);
      setTagActiveColor(savedThemeValues?.tags.active.color);
      setTagActiveBorderColor(savedThemeValues?.tags.active.borderColor);
    }
  }, [savedThemeValues]);

  return (
    <Box sx={{ paddingX: 2 }}>
      <Typography variant="h4" sx={{ marginBottom: 1 }}>
        Tag
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
              htmlFor="tags.style.color"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select tag style color:
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
                onClick={() => setTagStyleColorOpen(true)}
                name="tags.style.color"
                id="tags.style.color"
                value={formik.values.tags.style.color}
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {tagStyleColor}
              </CustomOutlinedInput>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <Box
                  onClick={() => setTagStyleColorOpen(true)}
                  sx={{
                    border: `1px solid ${tagStyleColor}`,
                    width: "60%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor: tagStyleColor,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() => setTagStyleColorOpen(true)}
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
              open={tagStyleColorOpen}
              handleClose={handleTagStyleColorClose}
              onColorSelect={handleTagStyleColorChange}
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
              htmlFor="tags.style.borderColor"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select tag border color:
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
                onClick={() => setTagStyleBorderOpen(true)}
                name="tags.style.borderColor"
                id="tags.style.borderColor"
                value={formik.values.tags.style.borderColor}
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {tagStyleBorderColor}
              </CustomOutlinedInput>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <Box
                  onClick={() => setTagStyleBorderOpen(true)}
                  sx={{
                    border: `1px solid #dedede`,
                    width: "60%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor: tagStyleBorderColor,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() => setTagStyleBorderOpen(true)}
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
              open={tagStyleBorderOpen}
              handleClose={handleTagStyleBorderClose}
              onColorSelect={handleTagStyleBorderChange}
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
              htmlFor="tags.style.backgroundColor"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select tag background color:
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
                onClick={() => setTagStyleBackgroundOpen(true)}
                name="tags.style.backgroundColor"
                id="tags.style.backgroundColor"
                value={formik.values.tags.style.backgroundColor}
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {tagStyleBackground}
              </CustomOutlinedInput>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <Box
                  onClick={() => setTagStyleBackgroundOpen(true)}
                  sx={{
                    border: `1px solid #dedede`,
                    width: "60%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor: tagStyleBackground,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() => setTagStyleBackgroundOpen(true)}
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
              open={tagStyleBackgroundOpen}
              handleClose={handleTagStyleBackgroundClose}
              onColorSelect={handleTagStyleBackgroundChange}
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
              htmlFor="tags.active.backgroundColor"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select tag active background color:
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
                onClick={() => setTagActiveBackgroundOpen(true)}
                name="tags.active.backgroundColor"
                id="tags.active.backgroundColor"
                value={formik.values.tags.active.backgroundColor}
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {tagActiveBackground}
              </CustomOutlinedInput>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <Box
                  onClick={() => setTagActiveBackgroundOpen(true)}
                  sx={{
                    border: `1px solid ${tagActiveBackground}`,
                    width: "60%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor: tagActiveBackground,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() => setTagActiveBackgroundOpen(true)}
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
              open={tagActiveBackgroundOpen}
              handleClose={handleTagActiveBackgroundClose}
              onColorSelect={handleTagActiveBackgroundChange}
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
              htmlFor="tags.active.color"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select tag active color:
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
                onClick={() => setTagActiveColorOpen(true)}
                name="tags.active.color"
                id="tags.active.color"
                value={formik.values.tags.active.color}
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {tagActiveColor}
              </CustomOutlinedInput>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <Box
                  onClick={() => setTagActiveColorOpen(true)}
                  sx={{
                    border: `1px solid #dedede`,
                    width: "60%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor: tagActiveColor,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() => setTagActiveColorOpen(true)}
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
              open={tagActiveColorOpen}
              handleClose={handleTagActiveColorClose}
              onColorSelect={handleTagActiveColorChange}
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
              htmlFor="tags.active.borderColor"
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              Select tag active border color:
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
                onClick={() => setTagActiveBorderColorOpen(true)}
                name="tags.active.borderColor"
                id="tags.active.borderColor"
                value={formik.values.tags.active.borderColor}
                onChange={formik.handleChange}
                sx={{ width: "60%" }}
              >
                {tagActiveBorderColor}
              </CustomOutlinedInput>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <Box
                  onClick={() => setTagActiveBorderColorOpen(true)}
                  sx={{
                    border: `1px solid ${tagActiveBorderColor}`,
                    width: "60%",
                    height: "44px",
                    cursor: "pointer",
                    borderRadius: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor: tagActiveBorderColor,
                  }}
                >
                  {" "}
                </Box>
                <Box
                  onClick={() => setTagActiveBorderColorOpen(true)}
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
              open={tagActiveBorderColorOpen}
              handleClose={handleTagActiveBorderColorClose}
              onColorSelect={handleTagActiveBorderColorChange}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
