import { Box, CardMedia, Stack, Typography } from "@mui/material/";
import { IconCopy } from "@tabler/icons-react";

const Index = () => {
  return (
    <Box>
      {/* Blog Header */}
      <Box
        className=""
        sx={{
          marginTop: "12vh !important",
          paddingY: "6rem !important",
          paddingX: {
            xs: "1rem ",
            sm: "5rem",
            lg: "10rem",
            xl: "15rem",
          },
        }}
      >
        <Typography
          className=" font-visby"
          sx={{
            color: "var(--primary-700, #6941C6)",
            textAlign: "center",
            fontFamily: "Inter",
            fontSize: "1rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "1.5rem",
          }}
        >
          Published Sep 5
        </Typography>
        <Typography
          className="font-visby"
          sx={{
            marginTop: "0.75rem",
            color: "var(--gray-900, #101828)",
            textAlign: "center",
            fontFamily: "Inter",
            fontSize: "3rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "3.75rem",
            letterSpacing: "-0.06rem",
          }}
        >
          10 Proven Ways to Grow your Wedding Photography Business!
        </Typography>

        <Box
          display="flex"
          justifyContent="center"
          flexDirection="row"
          mt="2.5rem"
          gap="0.5rem"
          pb="4rem"
        >
          <button
            style={{
              padding: "6px 10px",
              borderRadius: "1rem",
              color: "var(--primary-700, #6941C6)",
              border: "1px solid var(--primary-200, #E9D7FE)",
              background: "var(--primary-50, #F9F5FF)",
              mixBlendMode: "multiply",
            }}
          >
            Wedding-photography
          </button>
          <button
            style={{
              padding: "6px 10px",
              borderRadius: "1rem",
              color: "var(--indigo-700, #3538CD)",
              border: "1px solid var(--indigo-200, #C7D7FE)",
              background: "var(--indigo-50, #EEF4FF)",
              mixBlendMode: "multiply",
            }}
          >
            Photography
          </button>
          <button
            style={{
              padding: "6px 10px",
              borderRadius: "1rem",
              color: "var(--pink-700, #C11574)",
              border: "1px solid var(--pink-200, #FCCEEE)",
              background: "var(--pink-50, #FDF2FA)",
              mixBlendMode: "multiply",
            }}
          >
            Business
          </button>
        </Box>
        <CardMedia
          component="img"
          src="	https://miro.medium.com/v2/resize:fit:1400/format:webp/1*JvJ9qIyrNHEmI_JH9X8P0Q.jpeg"
        />
      </Box>

      {/* Blog Body */}
      <Box
        className=""
        sx={{
          paddingX: {
            xs: "1rem ",
            sm: "5rem",
            lg: "10rem",
            xl: "15rem",
          },
        }}
      >
        <Typography
          className="font-visby "
          sx={{
            color: "var(--gray-900, #101828)",
            fontSize: "1.875rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "2.375rem",
          }}
        >
          Introduction
        </Typography>
        <Typography
          mt="1.25rem"
          className="font-visby"
          sx={{
            color: "var(--gray-600, #475467)",
            fontSize: "1.125rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "1.75rem",
          }}
        >
          Starting and running a successful wedding photography business
          requires more than just capturing beautiful moments. It demands
          strategic planning, marketing prowess, and exceptional customer
          service. In this blog, we’ll delve into 10 proven strategies that can
          help you grow your wedding photography business and stand out in a
          competitive industry.
        </Typography>

        <Typography
          className="font-visby "
          mt="2rem"
          sx={{
            color: "var(--gray-900, #101828)",
            fontSize: "1.875rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "2.375rem",
          }}
        >
          Create an Impressive Portfolio:
        </Typography>
        <Typography
          mt="1rem"
          className="font-visby"
          sx={{
            color: "var(--gray-600, #475467)",
            fontSize: "1.125rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "1.75rem",
          }}
        >
          Your portfolio is your first impression. Showcase your best work on
          your website and social media platforms. Highlight a variety of styles
          and settings to demonstrate your versatility.
        </Typography>

        <Typography
          className="font-visby "
          mt="2rem"
          sx={{
            color: "var(--gray-900, #101828)",
            fontSize: "1.875rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "2.375rem",
          }}
        >
          Build a Strong Online Presence:
        </Typography>
        <Typography
          mt="1rem"
          className="font-visby"
          sx={{
            color: "var(--gray-600, #475467)",
            fontSize: "1.125rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "1.75rem",
          }}
        >
          Invest in a professional website that’s easy to navigate and visually
          appealing. Optimise it for search engines to ensure potential clients
          can find you online. Active social media profiles on platforms like
          Instagram and Pinterest can also help you connect with your target
          audience.
        </Typography>

        <Typography
          className="font-visby "
          mt="2rem"
          sx={{
            color: "var(--gray-900, #101828)",
            fontSize: "1.875rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "2.375rem",
          }}
        >
          Networking is Key:
        </Typography>
        <Typography
          mt="1rem"
          className="font-visby"
          sx={{
            color: "var(--gray-600, #475467)",
            fontSize: "1.125rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "1.75rem",
          }}
        >
          Build relationships with other wedding industry professionals, such as
          wedding planners, venues, and florists. Word of mouth referrals from
          trusted sources can lead to a steady stream of clients.
        </Typography>

        <Typography
          className="font-visby "
          mt="2rem"
          sx={{
            color: "var(--gray-900, #101828)",
            fontSize: "1.875rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "2.375rem",
          }}
        >
          Offer Exceptional Customer Service:
        </Typography>

        <Typography
          mt="1rem"
          className="font-visby"
          sx={{
            color: "var(--gray-600, #475467)",
            fontSize: "1.125rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "1.75rem",
          }}
        >
          Happy clients are more likely to recommend you to their friends and
          family. Delivering excellent customer service, from the initial
          inquiry to the final product, can set you apart from competitors.
        </Typography>

        <Typography
          className="font-visby "
          mt="2rem"
          sx={{
            color: "var(--gray-900, #101828)",
            fontSize: "1.875rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "2.375rem",
          }}
        >
          Utilise Testimonials and Reviews:
        </Typography>
        <Typography
          mt="1rem"
          className="font-visby"
          sx={{
            color: "var(--gray-600, #475467)",
            fontSize: "1.125rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "1.75rem",
          }}
        >
          Positive reviews and testimonials from satisfied couples can build
          trust and credibility. Feature them prominently on your website and
          marketing materials.
        </Typography>

        <Typography
          className="font-visby "
          mt="2rem"
          sx={{
            color: "var(--gray-900, #101828)",
            fontSize: "1.875rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "2.375rem",
          }}
        >
          Invest in Education:
        </Typography>
        <Typography
          mt="1rem"
          className="font-visby"
          sx={{
            color: "var(--gray-600, #475467)",
            fontSize: "1.125rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "1.75rem",
          }}
        >
          Stay updated with the latest trends and techniques in wedding
          photography. Attend workshops, webinars, and conferences to
          continuously improve your skills.
        </Typography>

        <Typography
          className="font-visby "
          mt="2rem"
          sx={{
            color: "var(--gray-900, #101828)",
            fontSize: "1.875rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "2.375rem",
          }}
        >
          Create Engaging Content:
        </Typography>
        <Typography
          mt="1rem"
          className="font-visby"
          sx={{
            color: "var(--gray-600, #475467)",
            fontSize: "1.125rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "1.75rem",
          }}
        >
          Start a blog or vlog on your website where you share valuable
          insights, tips, and behind-the-scenes glimpses of your work. This can
          position you as an expert and help with SEO.
        </Typography>

        <Typography
          className="font-visby "
          mt="2rem"
          sx={{
            color: "var(--gray-900, #101828)",
            fontSize: "1.875rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "2.375rem",
          }}
        >
          Offer Packages and Upsells:
        </Typography>
        <Typography
          mt="1rem"
          className="font-visby"
          sx={{
            color: "var(--gray-600, #475467)",
            fontSize: "1.125rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "1.75rem",
          }}
        >
          Create different packages to cater to various budgets and needs.
          Consider offering upsells such as engagement sessions, photo albums,
          or extra hours of coverage.
        </Typography>

        <Typography
          className="font-visby "
          mt="2rem"
          sx={{
            color: "var(--gray-900, #101828)",
            fontSize: "1.875rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "2.375rem",
          }}
        >
          Showcase Real Weddings:
        </Typography>
        <Typography
          mt="1rem"
          className="font-visby"
          sx={{
            color: "var(--gray-600, #475467)",
            fontSize: "1.125rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "1.75rem",
          }}
        >
          Create detailed case studies of past weddings you’ve covered.
          Highlight the challenges you faced and how you overcame them to
          deliver exceptional results.
        </Typography>

        <Box p="2rem" bgcolor="var(--gray-50, #F9FAFB)" my="1rem">
          <Typography
            className="font-visby "
            sx={{
              color: "var(--gray-900, #101828)",
              fontSize: "1.875rem",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "2.375rem",
            }}
          >
            Note
          </Typography>
          <Typography
            className="font-visby"
            mt="2rem"
            sx={{
              color: "var(--gray-600, #475467)",
              fontSize: "1.125rem",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "1.75rem",
            }}
          >
            Growing your wedding photography business requires a combination of
            creativity, business acumen, and dedication. By focusing on building
            a strong online presence, delivering outstanding customer service,
            and continuously improving your skills, you can attract more clients
            and establish a reputable brand in the wedding industry. Remember,
            success doesn’t happen overnight, but with consistent effort, you
            can turn your passion into a thriving business.
          </Typography>
        </Box>

        <Stack
          borderTop="1px solid var(--gray-200, #EAECF0)"
          mt="2rem"
          mb="6rem"
          sx={{
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            justifyContent: {
              xs: "center",
              sm: "space-between",
            },
          }}
        >
          <Stack
            direction="row"
            gap={3}
            sx={{
              marginTop: "1.5rem",
            }}
          >
            <img
              src="https://miro.medium.com/v2/resize:fill:90:90/1*ExAORtIDf5HVCXhf8imUbg@2x.jpeg
"
              alt=""
              style={{
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "12.5rem",
              }}
            />
            <Stack>
              <Typography
                className="font-visby"
                sx={{
                  color: "var(--gray-900, #101828)",
                  fontFamily: "sans-serif",
                  fontSize: "0.875rem",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "1.25rem",
                }}
              >
                cinematicab
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
                }}
              >
                Filmmaker - Traveller. Weddings - Documentaries - Commercials.
                Creatively Magic!
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" gap="1rem">
            <button
              style={{
                padding: "12px 20px",
                borderRadius: "0.5rem",
                border: "1px solid var(--gray-300, #D0D5DD)",
                background: "var(--base-white, #FFF)",
                boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                marginTop: "1rem",
              }}
            >
              <Stack
                direction="row"
                gap="0.5rem"
                alignItems="center"
                justifyContent="center"
              >
                <IconCopy></IconCopy>
                <Box>Copy link</Box>
              </Stack>
            </button>
            <button
              style={{
                borderRadius: "0.5rem",
                border: "1px solid var(--gray-300, #D0D5DD)",
                background: "var(--base-white, #FFF)",
                boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                marginTop: "1rem",
                padding: "0.62rem",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M6.2896 18.1256C13.8368 18.1256 17.9648 11.8728 17.9648 6.45035C17.9648 6.27275 17.9648 6.09595 17.9528 5.91995C18.7559 5.33908 19.4491 4.61986 20 3.79595C19.2512 4.12795 18.4567 4.34558 17.6432 4.44155C18.4998 3.92879 19.141 3.1222 19.4472 2.17195C18.6417 2.64996 17.7605 2.98681 16.8416 3.16795C16.2229 2.5101 15.4047 2.07449 14.5135 1.92852C13.6223 1.78256 12.7078 1.93438 11.9116 2.3605C11.1154 2.78661 10.4819 3.46326 10.109 4.28574C9.73605 5.10822 9.64462 6.03067 9.8488 6.91035C8.21741 6.82852 6.62146 6.40455 5.16455 5.66596C3.70763 4.92737 2.4223 3.89067 1.392 2.62315C0.867274 3.52648 0.70656 4.59584 0.942583 5.6135C1.17861 6.63117 1.79362 7.52061 2.6624 8.10075C2.00936 8.08162 1.37054 7.90545 0.8 7.58715V7.63915C0.800259 8.58653 1.12821 9.50465 1.72823 10.2378C2.32824 10.9709 3.16338 11.474 4.092 11.6616C3.4879 11.8263 2.85406 11.8504 2.2392 11.732C2.50151 12.5472 3.01202 13.2602 3.69937 13.7711C4.38671 14.282 5.21652 14.5654 6.0728 14.5816C5.22203 15.2503 4.24776 15.7447 3.20573 16.0366C2.16369 16.3284 1.07435 16.4119 0 16.2824C1.87653 17.4865 4.05994 18.1253 6.2896 18.1224"
                  fill="#98A2B3"
                />
              </svg>
            </button>
            <button
              style={{
                borderRadius: "0.5rem",
                border: "1px solid var(--gray-300, #D0D5DD)",
                background: "var(--base-white, #FFF)",
                boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                marginTop: "1rem",
                padding: "0.62rem",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_324_2163)">
                  <path
                    d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"
                    fill="#98A2B3"
                  />
                  <path
                    d="M13.8926 12.8906L14.3359 10H11.5625V8.125C11.5625 7.33418 11.95 6.5625 13.1922 6.5625H14.4531V4.10156C14.4531 4.10156 13.3088 3.90625 12.2146 3.90625C9.93047 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C9.47287 20.0405 10.5271 20.0405 11.5625 19.8785V12.8906H13.8926Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_324_2163">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button
              style={{
                borderRadius: "0.5rem",
                border: "1px solid var(--gray-300, #D0D5DD)",
                background: "var(--base-white, #FFF)",
                boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                marginTop: "1rem",
                padding: "0.62rem",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_324_2167)">
                  <path
                    d="M18.5236 0H1.47639C1.08483 0 0.709301 0.155548 0.432425 0.432425C0.155548 0.709301 0 1.08483 0 1.47639V18.5236C0 18.9152 0.155548 19.2907 0.432425 19.5676C0.709301 19.8445 1.08483 20 1.47639 20H18.5236C18.9152 20 19.2907 19.8445 19.5676 19.5676C19.8445 19.2907 20 18.9152 20 18.5236V1.47639C20 1.08483 19.8445 0.709301 19.5676 0.432425C19.2907 0.155548 18.9152 0 18.5236 0ZM5.96111 17.0375H2.95417V7.48611H5.96111V17.0375ZM4.45556 6.1625C4.11447 6.16058 3.7816 6.05766 3.49895 5.86674C3.21629 5.67582 2.99653 5.40544 2.8674 5.08974C2.73826 4.77404 2.70554 4.42716 2.77336 4.09288C2.84118 3.7586 3.0065 3.4519 3.24846 3.21148C3.49042 2.97107 3.79818 2.80772 4.13289 2.74205C4.4676 2.67638 4.81426 2.71133 5.12913 2.84249C5.44399 2.97365 5.71295 3.19514 5.90205 3.47901C6.09116 3.76288 6.19194 4.09641 6.19167 4.4375C6.19488 4.66586 6.15209 4.89253 6.06584 5.104C5.97959 5.31547 5.85165 5.50742 5.68964 5.66839C5.52763 5.82936 5.33487 5.95607 5.12285 6.04096C4.91083 6.12585 4.68389 6.16718 4.45556 6.1625ZM17.0444 17.0458H14.0389V11.8278C14.0389 10.2889 13.3847 9.81389 12.5403 9.81389C11.6486 9.81389 10.7736 10.4861 10.7736 11.8667V17.0458H7.76667V7.49306H10.6583V8.81667H10.6972C10.9875 8.22917 12.0042 7.225 13.5556 7.225C15.2333 7.225 17.0458 8.22083 17.0458 11.1375L17.0444 17.0458Z"
                    fill="#98A2B3"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_324_2167">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

Index.layout = "Landing";
export default Index;
