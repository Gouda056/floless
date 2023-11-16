import Image from "next/image";
import { Box, CardContent, Grid, Typography } from "@mui/material";
import icon6 from "public/images/svgs/icon-account.svg";
import icon1 from "public/images/svgs/icon-tasks.svg";
import icon4 from "public/images/svgs/video-play.svg";
import icon5 from "public/images/svgs/icon-favorites.svg";

interface props {
  dashboardData: any;
}
const TopCards = ({ dashboardData }: props) => {

  return (
    <Grid container spacing={3} mt={3}>
      <Grid item xs={12} sm={4} lg={3}>
        <Box bgcolor={"primary" + ".light"} textAlign="center">
          <CardContent>
            <Image src={icon6} alt={"topcard.icon"} width="50" height="50" />
            <Typography
              color={"primary" + ".main"}
              mt={1}
              variant="subtitle1"
              fontWeight={600}
            >
              Number of Clients
            </Typography>
            <Typography
              color={"primary" + ".main"}
              variant="h4"
              fontWeight={600}
            >
              {dashboardData?.total_clients ? dashboardData?.total_clients : 0}
            </Typography>
          </CardContent>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} lg={3}>
        <Box bgcolor={"warning" + ".light"} textAlign="center">
          <CardContent>
            <Image src={icon1} alt={"topcard.icon"} width="50" height="50" />
            <Typography
              color={"warning" + ".main"}
              mt={1}
              variant="subtitle1"
              fontWeight={600}
            >
              Number of photos
            </Typography>
            <Typography
              color={"warning" + ".main"}
              variant="h4"
              fontWeight={600}
            >
              {dashboardData?.total_photos ? dashboardData?.total_photos : 0}
            </Typography>
          </CardContent>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} lg={3}>
        <Box bgcolor={"secondary" + ".light"} textAlign="center">
          <CardContent>
            <Image src={icon5} alt={"topcard.icon"} width="50" height="50" />
            <Typography
              color={"secondary" + ".main"}
              mt={1}
              variant="subtitle1"
              fontWeight={600}
            >
              Photos liked
            </Typography>
            <Typography
              color={"secondary" + ".main"}
              variant="h4"
              fontWeight={600}
            >
              {dashboardData?.total_photos_like ? dashboardData?.total_photos_like : 0}
            </Typography>
          </CardContent>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} lg={3}>
        <Box bgcolor={"error" + ".light"} textAlign="center">
          <CardContent>
            <Image src={icon4} alt={"topcard.icon"} width="50" height="50" />
            <Typography
              color={"error" + ".main"}
              mt={1}
              variant="subtitle1"
              fontWeight={600}
            >
              Number of videos
            </Typography>
            <Typography
              color={"error" + ".main"}
              variant="h4"
              fontWeight={600}
            >
              {dashboardData?.total_videos ? dashboardData?.total_videos : 0}
            </Typography>
          </CardContent>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TopCards;
