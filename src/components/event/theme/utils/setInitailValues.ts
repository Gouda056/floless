import {
  blueHorizonGlide,
  contrastSplit,
  desertDelight,
  shadowSteel,
  subtleBlend,
} from "../data";
export const setInitialValues = (theme: string) => {
  switch (theme) {
    case "contrast-split":
      return contrastSplit;
    case "Blue-horizon-glide":
      return blueHorizonGlide;
    case "desert-delight":
      return desertDelight;
    case "shadowed-steel":
      return shadowSteel;
    case "subtle-blend":
      return subtleBlend;
  }
};


