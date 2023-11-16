import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { logos } from "./data";
import { motion } from "framer-motion";
import Link from "next/link";

const marqueeVariants = {
  animate: {
    x: [0, -10000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 160,
        ease: "linear",
      },
    },
  },
};

const Partners = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(248 250 252)",
        padding: {
          xs: "3rem 0 6rem 0",
          md: "6rem 0",
        },
      }}
    >
      <Box>
        <Typography
          textAlign="center"
          sx={{
            WebkitTextStrokeWidth: "5px",
            WebkitTextStrokeColor: "black",
            letterSpacing: "5px",
            fontSize: {
              xs: "2rem",
              md: "3rem",
            },
          }}
          className="font-visby"
        >
          TRUSTED BY
        </Typography>
        <Typography
          textAlign="center"
          color="gray"
          mt={4}
          className="font-visby"
          sx={{
            fontSize: {
              xs: "18px",
              md: "22px",
            },
          }}
        >
          550+ Studios & Freelancers
        </Typography>

        <div className="container" style={{ marginTop: "12vh" }}>
          <Grid
            container
            spacing={{ xs: 6, md: 3 }}
            // columns={{ xs: 4, sm: 8, md: 12 }}
            alignContent="center"
          >
            {logos.map((each: string, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} textAlign="center">
                <img src={each} alt="Logo" width={200} height={130} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Box>

      {/* Wow effect */}
      <Box
        sx={{
          paddingTop: "6rem",
        }}
      >
        <motion.div
          className="track font-visby"
          variants={marqueeVariants}
          animate="animate"
          style={{
            fontSize: "40rem",
            opacity: "0.03",
            position: "relative",
            top: "22rem",
            fontWeight: "900",
            WebkitTextStrokeWidth: "30px",
            letterSpacing: "70px",
          }}
        >
          FLOLESSFLOLESSFLOLESSFLOLESSFLOLESSFLOLESSFLOLESS
        </motion.div>

        <Box
          pb={15}
          display="flex"
          justifyContent="center"
          sx={{
            position: "relative",
            top: {
              xs: "10vh",
              sm: "20vh",
            },
          }}
        >
          <Typography
            className="font-visby"
            sx={{
              width: {
                xs: "90%",
                xl: "50%",
              },
              fontSize: {
                xs: "45px",
                lg: "60px",
              },
              WebkitTextStrokeWidth: "5px",
              letterSpacing: "5px",
              WebkitTextStrokeColor: "black",
            }}
            textAlign="center"
            fontWeight="50px"
            color="black"
            lineHeight="100px"
            marginLeft="10vw"
            marginRight="10vw"
          >
            Everything you need to{" "}
            <Box
              component="span"
              className="font-visby"
              sx={{
                padding: "10px 25px",
                borderRadius: "50px",
                border: "none",
                backgroundColor: "#169cff",
                letterSpacing: "4px",
              }}
            >
              <Box
                component="span"
                className="font-visby"
                sx={{
                  WebkitTextStrokeWidth: "5px",
                  letterSpacing: "5px",
                  WebkitTextStrokeColor: "white",
                  fontSize: {
                    xs: "45px",
                    lg: "58px",
                  },
                  color: "white",
                }}
              >
                wow
              </Box>
            </Box>{" "}
            your client
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          sx={{
            marginTop: {
              xs: "3rem",
              sm: "15rem",
              lg: "10rem",
            },
          }}
        >
          <Box
            component={Link}
            href="/login"
            target="_blank"
            sx={{
              padding: "12px 20px",
              background: "black",
              color: "white",

              fontSize: "16px",
              borderRadius: "50px",
              cursor: "pointer",
              border: "none",
              marginTop: {
                xs: "6rem",
                lg: "12rem",
              },
            }}
            className="font-visby"
          >
            Start for free
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Partners;
