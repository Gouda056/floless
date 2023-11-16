import { Box } from "@mui/material";
import Footer from "../../components/landing/footer";
import Navbar from "../../components/landing/Navbar/Navbar";

interface landingPageProps {
  children: React.ReactNode;
}

const LandingPageLayout = ({ children }: landingPageProps) => {
  return (
    <Box>
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};

export default LandingPageLayout;
