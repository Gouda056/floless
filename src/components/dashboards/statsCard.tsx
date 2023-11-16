import Image from "next/image";
import { Box, CardContent, Grid, Typography } from "@mui/material";
import { topcards } from "./data";

export interface statsDataInterface {
  events_count: string;
  ai_photo_count: string;
  likes_count: string;
  videos_count: string;
}
interface props {
  statsData: statsDataInterface | null;
}
const TopCards = ({ statsData }: props) => {
  return (
    <Grid container spacing={3} mt={3}>
      <Grid item xs={12} sm={4} lg={3}>
        <Box bgcolor={"primary" + ".light"} textAlign="center">
          <CardContent>
            <Image
              src={"images/svgs/icon-speech-bubble.svg"}
              alt={"Image is loading..."}
              width="50"
              height="50"
            />
            <Typography
              color={"primary" + ".main"}
              mt={1}
              variant="subtitle1"
              fontWeight={600}
            >
              No of events
            </Typography>
            <Typography
              color={"primary" + ".main"}
              variant="h4"
              fontWeight={600}
            >
              {statsData?.events_count ? statsData?.events_count : 0}
            </Typography>
          </CardContent>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} lg={3}>
        <Box bgcolor={"warning" + ".light"} textAlign="center">
          <CardContent>
            <Image
              src="images/svgs/icon-connect.svg"
              alt="Image is laoding..."
              width="50"
              height="50"
            />
            <Typography
              color={"warning" + ".main"}
              mt={1}
              variant="subtitle1"
              fontWeight={600}
            >
              AI photos generated
            </Typography>
            <Typography
              color={"warning" + ".main"}
              variant="h4"
              fontWeight={600}
            >
              {statsData?.ai_photo_count ? statsData?.ai_photo_count : 0}
            </Typography>
          </CardContent>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} lg={3}>
        <Box bgcolor={"secondary" + ".light"} textAlign="center">
          <CardContent>
            <Image
              src="images/svgs/icon-favorites.svg"
              alt="Image is loading"
              width="50"
              height="50"
            />
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
              {statsData?.likes_count ? statsData?.likes_count : 0}
            </Typography>
          </CardContent>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} lg={3}>
        <Box bgcolor={"error" + ".light"} textAlign="center">
          <CardContent>
            <Image
              src="images/svgs/video-play.svg"
              alt="Image is laoding..."
              width="50"
              height="50"
            />
            <Typography
              color={"error" + ".main"}
              mt={1}
              variant="subtitle1"
              fontWeight={600}
            >
              No of videos
            </Typography>
            <Typography color={"error" + ".main"} variant="h4" fontWeight={600}>
              {statsData?.videos_count ? statsData?.videos_count : 0}
            </Typography>
          </CardContent>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TopCards;
