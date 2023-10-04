import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "from-bottom-fadein-rotate": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
            rotate: "0deg",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            rotate: "16deg",
          },
        },

        "from-bottom-fadein": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        float: {
          "0%": {
            transform: "translateY(0px)",
          },
          "100%": {
            transform: "translateY(20px)",
          },
        },

        "cursor-blink": {
          "0%": {
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },

        "grow-x-from-0-to-100": {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "100%",
          },
        },
      },
      animation: {
        "from-bottom-fadein-rotate":
          "from-bottom-fadein-rotate .6s ease-in-out forwards",

        "from-bottom-fadein": "from-bottom-fadein .6s ease-in-out forwards",
        float: "float 3s ease-in-out infinite alternate none running",
        "cursor-blink": "cursor-blink 1s ease-in-out infinite",

        "grow-x-from-0-to-100":
          "grow-x-from-0-to-100 .8s ease-in-out 0.3s both",
      },
      colors: {
        primary: "#13C4A3",
        "primary-2": "#71DCC8",
        "primary-hover": "#42D0B5",
        background: "#1F242D",
        "background-2": "#2D3340",
        "button-text": "#042721",
        "title-color": "#FFFFFF",
        "text-color": "#D4D7DC",
        "text-strong": "#F5F6F8",
        subtitle: "#9299A3",
        white: "#FFFFFF",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
export default config;
