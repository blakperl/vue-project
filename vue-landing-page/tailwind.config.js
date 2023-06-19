/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/views/Home.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bg1: "url('assets/images/bg1.svg')",
        bluebg: "url('assets/images/bluebg.svg')",
        feedback: "url('assets/images/feedback.svg')",
      },
      colors : {
        dark: '#092489',
        light: '#033E96',
        graydark: '#7F7F7F',
        graylight: '#E7E7E7',
        transparent: '#F3F4F6'

      }
  
    },
  },
  plugins: [],
};
