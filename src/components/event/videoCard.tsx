// @ts-nocheck

import {
  Box,
  CardContent,
  CircularProgress,
  Grid,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import BlankCard from "../shared/BlankCard";
import dynamic from "next/dynamic";
import { createRef, useEffect, useState } from "react";
import { IconDotsVertical, IconTrash } from "@tabler/icons-react";
import TruncatedText from "../common/truncatedText";
import { IconFilePencil } from "@tabler/icons-react";
import loader from "../../../src/assets/video-loader.json";
import Vimeo from "@u-wave/react-vimeo";
import Lottie from "lottie-react";
// build comment
interface Props {
  videoCode: number;
  id: number;
  title: string;
  onVideoDelete: (operation: string, videoId: number, url_code) => void;
  type: string;
  iframe: string;
  optimized;
}

export default function VideoCard({
  videoCode,
  id,
  onVideoDelete,
  title,
  type,
  iframe,
  optimized,
}: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);

  // Hnadler to open crud operation
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    // setImageIdToDelete(id);
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  // To close the crud operations
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleCrudOperation = (operation: string) => {
    onVideoDelete(operation, id, videoCode);
    setAnchorEl(null);
  };



  return (
    <Grid item xs={12} sm={3} lg={6}>
      {optimized ? (
        <BlankCard>
          <Box
            sx={{
              margin: 1,
              marginBottom: 0,
              paddingBottom: 0,
              borderRadius: "5px",
              overflow: "hidden",
              // height: "400px",
              padding: 0,
              backgroundColor: "black",
            }}
          >
            <iframe
              width="430"
              height="250"
              src={`${iframe}`}
              style={{ border: "1px solid black" }}
              allowFullScreen
            ></iframe>
          </Box>
          <CardContent
            sx={{
              paddingY: 1,
              paddingX: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              "& > :last-child": {
                paddingBottom: 0,
              },
            }}
          >
            <Stack direction="column">
              <TruncatedText
                text={title}
                maxLength={40}
                color="primary"
              />
            </Stack>
            <Box sx={{ padding: 0 }}>
              <IconButton
                sx={{ padding: 0 }}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={(event) => handleClick(event, id)}
              >
                <IconDotsVertical width={18} />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                sx={{ paddingBottom: 0 }}
              >
                {type === "video" ? (
                  <MenuItem
                    sx={{ paddingY: 0, paddingX: 2 }}
                    onClick={(event) =>
                      handleCrudOperation(event.currentTarget.textContent)
                    }
                  >
                    <ListItemIcon>
                      <IconFilePencil width={18} />
                    </ListItemIcon>
                    Edit
                  </MenuItem>
                ) : null}
                  <MenuItem
                  sx={{ paddingY: 0, paddingX: 2 }}
                  onClick={(event) =>
                    handleCrudOperation(event.currentTarget.textContent)
                  }
                >
                  <ListItemIcon>
                    <IconTrash width={18} />
                  </ListItemIcon>
                  Delete
                </MenuItem>
              </Menu>
            </Box>
          </CardContent>
        </BlankCard>
      ) : (
        <BlankCard>
          <Box
            sx={{
              margin: 1,
              marginBottom: 0,
              paddingBottom: 0,
              borderRadius: "5px",
              overflow: "hidden",
              // height: "400px",
              padding: 0,
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              height: "13rem !important"
            }}
          >
            <Lottie style={{height: 100}} animationData={loader} />
            <Typography variant="subtitle1">Loading...</Typography>
          </Box>
          <CardContent
            sx={{
              paddingY: 1,
              paddingX: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              "& > :last-child": {
                paddingBottom: 0,
              },
            }}
          >
            <Stack direction="column">
              <TruncatedText
                text={title}
                maxLength={14}
                color="primary"
              />
            </Stack>
            <Box sx={{ padding: 0 }}>
              <IconButton
              disabled={true}
                sx={{ padding: 0 }}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={(event) => handleClick(event, id)}
              >
                <IconDotsVertical width={18} />
              </IconButton>
            </Box>
          </CardContent>
        </BlankCard>







        // <Box
        //   sx={{
        //     display: "flex",
        //     flexDirection: "column",
        //     alignItems: "center",
        //     justifyContent: "center",
        //     height: "15rem",
        //     width: "100%",
        //   }}
        // >
        //   <Lottie animationData={loader} />
        // </Box>
      )}
    </Grid>
  );
}
