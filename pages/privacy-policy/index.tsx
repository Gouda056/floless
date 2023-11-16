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
          paddingY: "3rem !important",
          paddingX: {
            xs: "1rem ",
            sm: "5rem",
            lg: "10rem",
            xl: "15rem",
          },
        }}
      >
        <Typography
          className="font-visby"
          sx={{
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
          Privacy Policy
        </Typography>
      </Box>

      {/* policy Body */}
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
          Welcome to Floless! Floless is committed to protecting your privacy
          and ensuring the security of your personal information. This Privacy
          Policy outlines how we collect, use, disclose, and protect your
          information when you use our website and services. By accessing or
          using Floless, you consent to the practices described in this Privacy
          Policy. Please take the time to review this policy carefully.
        </Typography>

        <Box
          component="ul"
          mt="3rem"
          className="font-visby"
          sx={{
            color: "var(--gray-600, #475467)",
            fontSize: "1.125rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "1.75rem",
            listStyle: "number",
            paddingLeft: "20px !important",
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
              ml: "-1rem",
              mb: "1.5rem",
            }}
          >
            Information we collect
          </Typography>
          <Box
            component="li"
            sx={{
              my: "1rem",
            }}
          >
            Account Information: When you create an account on Floless, we may
            collect personal information such as your name, email address, and a
            password.
          </Box>
          <Box
            component="li"
            sx={{
              my: "1rem",
            }}
          >
            Content: As a professional photographer or guest, you may upload
            photos, videos, reels, and other content to our platform. This
            content may contain personal information, including images of
            individuals.
          </Box>
          <Box
            component="li"
            sx={{
              my: "1rem",
            }}
          >
            Themes and Customization: We collect information related to your
            preferences for selecting themes, fonts, colors, and shades for
            specific events or weddings.
          </Box>
          <Box
            component="li"
            sx={{
              my: "1rem",
            }}
          >
            Face Recognition: If you choose to use our AI-enabled face
            recognition feature, we may collect and process facial images that
            you upload for the purpose of recognition.
          </Box>
          <Box
            component="li"
            sx={{
              my: "1rem",
            }}
          >
            Gallery Creation: Photographers may create galleries for events or
            weddings, which may contain event-specific information and images.
          </Box>
          <Box
            component="li"
            sx={{
              my: "1rem",
            }}
          >
            Usage Information: We collect information about your interactions
            with Floless, including the pages you visit, the features you use,
            and the actions you take.
          </Box>
          <Box
            component="li"
            sx={{
              my: "1rem",
            }}
          >
            Device Information: We may collect information about the device and
            software you use to access Floless, including your device's unique
            identifiers.
          </Box>
        </Box>

        <Box
          component="ul"
          mt="3rem"
          className="font-visby"
          sx={{
            color: "var(--gray-600, #475467)",
            fontSize: "1.125rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "1.75rem",
            listStyle: "number",
            paddingLeft: "20px !important",
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
              ml: "-1rem",
              mb: "1.5rem",
            }}
          >
            How We Use Your Information
          </Typography>
          <Box
            component="li"
            sx={{
              my: "1rem",
            }}
          >
            Providing Services: To provide you with access to Floless and its
            features, including theme customization, gallery creation, and face
            recognition.
          </Box>
          <Box
            component="li"
            sx={{
              my: "1rem",
            }}
          >
            Communication: To communicate with you regarding your account,
            updates, and promotional offers.
          </Box>
          <Box
            component="li"
            sx={{
              my: "1rem",
            }}
          >
            Improving Services: To enhance and improve the quality of our
            services, including customization options and user experience.
          </Box>
          <Box
            component="li"
            sx={{
              my: "1rem",
            }}
          >
            Analytics: To analyze how our website is used, track user trends,
            and gather demographic information for research purposes.
          </Box>
          <Box
            component="li"
            sx={{
              my: "1rem",
            }}
          >
            Security: To protect the security and integrity of our platform and
            user data.
          </Box>
        </Box>

        <Box
          component="ul"
          mt="3rem"
          className="font-visby"
          sx={{
            color: "var(--gray-600, #475467)",
            fontSize: "1.125rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "1.75rem",
            listStyle: "number",
            paddingLeft: "20px !important",
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
              ml: "-1rem",
              mb: "1.5rem",
            }}
          >
            Your Choices
          </Typography>
          <Box
            component="li"
            sx={{
              my: "1rem",
            }}
          >
            Access and Update: You can access and update your account
            information at any time by logging into your Floless account.
          </Box>
          <Box
            component="li"
            sx={{
              my: "1rem",
            }}
          >
            Communication Preferences: You can choose to opt-out of receiving
            promotional emails from us by following the instructions provided in
            those emails.
          </Box>
        </Box>

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
          Security
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
          We take reasonable measures to protect your personal information, but
          no method of transmission over the internet is entirely secure. We
          encourage you to use strong passwords and keep your login information
          confidential.
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
          Changes to this Privacy Policy
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
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons. We will notify you of any material changes through the
          website or email.
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
          Contact Us
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
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us through contact us form.. By using
          Floless, you agree to the terms and conditions of this Privacy Policy.
          Thank you for choosing Floless for your photography needs.
        </Typography>
      </Box>
    </Box>
  );
};

Index.layout = "Landing";
export default Index;
