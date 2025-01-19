import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto"', "Arial", "sans-serif"],
        montserrat: ['"Montserrat"', "sans-serif"],
        lora: ['"Lora"', "serif"],
        opensans: ['"Open Sans"', "sans-serif"],
        kufam: ['"Kufam"', "sans-serif"],
        playfair: ['"Playfair Display"', "serif"],
        serif: ['"Georgia"', "serif"],
        mono: ['"Courier New"', "monospace"],
      },
    },
  },
  plugins: [],
});
