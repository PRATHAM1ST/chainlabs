import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(310, 95%, 8%)",
          background: "hsl(177, 100%, 96%)"
        },
        secondary: {
          DEFAULT: "hsl(61, 100%, 55%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 100%, 75%)",
          foreground: "hsl(0, 0%, 0%)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        dark:{
          DEFAULT: "hsl(0, 0%, 20%)",
          foreground: "hsl(0, 0%, 40%)",
        }
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        md: "10px",
        lg: "10px",
        full: "9999px",
        large: "12px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "box-shadow": {
          to: { boxShadow: "0 0 0 0 rgba(0, 0, 0, 100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      transitionProperty: {
        colors:
          "color, background-color, border-color, text-decoration-color, fill, stroke, box-shadow",
      },
      boxShadow: {
        "0": "0 0 0 0 rgba(0, 0, 0, 100%)",
        sm: "5px 5px 0px 0px rgba(0, 0, 0, 100%)",
        md: "10px 10px 0px 0px rgba(0, 0, 0, 100%)",
        lg: "15px 15px 0px 0px rgba(0, 0, 0, 100%)",
      },
      fontFamily: {
        sans: ['--font-outer-sans'],
      },
    },
  },
  plugins: [],
};
export default config;
