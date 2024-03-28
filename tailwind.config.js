/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {    
    fontFamily: {
      sans: ['Oswald', 'sans-serif'],
      serif: ['Cormorant Garamond', 'serif']
    },
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1220px',
        '2xl': '1536px'
      }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        general: '16.4px',
        md: '1.0625rem'
      },   
      colors: {
        'blue': {
          100: '#081c59'
        }
      },
      borderRadius: {
        small : '0.3125em'
      },
      boxShadow: {
        'item': 'rgba(0, 0, 0, 0.2) 0px 2px 10px',
        'main-bar': '0px 0px 5px rgba(0, 0, 0, 0.1)',
        'scrolled-title': '0 2px 3px 0 rgba(0,0,0,.08),0 1px 0 0 rgba(29,28,29,0.13)'
      },
    },
  },
  plugins: [],
};
