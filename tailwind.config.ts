import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sliit: {
          navy: {
            DEFAULT: "#16366b",
            50: "#f0f4fa",
            100: "#e0eaf5",
            200: "#c7d7ed",
            300: "#9fbfe0",
            400: "#719ed0",
            500: "#4f80c1",
            600: "#3965a9",
            700: "#2e518c",
            800: "#16366b",
            900: "#0f264d",
            950: "#09172f",
          },
          orange: {
            DEFAULT: "#f58220",
            50: "#fff8f1",
            100: "#feefdf",
            200: "#fddbbd",
            300: "#fbc191",
            400: "#f89e5c",
            500: "#f58220",
            600: "#e66812",
            700: "#bf4e0f",
            800: "#983e13",
            900: "#7b3513",
            950: "#431806",
          },
          gold: "#fdb913",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        card: "0 10px 30px -5px rgba(22, 54, 107, 0.08)",
        cardHover: "0 20px 40px -10px rgba(22, 54, 107, 0.16)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
