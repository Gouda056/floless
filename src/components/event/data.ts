import {
  IconBrandWhatsapp,
  IconBrowserCheck,
  IconPasswordUser,
  IconQrcode,
} from "@tabler/icons-react";
import {
  IconCameraSelfie,
  IconDownload,
  IconReportMoney,
  IconShare,
} from "@tabler/icons-react";
import { IconScreenShare } from "@tabler/icons-react";

interface themeList {
  value: string;
  label: string;
}
export const images = [
  { id: 1, src: "/images/gallery/wedding1.jpg", tag: "#favourite" },
  { id: 2, src: "/images/gallery/wedding2.jpg", tag: "#favourite" },
  { id: 3, src: "/images/gallery/wedding3.jpg", tag: "#liked" },
  { id: 4, src: "/images/gallery/wedding4.jpg", tag: "#liked" },
  { id: 5, src: "/images/gallery/wedding5.jpg", tag: "#favourite" },
  { id: 6, src: "/images/gallery/wedding1.jpg", tag: "#favourite" },
  { id: 7, src: "/images/gallery/wedding2.jpg", tag: "#liked" },
  { id: 8, src: "/images/gallery/wedding3.jpg", tag: "#bookmarked" },
  { id: 1, src: "/images/gallery/wedding1.jpg", tag: "#bookmarked" },
  { id: 1, src: "/images/gallery/wedding1.jpg", tag: "#favourite" },
  { id: 2, src: "/images/gallery/wedding2.jpg", tag: "#favourite" },
  { id: 3, src: "/images/gallery/wedding3.jpg", tag: "#liked" },
  { id: 4, src: "/images/gallery/wedding4.jpg", tag: "#liked" },
  { id: 5, src: "/images/gallery/wedding5.jpg", tag: "#favourite" },
  { id: 6, src: "/images/gallery/wedding1.jpg", tag: "#favourite" },
  { id: 7, src: "/images/gallery/wedding2.jpg", tag: "#liked" },
  { id: 8, src: "/images/gallery/wedding3.jpg", tag: "#bookmarked" },
  { id: 1, src: "/images/gallery/wedding1.jpg", tag: "#bookmarked" },
  { id: 1, src: "/images/gallery/wedding1.jpg", tag: "#bookmarked" },
  { id: 1, src: "/images/gallery/wedding1.jpg", tag: "#bookmarked" },
  { id: 1, src: "/images/gallery/wedding1.jpg", tag: "#bookmarked" },
  { id: 1, src: "/images/gallery/wedding1.jpg", tag: "#bookmarked" },
  { id: 1, src: "/images/gallery/wedding1.jpg", tag: "#bookmarked" },
  { id: 1, src: "/images/gallery/wedding1.jpg", tag: "#bookmarked" },
];
export const videos = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/XyWlduLMi24?si=HRAHoI4RazgtuY2z",
  },
  {
    id: 1,
    src: "https://www.youtube.com/embed/9bxLnQ8mNUY?si=bH94Vb944o3IBg9J",
  },
  {
    id: 1,
    src: "https://www.youtube.com/embed/qjw4esSW-W4?si=bA-T6bJKY1Zx4j20",
  },
  {
    id: 1,
    src: "https://www.youtube.com/embed/PVrtI6YOe6Y?si=pPORNQG1h-AzlEdD",
  },
  {
    id: 1,
    src: "https://www.youtube.com/embed/Gk1IoC6iaTk?si=khqO-6GGDTUa7qdd",
  },
  {
    id: 1,
    src: "https://www.youtube.com/embed/y3nCkaVVsk0?si=wbqMIL2jmweYJvdr",
  },
  {
    id: 1,
    src: "https://www.youtube.com/embed/y3nCkaVVsk0?si=wbqMIL2jmweYJvdr",
  },
];

export const reels = [
  { id: 1, src: "https://www.youtube.com/embed/crf101jUzzs" },
  { id: 1, src: "https://www.youtube.com/embed/crf101jUzzs" },
  { id: 1, src: "https://www.youtube.com/embed/crf101jUzzs" },
  { id: 1, src: "https://www.youtube.com/embed/crf101jUzzs" },
  { id: 1, src: "https://www.youtube.com/embed/crf101jUzzs" },
];

export const themes = [
  { id: 1, name: "Images" },
  { id: 2, name: "Videos" },
  { id: 3, name: "Reels" },
];

export const imageThemes = [
  { id: 1, name: "theme1", value: "theme_1" },
  { id: 2, name: "theme2", value: "theme_2" },
  { id: 3, name: "theme3", value: "theme_3" },
  { id: 4, name: "theme4", value: "theme_4" },
  { id: 5, name: "theme5", value: "theme_5" },
];
export const videoThemes = [
  { id: 1, name: "video theme1", value: "theme_1" },
  { id: 2, name: "video theme2", value: "theme_2" },
  { id: 3, name: "video theme3", value: "theme_3" },
  { id: 4, name: "video theme4", value: "theme_4" },
  { id: 5, name: "video theme5", value: "theme_5" },
];

export const themeColors = [
  { id: 1, name: "Red", value: "red" },
  { id: 1, name: "Blue", value: "blue" },
  { id: 1, name: "Orange", value: "orange" },
  { id: 1, name: "Green", value: "green" },
  { id: 1, name: "Yellow", value: "yellow" },
];

