/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");

export default {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [nextui({
    defaultTheme: 'dark',
    // layout: {}, // common layout tokens (applied to all themes)
    // themes: {
    //   light: {
    //     layout: {}, // light theme layout tokens
    //     colors: {}, // light theme colors
    //   },
    //   dark: {
    //     layout: {}, // dark theme layout tokens
    //     colors: {}, // dark theme colors
    //   },
    // }
  })],
}

