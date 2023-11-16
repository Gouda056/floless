import {
  Grid,
  Box,
  Typography,
  Button,
  Avatar,
  Stack,
  CardMedia,
  styled,
  Fab,
} from "@mui/material";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconFileDescription,
  IconPencil,
  IconUserCheck,
  IconUserCircle,
} from "@tabler/icons-react";
import ProfileTab from "./ProfileTab";
import BlankCard from "../../shared/BlankCard";
import React from "react";
import { UploadButton } from "react-uploader";
import { Uploader } from "uploader";
import SocialMediaDialog from "./socialMediaDialog";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { relative } from "path";

const uploader = Uploader({ apiKey: "free" });
const uploaderOptions = {
  multi: false,
  styles: {
    colors: {
      primary: "#377dff",
    },
  },
};

const ProfileBanner = () => {
  const ProfileImage = styled(Box)(() => ({
    backgroundImage: "linear-gradient(#50b2fc,#f44c66)",
    borderRadius: "50%",
    width: "110px",
    height: "110px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <BlankCard>
        <CardMedia
          component="img"
          image={"/images/backgrounds/profilebg.jpg"}
          alt={"profilecover"}
          width="100%"
          height="90px"
        />
        <Grid
          container
          spacing={0}
          justifyContent="center"
          alignItems="center"
          mt={0}
        >
          {/* Post | Followers | Following */}
          <Grid
            item
            lg={4}
            sm={12}
            md={5}
            xs={12}
            sx={{
              order: {
                xs: "2",
                sm: "2",
                lg: "1",
              },
            }}
          >
            <Stack
              direction="row"
              textAlign="center"
              justifyContent="center"
              gap={6}
              m={3}
            >
              <Box>
                {/* <Typography color="text.secondary">
                  <IconFileDescription width="20" />
                </Typography> */}
                {/* <Typography variant="h4" fontWeight="600">
                  938
                </Typography> */}
                {/* <Typography color="textSecondary" variant="h6" fontWeight={400}>
                  Posts
                </Typography> */}
              </Box>
              {/* <Box>
                <Typography color="text.secondary">
                  <IconUserCircle width="20" />
                </Typography>
                <Typography variant="h4" fontWeight="600">
                  3,586
                </Typography>
                <Typography color="textSecondary" variant="h6" fontWeight={400}>
                  Followers
                </Typography>
              </Box> */}
              {/* <Box>
                <Typography color="text.secondary">
                  <IconUserCheck width="20" />
                </Typography>
                <Typography variant="h4" fontWeight="600">
                  2,659
                </Typography>
                <Typography color="textSecondary" variant="h6" fontWeight={400}>
                  Following
                </Typography>
              </Box> */}
            </Stack>
          </Grid>
          {/* about profile */}
          <Grid
            item
            lg={4}
            sm={12}
            xs={12}
            sx={{
              order: {
                xs: "1",
                sm: "1",
                lg: "2",
              },
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              textAlign="center"
              justifyContent="center"
              sx={{
                mt: "-85px",
              }}
            >
              <Box>
                <ProfileImage sx={{ position: "relative" }}>
                  <Avatar
                    src={"/images/profile/user-2.jpg"}
                    alt="profileImage"
                    sx={{
                      borderRadius: "50%",
                      width: "100px",
                      height: "100px",
                      border: "4px solid #fff",
                    }}
                  />
                  <Typography
                    // onClick={() => }
                    sx={{
                      position: "absolute",
                      top: 75,
                      right: 12,
                      borderRadius: "100%",
                      backgroundColor: "#C5C5C5",
                      cursor: "pointer",
                    }}
                  >
                    <UploadButton
                      uploader={uploader}
                      options={uploaderOptions}
                      onComplete={(files) =>
                        alert(files.map((x) => x.fileUrl).join("\n"))
                      }
                    >
                      {({ onClick }) => (
                        <IconPencil height={18} width={22} onClick={onClick} />
                      )}
                    </UploadButton>
                  </Typography>
                </ProfileImage>
                <Box mt={1}>
                  <Typography fontWeight={600} variant="h5">
                    Julia Roberts
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="h6"
                    fontWeight={400}
                  >
                    Project Manager
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          {/* friends following buttons */}
          <Grid
            item
            lg={4}
            sm={12}
            xs={12}
            sx={{
              order: {
                xs: "3",
                sm: "3",
                lg: "3",
              },
            }}
          >
            <Stack
              direction={"row"}
              gap={2}
              alignItems="center"
              justifyContent="center"
              my={2}
            >
              <Fab
                size="small"
                color="primary"
                sx={{ backgroundColor: "#1877F2", position: "relative" }}
              >
                <IconBrandFacebook size="16" />
                <IconPencil
                  onClick={() => setOpen(true)}
                  style={{
                    position: "absolute",
                    left: 16,
                    top: 18,
                    borderRadius: "100%",
                    backgroundColor: "#C5C5C5",
                    cursor: "pointer",
                  }}
                  height={14}
                  width={14}
                  color="black"
                />
              </Fab>
              <Fab
                size="small"
                color="primary"
                sx={{ backgroundColor: "#1877F2", position: "relative" }}
              >
                <IconBrandLinkedin size="18" onClick={() => setOpen(true)} />
                <IconPencil
                  onClick={() => setOpen(true)}
                  style={{
                    position: "absolute",
                    left: 16,
                    top: 18,
                    borderRadius: "100%",
                    backgroundColor: "#C5C5C5",
                    cursor: "pointer",
                  }}
                  height={14}
                  width={14}
                  color="black"
                />
              </Fab>
              <Fab
                size="small"
                color="success"
                sx={{ backgroundColor: "#EA4C89", position: "relative" }}
              >
                <IconBrandInstagram size="18" onClick={() => setOpen(true)} />
                <IconPencil
                  onClick={() => setOpen(true)}
                  style={{
                    position: "absolute",
                    left: 16,
                    top: 18,
                    borderRadius: "100%",
                    backgroundColor: "#C5C5C5",
                    cursor: "pointer",
                  }}
                  height={14}
                  width={14}
                  color="black"
                />
              </Fab>
              <Fab
                size="small"
                color="error"
                sx={{ backgroundColor: "#CD201F", position: "relative" }}
              >
                <IconBrandYoutube size="18" onClick={() => setOpen(true)} />
                <IconPencil
                  onClick={() => setOpen(true)}
                  style={{
                    position: "absolute",
                    left: 16,
                    top: 18,
                    borderRadius: "100%",
                    backgroundColor: "#C5C5C5",
                    cursor: "pointer",
                  }}
                  height={14}
                  width={14}
                  color="black"
                />
              </Fab>
            </Stack>
            <SocialMediaDialog open={open} handleClose={handleClose} />
          </Grid>
        </Grid>
        <ProfileTab />
      </BlankCard>
    </>
  );
};

export default ProfileBanner;
