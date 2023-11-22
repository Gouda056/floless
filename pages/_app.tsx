/* eslint-disable react/display-name */
// @ts-nocheck
import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeSettings } from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import { Provider } from "react-redux";
import Store from "../src/store/Store";
import RTL from "./../src/layouts/full/shared/customizer/RTL";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useSelector } from "../src/store/Store";
import { AppState } from "../src/store/Store";
import NextNProgress from "nextjs-progressbar";
import BlankLayout from "../src/layouts/blank/BlankLayout";
import LandingLayout from "../src/layouts/landing/landingPageLayout";
import FullLayout from "../src/layouts/full/fullLayout";
import AxiosConfig from "../utils/axiosConfig";
// CSS FILES
import "react-quill/dist/quill.snow.css";
import "./forms/form-quill/Quill.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/global.css";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const layouts: any = {
  Blank: BlankLayout,
  Landing: LandingLayout,
};

const MyApp = (props: MyAppProps) => {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
  }: any = props;
  const theme = ThemeSettings();
  const customizer = useSelector((state: AppState) => state.customizer);
  const Layout = layouts[Component.layout] || FullLayout;
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const pageForAxios = router.asPath.split("/")[4];

  React.useEffect(() => {
    setTimeout(() => setLoading(true), 1000);
  }, []);
  return (
    <SessionProvider session={pageProps.session}>
      <AxiosConfig page={pageForAxios} />
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <title>Flooowless</title>
          <style>
            @import url('
            https://fonts.googleapis.com/css2?family=Bevan&family=Concert+One&family=Figtree&family=Lato&family=Lilita+One&family=Merriweather&family=Monoton&family=Montserrat&family=Noto+Sans&family=Noto+Serif&family=Nunito+Sans:opsz@6..12&family=Open+Sans&family=Oswald&family=PT+Sans&family=Prompt&family=Raleway&family=Roboto&family=Slabo+13px&family=Slabo+27px&family=Source+Sans+3&family=Work+Sans&family=Young+Serif&display=swap');
          </style>
          <link
            rel="preconnect"
            href="
https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="
https://fonts.gstatic.com"
            crossorigin
          />
          <link
            href="
https://fonts.googleapis.com/css2?family=Bevan&family=Concert+One&family=Figtree&family=Lato&family=Lilita+One&family=Merriweather&family=Monoton&family=Montserrat&family=Noto+Sans&family=Noto+Serif&family=Nunito+Sans:opsz@6..12&family=Open+Sans&family=Oswald&family=PT+Sans&family=Prompt&family=Raleway&family=Roboto&family=Slabo+13px&family=Slabo+27px&family=Source+Sans+3&family=Work+Sans&family=Young+Serif&display=swap"
            rel="stylesheet"
          />
        </Head>
        <NextNProgress color="#5D87FF" />
        <ThemeProvider theme={theme}>
          <RTL direction={customizer.activeDir}>
            <CssBaseline />
            {loading ? (
              <Layout>
                <Component {...pageProps} />
              </Layout>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100vh",
                }}
              >
                <CircularProgress />
              </Box>
            )}
          </RTL>
        </ThemeProvider>
      </CacheProvider>
    </SessionProvider>
  );
};

export default (props: MyAppProps) => (
  <Provider store={Store}>
    <MyApp {...props} />
  </Provider>
);
