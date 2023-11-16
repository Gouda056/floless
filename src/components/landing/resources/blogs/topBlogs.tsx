import { Box, Typography, Stack } from "@mui/material";
import React from "react";

const topBlogs = () => {
  const blogs = [
    {
      heading: "10 Proven Ways to Grow your Wedding Photography Business!",
      body: "In this blog, we’ll delve into 10 proven strategies that can help you grow your wedding photography business and stand out in a competitive industry.",
      author: "cinematicab",
      date: "5 Sep",
    },
    {
      heading:
        "Wedlancer  Global platform for Wedding Photography Freelancers/Second shooters!",
      body: "Are you a talented professional looking to take your career to new heights?",
      author: "cinematicab",
      date: "22 July",
    },
    {
      heading: "9 Quick Tips and Tricks on Filmimg a wedding",
      body: "Master wedding filming with 9 quick tips, capturing precious moments for a memorable videography experience.",
      author: "cinematicab",
      date: "16 Oct",
    },
    {
      heading: "7 Tips and Tricks For Shooting a Prewedding Film.",
      body: "Master prewedding film shooting with 7 essential tips for capturing memorable moments creatively.",
      author: "cinematicab",
      date: "16 Oct",
    },
  ];

  return (
    <Box
      sx={{
        flexBasis: "30%",
        display: {
          xs: "none",
          lg: "block",
        },
      }}
    >
      <Typography
        className="font-visby"
        sx={{
          color: "var(--gray-900, #101828)",
          textAlign: "center",
          fontFamily: "sans-serif",
          fontSize: "2rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "2.75rem",
          letterSpacing: "-0.04rem",
          marginBottom: "2.5rem",
        }}
      >
        Top Posts
      </Typography>
      <Box
        sx={{
          backgroundColor: "#F9FAFB",
          paddingY: "2rem",
        }}
      >
        {blogs.map((blog: any, Index) => {
          return (
            <Box
              sx={{
                marginTop: Index === 0 ? "0rem" : "2rem",
                marginX: "1.25rem",
              }}
              key={Index}
            >
              <Typography
                className="font-visby"
                sx={{
                  color: "var(--gray-900, #101828)",
                  fontFamily: "sans-serif",
                  fontSize: "1.5rem",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "2rem",
                  width: "20rem",
                }}
              >
                {blog.heading}
              </Typography>
              <Typography
                className="font-visby"
                sx={{
                  marginTop: "0.5rem",
                  color: "var(--gray-600, #475467)",
                  fontFamily: "sans-serif",
                  fontSize: "1rem",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "1.5rem",
                }}
              >
                {blog.body}
              </Typography>
              <Stack flexDirection="row" gap="1rem">
                <Typography
                  className="font-visby"
                  sx={{
                    color: "rgba(16, 24, 40, 0.50)",
                    fontFamily: "sans-serif",
                    fontSize: "0.875rem",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "1.25rem",
                    marginTop: "0.5rem",
                  }}
                >
                  {blog.author}
                </Typography>
                <Typography
                  className="font-visby"
                  sx={{
                    color: "var(--gray-600, #475467)",
                    fontFamily: "sans-serif",
                    fontSize: "0.875rem",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "1.25rem",
                    marginTop: "0.5rem",
                  }}
                >
                  {blog.date}
                </Typography>
              </Stack>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default topBlogs;
