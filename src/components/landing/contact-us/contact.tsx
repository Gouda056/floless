import { Box, Card, Stack, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box
      sx={{
        paddingY: {
          xs : "3rem",
          md : "6rem"
        },
        display: {
          xs: "flex",
          lg: "block",
        },
        justifyContent: {
          xs: "center",
        },
      }}
    >
      <Box
        className="container"
        sx={{
          paddingX: {
            textAlign : "center"
          },
        }}
      >
        <Typography
          className="font-visby"
          sx={{
            color: "var(--Primary, #2970FF)",
            fontFamily: "sans-serif",
            fontSize: "1rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "1.5rem",
          }}
        >
          Contact Us
        </Typography>
        <Typography
          className="font-visby"
          sx={{
            color: "var(--gray-900, #101828)",
            fontFamily: "sans-serif",
            fontSize: "2.25rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "2.75rem",
            letterSpacing: "-0.045rem",
            marginTop: "0.75rem",
          }}
        >
          We’d love to hear from you
        </Typography>
        <Typography
          className="font-visby"
          sx={{
            color: "var(--gray-600, #475467)",
            fontFamily: "sans-serif",
            fontSize: "1.25rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "1.875rem",
            marginTop: "1.25rem",
          }}
        >
          Our friendly team is always here to chat.
        </Typography>
        <Stack
          sx={{
            marginTop: "4rem",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            justifyContent: "center",
            gap: {
              xs: "1.25rem",
              md: "4rem",
            },
          }}
        >
          <Card
            sx={{
              width: "17.85rem",
              padding: "1.5rem",
              background: "var(--gray-50, #F9FAFB)",
              boxShadow: "none !important",
              BorderRadius: "0",
              mx : {
                xs : "auto",
                md : "0"
              }
            }}
          >
            <button
              style={{
                width: "3rem",
                height: "3rem",
                padding: "0.75rem",
                borderRadius: "0.625rem",
                border: "none",
                background: "var(--Primary, #2970FF)",
              }}
            >
              <img src="/images/landing/chat.png" alt="" />
            </button>

            <Box
              sx={{
                marginTop: "4rem",
              }}
            >
              <Typography
                className="font-visby"
                sx={{
                  color: "var(--gray-900, #101828)",
                  fontFamily: "sans-serif",
                  fontSize: "1.25rem",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "1.875rem",
                }}
              >
                Chat to support
              </Typography>
              <Typography
                className="font-visby"
                sx={{
                  color: "var(--gray-600, #475467)",
                  fontFamily: "sans-serif",
                  fontSize: "1rem",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "1.5rem",
                  marginTop: "0.5rem",
                }}
              >
                We’re here to help.
              </Typography>
              <Typography
                className="font-visby"
                sx={{
                  color: "var(--Primary, #2970FF)",
                  fontFamily: "sans-serif",
                  fontSize: "1rem",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "1.5rem",
                  marginTop: "1.25rem",
                }}
              >
                support@untitledui.com
              </Typography>
            </Box>
          </Card>
          <Card
            sx={{
              width: "17.85rem",
              padding: "1.5rem",
              background: "var(--gray-50, #F9FAFB)",
              boxShadow: "none !important",
              mx : {
                xs : "auto",
                md : "0"
              },
              BorderRadius: "0",
            }}
          >
            <button
              style={{
                width: "3rem",
                height: "3rem",
                padding: "0.75rem",
                borderRadius: "0.625rem",
                border: "none",
                background: "var(--Primary, #2970FF)",
              }}
            >
              <img src="/images/landing/call.png" alt="" />
            </button>

            <Box
              sx={{
                marginTop: "4rem",
              }}
            >
              <Typography
                className="font-visby"
                sx={{
                  color: "var(--gray-900, #101828)",
                  fontFamily: "sans-serif",
                  fontSize: "1.25rem",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "1.875rem",
                }}
              >
                Call us
              </Typography>
              <Typography
                className="font-visby"
                sx={{
                  color: "var(--gray-600, #475467)",
                  fontFamily: "sans-serif",
                  fontSize: "1rem",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "1.5rem",
                  marginTop: "0.5rem",
                }}
              >
                Mon-Fri from 8am to 5pm.
              </Typography>
              <Typography
                className="font-visby"
                sx={{
                  color: "var(--Primary, #2970FF)",
                  fontFamily: "sans-serif",
                  fontSize: "1rem",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "1.5rem",
                  marginTop: "1.25rem",
                }}
              >
                +91 5208735031
              </Typography>
            </Box>
          </Card>
        </Stack>
      </Box>
    </Box>
  );
};

export default Contact;
