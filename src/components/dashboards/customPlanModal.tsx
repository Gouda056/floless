import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Dialog,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  IconDevicesStar,
  IconReceipt2,
  IconTypography,
  IconX,
} from "@tabler/icons-react";
import SimpleBar from "simplebar-react";
import CustomSwitch from "../forms/theme-elements/customSwitch";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { IconPasswordUser } from "@tabler/icons-react";
import { IconFaceId } from "@tabler/icons-react";
import { IconBadge4k } from "@tabler/icons-react";
import { IconBadgeOff } from "@tabler/icons-react";
import { IconFileDownload } from "@tabler/icons-react";
import { IconUserStar } from "@tabler/icons-react";
import { IconAppWindow } from "@tabler/icons-react";
import { IconBrandGoogleAnalytics } from "@tabler/icons-react";
import { IconBrush } from "@tabler/icons-react";
import { IconMail } from "@tabler/icons-react";
import { IconDatabaseImport } from "@tabler/icons-react";
import CustomTextField from "../forms/theme-elements/customTextField";
import ReactSelect from "react-select";
import {
  customSpaceLabel,
  customSpaceValue,
} from "../../../utils/selectHelpers";
import { IconCurrencyRupee } from "@tabler/icons-react";
import { IconCalendarEvent } from "@tabler/icons-react";
import { intervalData, space } from "./data";

export const cutomPlanData = [
  {
    id: "Unlimited face searches",
    label: "Unlimited face searches",
    icon: <IconFaceId height={18} width={18} />,
  },
  {
    id: "Playback up to 4K",
    label: "Playback up to 4K",
    icon: <IconBadge4k height={18} width={18} />,
  },
  {
    id: "Your branding without Floless Badge",
    label: "Your branding without floless badge",
    icon: <IconBadgeOff height={18} width={18} />,
  },
  {
    id: "Original file download",
    label: "Original file download",
    icon: <IconFileDownload height={18} width={18} />,
  },
  {
    id: "Customize color & Fonts",
    label: "Customize color & fonts",
    icon: <IconTypography height={18} width={18} />,
  },
  {
    id: "Lead Management",
    label: "Lead management",
    icon: <IconUserStar height={18} width={18} />,
  },
  {
    id: "Custom Domain",
    label: "Custom domain",
    icon: <IconAppWindow height={18} width={18} />,
  },
  {
    id: "Advance Analytics",
    label: "Advance analytics",
    icon: <IconBrandGoogleAnalytics height={18} width={18} />,
  },
  {
    id: "Themes Selection",
    label: "Themes selection",
    icon: <IconBrush height={18} width={18} />,
  },
  {
    id: "Accessable on web & mobile",
    label: "Accessable on web & mobile",
    icon: <IconDevicesStar height={18} width={18} />,
  },
  {
    id: "Passowrd protection",
    label: "Passowrd protection",
    icon: <IconPasswordUser height={18} width={18} />,
  },
  {
    id: "Buit in Email delivery",
    label: "Buit in email delivery",
    icon: <IconMail height={18} width={18} />,
  },
];

