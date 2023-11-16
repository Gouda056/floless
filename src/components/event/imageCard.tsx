//@ts-nocheck
import {
  Box,
  CardContent,
  Grid,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import { IconTrash } from "@tabler/icons-react";
import { IconDotsVertical } from "@tabler/icons-react";
import BlankCard from "../shared/BlankCard";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Download from "yet-another-react-lightbox/plugins/download";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import TruncatedText from "../common/truncatedText";
import CustomCheckbox from "../forms/theme-elements/customCheckbox";
import styled from "@emotion/styled";

interface props {
  key;
  imageData: any;
  eventId: string | undefined | string[];
  onImageDelete: (operation: string, id: number) => void;
  imageList: any[];
  key?: number;
  multipleDelete?: any;
  deleteIdFromArray?: any;
  addToArray?: any;
  checkedState?: any;
  setCheckedState?: any;
}

export default function ImageCard({
  key,
  imageData,
  eventId,
  onImageDelete,
  imageList,
  multipleDelete,
  deleteIdFromArray,
  addToArray,
  checkedState,
  setCheckedState,
}: props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [delay, setDelay] = useState(3000);
  const [index, setIndex] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [imageIdToDelete, setImageIdToDelete] = useState(0);
  const open = Boolean(anchorEl);
  const [checked, setChecked] = useState(true);
  const BASEURL = process.env.NEXT_PUBLIC_URL;

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    setImageIdToDelete(id);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCrudOperation = (operation: string) => {
    onImageDelete(operation, imageIdToDelete);
    setAnchorEl(null);
  };

  const modifiedImageList = imageList.map((image) => ({
    ...image,
    src: image.url,
  }));

  // Find the index of the clicked image in the imageList and set it
  const handleClickImage = () => {
    const imageIndex = modifiedImageList.findIndex(
      (image) => image.url === imageData.url
    );
    if (imageIndex !== -1) {
      setIndex(imageIndex);
      setIsOpen(true);
    }
  };

  const handleOnChange = (position: any, id: any) => {
    const updatedCheckedState = checkedState.map((item: any, index: any) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  return (
    <>
      <Grid item xs={12} sm={3} lg={3}>
        <BlankCard>
          <Box
            onClick={multipleDelete ? null : handleClickImage}
            sx={{
              margin: 1,
              borderRadius: "5px",
              overflow: "hidden",
              height: "170px",
            }}
          >
            {/* <img
                  src={`${imageData.url}`} alt="img" width="100%" height="150px" /> */}
            {imageData?.url === undefined || imageData.url === null ? (
              <img
                src={"/images/profile/blank-image-skeleton.png"}
                alt="Image is loading"
                width="100%"
                height="120px"
              />
            ) : (
              <>
                <img
                  src={`${imageData.url}`}
                  alt="img"
                  width="100%"
                  height="100%"
                  style={{
                    position: "relative",
                  }}
                />
                {multipleDelete ? (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "0.5rem",
                      right: "0.5rem",
                    }}
                  >
                    <CustomCheckbox
                      color="secondary"
                      checked={checkedState[key]}
                      onChange={() => handleOnChange(key, imageData?.id)}
                    />
                  </Box>
                ) : null}
              </>
            )}
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
                text={imageData?.name}
                maxLength={14}
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
                onClick={(event) => handleClick(event, imageData?.id)}
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
                <MenuItem
                  sx={{ paddingY: 0, paddingX: 1 }}
                  onClick={(event) =>
                    handleCrudOperation(event.target.innerText)
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
      </Grid>
      <Lightbox
        open={isOpen}
        close={() => {
          setIndex(-1);
          setIsOpen(false);
        }}
        carousel={{
          spacing: 0,
          padding: 0,
          imageFit: "cover",
        }}
        slides={modifiedImageList}
        index={index}
        slideshow={{ delay }}
        plugins={[Fullscreen, Slideshow]}
      />
    </>
  );
}
