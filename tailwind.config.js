module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      fontWeight: ['hover', 'focus'],
      opacity: {
        "30": ".3"
      },
      colors: {
        gray: {
          50: "#F9FAFB",
          100: "#DEE8ED",
          200: "#C2CFD6",
          300: "#A7B6BE",
          400: "#8A9EA8",
          500: "#6C8693",
          600: "#576B75",
          700: "#415058",
          800: "#2B363B",
          900: "#161B1D",
        }
      },
      lineHeight: {
        '14': '3.5rem',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif']
      },
      fontSize: {
        '7xl': '5rem',
      },
      borderRadius: {
         DEFAULT: '0.25rem',
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      gap: {
        'y-10': '2.5rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  variants: {
    textOverflow: ['responsive', 'group-hover'],
  }
}
