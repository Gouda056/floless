import React from "react";
import { useEffect, useState } from "react";
import { Box, CircularProgress, Grid } from "@mui/material";
import PageContainer from "../container/pageContainer";
import AdminCards from "./adminCards";
import Welcome from "../../layouts/full/shared/welcome/Welcome";
import Clients from "./clientStats";
import NextNProgress from "nextjs-progressbar";
import { Opacity } from "@mui/icons-material";
import GlobalLoader from "../common/globalLoader";
import axios from "axios";

export default function Modern() {
  const [loading, setLoading] = useState(false);
  const [dashboardData, setDashboardData] = useState("");
  const BASEURL = process.env.NEXT_PUBLIC_URL;

  useEffect(() => {
    setLoading(true);
    axios.get(`${BASEURL}/admin-dashboard`)
    .then((response) => {
      setDashboardData(response?.data)
    }).catch((error) => {
      // console.log(error);
    })
    .finally(() => {
      setLoading(false);
    })
  }, []);




  return (
    <PageContainer>
      <Box>
        {loading && <GlobalLoader />}
        <Grid container spacing={3}>
          {/* column */}
          <Grid item xs={12} lg={12}>
            <AdminCards dashboardData={dashboardData} />
          </Grid>

          <Grid item xs={12} lg={12}>
            <Clients />
          </Grid>
        </Grid>
        {/* column */}
        <Welcome />
      </Box>
    </PageContainer>
  );
}
