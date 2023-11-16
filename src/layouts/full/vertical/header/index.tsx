import {
  IconButton,
  Box,
  AppBar,
  useMediaQuery,
  Toolbar,
  styled,
  Stack,
  Typography,
} from "@mui/material";
import { useSelector, useDispatch } from "../../../../store/Store";
import {
  toggleSidebar,
  toggleMobileSidebar,
} from "../../../../store/customizer/CustomizerSlice";
import { IconMenu2 } from "@tabler/icons-react";
import { AppState } from "../../../../store/Store";
import Profile from "./profile";
import { useEffect, useState } from "react";
import axios from "axios";
import { getSession } from "next-auth/react";

const Header = () => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));
  const lgDown = useMediaQuery((theme: any) => theme.breakpoints.down("lg"));
  const BASEURL = process.env.NEXT_PUBLIC_URL;
  const [companyLogo, setCompanyLogo] = useState<any>(
    "/images/profile/blank-image-skeleton.png"
  );
  const [companyName, setCompanyName] = useState<any>("");
  const [role, setRole] = useState("");
  // drawer
  const customizer = useSelector((state: AppState) => state.customizer);
  const dispatch = useDispatch();

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    background: theme.palette.background.paper,
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    [theme.breakpoints.up("lg")]: {
      minHeight: customizer.TopbarHeight,
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    color: theme.palette.text.secondary,
  }));

  setInterval(() => {
    const newProfile = localStorage.getItem("companyLogo");
    const userName = localStorage.getItem("companyName");

    if (newProfile || userName) {
      // Update the global state with new data
      setCompanyLogo(newProfile);
      setCompanyName(userName);
    }
  }, 10000);

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        {/* ------------------------------------------- */}
        {/* Toggle Button Sidebar */}
        {/* ------------------------------------------- */}
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={
            lgUp
              ? () => dispatch(toggleSidebar())
              : () => dispatch(toggleMobileSidebar())
          }
        >
          <IconMenu2 size="20" />
        </IconButton>
        {role === "Photographer" && companyName !== "Loading.." ? (
          <>
            <img
              src={companyLogo}
              alt="/images/profile/blank-image-skeleton.png"
              height={40}
              width={40}
              style={{
                borderRadius: "50px",
              }}
            />
            <Typography ml={1}>{companyName}</Typography>
          </>
        ) : null}

        {/* ------------------------------------------- */}
        {/* Search Dropdown commented*/}
        {/* ------------------------------------------- */}

        {/* <Search /> */}
        {/* Commented lg header navigation */}
        {/* {lgUp ? (
          <>
            <Navigation />
          </>
        ) : null} */}

        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
          {/* Language commented */}
          {/* <Language /> */}
          {/* ------------------------------------------- */}
          {/* Ecommerce Dropdown commented*/}
          {/* ------------------------------------------- */}
          {/* <Cart /> */}
          {/* ------------------------------------------- */}
          {/* End Ecommerce Dropdown commented*/}
          {/* ------------------------------------------- */}
          {/* <Notifications /> */}
          {/* ------------------------------------------- */}
          {/* Toggle Right Sidebar for mobile */}
          {/* ------------------------------------------- */}
          {/* Commented mobile right side bar / Navigation */}
          {/* {lgDown ? <MobileRightSidebar /> : null} */}
          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default Header;
