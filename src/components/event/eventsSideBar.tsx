import { useRouter } from "next/router";
import {
  List,
  ListItemText,
  ListItemButton,
  Typography,
  Button,
} from "@mui/material";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import ShareModal from "./shareModal";
interface props {
  subEvents: Array<any>;
  onSubEventsUpdated: (value: boolean) => void;
}

export default function EventSideBar({ subEvents, onSubEventsUpdated }: props) {
  const router = useRouter();
  const activePath = router.asPath.split("/")[4];
  const mainEventId = router.asPath.split("/")[2];
  const [showShare, setShowShare] = useState(false);
  const activeSubEventId = router.asPath.split("/")[3] || null;
  const BASEURL = process.env.NEXT_PUBLIC_URL;

  // Handler fro closing share modal 
  const handleCloseShareModal = () => {
    setShowShare(false);
  }

  return (
    <>
      <SimpleBar style={{ height: "29rem", width: "14rem" }}>
        <List sx={{ pt: 1 }}>
          {subEvents?.map((event, i) => (
            <ListItemButton
              selected={
                Number(activeSubEventId) === event.id &&
                activePath !== "my-collection"
              }
              sx={{
                color: "black",
                borderRadius: "5px",
                // width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 0.5,
              }}
              key={i}
            >
              <ListItemText
                onClick={() =>
                  router.replace(
                    `/events/${mainEventId}/${event.id}/image-gallery`
                  )
                }
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    textTransform: "capitalize",
                    wordBreak: "break-all",
                  }}
                >
                  {event.name}
                </Typography>
              </ListItemText>
            </ListItemButton>
          ))}
        </List>
      </SimpleBar>
          <Button
          sx={{zIndex: 50, marginTop: 1.5, marginBottom: 2}}
          onClick={() => setShowShare(true)}
          variant="contained" color="primary" fullWidth>Share</Button>
          <ShareModal open={showShare} handleClose={handleCloseShareModal} />
    </>
  );
}
