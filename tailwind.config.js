import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx}',
  './src/components/**/*.{js,ts,jsx,tsx}',
  './src/app/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
  extend: {
    fontFamily: {
      poppins: ['var(--font-poppins)', ...fontFamily.sans],
    },
    colors:{
      primary: "#DC0A2D",
      bug: {
        50: '#fbfce9',
        100: '#f7f8cf',
        200: '#edf2a4',
        300: '#dde76f',
        400: '#cbd843',
        500: '#a7b723',
        600: '#879719',
        700: '#667318',
        800: '#525c18',
        900: '#454e19',
        950: '#242b08',
      },
      dark: {
        50: '#f5f3f1',
        100: '#e7e1da',
        200: '#d1c3b7',
        300: '#b6a08e',
        400: '#a1826e',
        500: '#927260',
        600: '#75574c',
        700: '#654943',
        800: '#573f3c',
        900: '#4c3837',
        950: '#2b1d1d',
    },
    }
  },
};
export const plugins = [];
