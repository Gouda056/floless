import { Typography, Box } from "@mui/material";
import Testimonial from "./testimonial";

const Testimonials = () => {
  return (
    <Box
      sx={{
        padding: {
          xs: "3rem 0",
          md: "6rem 0",
        },
      }}
    >
      <Typography
        textAlign="center"
        className="font-visby"
        sx={{
          WebkitTextStrokeWidth: "5px",
          letterSpacing: "5px",
          WebkitTextStrokeColor: "black",
          fontSize: {
            xs: "2rem",
            md: "3rem",
          },
        }}
      >
        TESTIMONIALS
      </Typography>
      <Typography
        textAlign="center"
        mt={4}
        sx={{
          fontWeight: "normal",
          paddingX: "1rem",
          fontSize: {
            xs: "18px",
            md: "22px",
          },
          color: "gray",
        }}
        className="font-visby"
      >
        What creators & firmowners are saying about floless
      </Typography>
      <Box mt={8}>
        <Testimonial />
      </Box>
    </Box>
  );
};

export default Testimonials;
