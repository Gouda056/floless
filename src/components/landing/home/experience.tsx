import React, { useEffect, useState } from "react";
import {
  Typography,
  Grid,
  Avatar,
  Button,
  Box,
  Stack,
  CardMedia,
} from "@mui/material";

export default function Testimonials() {
  const testimonials = [
    {
      laptopImg: "/images/landing/laptopMockup.png",
      phoneImg: "/images/landing/Iphone.png",
    },
    {
      laptopImg: "/images/landing/laptopMockup.png",
      phoneImg: "/images/landing/Iphone.png",
    },
    {
      laptopImg: "/images/landing/laptopMockup.png",
      phoneImg: "/images/landing/Iphone.png",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Box sx={{ padding: {
      xs : "0 0 3rem 0" ,
      md : "0 0 6rem 0" 
    }}}>
      <Box
        mt={-10}
        sx={{
          overflowX: "hidden",
        }}
      ></Box>

      <Box sx={{
        marginBottom:  {
          xs:  "2rem",
          md : "3rem"
        }
      }} display="flex" justifyContent="center">
        {testimonials.map(
          (item, idx) =>
            currentTestimonial === idx && (
              <Stack
                sx={{
                  flexDirection: {
                    lg: "row",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: {
                      xs: "90%",
                      lg: "45rem",
                    },
                    backgroundImage: `url(${item.laptopImg})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    margin: "0 auto",
                    height: {
                      xs: "15rem",
                      lg: "30rem",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    src={`https://picsum.photos/500/300?random=${idx}`}
                    alt=""
                    sx={{
                      position: "absolute",
                      width: "90%",
                      height: {
                        xs: "9.5rem",
                        md: "10rem",
                        lg: "24rem",
                      },
                      paddingRight: {
                        xs: "1.4rem",
                        lg: "3.5rem",
                      },
                      left: {
                        xs: "1.6rem",
                        lg: "4rem",
                      },
                      top: {
                        xs: "0.3rem",
                        md: "0.2rem",
                        lg: "0.6rem",
                      },
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    position: "relative",
                    width: "16rem",
                    backgroundImage: `url(${item.phoneImg})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    margin: "0 auto",

                    paddingLeft: "1rem",
                    height: "25rem",
                    marginLeft: {
                      xs: "4rem",
                      xl: "0",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={`https://picsum.photos/500/300?random=${idx}`}
                    alt=""
                    sx={{
                      position: "absolute",
                      width: "10.1rem",
                      height: "21.85rem",
                    }}
                    top="1rem"
                    marginLeft="0.1rem"
                    borderRadius="8%"
                  />
                  <Box
                    sx={{
                      width: "5rem",
                      height: "1rem",
                      top: "1rem",
                      left: "3.6rem",
                      right: "auto",
                      marginRight: "1.7rem",
                      position: "absolute",
                      backgroundColor: "black",
                      borderTopLeftRadius: "0",
                      borderTopRightRadius: "0",
                    }}
                  ></Box>
                </Box>
              </Stack>
            )
        )}
      </Box>
      <div style={{ marginTop: "1rem" }}>
        <Grid container justifyContent="center" spacing={10}>
          {testimonials.map((item, idx) => (
            <Grid item key={idx}>
              <Box
                component="button"
                className="font-visby"
                sx={{
                  backgroundColor:
                    idx == currentTestimonial ? "gray" : "lightgray",
                  color: "black", // Set the text color
                  padding: {
                    xs : "5px",
                    md : "8px",
                  },
                  borderRadius: "50px",
                  border: "none",
                }}
                onClick={() => setCurrentTestimonial(idx)}
              ></Box>
            </Grid>
          ))}
        </Grid>
      </div>
    </Box>
  );
}
