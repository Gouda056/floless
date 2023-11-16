// @ts-nocheck
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import SwiperCore from "swiper";
import { Typography, Box, CardMedia } from "@mui/material";
import "animate.css";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import Link from "next/link";

SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

export default function SwiperCoverflow() {
  return (
    <Box
      sx={{
        padding: {
          xs: "3rem 0",
          md: "6rem 0",
        },
      }}
    >
      <Typography
        textAlign="center"
        className="font-visby"
        sx={{
          fontSize: {
            xs: "1.7rem",
            md: "3rem",
          },
          WebkitTextStrokeWidth: "4px",
          WebkitTextStrokeColor: "black",
          fontFamily: "sans-serif",
          letterSpacing: "3px",
        }}
      >
        DESIGN GALLERY
      </Typography>
      <Typography
        textAlign="center"
        color="gray"
        mt={4}
        sx={{
          marginRight: {
            xs: "10vw",
            md: "30vw",
          },
          marginLeft: {
            xs: "10vw",
            md: "30vw",
          },
          fontSize: {
            xs: "18px",
            md: "22px",
          },
          lineHeight: "1.8rem",
        }}
        className="font-visby"
      >
        Want to deploy a page with lightning fast speed? Choose form variety of
        designs handpicked by our team
      </Typography>
      <div
        className="App"
        style={{
          margin: "10vh 0 0 0",
        }}
      >
        <Swiper
          navigation
          speed={1500}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0, //slide做3d旋转时Y轴的旋转角度。默认50。
            depth: 250, //slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
            modifier: 1, //depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
            slideShadows: false, //开启slide阴影。默认 true。
          }}
          autoplay={{
            delay: 2000,
          }}
          loop={true}
          initialSlide={5}
          breakpoints={{
            // Customize the number of slides on different screen sizes
            0: {
              slidesPerView: 1, // Show 1 slide on phones (screens less than 768px)
            },
            768: {
              slidesPerView: 2, // Show 3 slides on tablets (screens between 768px and 992px)
            },
            992: {
              slidesPerView: 3,
              // Show 5 slides on screens larger than tablets (992px and above)
            },
          }}
          centeredSlides
          className="swiper-slider-styles"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
            (each: number, index) => {
              return (
                <SwiperSlide
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginLeft: "1px",
                  }}
                >
                  <img
                    src="/images/landing/Iphone.png"
                    alt="Iphone"
                    width={340}
                    height={540}
                    style={{
                      position: "relative",
                      boxShadow: "none !important",
                    }}
                  />
                  <CardMedia
                    component="img"
                    src={`https://picsum.photos/500/500?random=${index}`}
                    alt="image"
                    sx={{
                      position: "absolute",
                      width: "16rem",
                      height: "29.5rem",
                      top: "1.4rem",
                      borderRadius: "25px",
                      marginRight: "1.8rem",
                      boxShadow: "none !important",
                    }}
                  />
                  <Box
                    sx={{
                      width: "7rem",
                      height: "1.7rem",
                      top: "1rem",
                      left: "auto",
                      right: "auto",
                      marginRight: "1.7rem",
                      position: "absolute",
                      backgroundColor: "black",
                      borderTopLeftRadius: "0",
                      borderTopRightRadius: "0",
                    }}
                  ></Box>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </div>
      <Box
        mt={10}
        display="flex"
        justifyContent="center"
        component={Link}
        href="/login"
        target="_blank"
      >
        <button
          style={{
            padding: "12px 20px",
            background: "black",
            color: "white",
            fontSize: "16px",
            borderRadius: "50px",
            cursor: "pointer",
            fontWeight: "700",
          }}
          className="font-visby"
        >
          Start for free
        </button>
      </Box>
    </Box>
  );
}
