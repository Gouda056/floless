// @ts-nocheck
import PageContainer from "./container/PageContainer";
import { Box, Button, CircularProgress, Typography } from "@mui/material";

interface props {
    percentageValue: number;
    filesUploaded?: number;
    filesLength?: number;
    onCancel?: () => void;
}
export default function UploadLoader({percentageValue, filesLength, filesUploaded, onCancel}: props) {
  const handleCancel = () => {
    onCancel();
  };
  return (
    <PageContainer>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            zIndex: 99999,
            position: "fixed",
            overflow: "hidden",
            left: "0",
            top: "0",
            right: "0",
            backgroundColor: "black",
            opacity: 0.7,
            borderRadius: "0px",
            flexDirection: "column"
          //   position: "relative",
          }}
        >
          <CircularProgress variant="determinate" value={100} />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 82,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              component="div"
              color="#ffff"
            >{`${Math.round(percentageValue)}%`}</Typography>
          </Box>
              <Typography
                variant="subtitle1"
                component="div"
                color="#ffff"
              >Uploading...</Typography>
            <Typography variant="subtitle1" component="div" color="#ffff">{filesUploaded}/{filesLength}</Typography>
              <Button variant="outlined" color="error" onClick={() => handleCancel()}>Cancel</Button>
        </Box>
          <Box sx={{marginTop: 5, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
          </Box>
      </Box>
    </PageContainer>
  );
}
UploadLoader.layout = "Blank";
