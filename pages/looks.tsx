import { Box, Typography } from "@mui/material";

const looks = () => {
  return (
    <>
      <Box>
        <Typography
          variant="h1"
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          In Progress...
        </Typography>
      </Box>
    </>
  );
};

looks.layout = "Landing";
export default looks;
