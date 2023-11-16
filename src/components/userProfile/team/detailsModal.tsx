import {
  Avatar,
  Box,
  CircularProgress,
  Dialog,
  DialogContent,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { IconX } from "@tabler/icons-react";
import axios from "axios";
import { useEffect, useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

interface props {
  open: boolean;
  handleClose: () => void;
  teamMemberEventDetails: any;
  teamMemberId: number;
}

const data = [
  {
    id: 1,
    name: "Anniversary",
    image: "/images/event/wedding3.jpg",
    email: "test@gmail.com",
  },
  {
    id: 1,
    name: "Birthday",
    image: "/images/event/wedding3.jpg",
    email: "test@gmail.com",
  },
  {
    id: 1,
    name: "Birthday",
    image: "/images/event/wedding3.jpg",
    email: "test@gmail.com",
  },
  {
    id: 1,
    name: "COnference",
    image: "/images/event/wedding3.jpg",
    email: "test@gmail.com",
  },
  {
    id: 1,
    name: "Marriage",
    image: "/images/event/wedding3.jpg",
    email: "test@gmail.com",
  },
];

export default function TeamDetails({
  open,
  handleClose,
  teamMemberEventDetails,
  teamMemberId,
}: props) {
  const [memberName, setMemberName] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const BASEURL = process.env.NEXT_PUBLIC_URL;

  useEffect(() => {
    if (teamMemberId !== 0 )
    axios
      .get(`${BASEURL}/team-member/${teamMemberId}`)
      .then((response) => {
        setMemberName(response?.data?.data?.first_name);
        setMemberEmail(response?.data?.data?.email);
      });
  }, [teamMemberId]);


  return (
    <Box>
      <Dialog open={open} onClose={() => false} fullWidth maxWidth="xs">
        <Toolbar sx={{ position: "absolute", top: 0, right: 0 }}>
          <IconButton
            sx={{
              border: "1px solid #B8B8B8",
              borderRadius: "5px",
              "&:active": {
                borderColor: "blue",
                outline: "2px solid blue",
              },
              "&:focus": {
                outline: "2px solid blue",
              },
            }}
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <IconX height={18} />
          </IconButton>
        </Toolbar>
        <DialogContent>
          {/* <Typography variant="h4" sx={{ paddingTop: 2 }}>
            Project Details
          </Typography> */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center !important",
              marginBottom: 1,
            }}
          >
            <Avatar
              src={"/images/profile/user-1.jpg"}
              alt={"Image is loading..."}
              sx={{ width: 130, height: 130, margin: "0 auto" }}
            />
            <Typography variant="h5">{memberName}</Typography>
            <Typography variant="subtitle1">{memberEmail}</Typography>
          </Box>
          <Divider></Divider>
          <SimpleBar style={{ maxHeight: 300 }}>
            {teamMemberEventDetails.length > 0 ? (
              teamMemberEventDetails?.map((member: any, i: number) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center !important",
                    width: "100%",
                    marginY: 2,
                  }}
                >
                  <Box sx={{ width: "20%" }}>
                    <Avatar
                      src={member.image}
                      alt={"Image is loading..."}
                      sx={{ width: 30, height: 30, margin: "0 auto" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      width: "40%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="h6">{member.name}</Typography>
                    <Typography variant="subtitle2">{member.email}</Typography>
                  </Box>
                </Box>
              ))
            ) : teamMemberEventDetails === null && teamMemberEventDetails.length === 0 ? (
              <Box
                sx={{
                  marginTop: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "1.5rem",
                  width: "100%",
                }}
              >
                <CircularProgress />
                <Typography variant="h4">Loading...</Typography>
              </Box>
            ) : (
              <Typography variant="h6" sx={{textAlign: "center", py: 1}}> Not data found !</Typography>
            )}
          </SimpleBar>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
