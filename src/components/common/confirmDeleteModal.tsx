import { Avatar, Box, Button, Dialog, Typography } from "@mui/material";
import Image from "next/image";

interface props {
  open: boolean;
  handleClose: () => void;
  onConfirmDelete: (data: boolean) => void;
  title: string;
  description?: string;
  cancel?: string;
  close?: string;
}
export default function ConfirmDeleteModal({
  open,
  handleClose,
  onConfirmDelete,
  title,
  description,
  cancel,
  close,
}: props) {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
      <Box
        sx={{
          height: "15rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#f9f9cd",
            borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            src={"/images/caution.png"}
            alt={"Image is laoding..."}
            sx={{
              width: 80,
              height: 80,
              borderRadius: 0,
              margin: "0 auto",
            }}
          />
        </Box>
        <Typography variant="h4" textAlign="center" px={5}>
          {title}
        </Typography>
        {description !== undefined ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Avatar
              src={"/images/warning.png"}
              alt={"Image is laoding..."}
              sx={{
                width: 18,
                height: 18,
                borderRadius: 0,
                margin: "0 auto",
              }}
            />
            <Typography variant="subtitle2" textAlign="center">
              {description}
            </Typography>
          </Box>
        ) : (
          ""
        )}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 2,
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => {
              onConfirmDelete(true);
              handleClose();
            }}
            variant="contained"
            color="error"
            sx={{
              textTransform: "capitalize",
            }}
          >
            {cancel || "delete"}
          </Button>
          <Button
            onClick={() => handleClose()}
            variant="outlined"
            sx={{
              textTransform: "capitalize",
              paddingX: 2,
              color: "black",
              fontWeight: "600",
              border: "1.5px solid rgba(0, 0, 0, 0.80) !important",
              paddingY: "5px",
              "&:hover": {
                backgroundColor: "#fbf8f8",
                border: "1.5px solid black !important",
                color: "black",
              },
            }}
          >
            {close || "cancel"}
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}
