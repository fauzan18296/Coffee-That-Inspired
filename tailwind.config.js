/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        primary: '#b6895b',
      },
      screens: {
        mobile: "640px",
        tablet: "768px",
        laptop: "1536px",
      },
      fontFamily: {
        Roboto: ["Roboto"],
        Poppins: ["Poppins"],
      }
    },
  },
  plugins: [],
}

