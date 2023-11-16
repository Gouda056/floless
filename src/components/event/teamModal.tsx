import {
  Box,
  Dialog,
  DialogContent,
  Typography,
  Toolbar,
  IconButton,
  Avatar,
  Divider,
  Tooltip,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import { IconSearch, IconX } from "@tabler/icons-react";
import SimpleBar from "simplebar-react";
import CustomSwitch from "../forms/theme-elements/customSwitch";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomOutlinedInput from "../forms/theme-elements/customOutlinedInput";
interface props {
  open: boolean;
  handleClose: () => void;
  eventId: string | undefined | string[];
}

export default function TeamModal({ open, handleClose, eventId }: props) {
  const [checked, setChecked] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [team, setTeam] = useState<any[]>([]);
  const BASEURL = process.env.NEXT_PUBLIC_URL;
  const [searchText, setSearchText] = useState("");

  const handleSubmit = () => {
    // Api cal be done here
    handleClose();
  };

  // Call for fetching all team members
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASEURL}/team-members`)
      .then((response) => {
        setTeam(response?.data?.data);
      })
      .catch((error) => {
        toast.error(error?.resposne?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Api called for fetching team members based on event id

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASEURL}/event/team-members`, {
        params: {
          event_id: eventId,
        },
      })
      .then((response) => {
        const activeTeam = response?.data?.data;
        const initialCheckedValues = activeTeam.map((value: any) => value?.id);
        setChecked(initialCheckedValues);
      })
      .catch((error) => {
        toast.error(error?.resposne?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Api called based to toggling the switch
  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
      setChecked(newChecked);
      axios
        .post(`${BASEURL}/attach-member`, {
          event_id: eventId,
          member_id: newChecked,
        })
        .then((response) => {
          // console.log(response);
          if (response.status === 200) {
            toast.success(response?.data?.message);
          }
        })
        .catch((error) => {
          toast.error(error?.response?.data?.message);
        })
        .finally(() => {});
    } else {
      newChecked.splice(currentIndex, 1);
      setChecked(newChecked);
      axios
        .delete(`${BASEURL}/detach-member/${value}`, {
          params: {
            event_id: eventId,
          },
          // member_id: newChecked,
        })
        .then((response) => {
          // console.log(response);
          if (response.status === 200) {
            toast.success(response?.data?.message);
          }
        })
        .catch((error) => {
          toast.error(error?.response?.data?.message);
        })
        .finally(() => {});
    }
  };

  const handleSearch = (e: any) => {
    setSearchText(e.target.value);
  };

  const filteredTeamMembers = team?.filter((member) => {
    // If searchText is empty, show all team members
    if (searchText === "") {
      return true;
    }

    // Check if the member's first_name includes the searchText (case-insensitive)
    return member.first_name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <Box>
      <Dialog open={open} onClose={() => false} fullWidth maxWidth="xs">
        <Toolbar sx={{ position: "absolute", top: 0, right: 0 }}>
          <IconButton
            sx={{
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
        <DialogContent>
          <Typography variant="h4" sx={{ paddingTop: 2 }}>
            All Team Members
          </Typography>
          <Typography sx={{ marginTop: 1, paddingBottom: 1 }}>
            Team members present for the event
          </Typography>
          <Divider></Divider>
          <TextField
            id="outlined-search"
            placeholder="Search"
            size="small"
            type="search"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconSearch size="16" />
                </InputAdornment>
              ),
            }}
            value={searchText}
            name="search"
            sx={{
              width: "70%",
              mt: "1rem !important",
              display: "flex !important",
              mx: "auto !important",
            }}
            onChange={handleSearch}
          />
          <Box>
            {filteredTeamMembers?.length === 0 && loading === false ? (
              <Box>
                <Typography variant="h5" sx={{ textAlign: "center", py: 2 }}>
                  {searchText ? "No search results" : "No team members added"}
                </Typography>
              </Box>
            ) : (
              <SimpleBar style={{ maxHeight: 350 }}>
                {filteredTeamMembers?.map((member, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      marginY: 2,
                    }}
                  >
                    <Box sx={{ width: "30%" }}>
                      <Avatar
                        src={member?.profile}
                        alt={"Image is loading..."}
                        sx={{ width: 30, height: 30, margin: "0 auto" }}
                      />
                    </Box>
                    <Box
                      sx={{
                        width: "60%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography variant="h6">{member?.first_name}</Typography>
                      <Typography variant="subtitle2">
                        {member?.email}
                      </Typography>
                    </Box>
                    <Tooltip
                      title={
                        checked.indexOf(member.id) !== -1 ? "Remove" : "Add"
                      }
                    >
                      <Box>
                        <CustomSwitch
                          onChange={handleToggle(member.id)}
                          checked={checked.indexOf(member.id) !== -1}
                          inputProps={{
                            "aria-labelledby": `${member.id}`,
                          }}
                        />
                      </Box>
                    </Tooltip>
                  </Box>
                ))}
              </SimpleBar>
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
