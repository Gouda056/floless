import React, { useState } from "react";

import {
  ListItemText,
  ListItemIcon,
  Chip,
  ListItemButton,
  Typography,
  Stack,
  useTheme,
  Box,
} from "@mui/material";
import CustomCheckbox from "../../forms/theme-elements/customCheckbox";
import { IconAlertCircle, IconStar, IconTrash } from "@tabler/icons-react";
import { formatDistanceToNowStrict } from "date-fns";
import { IconPhone } from "@tabler/icons-react";
import { IconMail } from "@tabler/icons-react";
import EmailContent from "./EmailContent";
import { useRouter } from "next/router";

interface EmailListType {
  onClick: React.MouseEventHandler<HTMLElement>;
  checked?: boolean;
  isSelected: boolean;
  email: any;
}

const EmailListItem = ({ onClick, isSelected, email }: EmailListType) => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <ListItemButton
      onClick={() => router.push(`?${email.id}`)}
      sx={{ mb: 1, py: 1 }}
      selected={isSelected}
      alignItems="flex-start"
    >
      <ListItemText onClick={onClick}>
        <Stack direction="row" gap="10px" alignItems="center">
          <Typography variant="subtitle2" mb={0.5} fontWeight={600} mr={"auto"}>
            {email?.name}
          </Typography>
          {email?.event_name ? (
            <Chip label={email?.event_name} size="small" color={"success"} />
          ) : null}
        </Stack>
        <Stack direction="row" gap="1px" alignItems="center">
          <IconMail height={14} />
          <Typography
            noWrap
            width={"80%"}
            color="text.secondary"
            sx={{ fontSize: "0.8rem" }}
          >
            {email?.email}
          </Typography>
        </Stack>
        <Stack direction="row" mt={0.5} gap="1px" alignItems="center">
          <IconPhone height={14} />
          <Typography
            noWrap
            width={"80%"}
            color="text.secondary"
            sx={{ fontSize: "0.8rem" }}
          >
            {email?.phone}
          </Typography>
        </Stack>
        <Stack direction="row" mt={0} gap="10px" alignItems="center">
          <Typography variant="caption" noWrap sx={{ ml: "auto" }}>
            {email?.timestamp}
          </Typography>
        </Stack>
      </ListItemText>
    </ListItemButton>
  );
};

export default EmailListItem;
