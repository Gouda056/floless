import { Box, Drawer } from "@mui/material";
import EmailList from "./EmailList";
import EmailContent from "./EmailContent";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export default function Inbox() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inBoxMessageId, setInBoxMessageId] = useState(0);
  const BASEURL = process.env.NEXT_PUBLIC_URL;
  const secdrawerWidth = 340;

  // Fetch all list of mails 
  useEffect(() => {
    setLoading(true)
    axios
      .get(`${BASEURL}/all-inbox`)
      .then((response) => {
        setEmails(response?.data?.data);
        setInBoxMessageId(response?.data?.data[0]?.id)
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // To receive the selcted email from email list
  const onSelectedEmail = (id: number) => {
    setInBoxMessageId(id);
  }

  return (
    <Box sx={{display: "flex", width: "100%"}}>
      <Box
        sx={{
          minWidth: secdrawerWidth,
          width: { xs: "100%", md: secdrawerWidth, lg: secdrawerWidth },
          flexShrink: 0,
        }}
      >
        <EmailList emails={emails} selecetdMessageId={inBoxMessageId} onSelectedEmail={onSelectedEmail} />
      </Box>
      <Drawer
        anchor="right"
        variant="permanent"
        sx={{
          zIndex: 0,
          width: "200px",
          flex: "1 1 auto",
          [`& .MuiDrawer-paper`]: { position: "relative" },
        }}
      >
        <Box>
          <EmailContent selectedEmailId={inBoxMessageId} />
        </Box>
      </Drawer>
    </Box>
  );
}
