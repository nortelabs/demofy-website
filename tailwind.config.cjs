module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#fca311",
        "dark-bg": "#000000",
        "dark-card": "#14213d",
        "dark-border": "#14213d",
        "dark-text": "#e5e5e5",
        "cream": "#ffffff",
        "accent": "#fca311",
        "oxford-blue": "#14213d",
        "orange-web": "#fca311",
        "platinum": "#e5e5e5",
        "black": "#000000",
        "white": "#ffffff",
        "gray": {
          50: "#ffffff",
          100: "#e5e5e5",
          200: "#e5e5e5",
          300: "#e5e5e5",
          400: "#e5e5e5",
          500: "#14213d",
          600: "#14213d",
          700: "#14213d",
          800: "#14213d",
          900: "#000000",
          950: "#000000"
        }
      },
      fontFamily: {
        sans: ["Chivo", "sans-serif"],
        chivo: ["Chivo", "sans-serif"]
      },
      boxShadow: {
        screen: "0 20px 40px rgba(0, 0, 0, 0.3)",
        card: "0 4px 16px rgba(20, 33, 61, 0.3)",
        glow: "0 0 32px rgba(252, 163, 17, 0.3)",
        "oxford-glow": "0 0 20px rgba(20, 33, 61, 0.5)",
        "orange-glow": "0 0 30px rgba(252, 163, 17, 0.4)"
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle at 1px 1px, rgba(229, 229, 229, 0.1) 1px, transparent 0)',
        'grid-pattern': 'linear-gradient(rgba(229, 229, 229, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(229, 229, 229, 0.05) 1px, transparent 1px)',
        'gradient-oxford-orange': 'linear-gradient(135deg, #14213d 0%, #fca311 100%)'
      },
      backgroundSize: {
        'dot': '20px 20px',
        'grid': '20px 20px'
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'fade-in': 'fade-in 0.5s ease-out'
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'pulse-glow': {
          'from': { boxShadow: '0 0 20px #6366f1' },
          'to': { boxShadow: '0 0 40px #6366f1, 0 0 60px #06b6d4' }
        },
        'fade-in': {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
};
