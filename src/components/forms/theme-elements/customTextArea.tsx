import React from "react";
import { styled } from "@mui/material/styles";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const CustomTextarea = styled(
  ({ customHeight, customWidth, ...props }: any) => (
    <TextareaAutosize {...props} />
  )
)(({ theme, customHeight, customWidth }) => ({
  "&::placeholder": {
    color: theme.palette.text.secondary,
    opacity: "0.8",
  },
  width: customWidth ? customWidth : "100%",
  height: customHeight ? `${customHeight}!important` : "48px !important",
  borderColor: theme.palette.grey[200],
  borderRadius: "5px",
  padding: "8px",
  resize: "none",
  fontFamily: "Helvetica",
  "&:focus": {
    borderColor: "transparent",
    outline: "1px solid blue",
  },
  "&:hover": {
    border: `1px solid ${theme.palette.grey[200]}`,
    borderColor: theme.palette.grey[200],
  },
  "&:focus:hover": {
    border: `1px solid ${theme.palette.grey[200]}`,
    borderColor: theme.palette.grey[200],
  },
  "& .MuiInputBase-input.MuiOutlinedInput-input": {
    color: theme.palette.grey[200],
  },
}));

export default CustomTextarea;
