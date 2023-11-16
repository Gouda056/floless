import { Snackbar, Alert, AlertTitle } from "@mui/material";
interface props {
    errorMessage: string;
    openError: boolean;
    handleCloseError: () => void;
}
const ErrorToast = ({errorMessage, openError , handleCloseError }: props) => {


  return (
    <>
      <Snackbar
        open={openError}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={6000}
        onClose={handleCloseError}
      >
        <Alert
          onClose={handleCloseError}
          severity="error"
          variant="filled"
          sx={{ width: "100%", color: "white"}}
        >
          <AlertTitle>{errorMessage}</AlertTitle>
        </Alert>
      </Snackbar>
    </>
  );
};

export default ErrorToast;
