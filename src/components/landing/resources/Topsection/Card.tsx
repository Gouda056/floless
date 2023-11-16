import { Box, Typography } from "@mui/material";

const Card = ({ data, setCardClicked }: any) => {
  return (
    <Box
      sx={{
        position: "relative",
        boxShadow: "none",
        height: "8rem",
        background: `linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent), url(${data.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginX: {
          xs: "1.25rem",
          lg: "1.25rem",
        },
      }}
      onClick={() => setCardClicked(data.name)}
    >
      <Typography
        sx={{
          position: "absolute",
          bottom: "1rem",
          color: "#FFF",
          left: "50%",
          transform: "translate(-50%)",
          fontFamily: "sans-serif",
          fontSize: "1.25rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "2rem",
          textAlign: "center",
        }}
      >
        {data.name}
      </Typography>
    </Box>
  );
};

export default Card;
