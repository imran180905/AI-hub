/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#c93f38",
        
"secondary": "#f788ce",
        
"accent": "#9103bc",
        
"neutral": "#292631",
        
"base-100": "#FAF9FB",
        
"info": "#71CAF4",
        
"success": "#4AD9A7",
        
"warning": "#ECB718",
        
"error": "#FA6852",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
}
