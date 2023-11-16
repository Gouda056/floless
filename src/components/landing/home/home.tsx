import { Box, Typography, Stack, Button, CardMedia } from "@mui/material";
import Experience from "./experience";
import Link from "next/link";
import Logo from "./logo";

const Home = () => {
  return (
    <div>
      <Box
        sx={{
          paddingTop: "10vh",
          backgroundImage: "url(/images/landing/bg-section1.png)",
          backgroundSize: "cover",
          overflowX: "hidden",
          backgroundPosition: "top",
          backgroundPositionX: "center center",
          paddingBottom: "20vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "90vh",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            textAlign="center"
            color="white"
            className="font-visby"
            sx={{
              WebkitTextStrokeWidth: "5px",
              WebkitTextStrokeColor: "white",
              letterSpacing: "2px",
              lineHeight: {
                xs: "3.5rem",
                md: "6rem",
              },

              paddingX: "1rem",
              fontSize: {
                xs: "3rem",
                md: "64px",
              },
            }}
          >
            Wow Your Clients
          </Typography>
          <Typography
            className="font-visby"
            sx={{
              paddingRight: {
                xs: "10vw",
                md: "30vw",
              },
              marginTop: {
                xs: "1rem",
                lg: "none",
              },
              paddingLeft: {
                xs: "10vw",
                md: "30vw",
              },
              lineHeight: "2rem",
              fontSize: "20px",
            }}
            textAlign="center"
            color="white"
          >
            With
            <span
              style={{
                paddingLeft: "0.5rem",
              }}
            >
              <Logo />
            </span>{" "}
            you can level up your photo & video delivery experience by creating
            bespoke landing pages that resonate with your client's big day
          </Typography>
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{
              gap: {
                xs: "1rem",
                lg: "3rem",
              },
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
            mt={5}
          >
            <Box component={Link} href="/login" target="_blank">
              <button
                className="font-visby"
                style={{
                  padding: "12px 35px",
                  background: "black",
                  color: "white",
                  fontSize: "20px",
                  borderRadius: "50px",
                  cursor: "pointer",
                  border: "none",
                  WebkitTextStrokeWidth: "1px",
                  letterSpacing: "1px",
                  WebkitTextStrokeColor: "white",
                }}
              >
                Start for free
              </button>
            </Box>
            <Box component={Link} href="/pricing">
              <button
                className="font-visby"
                style={{
                  border: "2px solid white",
                  padding: "10px 24px",
                  background: "transparent",
                  fontWeight: "900",
                  color: "white",
                  fontSize: "20px",
                  borderRadius: "50px",
                  cursor: "pointer",
                }}
              >
                Explore Pricing
              </button>
            </Box>
          </Stack>
        </Box>

        <Typography
          variant="h1"
          textAlign="center"
          className="font-visby"
          mt={4}
          sx={{
            color: "white",
            letterSpacing: "2.5px",
            fontWeight: "100",
            fontSize: {
              xs: "24px",
              md: "3rem",
            },
          }}
        >
          DELIVER
          <span
            style={{
              WebkitTextStrokeWidth: "4px",
              WebkitTextStrokeColor: "white",

              letterSpacing: "5px",
              marginLeft: "0.6rem",
            }}
          >
            EXPERIENCE
          </span>
        </Typography>
        <Typography
          textAlign="center"
          className="font-visby"
          color="white"
          fontWeight="100"
          sx={{
            fontSize: {
              xs: "18px",
            },
            marginTop: "2px",
          }}
        >
          Build bespoke content page
        </Typography>
      </Box>

      <Experience />
    </div>
  );
};

export default Home;
