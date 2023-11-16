interface PerformerType {
  id: string;
  imgsrc: string;
  name: string;
  post: string;
  pname: string;
  status: string;
  storage: string;
}
interface topCardInterface {
  icon: string,
    title: string,
    digits: string,
    bgcolor: string,
}


import icon1 from "public/images/svgs/icon-connect.svg";
import icon4 from "public/images/svgs/icon-mailbox.svg";
import icon5 from "public/images/svgs/icon-favorites.svg";
import icon6 from "public/images/svgs/icon-speech-bubble.svg";

export const TopPerformerData: PerformerType[] = [
  {
    id: "1",
    imgsrc: "/images/profile/user-1.jpg",
    name: "Sunil Joshi",
    post: "Web Designer",
    pname: "Elite Admin",
    status: "Low",
    storage: "3.9",
  },
  {
    id: "2",
    imgsrc: "/images/profile/user-2.jpg",
    name: "John Deo",
    post: "Web Developer",
    pname: "Flexy Admin",
    status: "Medium",
    storage: "24.5",
  },
  {
    id: "3",
    imgsrc: "/images/profile/user-3.jpg",
    name: "Nirav Joshi",
    post: "Web Manager",
    pname: "Material Pro",
    status: "High",
    storage: "12.8",
  },
  {
    id: "4",
    imgsrc: "/images/profile/user-4.jpg",
    name: "Yuvraj Sheth",
    post: "Project Manager",
    pname: "Xtreme Admin",
    status: "Very High",
    storage: "2.4",
  },
];

export const topcards:topCardInterface[] = [
  {
    icon: icon6,
    title: "No of events",
    digits: "96",
    bgcolor: "primary",
  },
  {
    icon: icon1,
    title: "AI photos generated",
    digits: "3,650",
    bgcolor: "warning",
  },
  {
    icon: icon5,
    title: "Photos liked",
    digits: "356",
    bgcolor: "secondary",
  },
  {
    icon: icon4,
    title: "No of videos",
    digits: "696",
    bgcolor: "error",
  },
];

export const space = [
  { id: 1, label: "GB", value: "GB" },
  { id: 2, label: "TB", value: "TB" },
];

export const intervalData = [
  { id: 1, label: "Weekly", value: "week" },
  { id: 2, label: "Monthly", value: "month" },
  { id: 3, label: "Yearly", value: "year" },
];
