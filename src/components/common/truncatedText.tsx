import React from "react";
import { Typography } from "@mui/material";
interface props {
  text: string;
  maxLength: number;
  color: string;
}
const TruncatedText = ({ text, maxLength, color }: props) => {
  if (!text || text.length === 0) {
    return null;
  }
  if (text.length <= maxLength) {
    return (
      <Typography
        variant="h6"
        color="primary"
        sx={{ paddingX: 1, fontWeight: "500" }}
      >
        {text}
      </Typography>
    );
  }

  const truncatedText = text.slice(0, maxLength) + "...";

  return (
    <Typography
      variant="h6"
      color={color}
      sx={{
        paddingX: 1,
        fontWeight: "500",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        cursor: "pointer", // Add a cursor to indicate it's clickable
      }}
      title={text} // Tooltip with full text
    >
      {truncatedText}
    </Typography>
  );
};

export default TruncatedText;
