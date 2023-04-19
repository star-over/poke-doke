/** @type {import("tailwindcss").Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import { Types } from "pokenode-ts";


export const content = [
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  // fontFamily: {
  //   sans: ["var(--font-poppins)", ...fontFamily.sans],
  // },
  fontSize: {
    "headline": ["24px", { lineHeight: "32px", fontWeight: "700" }],
    "subtitle-1": ["14px", { lineHeight: "16px", fontWeight: "700" }],
    "subtitle-2": ["12px", { lineHeight: "16px", fontWeight: "700" }],
    "subtitle-3": ["10px", { lineHeight: "16px", fontWeight: "700" }],
    "body-1": ["14px", { lineHeight: "16px", fontWeight: "400" }],
    "body-2": ["12px", { lineHeight: "16px", fontWeight: "400" }],
    "body-3": ["10px", { lineHeight: "16px", fontWeight: "400" }],
    "caption": ["8px", { lineHeight: "12px", fontWeight: "400" }],
  },
  colors:{
    default:                              "#DC0A2D",
    primary:                              "#DC0A2D",
    [Types[Types.BUG]]:                   "#A7B723",
    [Types[Types.DARK]]:                  "#75574C",
    [Types[Types.DRAGON]]:                "#7037FF",
    [Types[Types.ELECTRIC]]:              "#F9CF30",
    [Types[Types.FAIRY]]:                 "#E69EAC",
    [Types[Types.FIGHTING]]:              "#C12239",
    [Types[Types.FIRE]]:                  "#F57D31",
    [Types[Types.FLYING]]:                "#A891EC",
    [Types[Types.GHOST]]:                 "#70559B",
    [Types[Types.NORMAL]]:                "#AAA67F",
    [Types[Types.GRASS]]:                 "#74CB48",
    [Types[Types.GROUND]]:                "#DEC16B",
    [Types[Types.ICE]]:                   "#9AD6DF",
    [Types[Types.POISON]]:                "#A43E9E",
    [Types[Types.PSYCHIC]]:               "#FB5584",
    [Types[Types.ROCK]]:                  "#B69E31",
    [Types[Types.STEEL]]:                 "#B7B9D0",
    [Types[Types.WATER]]:                 "#6493EB",
    grayscale: {
      dark:        "#212121",
      medium:      "#666666",
      light:       "#E0E0E0",
      background:  "#EFEFEF",
      white:       "#FFFFFF",
    }
  },
  extend: {
  },
};
export const plugins = [];
