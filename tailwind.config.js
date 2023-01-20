const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "mobile-s": "320px",
        "mobile-m": "375px",
        mobile: "390px",
      },
      colors: {
        "text-primary": "#DEDEDE",
        "text-secondary": "#999999",
        "background-primary": "#171717",
        "background-surface": "#202020",
        "background-btn": "#DEDEDE",
        "border-surface": "#3D3D3D",
        "border-button": "#666666",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        chubbo: ["var(--font-chubbo)", ...fontFamily.sans],
        supreme: ["var(--font-supreme)", ...fontFamily.sans],
        tanker: ["var(--font-tanker)", ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.text-primary"),
            a: {
              color: theme("colors.blue.400"),
              "&:hover": {
                color: theme("colors.blue.600"),
              },
              code: { color: theme("colors.blue.400") },
            },
            blockquote: {
              borderLeftColor: theme("colors.text-primary"),
              color: theme("colors.gray.300"),
            },
            "h2,h3,h4": {
              color: theme("colors.gray.100"),
              "scroll-margin-top": spacing[32],
            },
            hr: { borderColor: theme("colors.text-primary") },
            ol: {
              li: {
                "&:before": { color: theme("colors.gray.500") },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.gray.500") },
              },
            },
            strong: { color: theme("colors.gray.100") },
            thead: {
              th: {
                color: theme("colors.gray.100"),
              },
              borderBottomColor: theme("colors.gray.600"),
            },
            code: { color: theme("colors.pink.500") },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
          },
          tbody: {
            tr: {
              borderBottomColor: theme("colors.text-primary"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
