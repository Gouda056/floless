import Image from "next/image";
import { Box, Typography } from "@mui/material";
import Lottie  from "lottie-react";
import animationData from "../../assets/no-data-found-animation.json";

export default function NoDataFound() {
  return (
    <Box
      width={"90%"}
      height={"27rem"}
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      justifyContent={"center"}
      marginX={7}
      // boxShadow={shadow_lg}
      marginY={1}
      paddingY={10}
    >
      {" "}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Lottie animationData={animationData} />
      </Box>
    </Box>
  );
}
