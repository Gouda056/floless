import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { IconHeart, IconPhoto, IconUserCircle } from "@tabler/icons-react";
import { useRouter } from "next/router";
import Link from "next/link";

const ProfileTab = () => {
  const location = useRouter();
  const [value, setValue] = React.useState(location.pathname);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const ProfileTabs = [
    {
      label: "Profile",
      icon: <IconUserCircle size="20" />,
      to: "/userProfile/profile",
    },
    {
      label: "My team ",
      icon: <IconUserCircle size="20" />,
      to: "/team",
    },
    {
      label: "My works",
      icon: <IconPhoto size="20" />,
      to: "/userProfile/gallery",
    },
  ];

  return (
    <Box
      mt={1}
      sx={{ mt: 1, backgroundColor: (theme) => theme.palette.grey[100] }}
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
          {ProfileTabs.map((tab) => {
            return (
              <Tab
                iconPosition="start"
                label={tab.label}
                sx={{ minHeight: "50px" }}
                icon={tab.icon}
                component={Link}
                href={tab.to}
                value={tab.to}
                key={tab.label}
              />
            );
          })}
        </Tabs>
      </Box>
    </Box>
  );
};

export default ProfileTab;
