import { uniqueId } from "lodash";

export interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}

import {
  IconLayoutDashboard,
  IconCalendarEvent,
  IconReceipt2,
  IconSettings,
  IconUsers,
  IconPhotoStar,
  IconInbox,
  IconTicket,
} from "@tabler/icons-react";
import { IconMail } from "@tabler/icons-react";

export const Menuitems: MenuitemsType[] = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/dashboard",
    chipColor: "secondary",
  },
  {
    id: uniqueId(),
    title: "Events",
    icon: IconCalendarEvent,
    href: "/events",
    chipColor: "secondary",
  },
  {
    id: uniqueId(),
    title: "My Team",
    icon: IconUsers,
    href: "/my-team",
    chipColor: "secondary",
  },
  {
    id: uniqueId(),
    title: "My Works",
    icon: IconPhotoStar,
    href: "/my-works",
    chipColor: "secondary",
  },
  {
    id: uniqueId(),
    title: "Leads",
    icon: IconMail,
    href: "/leads",
    chipColor: "secondary",
  },
  {
    id: uniqueId(),
    title: "Account Settings",
    icon: IconSettings,
    href: "/account-settings",
    chipColor: "secondary",
  },
];

export const adminMenuItems: MenuitemsType[] = [
  {
    navlabel: true,
    subheader: "Home",
  },
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/dashboard",
    chipColor: "secondary",
  },
  {
    id: uniqueId(),
    title: "User Control",
    icon: IconUsers,
    href: "/user-control",
    chipColor: "secondary",
  },
  {
    id: uniqueId(),
    title: "Subscription Control",
    icon: IconReceipt2,
    href: "/subscription-control",
    chipColor: "secondary",
  },
  {
    id: uniqueId(),
    title: "Coupon Control",
    icon: IconTicket,
    href: "/coupon-control",
    chipColor: "secondary",
  },
  {
    id: uniqueId(),
    title: "Leads",
    icon: IconInbox,
    href: "/leads",
    chipColor: "secondary",
  },
];
