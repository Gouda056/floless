
// @ts-nocheck
import { Box, Button, Dialog, DialogContent, DialogTitle, Divider, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { IconCopy, IconX } from "@tabler/icons-react";
import React, { useEffect, useRef, useState } from "react";
import QRCode from "react-qr-code";
import CustomTextField from "../forms/theme-elements/customTextField";
import clipboardCopy from 'clipboard-copy';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";


interface props {
  open: boolean;
  handleClose: () => void;
}
export default function ShareModal({ open, handleClose }: props) {
  const router = useRouter();
  const {maineventid} = router.query;
  const {subeventid} = router.query;
  const[userid, setUserid] = useState("");
  const {data: session} = useSession();

  const textToCopy = `https://floless-photographer.vercel.app/events/${maineventid}/${subeventid}/invitee-form`;
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleCopy = async () => {
    try {
      await clipboardCopy(textToCopy); 
      toast.success("Text copied successfully")
    } catch (error) {
      console.error('Copy to clipboard failed: ', error);
    }
  }

    const downloadQRCode = () => {
    if (textToCopy) {
      const qrCodeElement = document.getElementById("qr-code");
 
      if (qrCodeElement) {
        html2canvas(qrCodeElement).then((canvas) => {
          canvas.toBlob((blob) => {
            saveAs(blob, "qrcode.png");
          });
        });
      }
    }
  };
  useEffect(() => {
    if (session) {
      setUserid(session?.userdetails?.id)
    }
  }, [session])

  return (
    <Dialog open={open} onClose={() => false} fullWidth maxWidth="md">
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
            onClick={() => {handleClose()}}
            aria-label="close"
          >
            <IconX height={18} />
          </IconButton>
        </Toolbar>
        <DialogContent>
          <Typography variant="h3" sx={{marginTop: 2, marginBottom: 2}}>Add Invitee Details</Typography>
          <Divider></Divider>
          <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", marginTop: 2}}>
          <Box id="qr-code">
            <QRCode
              size={250}
              style={{ height: 250, maxWidth: "100%", width: "100%" }}
              value={
                `https://floless-photographer.vercel.app/events/${maineventid}/${subeventid}/invitee-form?user=${userid}`
              }
              viewBox={`0 0 200 200`}
            />
          </Box>
          <Button variant="contained" sx={{marginTop: 1}} onClick={downloadQRCode}>Download</Button>
          </Box>
          <Box sx={{position: "relative", marginTop: 2, display: "flex", justifyContent: "center", alignItems: "center"}}>
            <CustomTextField
            value={`https://floless-photographer.vercel.app/events/${maineventid}/${subeventid}/invitee-form?user=${userid}`}
            customWidth="90%"
            />
            <IconButton sx={{position: "absolute", right: 50, bottom: 6, backgroundColor: "white"}} onClick={handleCopy}>
              <IconCopy height={18} />
            </IconButton>
          </Box>
        </DialogContent>
      <Stack>
        
      </Stack>
      <ToastContainer />
    </Dialog>
  );
}
