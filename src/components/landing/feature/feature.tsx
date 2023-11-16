import React from "react";
import { Typography, Container, Grid, Box, Button, Card } from "@mui/material";
import Trend from "../trends/trend";

const Features = () => {
  const features = [
    {
      img: "/images/landing/face-id-security.png",
      heading: "AI powered Face Recognition",
    },
    {
      img: "/images/landing/metaverse-nft-virtual-gallery.png",
      heading: "Custom Branded Gallery",
    },
    {
      img: "/images/landing/checklist.png",
      heading: "Manage Your Inquiries",
    },
    {
      img: "/images/landing/trophy.png",
      heading: "Let your brand stand out",
    },
    {
      img: "/images/landing/metaverse-nft-virtual-gallery.png",
      heading: "Premium Viewing Experience",
    },
    {
      img: "/images/landing/music-note.png",
      heading: "Gallery Music",
    },
  ];

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
      <div className="features-container">
        <Grid container spacing={{ xs: 4, md: 4 }} sx={{}}>
          <Grid item xs={12}>
            <Typography
              className="font-visby"
              sx={{
                textAlign: "center",
                WebkitTextStrokeWidth: "5px",
                WebkitTextStrokeColor: "black",
                fontSize: {
                  xs: "2rem",
                  md: "3rem",
                },
                lineHeight: "45px",
                letterSpacing: "5px",
              }}
            >
              FEATURE PACKED PLATFORM
            </Typography>
            <Typography
              className="font-visby"
              sx={{
                lineHeight: "2rem",
                textAlign: "center",
                paddingX: {
                  xs: "2rem",
                  md: "5rem",
                },
                fontSize: "22px",
                marginBottom: "1rem",
              }}
              mt={4}
            >
              Delivering a unique viewing experience to your clients with a
              curated selection of fonts, color theming, video backgrounds,
              ambient music, and more.
            </Typography>
          </Grid>
          {features.map((each: any, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              key={index}
              sx={{
                marginBottom: {
                  xs: "1rem",
                  sm: "0",
                },
              }}
            >
              <Feature img={each.img} header={each.heading} idx={index} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Box>
  );
};

const Feature = (props: any) => {
  return (
    <div>
      <Card
        sx={{
          width: {
            xs: "80vw",
            sm: "40vw",
            md: "25vw",
            xl: "18vw",
          },
          height: "16rem",
          borderRadius: "5%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {props.idx === 1 || props.idx === 4 ? (
          <img
            src={props.img}
            alt=""
            width={260}
            height={220}
            style={{
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          />
        ) : (
          <img
            src={props.img}
            alt=""
            width={200}
            height={230}
            style={{
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          />
        )}
      </Card>
      <Typography
        width="90%"
        mt={3}
        sx={{
          textAlign: "left",
          marginLeft: {
            xs: "-1rem",
            md: "4rem",
            lg: "-1rem",
          },
          lineHeight: "1.5rem",
          paddingLeft: "3rem",
          WebkitTextStrokeWidth: "1.5px",
          WebkitTextStrokeColor: "black",
          letterSpacing: "3px",
          fontSize: "1.4rem",
        }}
        className="font-visby"
      >
        {props.header}
      </Typography>
    </div>
  );
};

export default Features;
