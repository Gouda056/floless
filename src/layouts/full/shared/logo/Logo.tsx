import { FC } from "react";
import { useSelector } from "../../../../store/Store";
import Link from "next/link";
import { Box, styled } from "@mui/material";
import { AppState } from "../../../../store/Store";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const Logo = () => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
  const customizer = useSelector((state: AppState) => state.customizer);
  const hideMenu = lgUp ? customizer.isCollapse && !customizer.isSidebarHover : '';
  const LinkStyled = styled(Link)(() => ({
    height: customizer.TopbarHeight,
    width: customizer.isCollapse ? "60px" : "180px",
    overflow: "hidden",
    display: "block",
  }));

  if (customizer.activeDir === "ltr") {
    return (
      <LinkStyled href="/dashboard" sx={{display: "flex", alignItems: "center", justifyContent: "center", marginTop : {
        xs : "0",
        xl : "8px"
      }}}>
        {customizer.activeMode === "dark" ? (
          <Image
            src="/images/logo_dark.png"
            alt="logo"
            height={145}
            width={160}
            priority
          />
        ) : (
          !hideMenu ?  <Image
            src={"/images/logo.png"}
            alt="logo"
            height={145}
            width={160}
            priority
          /> : 
          <Box sx={{position: "relative",
          left: "-5px"}}>
            <Image
            src={"/images/floless_rtl_logo.png"}
            alt="logo"
            height={40}
            width={30}
            priority
            />
          </Box>
        )}
      </LinkStyled>
    );
  }

  return (
    <LinkStyled href="/dashboard">
      {customizer.activeMode === "dark" ? (
        <Image
          src="/images/logos/dark-rtl-logo.svg"
          alt="logo"
          height={customizer.TopbarHeight}
          width={174}
          priority
        />
      ) : (
        <Image
          src="/images/logos/light-logo-rtl.svg"
          alt="logo"
          height={customizer.TopbarHeight}
          width={174}
          priority
        />
      )}
    </LinkStyled>
  );
};

export default Logo;
