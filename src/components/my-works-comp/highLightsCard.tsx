import {
  Box,
  Stack,
  Grid,
  Typography,
  IconButton,
  CardMedia,
  Skeleton,
  MenuItem,
  ListItemIcon,
  Menu,
  CircularProgress,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import BlankCard from "../shared/BlankCard";
import { useDispatch } from "../../store/Store";
import { IconDotsVertical, IconTrashFilled } from "@tabler/icons-react";
import { IconPlus } from "@tabler/icons-react";
import MediaUploader from "../event/mediaUploader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { IconTrash } from "@tabler/icons-react";
import ConfirmDeleteModal from "../common/confirmDeleteModal";
import NoDataFound from "../common/noDataFound";
import TruncatedText from "../common/truncatedText";
import { uuid } from "uuidv4";
import { useSession } from "next-auth/react";
import { Upload } from "@aws-sdk/lib-storage";
import { S3Client } from "@aws-sdk/client-s3";
import CustomCheckbox from "../forms/theme-elements/customCheckbox";

const HighLightsCard = () => {
  // skeleton
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openCrud = Boolean(anchorEl);
  const [loading, setLoading] = useState(false);
  const [checkedState, setCheckedState] = useState<any>();
  const [open, setOpen] = useState(false);
  const [myWorks, setMyWorks] = useState<any>(null);
  const [imageId, setImageId] = useState(0);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [tenantId, setTenantId] = useState("");
  const [confirmMultipleDelete, setConfirmMultipleDelete] = useState(false);
  const [multipleDelete, setMultipleDelete] = useState(false);
  const BASEURL = process.env.NEXT_PUBLIC_URL;
  const { data: session } = useSession();

  // Hnadler to close the modal
  const handleClose = () => {
    setOpen(false);
  };

  // Handler to close the crud meu items
  const handleCloseCrud = () => {
    setAnchorEl(null);
  };

  // Handler for calling all my works
  // Api fetched for images
  const handleMediaList = () => {
    setLoading(true);
    axios
      .get(`${BASEURL}/photographer/my-works`)
      .then((response) => {
        const allImages = response?.data?.data;
        setCheckedState(new Array(allImages.length).fill(false));
        setMyWorks(allImages);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    handleMediaList();
  }, []);

  const onMediaUpload = async (files: any) => {
    if (myWorks.length + files.length > 30) {
      toast.error(
        "Please note maximum number of files allowed for upload is 30"
      );
    } else {
      setLoading(true);
      const media = [];

      try {
        for (let i = 0; i < files.length; i++) {
          const imgFile = files[i];
          const id = uuid();
          const path = `myWorks/${tenantId}/${id}`;

          media.push({
            file_name: imgFile.name.split(".")[0],
            mime_type: imgFile.type,
            uuid: id,
            size: imgFile.size,
            model_type: "tenant",
            collection_name: "myWorks",
          });

          const target = {
            Bucket: "floless-dev-org",
            Key: path,
            Body: imgFile,
            ContentType: "image/jpeg",
          };

          const creds = {
            accessKeyId: "AKIA377XILSQSDSVZM5G" || "",
            secretAccessKey: "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" || "",
          };

          const parallelUploads3 = new Upload({
            client: new S3Client({
              region: "ap-south-1" || "",
              credentials: creds,
            }),
            leavePartsOnError: true,
            partSize: 1024 * 1024 * 1000,
            params: target,
          });

          await parallelUploads3.done();
        }
      } catch (e: any) {
        console.error(e);
        toast.error(e.message);
        setLoading(false);
      }
      handleUploadImages(media);
    }
  };

  const handleUploadImages = (media: any[]) => {
    setLoading(true);
    axios
      .post(`${BASEURL}/photographer/my-works`, {
        images: media,
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success(response?.data?.message);
          handleMediaList();
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Handler for setting the member id for crud operations
  const handleClickMemberId = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    setImageId(id);
    setAnchorEl(event.currentTarget);
  };

  // handle close delete modal
  const handleCloseDeleteModal = () => {
    setConfirmDelete(false);
  };

  // To delete my work
  const handleCrudOperation = () => {
    setConfirmDelete(true);
    setAnchorEl(null);
  };

  // On confirm delete
  const onConfirmDelete = (value: boolean) => {
    if (value) {
      axios
        .delete(`${BASEURL}/photographer/my-works`, {
          params: {
            media_id: imageId,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            toast.success(response?.data?.message);
            handleMediaList();
          }
        })
        .catch((error) => {
          toast.error(error?.response?.data?.message);
        })
        .finally(() => {
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        });
    }
  };

  const handleSelectAll = () => {
    //filled all checkboxes' states with `Check All` value
    const updatedCheckedState = new Array(myWorks?.length).fill(true);
    setCheckedState(updatedCheckedState);
  };

  const handleCancel = () => {
    //filled all checkboxes' states with `Check All` value
    const updatedCheckedState = new Array(myWorks?.length).fill(false);
    setCheckedState(updatedCheckedState);
  };

  const handleOnChange = (position: any, id: any) => {
    const updatedCheckedState = checkedState.map((item: any, index: any) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  const confirmDeleteMultiple = () => {
    let idsToBeDeleted: any = [];

    myWorks?.map((each: any, index: any) => {
      if (checkedState[index] === true) idsToBeDeleted.push(each.id);
    });

    setLoading(true);
    axios
      .delete(`${BASEURL}/multiple-media-delete`, {
        data: {
          media_type: "my works",
          media_ids: idsToBeDeleted,
        },
      })
      .then((response: any) => {
        console.log(response);
        toast.success(response?.data?.massage);
      })
      .catch((error: any) => {
        toast.error(error?.response?.data?.message);
      })
      .finally(() => {
        setMultipleDelete(false);
        handleMediaList();
      });
  };

  return (
    <>
      <Stack direction="row" justifyContent="space-between" mb={4}>
        <Box>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}
          >
            <IconPlus width={18} height={30} />
            Add Photos
          </Button>
        </Box>
        <Stack direction="row" gap={2}>
          <Box>
            {multipleDelete ? (
              <Box
                sx={{
                  borderRadius: "100%",
                  width: "30px",
                  mt: 0.3,
                  height: "30px",
                  padding: 0,
                  backgroundColor: "#efeeee",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  mr: 1,
                  p: "5px",
                }}
                onClick={() => setConfirmMultipleDelete(true)}
              >
                <IconTrashFilled />
              </Box>
            ) : null}
          </Box>
          <Box>
            {myWorks?.length > 0 ? (
              multipleDelete ? (
                <>
                  <Button
                    onClick={handleSelectAll}
                    sx={{
                      mr: 1,
                    }}
                    color="primary"
                  >
                    Select all
                  </Button>
                  <Button
                    onClick={() => {
                      setMultipleDelete(false);
                      handleCancel();
                    }}
                    sx={{
                      mr: 1,
                    }}
                    color="error"
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={() => {
                      setMultipleDelete(true);
                    }}
                    sx={{
                      mr: 1,
                    }}
                    color="primary"
                  >
                    Edit
                  </Button>
                </>
              )
            ) : null}
          </Box>
        </Stack>
      </Stack>

      <ConfirmDeleteModal
        open={confirmMultipleDelete}
        title={`Are you sure you want to delete ?`}
        handleClose={() => {
          setConfirmMultipleDelete(false);
        }}
        onConfirmDelete={confirmDeleteMultiple}
        cancel={"Delete"}
        close={"Cancel"}
      />
      <Grid container spacing={3}>
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
        ) : (!loading && myWorks === null) || myWorks.length === 0 ? (
          <NoDataFound />
        ) : (
          myWorks?.map((photo: any, index: number) => (
            <Grid item xs={12} lg={4} key={photo.id}>
              <BlankCard
                className="hoverCard"
                sx={{
                  position: "relative",
                }}
              >
                <CardMedia
                  component={"img"}
                  height="220"
                  alt="Remy Sharp"
                  src={photo.url}
                />
                <>
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
                        checked={checkedState[index]}
                        onChange={() => handleOnChange(index, photo.id)}
                      />
                    </Box>
                  ) : null}
                </>
                <Box p={3}>
                  <Stack direction="row" gap={1}>
                    <Box>
                      <TruncatedText
                        text={photo?.name}
                        maxLength={25}
                        color={"black"}
                      />
                      <Typography variant="caption">
                        {/* {photo.created_at} */}
                      </Typography>
                    </Box>
                    <Box ml={"auto"}>
                      <IconButton
                        sx={{ padding: 0 }}
                        id="basic-button"
                        aria-controls={openCrud ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={openCrud ? "true" : undefined}
                        onClick={(event) =>
                          handleClickMemberId(event, photo.id)
                        }
                      >
                        <IconDotsVertical size="16" />
                      </IconButton>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openCrud}
                        onClose={handleCloseCrud}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                        sx={{ paddingBottom: 0 }}
                      >
                        <MenuItem
                          sx={{ paddingY: 0, paddingX: 1 }}
                          onClick={() => handleCrudOperation()}
                        >
                          <ListItemIcon>
                            <IconTrash width={18} />
                          </ListItemIcon>
                          Delete
                        </MenuItem>
                      </Menu>
                    </Box>
                  </Stack>
                </Box>
              </BlankCard>
            </Grid>
          ))
        )}
      </Grid>
      <ConfirmDeleteModal
        open={confirmDelete}
        handleClose={handleCloseDeleteModal}
        onConfirmDelete={onConfirmDelete}
        title={"Are you sure you want to delete ?"}
        cancel={"Delete"}
        close={"Cancel"}
      />
      <MediaUploader
        modalOpen={open}
        handleClose={handleClose}
        onMediaUpload={onMediaUpload}
        fileType="image"
      />
      <ToastContainer />
    </>
  );
};

export default HighLightsCard;
