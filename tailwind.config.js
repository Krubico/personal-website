import withMT from "@material-tailwind/react/utils/withMT";
import defaultTheme from "tailwindcss/defaultTheme";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Exoplanetaria"', ...defaultTheme.fontFamily.sans],
      cyberpunk: ["CyberwayRiders"],
      hacked: ["Hacked"],
    },
    colors: {
      "cyberpunk-yellow": "#EFE700",
    },

    backgroundImage: {
      hero: "url('public/assets/cyberpunk-bg.jpg')",
      "geo-pattern": "url('public/assets/geometric-pattern.jpg')",
      "tori-gate": "url('public/assets/tori-gate.jpg')",
    },
    animation: {
      typewriter: "typewriter 2s steps(11) forwards",
    },
    keyframes: {
      typewriter: {
        to: {
          left: "100%",
        },
      },
    },

    extend: {},
  },
  plugins: [],
});
