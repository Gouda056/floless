import { Box, Typography } from "@mui/material";
import Price from "../src/components/landing/Pricing/price";

const pricing = () => {

  return (
    <Box>
      <Price/>
    </Box>
  );
};

pricing.layout = "Landing";
export default pricing;
