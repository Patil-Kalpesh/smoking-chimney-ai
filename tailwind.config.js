/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sofia: ['"Sofia Pro"', 'sans-serif'], // Add Sofia Pro globally
      },
      fontWeight: {
        ultralight: 200,
        light: 300,
        medium: 500,
        semibold: 600,
        bold: 700,
        black: 900,
      },
    },
  },
  plugins: [],
};
