import { styled, Container, Box, useTheme } from "@mui/material";
import { useSelector } from "../../store/Store";
import { AppState } from "../../store/Store";
import Header from "./vertical/header";
import Sidebar from "./vertical/sidebar/Sidebar";
import Customizer from "./shared/customizer/Customizer";
import Navigation from "./horizontal/navbar/Navigation";
import HorizontalHeader from "./horizontal/header/Header";
import { useRouter } from "next/router";
import { useState } from "react";


const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "60px",
  flexDirection: "column",
  zIndex: 1,
  width: "100%",
  backgroundColor: "transparent",
}));

interface Props {
  children: React.ReactNode;
}


// const FullLayout: FC = ({children}) => {
const FullLayout: React.FC<Props> = ({ children }) => {
  const customizer = useSelector((state: AppState) => state.customizer);
  const theme = useTheme();
  const router = useRouter();
  const [hover, setHover] = useState(false);
  const dynamicRouteValue = router.query?.subeventid !== undefined;
  const onHover= (data: boolean) => {
    setHover(data);
  }
  return (
    <MainWrapper>
      {/* ------------------------------------------- */}
      {/* Sidebar */}
      {/* ------------------------------------------- */}
      <Box sx={{zIndex: hover ? 2 : 0 }}>{customizer.isHorizontal ? "" : <Sidebar onHover={onHover}/>}</Box>
      {/* ------------------------------------------- */}
      {/* Main Wrapper */}
      {/* ------------------------------------------- */}
      <PageWrapper
        className="page-wrapper"
        sx={{
          ...(customizer.isCollapse && {
            [theme.breakpoints.up("lg")]: {
              ml: `${customizer.MiniSidebarWidth}px`,
            },
          }),
        }}
      >
        {/* ------------------------------------------- */}
        {/* Header */}
        {/* ------------------------------------------- */}
        {customizer.isHorizontal ? <HorizontalHeader /> : <Header />}
        {/* PageContent */}
        {customizer.isHorizontal ? <Navigation /> : ""}
        {dynamicRouteValue ? <Box
          sx={{
            maxWidth: customizer.isLayout === "boxed" ? "lg" : "100%!important",
            paddingLeft: 0
          }}
        >
          {/* ------------------------------------------- */}
          {/* PageContent */}
          {/* ------------------------------------------- */}

          <Box sx={{ minHeight: "calc(100vh - 170px)"}}>
            {/* <Outlet /> */}
            {children}
            {/* <Index /> */}
          </Box>

          {/* ------------------------------------------- */}
          {/* End Page */}
          {/* ------------------------------------------- */}
        </Box> : 
        <Container
        sx={{
          maxWidth: customizer.isLayout === "boxed" ? "lg" : "100%!important",
          paddingLeft: 0
        }}
      >
        {/* ------------------------------------------- */}
        {/* PageContent */}
        {/* ------------------------------------------- */}

        <Box sx={{ minHeight: "calc(100vh - 170px)"}}>
          {/* <Outlet /> */}
          {children}
          {/* <Index /> */}
        </Box>

        {/* ------------------------------------------- */}
        {/* End Page */}
        {/* ------------------------------------------- */}
      </Container>}
      {/* Disabling teh customiser used for dark mode light mode an dvertical horizontal view */}
        {/* <Customizer /> */}
      </PageWrapper>
    </MainWrapper>
  );
};

export default FullLayout;
