import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import Logo from "../../../layouts/full/shared/logo/Logo";
import Link from "next/link";
import { AddBoxTwoTone } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { IconMenu, IconX } from "@tabler/icons-react";
// import { useSession } from "next-auth/react";

const pages = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Resources",
    href: "/resources",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
  {
    name: "Looks",
    href: "/looks",
  },
  {
    name: "Get Started",
    href: "/dashboard",
  },
];

function Navbar() {
  const [color, setColor] = useState("transparent");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userid, setUserid] = useState(null);
  // const { data: session } = useSession();

  // useEffect(() => {
  //   if (session) setUserid(session?.userdetails.id);
  // }, [session]);

  const handleOpenNavMenu = () => {
    if (sidebarOpen) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  };

  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      return setColor("transparent");
    } else if (window.scrollY > 70) {
      return setColor("white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div>
      {sidebarOpen ? (
        <Box
          className="sidebar animate__animated animate__slideInRight"
          sx={{
            display: {
              xs: "flex",
              xl: "none",
            },
          }}
        >
          {/* Sidebar content goes here */}
          <Box
            sx={{
              height: "100dvh",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {pages.map((page) => (
              <Button
                component={Link}
                key={page.name}
                href={
                  userid !== null && page.name === "Get Started"
                    ? "/dashboard"
                    : page.href
                }
                onClick={handleOpenNavMenu}
                className="font-visby"
                target={page.name === "Get Started" ? "_blank" : ""}
                sx={{
                  my: 2,
                  zIndex: 100,
                  borderRadius: "50px",
                  display: "flex",
                  padding: page.name === "Get Started" ? "12px 20px" : "0",
                  fontSize: page.name === "Get Started" ? "16px" : "16px",
                  fontWeight:
                    page.href === window.location.pathname ? "700" : "500",
                  color:
                    page.name === "Get Started"
                      ? "White"
                      : page.href === window.location.pathname
                      ? "#2970FF"
                      : "black",
                  backgroundColor:
                    page.name === "Get Started" ? "#2970FF" : "transparent",
                  ":hover": {
                    backgroundColor:
                      page.name === "Get Started" ? "#2970FF" : "transparent",
                    color: page.name === "Get Started" ? "white" : "black",
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Box>
      ) : null}
      <AppBar
        position="fixed"
        className="navbar-bg-color animate__animated animate__bounceInDown"
        sx={{
          backgroundColor: `${color}`,
          paddingY: "5px",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", xl: "none" },
                justifyContent: "space-between",
              }}
            >
              <Box pt={1} pl={1} component={Link} href="/">
                <img
                  src="/images/logo-cropped.png"
                  width={65}
                  height={50}
                  alt=""
                />
              </Box>
              <Box alignItems="center" display="flex">
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                >
                  {sidebarOpen ? (
                    <>
                      <IconX onClick={handleOpenNavMenu} />
                    </>
                  ) : (
                    <>
                      <IconMenu onClick={handleOpenNavMenu} />
                    </>
                  )}
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", xl: "flex" },
                justifyContent: "center",
                gap: "3rem",
              }}
            >
              <Box
                component={Link}
                href="/"
                sx={{
                  marginRight: "6vw",
                  marginTop: "0.8rem",
                }}
              >
                <img
                  src="/images/logo-cropped.png"
                  width={70}
                  height={60}
                  alt=""
                />
              </Box>

              {pages.map((page) => (
                <Button
                  key={page.name}
                  component={Link}
                  href={
                    userid !== null && page.name === "Get Started"
                      ? "/dashboard"
                      : page.href
                  }
                  target={page.name === "Get Started" ? "_blank" : ""}
                  className="font-visby"
                  sx={{
                    my: 2,
                    zIndex: 100,
                    borderRadius: "50px",
                    display: "flex",
                    padding: page.name === "Get Started" ? "12px 20px" : "0",
                    fontSize: page.name === "Get Started" ? "16px" : "16px",
                    fontWeight:
                      page.href === window.location.pathname ? "700" : "500",
                    color:
                      page.name === "Get Started"
                        ? "White"
                        : page.href === window.location.pathname
                        ? "#2970FF"
                        : "black",
                    backgroundColor:
                      page.name === "Get Started" ? "#2970FF" : "transparent",
                    marginLeft: page.name === "Get Started" ? "6vw" : "0vw",
                    ":hover": {
                      backgroundColor:
                        page.name === "Get Started" ? "#2970FF" : "transparent",
                      color: page.name === "Get Started" ? "white" : "black",
                    },
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default Navbar;