export const allEvents = [
  { id: 1, name: "Marriage", value: "marriage" },
  { id: 1, name: "Farewell", value: "farewell" },
  { id: 1, name: "Engagement", value: "engagement" },
  { id: 1, name: "Reception", value: "reception" },
];

export const deliveryData = [
  { id: 1, label: "Deliver with password" },
  { id: 2, label: "Generate QR code" },
  { id: 3, label: "Generate custom domain" },
  { id: 4, label: "Enable share via whats app" },
  { id: 5, label: "Enable photo AI filter" },
];

export const themesList: themeList[] = [
  { label: "Blue Horizon Glide", value: "blue-horizon-glide" },
  { label: "Contrast Split", value: "contrast-split" },
  { label: "Desert Delight", value: "desert-delight" },
  { label: "Shadowed Steel", value: "shadowed-steel" },
  { label: "Subtle Blend", value: "subtle-blend" },
];
export const videoThemeList: themeList[] = [
  { label: "Auto scrolling", value: "auto-scrolling" },
  { label: "3D Carousel", value: "3d-carousel" },
  { label: "Background Preview", value: "background-preview" },
  { label: "Timed Card Opening", value: "timed-card-opening" },
  { label: "Video Preview", value: "video-preview" },
];
export const reelsThemeList: themeList[] = [
  { label: "Auto scroll Horizontally", value: "auto-scroll-horizontally" },
];

export const fontSizes = [
  { label: "Text-xs (12 px)", value: "0.75rem" },
  { label: "Text-sm (14 px)", value: "0.875rem" },
  { label: "Text-base (16 px)", value: "1rem" },
  { label: "Text-lg (18 px)", value: "1.125rem" },
  { label: "Text-xl (20 px)", value: "1.25rem" },
  { label: "Text-2xl (24 px)", value: "1.5rem" },
  { label: "Text-3xl (30 px)", value: "1.875rem" },
  { label: "Text-4xl (36 px)", value: "2.25rem" },
  { label: "Text-5xl (48 px)", value: "3rem" },
  { label: "Text-6xl (60 px)", value: "3.75rem" },
  { label: "Text-7xl (72 px)", value: "4.5rem" },
  { label: "Text-8xl (96 px)", value: "6rem" },
  { label: "Text-9xl (128 px)", value: "8rem" },
];

export const fontFamilies = [
  { label: "'Bevan', serif", value: "'Bevan', serif" },
  { label: "'Concert One', sans-serif", value: "'Concert One', sans-serif" },
  { label: "'Lato', sans-serif", value: "'Lato', sans-serif" },
  { label: "'Lilita One', sans-serif", value: "'Lilita One', sans-serif" },
  { label: "'Merriweather', serif", value: "'Merriweather', serif" },
  { label: "'Monoton', sans-serif", value: "'Monoton', sans-serif" },
  { label: "'Montserrat', sans-serif", value: "'Montserrat', sans-serif" },
  { label: "'Noto Sans', sans-serif", value: "'Noto Sans', sans-serif" },
  { label: "'Noto Serif', serif", value: "'Noto Serif', serif" },
  { label: "'Nunito Sans', sans-serif", value: "'Nunito Sans', sans-serif" },
  { label: "'Open Sans', sans-serif", value: "'Open Sans', sans-serif" },
  { label: "'Oswald', sans-serif", value: "'Oswald', sans-serif" },
  { label: "'Prompt', sans-serif", value: "'Prompt', sans-serif" },
  { label: "'PT Sans', sans-serif", value: "'PT Sans', sans-serif" },
  { label: "'Raleway', sans-serif", value: "'Raleway', sans-serif" },
  { label: "'Roboto', sans-serif", value: "'Roboto', sans-serif" },
  { label: "'Slabo 13px', serif", value: "'Slabo 13px', serif" },
  { label: "'Slabo 27px', serif", value: "'Slabo 27px', serif" },
  {
    label: "'Source Sans 3', sans-serif",
    value: "'Source Sans 3', sans-serif",
  },
  { label: "'Work Sans', sans-serif", value: "'Work Sans', sans-serif" },
  { label: "'Young Serif', serif", value: "'Young Serif', serif" },
  { label: "'Figtree', sans-serif", value: "'Figtree', sans-serif" },
];

export const settingsData = [
  {
    id: "enable_preview",
    label: "Enable preview",
    icon: IconScreenShare,
  },
  {
    id: "enable_download",
    label: "Enable download",
    icon: IconDownload,
  },
  {
    id: "enable_sales_set_price",
    label: "Enable sales set price",
    icon: IconReportMoney,
  },
  {
    id: "enable_share",
    label: "Enable share",
    icon: IconShare,
  },
  {
    id: "enable_photo_ai_filter",
    label: "Enable photo AI filter",
    icon: IconCameraSelfie,
  },
  {
    id: "deliver_with_password",
    label: "Deliver with password",
    icon: IconPasswordUser,
  },
  {
    id: "generate_qr_code",
    label: "Generate QR code",
    icon: IconQrcode,
  },
  {
    id: "generate_custome_domain",
    label: "Generate custom domain",
    icon: IconBrowserCheck,
  },
  {
    id: "enable_share_via_whats_app",
    label: "Enable share via whats app",
    icon: IconBrandWhatsapp,
  },
];
