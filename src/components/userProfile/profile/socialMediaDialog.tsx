import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Box,
} from "@mui/material";

import CustomTextField from "../../forms/theme-elements/customTextField";
interface props {
  open: boolean;
  handleClose: (event: React.SyntheticEvent | any) => void;
}
const SocialMediaDialog = ({ open, handleClose }: props) => {
  return (
    <>
      {/* <Button variant="contained" color="warning" fullWidth onClick={handleClickOpen}>
                Open Form Dialog
            </Button> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText width={"30rem"}>
            Kindly provide the url
          </DialogContentText>
          <Box mt={2}>
            <CustomTextField
              autoFocus
              margin="dense"
              id="name"
              label="Url"
              type="link"
              fullWidth
              placeholder="https://"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SocialMediaDialog;
