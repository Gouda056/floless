import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import Trend from "./trend";
import { TrendType, trends } from "./data";

const Trends = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(248 250 252)",
        padding: {
          xs: "3rem 0",
          md: "6rem 0",
        },
      }}
    >
      <Typography
        textAlign="center"
        sx={{
          WebkitTextStrokeWidth: "4px",
          WebkitTextStrokeColor: "black",
          fontSize: {
            xs: "1.7rem",
            md: "3rem",
          },
          letterSpacing: "4px",
          lineHeight: "2.5rem",
        }}
        className="font-visby"
      >
        EXTENDED FEATURES
      </Typography>
      <Typography
        style={{
          textAlign: "center",
          fontSize: "22px",
          color: "gray",
          marginBottom: "10vh",
        }}
        mt={4}
        className="font-visby"
      >
        Go to choice for you?
      </Typography>

      <div className="container">
        <Grid container spacing={{ xs: 4, md: 3 }}>
          {trends.map((each: TrendType, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <Trend
                img={each.img}
                header={each.header}
                content={each.content}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </Box>
  );
};

export default Trends;
