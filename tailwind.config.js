/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      width: {
        'iphone': '393px', // iphone 16 사이즈
      },
      height: {
        'iphone': '852px', // iphone 16 사이즈
      }
    },
  },
  plugins: [],
};