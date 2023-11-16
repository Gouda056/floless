import {
  useMediaQuery,
  Box,
  Drawer,
  useTheme,
  Stack,
  Typography,
} from "@mui/material";
import SidebarItems from "./SidebarItems";
import Logo from "../../shared/logo/Logo";
import { useSelector, useDispatch } from "../../../../store/Store";
import {
  hoverSidebar,
  toggleMobileSidebar,
} from "../../../../store/customizer/CustomizerSlice";
import Scrollbar from "../../../../components/custom-scroll/scrollbar";
import { Profile } from "./sidebar-profile/Profile";
import { AppState } from "../../../../store/Store";
import { IconLogout } from "@tabler/icons-react";
import { signOut } from "next-auth/react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface props {
  onHover: (data: boolean) => void;
}
const Sidebar = ({ onHover }: props) => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));
  const customizer = useSelector((state: AppState) => state.customizer);
  const hideMenu = lgUp
    ? customizer.isCollapse && !customizer.isSidebarHover
    : "";
  const dispatch = useDispatch();
  const theme = useTheme();
  const BASEURL = process.env.NEXT_PUBLIC_URL;
  const toggleWidth =
    customizer.isCollapse && !customizer.isSidebarHover
      ? customizer.MiniSidebarWidth
      : customizer.SidebarWidth;

  const onHoverEnter = () => {
    if (customizer.isCollapse) {
      dispatch(hoverSidebar(true));
      onHover(true);
    }
  };

  const onHoverLeave = () => {
    dispatch(hoverSidebar(false));
    onHover(false);
  };

  // Handle Signout
  const handleSignOut = () => {
    axios
      .get(`${BASEURL}/logout`)
      .then((response) => {
        if (response.status === 200) {
          toast.success(response?.data?.message);
          localStorage.clear();
          signOut({ callbackUrl: "/login" });
        }
      })
      .catch((error) => {
        toast.error(error.response?.data?.message);
      });
  };

  if (lgUp) {
    return (
      <Box
        sx={{
          width: toggleWidth,
          flexShrink: 0,
          ...(customizer.isCollapse && {
            position: "absolute",
          }),
        }}
      >
        {/* ------------------------------------------- */}
        {/* Sidebar for desktop */}
        {/* ------------------------------------------- */}
        <Drawer
          anchor="left"
          open
          onMouseEnter={onHoverEnter}
          onMouseLeave={onHoverLeave}
          variant="permanent"
          PaperProps={{
            sx: {
              transition: theme.transitions.create("width", {
                duration: theme.transitions.duration.shortest,
              }),
              width: toggleWidth,
              boxSizing: "border-box",
            },
          }}
        >
          {/* ------------------------------------------- */}
          {/* Sidebar Box */}
          {/* ------------------------------------------- */}
          <Box
            sx={{
              height: "100%",
            }}
          >
            {/* ------------------------------------------- */}
            {/* Logo */}
            {/* ------------------------------------------- */}
            <Box px={3}>
              <Logo />
            </Box>
            <Scrollbar sx={{ height: "calc(100% - 190px)" }}>
              {/* ------------------------------------------- */}
              {/* Sidebar Items */}
              {/* ------------------------------------------- */}
              <SidebarItems />
            </Scrollbar>
            {!hideMenu ? (
              <Box
                onClick={() =>{ signOut({ callbackUrl: "/login" }); localStorage.clear();}}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  paddingX: 3,
                  paddingY: 1.5,
                  marginTop: "60px",
                  borderRadius: "10px",
                  marginX: 1,
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#ECF2FF",
                    color: "#5D87FF",
                  }
                }}
              >
                <IconLogout height={21} />
                <Typography variant="subtitle2">Logout</Typography>
              </Box>
            ) : (
              <Box
                onClick={() => handleSignOut()}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "60px",
                }}
              >
                <IconLogout height={21} />
              </Box>
            )}
            {/* <Profile /> */}
          </Box>
        </Drawer>
      </Box>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={customizer.isMobileSidebar}
      onClose={() => dispatch(toggleMobileSidebar())}
      variant="temporary"
      PaperProps={{
        sx: {
          width: customizer.SidebarWidth,

          // backgroundColor:
          //   customizer.activeMode === 'dark'
          //     ? customizer.darkBackground900
          //     : customizer.activeSidebarBg,
          // color: customizer.activeSidebarBg === '#ffffff' ? '' : 'white',
          border: "0 !important",
          boxShadow: (theme: any) => theme.shadows[8],
        },
      }}
    >
      {/* ------------------------------------------- */}
      {/* Logo */}
      {/* ------------------------------------------- */}
      <Box px={2}>
        <Logo />
      </Box>
      {/* ------------------------------------------- */}
      {/* Sidebar For Mobile */}
      {/* ------------------------------------------- */}
      <SidebarItems />
      <ToastContainer />
    </Drawer>
  );
};

export default Sidebar;
