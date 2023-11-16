import { Box } from "@mui/material";
import GetInTouch from "../../src/components/landing/contact-us/getInTouch";
import Contact from "../../src/components/landing/contact-us/contact";

const contactUs = () => {
  return (
    <Box sx={{
      overflowX : "hidden"
    }}>
      <GetInTouch />
      <Contact />
    </Box>
  );
};

contactUs.layout = "Landing";
export default contactUs;
