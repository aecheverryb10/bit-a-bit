/** @type {import('tailwindcss').Config} */
module.exports = {
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
          100: '#081c59',
          'base': '#4A46FF'
        },
        'purple': {
          'base': '#52188C'
        },
        'green': {
          'light': '#02EBB6'
        }
      },
      borderRadius: {
        small : '0.3125em'
      },
      boxShadow: {
        'capitulo': '10px 4px 15px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
