import { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { IconPhoto, IconBrandYoutube, IconMovie } from "@tabler/icons-react";

interface props {
    onGalleryComponent: (event: React.SyntheticEvent | any) => void;
}
const SubEventHeader = ({onGalleryComponent}: props) => {
  const [value, setValue] = useState("images");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const ProfileTabs = [
    {
      label: "Image Gallery",
      icon:<IconPhoto size="20" />,
      to: "images",
    },
    {
      label: "Video Gallery ",
      icon: <IconBrandYoutube size="20" />,
      to: "videos",
    },
    {
      label: "Reels Gallery",
      icon: <IconMovie size="20" />,
      to: "reels",
    },
  ];

  return (
    <Box
      mt={0}
      sx={{ ml:{
         md: -2, lg: -5
      }, backgroundColor: (theme) => theme.palette.grey[100], width: {xs: "10rem", sm: "53rem", md: "47rem", lg: "57rem"},}}
    >
      <Box
        justifyContent={"end"}
        display="flex"
        sx={{ maxWidth: { xs: 320, sm: '100%' } }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          
          allowScrollButtonsMobile
          aria-label="scrollable prevent tabs example"
        >
          {ProfileTabs.map((tab, i) => {
            return (
              <Tab
                iconPosition="start"
                label={tab.label}
                sx={{ minHeight: "50px" }}
                icon={tab.icon}
                // component={Link}
                // href={tab.to}
                value={tab.to}
                key={i}
                onClick={() => onGalleryComponent(tab.to)}
              />
            );
          })}
        </Tabs>
      </Box>
    </Box>
  );
};

export default SubEventHeader;
