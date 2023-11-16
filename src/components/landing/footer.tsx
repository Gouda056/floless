import { Grid, Typography, Box, Button, Stack } from "@mui/material";
import Logo from "../../layouts/full/shared/logo/Logo";
import CustomOutlinedInput from "../forms/theme-elements/customOutlinedInput";
import Link from "next/link";

const Footer = () => {
  const home = ["How it works?", "Features", "Reviews", "Brands", "FAQs"];
  const features = [
    "AI Face detection",
    "Color Theory",
    "Font Selection",
    "Music",
    "Design Elements",
  ];
  const Pricing = [
    "Fremium",
    "One-Time-Payment",
    "Subscription",
    "Membership",
    "Coupon Codes",
  ];
  const templates = ["Luxury", "Classic", "Quirky", "Dark", "Light"];

  const logos = [
    "/images/landing/linkedIn.png",
    "/images/landing/twitter.png",
    "/images/landing/facebook.png",
    "/images/landing/Instagram.png",
    "/images/landing/tiktok.png",
  ];

  return (
    <Box className="container">
      <Box mt={15} mb={5}>
        <Grid
          container
          spacing={3}
          sx={{
            pl: {
              xs: "1rem",
              sm: "3rem",
              lg: "0",
            },
          }}
        >
          <Grid item xs={12} lg={8}>
            <Grid container>
              <Grid item xs={6} lg={3}>
                <Typography
                  className="font-visby"
                  variant="h4"
                  sx={{
                    textAlign: {
                      xs: "left",
                      lg: "center",
                    },
                  }}
                  mb={5}
                >
                  Home
                </Typography>
                {home.map((each: string, idx: number) => {
                  return (
                    <Box component={Link} href="/" key={idx}>
                      <Typography
                        className="font-visby"
                        sx={{
                          textAlign: {
                            xs: "left",
                            lg: "center",
                          },
                        }}
                        variant="subtitle2"
                        color="gray"
                        my={3}
                      >
                        {each}
                      </Typography>
                    </Box>
                  );
                })}
              </Grid>
              <Grid item xs={6} lg={3}>
                <Typography
                  className="font-visby"
                  variant="h4"
                  sx={{
                    textAlign: {
                      xs: "left",
                      lg: "center",
                    },
                  }}
                  mb={5}
                >
                  Features
                </Typography>
                {features.map((each: string, idx: number) => {
                  return (
                    <Box component={Link} href="/" key={idx}>
                      <Typography
                        className="font-visby"
                        sx={{
                          textAlign: {
                            xs: "left",
                            lg: "center",
                          },
                        }}
                        variant="subtitle2"
                        color="gray"
                        my={3}
                      >
                        {each}
                      </Typography>
                    </Box>
                  );
                })}
              </Grid>
              <Grid item xs={6} lg={3}>
                <Typography
                  className="font-visby"
                  variant="h4"
                  sx={{
                    textAlign: {
                      xs: "left",
                      lg: "center",
                    },
                  }}
                  mb={5}
                >
                  Pricing
                </Typography>
                {Pricing.map((each: string, idx: number) => {
                  return (
                    <Box component={Link} href="/pricing" key={idx}>
                      <Typography
                        className="font-visby"
                        sx={{
                          textAlign: {
                            xs: "left",
                            lg: "center",
                          },
                        }}
                        variant="subtitle2"
                        color="gray"
                        my={3}
                      >
                        {each}
                      </Typography>
                    </Box>
                  );
                })}
              </Grid>
              <Grid item xs={6} lg={3}>
                <Typography
                  className="font-visby"
                  variant="h4"
                  sx={{
                    textAlign: {
                      xs: "left",
                      lg: "center",
                    },
                  }}
                  mb={5}
                >
                  Templates
                </Typography>
                {templates.map((each: string, idx: number) => {
                  return (
                    <div key={idx}>
                      <Typography
                        className="font-visby"
                        sx={{
                          textAlign: {
                            xs: "left",
                            lg: "center",
                          },
                        }}
                        variant="subtitle2"
                        color="gray"
                        my={3}
                      >
                        {each}
                      </Typography>
                    </div>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={6}
                lg={12}
                sx={{
                  textAlign: {
                    xs: "left",
                    lg: "center",
                  },
                }}
              >
                <div>
                  <Typography
                    className="font-visby"
                    variant="h6"
                    sx={{
                      width: {
                        xs: "50%",
                        lg: "100%",
                      },
                    }}
                  >
                    Join our weekly Newsletter
                  </Typography>
                  <Stack
                    sx={{
                      flexDirection: {
                        xs: "row",
                        sm: "column",
                      },
                      gap: "0.5rem",
                    }}
                  >
                    <CustomOutlinedInput
                      type="text"
                      name="E-mail"
                      placeholder="E-mail"
                      id=""
                      className="font-visby"
                      sx={{
                        border: "0",
                        marginTop: "1rem",
                        width: {
                          xs: "50%",
                        },
                        marginX: {
                          xs: "0",
                          lg: "auto",
                        },
                      }}
                    />
                    <Box
                      component="button"
                      sx={{
                        marginTop: "1rem",
                        backgroundColor: "black",
                        color: "white",
                        borderRadius: "50px",
                        padding: "12px 20px",
                        fontSize: "16px",
                        width: {
                          xs: "40%",
                          lg: "30%",
                        },
                        marginX: {
                          xs: "0",
                          lg: "auto",
                        },
                      }}
                      className="font-visby"
                    >
                      Subscribe
                    </Box>
                  </Stack>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                lg={12}
                sx={{
                  textAlign: {
                    xs: "left",
                    lg: "center",
                  },
                  marginTop: {
                    xs: "2rem",
                    sm: "0",
                    lg: "3rem",
                  },
                }}
              >
                <Typography className="font-visby" variant="h6">
                  Reach us on our Social
                </Typography>
                <Box my={3}>
                  {logos.map((each: string, idx: number) => {
                    return (
                      <Box
                        component="img"
                        src={each}
                        alt=""
                        width={25}
                        height={25}
                        key={idx}
                        sx={{
                          margin: {
                            xs: "0 0.5rem 0 0",
                            lg: "0 1rem",
                          },
                        }}
                      />
                    );
                  })}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Grid mt={5} pb={5} container textAlign="center">
        <Grid item xs={12} lg={8}>
          <Box
            display="flex"
            justifyContent="center"
            sx={{
              gap: {
                xs: "2rem",
                lg: "8rem",
              },
            }}
          >
            <Typography variant="body1" color="gray" className="font-visby">
              Cookie Statement
            </Typography>
            <Box component={Link} href="/privacy-policy" target="_blank">
              <Typography variant="body1" color="gray" className="font-visby">
                Privacy Policy
              </Typography>
            </Box>
            <Typography variant="body1" color="gray" className="font-visby">
              Terms of Service
            </Typography>
          </Box>
        </Grid>
        <Grid container item xs={12} lg={4}>
          <Typography
            className="font-visby"
            variant="body1"
            color="gray"
            width="100vw"
            sx={{
              textAlign: {
                xs: "center",
                lg: "normal",
              },
              marginTop: {
                xs: "2rem",
                lg: "0",
              },
            }}
          >
            All rights reserved by Floless Pvt Ltd
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
