import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Price = () => {
  const data = [
    {
      plan: "Free Plan",
      size: "10 GB",
      button: "Sign Up",
      href: "auth/register",
      target: "_blank",
      heading: "FEATURES",
      subHeading: "Experience features for free...",
      features: [
        "Unlimited Face Searches",
        "Playback up to 4K",
        "Your branding with Floless Badge",
        "Original file download",
        "Customize color & Fonts",
        "Lead Management",
      ],
    },
    {
      plan: "Standard Plan",
      size: "100 GB",
      button: "Contact Sales",
      href: "/contact-us",
      target: "",
      heading: "FEATURES",
      subHeading: "Everything in our free plan plus...",
      features: [
        "Custom Domain",
        "Advance Analytics",
        "Themes Selection",
        "Accessible on Web & Mobile",
        "Password Protection",
        "Built in email delivery",
      ],
    },
    {
      plan: "Professional Plan",
      size: "1 TB",
      button: "Contact Sales",
      href: "/contact-us",
      target: "",
      heading: "FEATURES",
      subHeading: "Everything in Standard Plan",
      features: [
        "Custom - Domain support",
        "Advance Analytics",
        "Themes Selection",
        "Accessible on Web & Mobile",
        "Password Protection",
        "Built in email delivery",
      ],
    },
  ];
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(/images/landing/pricing.png)",
          backgroundSize: "cover",
        }}
      >
        <Box
          className="container"
          sx={{
            paddingX: {
              xs: "2rem !important",
              lg: "0 !important",
            },
          }}
        >
          <Typography
            className="font-visby"
            sx={{
              color: "rgba(0, 0, 0, 0.87)",
              fontSize: "3rem",
              fontStyle: "normal",
              lineHeight: "normal",
              paddingTop: "10rem",
              textAlign: "center",
              WebkitTextStrokeWidth: "2px",
              WebkitTextStrokeColor: "black",
              letterSpacing: "3px",
            }}
          >
            Discover the plan that aligns with your needs
          </Typography>

          <Typography
            className="font-visby"
            sx={{
              marginTop: "1.25rem",
              maxWidth: "28.25rem",
              color: "rgba(0, 0, 0, 0.60)",
              textAlign: "center",
              fontSize: "22px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "1.875rem",
            }}
            mx="auto"
          >
            We believe Floless should be accessible to all everyone, no matter
            the size.
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: "3.69rem !important",
            marginX: {
              xs: "1rem !important",
              md: "3rem !important",
              lg: "auto !important",
            },
          }}
          className="container"
        >
          <Grid
            container
            sx={{
              paddingBottom: "6rem",
            }}
          >
            {data.map((each: any, index: number) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={9}
                  md={6}
                  lg={4}
                  sx={{
                    paddingX: {
                      xs: "0",
                      md: "1rem",
                    },
                    mx: "auto",
                    paddingBottom: {
                      xs: "4rem",
                    },
                  }}
                >
                  <PriceCard content={each} idx={index} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>

      <Box
        className="features-container"
        sx={{
          marginBottom: "12rem !important",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          backgroundColor: "#2970FF",
          borderRadius: "1rem",
          marginX: {
            xs: "1.5rem !important",
            md: "3rem !important",
            lg: "auto !important",
          },
          paddingX: {
            md: "2rem !important",
          },
        }}
      >
        <Typography
          className="font-visby"
          textAlign="center"
          sx={{
            color: "#FFF",
            fontSize: "2.5rem",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
            marginTop: "2.5rem",
          }}
        >
          Enterprise plan
        </Typography>
        <Typography
          className="font-visby"
          textAlign="center"
          color="white"
          mt="1rem"
          sx={{
            fontSize: "1.25rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "1.875rem",
          }}
        >
          Supercharge your business with our enterprise plan, offering an
          impressive 3TB of storage capacity.
        </Typography>
        <Box component={Link} href="/contact-us">
          <Box textAlign="center">
            <button
              className="font-visby"
              style={{
                backgroundColor: "white",
                padding: "12px 20px",
                borderRadius: "50px",
                border: "none",
                color: "black",
                fontSize: "16px",
                fontWeight: "700",
                marginTop: "2.35rem",
                marginBottom: "2.52rem",
                cursor: "pointer",
              }}
            >
              Contact Sales
            </button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

const PriceCard = (props: any) => {
  return (
    <Card
      sx={{
        padding: "0 !important",
      }}
    >
      <Box
        sx={{
          backgroundColor: props.idx === 2 ? "#2970FF" : "white",
          paddingX: "30px",
          paddingY: "20px",
          borderBottom:
            props.idx !== 2 ? "1px solid var(--gray-200, #EAECF0)" : "",
          BoxShadow: "none !important",
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography
            sx={{
              color: props.idx === 2 ? "white" : "#475467",
              fontFamily: "Visby CF",
              fontSize: "1.5rem",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "1.75rem",
            }}
            className="font-visby"
          >
            {props.content.plan}
          </Typography>
          {props.idx == 2 ? (
            <button
              className="font-visby"
              style={{
                backgroundColor: "white",
                padding: "6px 10px",
                height: "30px",
                borderRadius: "50px",
                border: "none",
                color: "black",
                fontSize: "12px",
                fontWeight: "700",
              }}
            >
              Popular
            </button>
          ) : (
            <></>
          )}
        </Stack>
        <Typography
          sx={{
            color: props.idx === 2 ? "white" : "#475467",
            textAlign: "center",
            fontSize: "3.75rem",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "4.5rem",
            letterSpacing: "-0.075rem",
            marginTop: "1.5rem",
          }}
          className="font-visby"
        >
          {props.content.size}
        </Typography>
        <Box
          component={Link}
          href={props.content.href}
          target={props.content.target}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              paddingY: "2rem",
            }}
          >
            <button
              className="font-visby"
              style={{
                backgroundColor: props.idx !== 2 ? "#2970FF" : "white",
                padding: "12px 20px",
                borderRadius: "50px",
                border: "none",
                color: props.idx !== 2 ? "white" : "black",
                fontSize: "16px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              {props.content.button}
            </button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          padding: "2rem 2rem 1rem 2rem",
        }}
      >
        <Typography
          className="font-visby"
          sx={{
            color: "var(--gray-600, #475467)",
            fontFamily: "Visby CF",
            fontSize: "1rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "1.5rem",
            marginTop: "0.25rem",
          }}
        >
          {props.content.heading}
        </Typography>
        <Typography
          className="font-visby"
          sx={{
            color: "var(--gray-900, #101828)",
            fontSize: "1rem",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "1.5rem",
          }}
        >
          {props.content.subHeading}
        </Typography>
      </Box>

      <Box
        sx={{
          padding: "1rem  0 2rem 0",
        }}
      >
        <ul className="pricing-icon">
          {props.content.features.map((each: any, index: number) => {
            return (
              <Stack
                flexDirection="row"
                gap="0.75rem"
                ml={-1}
                marginBottom="1rem"
              >
                <img src="/images/landing/check.png" alt="" />
                <Typography>{each}</Typography>
              </Stack>
            );
          })}
        </ul>
      </Box>
    </Card>
  );
};

export default Price;
