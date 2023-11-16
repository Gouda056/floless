import React, { useEffect, useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  Chip,
  Divider,
  Stack,
  CircularProgress,
} from "@mui/material";
import { EmailType } from "../../../types/apps/email";
import { useSelector } from "../../../store/Store";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
interface props {
  selectedEmailId: number;
}
const EmailContent = ({ selectedEmailId }: props) => {
  const BASEURL = process.env.NEXT_PUBLIC_URL;
  const [loading, setLoading] = useState(false);
  const [emailMessage, setEmailMessage] = useState<null | any>("");
  // const emailDetails: EmailType = useSelector(
  //   (state) => state.emailReducer.emails[state.emailReducer.emailContent - 1]
  // );

  // To fetch amil contetnt based on inbox id
  useEffect(() => {
    setLoading(true);
    if (selectedEmailId !== undefined && selectedEmailId > 0) {
      axios
        .get(`${BASEURL}/inbox/${selectedEmailId}`)
        .then((response) => {
          setEmailMessage(response?.data?.data);
          // console.log(response);
        })
        .catch((error) => {
          toast.error(error?.response?.data?.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [selectedEmailId]);

  return (
    <Box>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "30rem",
            width: "100%",
          }}
        >
          <CircularProgress />
          <Typography variant="h4">Loading...</Typography>
        </Box>
      ) : (
        <Box>
          <Stack p={2} gap={0} direction="row"></Stack>
          <Divider />
          <Box p={3}>
            <Box display="flex" alignItems="center" sx={{ pb: 3,position : "sticky", top : "5rem",backgroundColor : "white" }} >
              <Avatar
                alt={emailMessage?.email}
                // src={emailDetails?.thumbnail}
                sx={{ width: 40, height: 40 }}
              />
              <Box sx={{ ml: 2 }}>
                <Typography variant="h6">{emailMessage?.name}</Typography>
                <Typography variant="body2">{emailMessage?.email}</Typography>
              </Box>
              {emailMessage?.event_name ? (
                <Chip
                  label={emailMessage?.event_name}
                  sx={{ ml: "auto", height: "21px" }}
                  size="small"
                  color={"primary"}
                />
              ) : null}
            </Box>
            <Box sx={{ py: 2 }}>
              {/* <Typography variant="h4">{emailDetails?.subject}</Typography> */}
            </Box>
            <Box sx={{ py: 2 , }}>
              <div
                style={{ height: "18rem" }}
                dangerouslySetInnerHTML={{ __html: emailMessage?.message }}
              />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default EmailContent;
