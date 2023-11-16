// @ts-nocheck
import Blogs from "../../src/components/landing/resources/blogs/blogs";
import { resources } from "../../src/components/landing/resources/Topsection/data";
import { blogs } from "../../src/components/landing/resources/blogs/data";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import Card from "../../src/components/landing/resources/Topsection/Card";
import { useEffect, useState } from "react";

const Index = () => {
  const [cardClicked, setCardClicked] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  useEffect(() => {
    const filtered = blogs?.filter((blog: any) =>
      blog?.category.toLowerCase().includes(cardClicked.toLowerCase())
    );

    setFilteredBlogs(filtered);
  }, [cardClicked]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          marginTop: "11vh",
          marginBottom: "6.25rem",
        }}
      >
        <Box className="container" textAlign="center">
          <Typography
            className="font-visby"
            sx={{
              color: "var(--gray-900, #101828)",
              WebkitTextStrokeWidth: "3px",
              WebkitTextStrokeColor: "black",
              fontSize: {
                xs: "2rem",
                md: "3rem",
              },
              letterSpacing: "3px",
              paddingTop: "6rem",
            }}
          >
            RESOURCES
          </Typography>
          <Typography
            className="font-visby"
            sx={{
              color: "var(--gray-600, #475467)",
              textAlign: "center",
              fontFamily: "sans-serif",
              fontSize: "1.25rem",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "1.875rem",
              paddingTop: "1.5rem",
            }}
          >
            The latest industry news, interviews, technologies, and Resources.
          </Typography>
        </Box>

        <Box
          sx={{
            paddingTop: "3rem",
            // paddingBottom: "6.25rem",
            overflowX: "hidden",
            marginLeft: {
              xs: "0",
              lg: "5rem",
            },
          }}
        >
          <Slider {...settings}>
            {resources?.map((each: any) => {
              return <Card data={each} setCardClicked={setCardClicked} />;
            })}
          </Slider>
        </Box>
      </Box>
      <Blogs blogs={filteredBlogs} />
    </div>
  );
};

Index.layout = "Landing";
export default Index;
