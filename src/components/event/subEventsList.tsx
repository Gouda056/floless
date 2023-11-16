import {
  Box,
  Divider,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import {
  IconBrandSupernova,
  IconDotsVertical,
  IconTrash,
  IconWorldUpload,
} from "@tabler/icons-react";
import { useDispatch, useSelector } from "../../store/Store";
// import { sortByProducts } from "../../store/apps/eCommerce/ECommerceSlice";
import { useState } from "react";
const subEvents = [
  { id: 0, name: "Marriage", value: "marriage" },
  { id: 0, name: "Haldi", value: "haldi" },
  { id: 0, name: "Engagement", value: "engagement" },
];

export default function SubEventsList() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dispatch = useDispatch();
  const customizer = useSelector((state) => state.customizer);
  // const checkactive = useSelector((state) => state.ecommerceReducer.sortBy);
  const br = `${customizer.borderRadius}px`;
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box my={2}>
      <ListItemButton
        sx={{ mb: 1, mx: 3, borderRadius: br, display: 'flex', alignItems: "center" , justifyContent: 'space-between', padding: "0px" }}
        // selected={checkactive === "highlights"}
        // onClick={() => dispatch(sortByProducts("highlights"))}
      >
        <ListItemIcon sx={{ minWidth: "25px" }}>
          <IconBrandSupernova stroke="1.5" size={18} />
        </ListItemIcon>
        <ListItemText sx={{ width: "65%"}}>HighLights</ListItemText>
        <ListItemText
          sx={{
            backgroundColor: "lightgray",
            textAlign: "center",
            borderRadius: 1,
            width: "10%"
          }}
        >
          0
        </ListItemText>
        <ListItemText sx={{width: "20%"}}>
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <IconDotsVertical width={18} height={18} />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <IconWorldUpload width={18} />
              </ListItemIcon>
              Make private
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <IconTrash width={18} />
              </ListItemIcon>
              Rename
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <IconTrash width={18} />
              </ListItemIcon>
              Delete
            </MenuItem>
          </Menu>
        </ListItemText>
      </ListItemButton>
      {subEvents.map((data) => (
        <ListItemButton
          sx={{ mb: 1, mx: 3, borderRadius: br, display: 'flex', alignItems: "center" , justifyContent: 'space-evenly', padding: "0px" }}
          // selected={checkactive === `${data.value}`}
          // onClick={() => dispatch(sortByProducts(`${data.value}`))}
          key={data.id}
        >
          <ListItemIcon sx={{ minWidth: "25px" }}>
            <IconBrandSupernova stroke="1.5" size={19} />
          </ListItemIcon>
          <ListItemText sx={{ width: "65%"}}>{data.name}</ListItemText>
          <ListItemText
          sx={{
            backgroundColor: "lightgray",
            textAlign: "center",
            borderRadius: 1,
            width: "10%"
          }}
        >
          0
        </ListItemText>
        <ListItemText sx={{ width: "20%"}}>
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
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
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <IconWorldUpload width={18} />
              </ListItemIcon>
              Make private
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <IconTrash width={18} />
              </ListItemIcon>
              Rename
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <IconTrash width={18} />
              </ListItemIcon>
              Delete
            </MenuItem>
          </Menu>
        </ListItemText>
        </ListItemButton>
      ))}
    </Box>
  );
}