interface props {
  open: boolean;
  handleClose: () => void;
  userId: number;
  onCustomPlanDataReceived: (
    checked: any[],
    name: string,
    storage: string,
    selectedSpace: string,
    price: any,
    interval: string
  ) => void;
}
export default function CustomPlanModal({
  open,
  handleClose,
  userId,
  onCustomPlanDataReceived,
}: props) {
  const [checked, setChecked] = useState<string[]>([]);
  const [initialValues, setInitialValues] = useState<any>({
    checked: [],
    price: "",
    storage: "",
  });
  const [selectedSpace, setSelectedSpace] = useState("GB");
  const [isPriceValid, setIsPriceValid] = useState(true);
  const [isStorageValid, setIsStorageValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [storage, setStorage] = useState("");
  const [price, setPrice] = useState();
  const [isDirty, setIsDirty] = useState(false);
  const [interval, setInterval] = useState("year");
  const BASEURL = process.env.NEXT_PUBLIC_URL;

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
    if (userId > 0) handleFetchUserPlanDetails();
  }, [userId]);

  // Handler to call all true value for custom plan modal
  const handleFetchUserPlanDetails = () => {
    setLoading(true);
    axios
      .get(`${BASEURL}/stripe-custom-plans`, {
        params: {
          tenant_id: userId,
        },
      })
      .then((response) => {
        const enable = response?.data?.data?.enable;
        const size = response?.data?.data?.size.split(" ");
        const price = response?.data?.data?.price;

        setInitialValues({
          checked: enable,
          price: price,
          storage: size[0],
          space: size[1],
        });
        setChecked(response?.data?.data?.enable);
        setStorage(response?.data?.data?.size.split(" ")[0]);
        setSelectedSpace(response?.data?.data?.size.split(" ")[1]);
        setPrice(response?.data?.data?.price);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // validation for space and price
  const isEnteredPriceValid = (value: any) => {
    // Add your price validation logic here
    return !isNaN(value) && parseFloat(value) >= 0;
  };

  const isEnteredStorageValid = (value: any) => {
    // Add your storage validation logic here
    return !isNaN(value) && parseFloat(value) >= 0;
  };

  // Hnadler for space
  const handleChangeSpace = (value: string) => {
    setStorage(value);
    setIsStorageValid(isEnteredStorageValid(value));
    setIsDirty(true);
  };

  // Handler for change in price
  const handleChangePrice = (value: number | any) => {
    setPrice(value);
    setIsPriceValid(isEnteredPriceValid(value));
    setIsDirty(true);
  };

  const handleSubmit = () => {
    if (storage && price && interval) {
      onCustomPlanDataReceived(
        checked,
        `stripe-create-custom-plans-${userId}`,
        storage,
        selectedSpace,
        price,
        interval
      );
      handleClose();
    } else {
      if (price === undefined) {
        setIsPriceValid(false);
      }
      if (storage === "") {
        setIsStorageValid(false);
      }
    }
  };

  // Check isDirty
  useEffect(() => {
    const isStorageChanged = storage !== initialValues?.storage;
    const isPriceChanged = price !== initialValues?.price;
    const isCheckedChanged =
      JSON.stringify(checked) !== JSON.stringify(initialValues.checked);

    setIsDirty(isStorageChanged || isPriceChanged || isCheckedChanged);
  }, [checked, price, storage]);

  const handleSelectSpace = (data: any): void => {
    setSelectedSpace(data?.value);
  };

  const handleSelectInterval = (data: any): void => {
    setInterval(data?.value);
  };

  return (
    <Dialog open={open} onClose={() => false} fullWidth>
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
          {loading ? (
            <Box
              sx={{
                height: "32rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <CircularProgress />
              <Typography variant="h6">Loading...</Typography>
            </Box>
          ) : (
            <SimpleBar
              style={{ maxHeight: 550 }}
            >
              {cutomPlanData.map((data, i) => (
                <ListItem key={i}>
                  <ListItemIcon>{data.icon}</ListItemIcon>
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

              <ListItem>
                <ListItemIcon>
                  <IconDatabaseImport height={18} />
                </ListItemIcon>
                <ListItemText id={"size"} primary={"Storage*"} />
                <Box sx={{ width: "25%", position: "relative" }}>
                  <CustomTextField
                    type="number"
                    name="size"
                    id="size"
                    value={storage}
                    onChange={(e: any) => handleChangeSpace(e.target.value)}
                    sx={{ width: "100%", innerHeight: "70%" }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 3,
                      right: 1,
                      width: "57%",
                      height: "10px",
                      backgroundColor: "white",
                    }}
                  >
                    <ReactSelect
                      defaultValue={space.find(
                        (option) => option.value === selectedSpace
                      )}
                      options={space}
                      onChange={handleSelectSpace}
                      getOptionLabel={customSpaceLabel}
                      getOptionValue={customSpaceValue}
                    />
                  </Box>
                  {isStorageValid ? null : (
                    <Typography sx={{ color: "red" }}>
                      Storage is required.
                    </Typography>
                  )}
                </Box>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <IconCalendarEvent height={18} />
                </ListItemIcon>
                <ListItemText id={"size"} primary={"Interval*"} />
                <Box sx={{ width: "25%" }}>
                  <ReactSelect
                    defaultValue={intervalData.find(
                      (option) => option.value === interval
                    )}
                    options={intervalData}
                    onChange={handleSelectInterval}
                    getOptionLabel={customSpaceLabel}
                    getOptionValue={customSpaceValue}
                  />
                </Box>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <IconReceipt2 height={18} />
                </ListItemIcon>
                <ListItemText id={"size"} primary={"Price*"} />
                <Box sx={{ width: "25%", position: "relative" }}>
                  <CustomTextField
                    type="number"
                    name="price"
                    id="price"
                    value={price}
                    onChange={(e: any) => handleChangePrice(e.target.value)}
                    sx={{ width: "100%" }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 2,
                      right: 0,
                      left: 96,
                      width: "60%",
                      height: "10px",
                      textAlign: "center",
                    }}
                  >
                    <Avatar
                      alt={"Image is loading..."}
                      sx={{
                        width: 44,
                        height: 38,
                        backgroundColor: "white",
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                        borderTopRightRadius: 7,
                        borderBottomRightRadius: 7,
                      }}
                    >
                      <IconCurrencyRupee color="black" height={18} />
                    </Avatar>
                  </Box>
                  {isPriceValid ? null : (
                    <Typography sx={{ color: "red" }}>
                      Price is required.
                    </Typography>
                  )}
                </Box>
              </ListItem>
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
                  disabled={!isDirty || !isPriceValid || !isStorageValid}
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
          )}
        </List>
        <ToastContainer />
      </Box>
    </Dialog>
  );
}
