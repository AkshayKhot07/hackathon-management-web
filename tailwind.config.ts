import type { Config } from "tailwindcss";
import { blackA, green, mauve, violet } from "@radix-ui/colors";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        'sm': '767px', 
        'md': '1023px', 
        'lg': '1240px',
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3457d5",
          1:"#3457d5",
          2:"#03c03c"
        },
        secondary: {
          DEFAULT: "#383838",
          1: "#383838",
          2: "#505050",
          3: "#a9a9a9",
          4:"#d8d8d8",
          5: "#e0e0e0"

        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        ...blackA,
				...green,
				...mauve,
				...violet,
        "modal-bg": {
          DEFAULT: "#00000080",
        },
      },

      keyframes: {
				overlayShow: {
					from: { opacity: "0" },
					to: { opacity: "1" },
				},
				contentShow: {
					from: {
						opacity: "0",
						transform: "translate(-50%, -48%) scale(0.96)",
					},
					to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
				},
      },

      animation: {
				overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
				contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },

    },
  },
  plugins: [],
} satisfies Config;
