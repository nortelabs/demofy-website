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
        secondary: "#db7536",
        "dark-bg": "#000000",
        "dark-card": "#0f0f0f",
        "dark-border": "#1a1a1a",
        "dark-text": "#a1a1aa",
        "cream": "#f7f7f5",
        "accent": "#ffcc00",
        "orange": "#db7536",
        "yellow": "#ffcc00",
        "black": "#000000",
        "white": "#ffffff"
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "ui-sans-serif", "system-ui", "Segoe UI", "Helvetica", "Arial"]
      },
      boxShadow: {
        screen: "0 20px 40px rgba(0, 0, 0, 0.3)",
        card: "0 4px 16px rgba(0, 0, 0, 0.1)",
        glow: "0 0 32px rgba(255, 204, 0, 0.15)"
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(135deg, #ffffff 0%, #f7f7f5 100%)',
        'gradient-orange': 'linear-gradient(135deg, #db7536 0%, #ffcc00 100%)',
        'gradient-dark': 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)'
      }
    }
  },
  plugins: []
};
