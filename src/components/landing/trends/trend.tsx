import { Card, Typography, Box } from "@mui/material";

const Card2 = (props: any) => {
  return (
    <div>
      <Card
        sx={{
          width: {
            xs: "80vw",
            sm: "40vw",
            md: "25vw",
            xl: "20vw",
          },
          borderRadius: "10%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <img
          src={props.img}
          alt=""
          width={230}
          height={200}
          style={{
            objectFit: "cover",
            display: "block",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        />
      </Card>
      <Box
        sx={{
          paddingLeft: {
            xs: "0",
            md: "5rem",
            lg: "0",
          },
        }}
      >
        <Typography
          mt={4}
          sx={{
            width: "70%",
            lineHeight: "1.8rem",
            textAlign: " left",
            paddingX: "2.4rem",
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "black",
            letterSpacing: "3px",
            fontSize: "1.6rem",
          }}
          className="font-visby"
        >
          {props.header}
        </Typography>
        <Typography
          mt={2}
          color="gray"
          sx={{
            textAlign: "left",
            paddingX: "2.4rem",
            fontSize: "18px",
          }}
          className="font-visby"
        >
          {props?.content}
        </Typography>
      </Box>
    </div>
  );
};

export default Card2;
