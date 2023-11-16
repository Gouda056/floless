import React, { Component } from "react";
import Slider from "react-slick";
import { Stack, Typography, Box, Card, CardMedia } from "@mui/material";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <Box
      sx={{
        ...style,
        position: "absolute",
        display: {
          xs: "none",
          lg: "block",
        },
        cursor: "pointer",
        right: {
          xs: "1rem",
          lg: "7rem",
        },
        top: "10rem",
        borderRadius: "50%",
        background: "black",
        color: "white",
        fontSize: "35px",
        padding: "8px 8px",
      }}
      onClick={onClick}
    >
      <svg
        fill="#ffffff"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="35px"
        height="35px"
        viewBox="0 0 100.00 100.00"
        enable-background="new 0 0 100 100"
        xmlSpace="preserve"
        stroke="#ffffff"
        stroke-width="5.4"
        transform="matrix(-1, 0, 0, -1, 0, 0)"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <path d="M33.934,54.458l30.822,27.938c0.383,0.348,0.864,0.519,1.344,0.519c0.545,0,1.087-0.222,1.482-0.657 c0.741-0.818,0.68-2.083-0.139-2.824L37.801,52.564L64.67,22.921c0.742-0.818,0.68-2.083-0.139-2.824 c-0.817-0.742-2.082-0.679-2.824,0.139L33.768,51.059c-0.439,0.485-0.59,1.126-0.475,1.723 C33.234,53.39,33.446,54.017,33.934,54.458z"></path>{" "}
          </g>{" "}
        </g>
      </svg>
    </Box>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <Box
      sx={{
        // ...style,
        display: {
          xs: "none",
          lg: "block",
        },
        cursor: "pointer",
        position: "absolute",
        left: "7rem",
        top: "10rem",
        borderRadius: "50%",
        background: "black",
        color: "white",
        fontSize: "35px",
        padding: "8px 8px",
        width: "50px",
        height: "50px",
        zIndex: "10",
      }}
      onClick={onClick}
      role="button"
      aria-label="Previous"
    >
      <svg
        fill="#ffffff"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="35px"
        height="35px"
        viewBox="0 0 100 100"
        enable-background="new 0 0 100 100"
        xmlSpace="preserve"
        stroke="#ffffff"
        transform="matrix(1, 0, 0, 1, 0, 0)"
        stroke-width="5.3"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <path d="M33.934,54.458l30.822,27.938c0.383,0.348,0.864,0.519,1.344,0.519c0.545,0,1.087-0.222,1.482-0.657 c0.741-0.818,0.68-2.083-0.139-2.824L37.801,52.564L64.67,22.921c0.742-0.818,0.68-2.083-0.139-2.824 c-0.817-0.742-2.082-0.679-2.824,0.139L33.768,51.059c-0.439,0.485-0.59,1.126-0.475,1.723 C33.234,53.39,33.446,54.017,33.934,54.458z"></path>{" "}
          </g>{" "}
        </g>
      </svg>
    </Box>
  );
}

class Testimonial extends React.Component<{}, any> {
  constructor({}) {
    super({});
    this.state = {
      sliders: [
        {
          profileImg: "/images/landing/Alps Media - Hardik Sojitra.jpg",
          comment:
            '"This app made wedding photo and video delivery stress-free. No more concerns about lost files or delays. A true lifesaver!"',
          name: "Hardik Sojitra",
          company: "Alps Media",
        },
        {
          profileImg: "/images/landing/Ivory Films - Abhishek Kanani.JPG",
          comment:
            '"This app guarantees a seamless delivery of photos and videos, making your day even more special."',
          name: "Abhishek Kanani",
          company: "Ivory Films",
        },
        {
          profileImg: "/images/landing/Glowwed Films - Rahul Patwa.JPG",
          comment:
            '"It guarantees smooth delivery of all your precious memories. Five stars from me!"',
          name: "Rahul Patwa",
          company: "Glowwed Films",
        },
      ],
    };
  }

  sliders() {
    return this.state.sliders.map((data: any, index: number) => {
      return (
        <div
          key={index}
          style={{
            position: "relative",
            zIndex: "1",
          }}
        >
          <Stack
            sx={{
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
            gap={3}
            justifyContent="center"
            alignItems="center"
          >
            <div>
              <CardMedia
                component="img"
                src={data.profileImg}
                alt="Image loading"
                sx={{
                  borderRadius: "50%",
                  width: "22vh",
                  height: "21vh",
                  marginX: "auto",
                }}
              />
              <Typography
                mt={3}
                width={300}
                textAlign="center"
                variant="h6"
                color="gray"
                className="font-visby"
              >
                {data.comment}
              </Typography>
              <Typography
                width={300}
                mt={1}
                textAlign="center"
                color="black"
                variant="h4"
                className="font-visby"
              >
                {data.name}
              </Typography>
              <Typography
                width={300}
                // mt={1}
                textAlign="center"
                variant="subtitle1"
                className="font-visby"
              >
                {data.company}
              </Typography>
            </div>
          </Stack>
        </div>
      );
    });
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="container">
        <Slider {...settings}>{this.sliders()}</Slider>
      </div>
    );
  }
}
export default Testimonial;
