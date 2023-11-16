import {Box, CircularProgress} from "@mui/material"
import PageContainer from "./PageContainer"

export default function GlobalLoader () {
 return (
    <PageContainer>
        <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                zIndex: 9999,
                position: "fixed",
                overflow: "hidden",
                left: "0",
                top: "0",
                right: "0",
                backgroundColor: "black",
                opacity: 0.7,
                borderRadius: "0px",
              }}
            >
              <CircularProgress />
            </Box>
    </PageContainer>
 )
}
GlobalLoader.layout = "Blank"