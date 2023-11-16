import {
  Box,
  Button,
  Dialog,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Divider,
  Toolbar,
  IconButton,
} from "@mui/material";
import CustomSwitch from "../forms/theme-elements/customSwitch";
import { useEffect, useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { IconX } from "@tabler/icons-react";
import axios from "axios";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { settingsData } from "./data";

interface props {
  open: boolean;
  handleClose: () => void;
}

export default function SettingsModal({ open, handleClose }: props) {
  const [checked, setChecked] = useState<string[]>([]);
  const BASEURL = process.env.NEXT_PUBLIC_URL;
  const router = useRouter();
  const { maineventid } = router.query;
  const [initialValues, setInitialValues] = useState<string[]>([]);
  const [isDirty, setIsDirty] = useState(true);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  // To call api to fetch all setting data
  useEffect(() => {
    handleFetchSettingsModal();
  }, [router]);

  // Hnadler to call all true value for settings modal
  const handleFetchSettingsModal = () => {
    if (maineventid !== undefined)
      axios
        .get(`${BASEURL}/get-event-settings/${maineventid}`)
        .then((response) => {
          const trueKeys: any[] = [];
          Object.entries(response?.data?.data).forEach(([key, value]: any) => {
            if (value === true) trueKeys.push(key);
          });
          setChecked(trueKeys);
          setInitialValues(trueKeys);
        })
        .catch((error) => {
          toast.error(error?.response?.data?.message);
        });
  };

  const handleSubmit = () => {
    // const filteredValues = initialValues.filter((value) => !checked.includes(value));
    const filteredValues = settingsData
      .filter((value) => !checked.includes(value.id))
      .map((value) => value.id);
    axios
      .patch(`${BASEURL}/event-settings/${maineventid}`, {
        enable: checked,
        disable: filteredValues,
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success(response?.data?.message);
          handleFetchSettingsModal();
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      });
    handleClose();
  };

  useEffect(() => {
    setIsDirty(
      initialValues.length === checked.length &&
        initialValues.every((value) => checked.includes(value))
    );
  }, [checked]);

  return (
    <Dialog open={open} onClose={() => true} fullWidth>
      <Toolbar sx={{ position: "absolute", top: -8, right: 0 }}>
        <IconButton
          sx={{
            zIndex: 9999,
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
          onClick={handleClose}
          aria-label="close"
        >
          <IconX height={18} />
        </IconButton>
      </Toolbar>
      {/* <BlankCard> */}
      <Box>
        <List
          subheader={
            <ListSubheader sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              Settings
            </ListSubheader>
          }
        >
          <Divider></Divider>
          <SimpleBar
            style={{ maxHeight: 550 }}
            // sx={{
            //   height: { lg: "calc(100vh - 100px)", md: "100vh" },
            //   maxHeight: "200px",
            // }}
          >
            {settingsData.map((data, i) => (
              <ListItem key={i}>
                <ListItemIcon>
                  <data.icon height={18} width={18} />
                </ListItemIcon>
                <ListItemText id={data.id} primary={data.label} />
                <CustomSwitch
                  edge="end"
                  onChange={handleToggle(data.id)}
                  checked={checked.indexOf(data.id) !== -1}
                  inputProps={{
                    "aria-labelledby": `${data.id}`,
                  }}
                />
              </ListItem>
            ))}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                marginY: 2,
              }}
            >
              <Button
                onClick={() => handleSubmit()}
                variant="contained"
                color="primary"
                sx={{ paddingX: 3 }}
                disabled={isDirty}
              >
                Save
              </Button>
              <Button
                onClick={() => {
                  handleClose();
                  setChecked([]);
                }}
                variant="contained"
                color="error"
              >
                Cancel
              </Button>
            </Box>
          </SimpleBar>
        </List>
        <ToastContainer />
      </Box>
    </Dialog>
  );
}
