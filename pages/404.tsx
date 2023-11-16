import { useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Container, Typography, Button } from "@mui/material";
import Link from "next/link";
import Lottie from "lottie-react";
import comingsoon from "../src/assets/comingsoon.json";

export default function Custom404() {
  const router = useRouter();

  // useEffect(() => {
  //   router.replace("/auth/error");
  // });

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      textAlign="center"
      justifyContent="center"
    >
      <Container maxWidth="md">
        <Lottie style={{ height: 400 }} animationData={comingsoon} />

        <Typography align="center" variant="h1"></Typography>
        <Typography align="center" variant="h4"></Typography>
        <Button
          color="primary"
          variant="contained"
          component={Link}
          href="/"
          disableElevation
        >
          Go Back to Home
        </Button>
      </Container>
    </Box>
  );
}
Custom404.layout = "Landing";
