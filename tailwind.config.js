

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Tenor Sans', 'Georgia', 'serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
    },
    extend: {
      textColor: {
        'title-1': '#ffed4a',
        'title-2': '#838382',
        'title-3': '#4d4501',
        'paragraph': '#070b0e',
        'button': '#221f01',
        'link': '#2121210',
        'nav': '#fffdfd',
        'danger': '#e3342f',
      },
      backgroundColor: {
        'nav': '#c4c4c4',
        'paragraph': '#ffffff',
        'body': '#fcfcfc',
        'button': '#b8b8b8',
      },
      borderColor: {
        'nav': '#949494',
        'paragraph': '#b5b4b4',
        'body': '#b5b4b4',
        'button': '#444444',
        'border-standard': '#888888'
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}