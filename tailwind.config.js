import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        bg: "#FAFAFA",
        "gradient-pink": "#F06AEB",
        "gradient-yellow": "#FF9933",
        "gray-50": "#F6F6F6",
        "gray-100": "#EDEDED",
        "gray-200": "#DADADA",
        "gray-300": "#C8C8C8",
        "gray-400": "#B5B5B5",
        "gray-500": "#A3A3A3",
        "gray-600": "#828282",
        "gray-700": "#626262",
        "gray-800": "#414141",
        "gray-850": "#31313",
        "gray-900": "#212121",
        "gray-950": "#101010",
        "gray-975": "#080808",
      },
    },
  },
  plugins: [],
};
