// @ts-nocheck
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Box,
  Menu,
  Avatar,
  Typography,
  Divider,
  Button,
  IconButton,
  CircularProgress,
} from "@mui/material";
import * as dropdownData from "./data";

import { IconMail } from "@tabler/icons-react";
import { Stack } from "@mui/system";
import PlanUpgrade from "../../../../components/userProfile/profile/planUpgradeCard";
import { signOut, useSession } from "next-auth/react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Profile = () => {
  const [anchorEl2, setAnchorEl2] = useState(null);
  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const [profileUrl, setProfileUrl] = useState("");
  const [profileName, setProfileName] = useState("");
  const [profileEmail, setProfileEmail] = useState("")
  const [profileRole, setProfileRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const session = useSession();
  const [userId, setUserId] = useState("");
  const BASEURL = process.env.NEXT_PUBLIC_URL;


  // Profile Image fetched
  useEffect(() => {
    setLoading(true);
    axios
    .get(`${BASEURL}/profile`)
    .then((response) => {
      setProfileUrl(response?.data?.data?.profile_photo);
      setProfileName(response?.data?.data?.first_name);
      setProfileEmail(response?.data?.data?.email);
      setProfileRole(response?.data?.data?.role);
    })
    .catch((error) => {
      toast.error(error?.response?.data?.message);
    }).finally(() => {
      setLoading(false);
    });
  }, [])
  setInterval(() =>{
    const newProfile: string | null = JSON.parse(localStorage.getItem('userProfileImageUrl'));
    const userName: string | null = JSON.parse(localStorage.getItem('userName'));
    const userEmail: string | null = JSON.parse(localStorage.getItem('email'));

  if (newProfile || userName || userEmail) {
    // Update the global state with new data
    setProfileUrl(newProfile);
    setProfileName(userName);
    setProfileEmail(userEmail)
  }
  }, 10000)


  useEffect(() => {
    if (session){
      setUserId(session?.userdetails?.id)
    }
  }, [session])
  // Handle Signout
  const handleSignOut = () => {
    localStorage.clear();
    setIsLoggingOut(true);
    axios
      .post(`${BASEURL}/logout`)
      .then((response) => {
        if (response.status === 200) {
          toast.success(response?.data?.message);
        }
      })
      .catch((error) => {
        toast.error(error.response?.data?.message);
        setIsLoggingOut(false);
      }).finally(() => {
        signOut({ callbackUrl: "/login" })
      })
  };  

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="show 11 new notifications"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          ...(typeof anchorEl2 === "object" && {
            color: "primary.main",
          }),
        }}
        onClick={handleClick2}
      >
        <Avatar
          src={profileUrl}
          alt={"ProfileImg"}
          sx={{
            width: 35,
            height: 35,
          }}
        />
      </IconButton>
      {/* Commented the top right profile menu dropdown */}
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        sx={{
          "& .MuiMenu-paper": {
            width: "320px",
            paddingX: 3,
            paddingY: 2,
          },
        }}
      >
        <Typography variant="h5">User Profile</Typography>
        <Stack direction="column" py={1} spacing={2} alignItems="center">
          <Avatar
            src={profileUrl}
            alt={"ProfileImg"}
            sx={{ width: 100, height: 100 }}
          />
          {loading ? <Typography variant="h6">Loading...</Typography> : 
          <Box>
            <Typography
              variant="subtitle2"
              color="textPrimary"
              textAlign={"center"}
              fontWeight={600}
            >
              {profileName}
            </Typography>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              textAlign={"center"}

              gap={1}
            >
              {profileRole}
            </Typography>
            
            <Typography
              variant="subtitle2"
              color="textSecondary"
              display="flex"
              alignItems="center"
              gap={1}
              sx={{wordBreak: "break-all"}}
            >
              <IconMail width={16} height={16} />
              {profileEmail}
            </Typography>
          </Box>}
        </Stack>
        <Divider />
        {dropdownData.profile.map((profile) => (
          <Box key={profile.title}>
            <Box sx={{ py: 2, px: 0 }} className="hover-text-primary">
              <Link href={profile.href}>
                <Stack direction="row" spacing={2}>
                  <Box
                    width="45px"
                    height="45px"
                    bgcolor="primary.light"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink="0"
                  >
                    <Avatar
                      src={profile.icon}
                      alt={profile.icon}
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: 0,
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      fontWeight={600}
                      color="textPrimary"
                      className="text-hover"
                      noWrap
                      sx={{
                        width: "240px",
                      }}
                    >
                      {profile.title}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle2"
                      sx={{
                        width: "240px",
                      }}
                      noWrap
                    >
                      {profile.subtitle}
                    </Typography>
                  </Box>
                </Stack>
              </Link>
            </Box>
          </Box>
        ))}
        <Box mt={2}>
          <Button
          disabled={isLoggingOut}
          // component={Link}
          // href={"/auth/login"}
          onClick={() => {handleSignOut()}}
            variant="outlined"
            color="primary"
            fullWidth
          >
            {isLoggingOut ? <Stack direction="row" alignItems="center" gap={1}>
            <CircularProgress sx={{height: "15px !important", width: "15px !important"}}/>
            <Typography>Logging out...</Typography>
          </Stack>: "Log out"}
          </Button>
        </Box>
      </Menu>
    </Box>
  );
};

export default Profile;
