import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx}',
  './src/components/**/*.{js,ts,jsx,tsx}',
  './src/app/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
  fontFamily: {
    sans: ['var(--font-poppins)', ...fontFamily.sans],
  },
  colors:{
    primary:        "#DC0A2D",
    bug:            "#A7B723",
    dark:           "#75574C",
    dragon:         "#7037FF",
    electric:       "#F9CF30",
    fairy:          "#E69EAC",
    fighting:       "#C12239",
    fire:           "#F57D31",
    flying:         "#A891EC",
    ghost:          "#70559B",
    normal:         "#AAA67F",
    grass:          "#74CB48",
    ground:         "#DEC16B",
    ice:            "#9AD6DF",
    poison:         "#A43E9E",
    psychic:        "#FB5584",
    rock:           "#B69E31",
    steel:          "#B7B9D0",
    water:          "#6493EB",
    gray: {
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
