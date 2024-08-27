/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        main_red: "hsl(14, 86%, 42%)",
        main_green: "hsl(159, 69%, 38%)",
        rose50: "hsl(20, 50%, 98%)",
        rose100: "hsl(13, 31%, 94%)",
        rose300: "hsl(14, 25%, 72%)",
        rose400: "hsl(7, 20%, 60%)",
        rose500: "hsl(12, 20%, 44%)",
        rose900: "hsl(14, 65%, 9%)"
      },
      fontFamily: {
        red_hat_text: ["Red Hat Text", "sans-serif"]
      },
      padding: {
        padding_x_large: "7rem",
        padding_x_small: "2rem",
        padding_y_large: "5rem",
        padding_y_small: "1.8rem"
      },
      borderRadius: {
        main_rounded: "0.8rem"
      },
      backgroundImage: {
        confirmBtnHover: "linear-gradient(rgb(0 0 0/30%) 0 0)"
      },
      animation: {
				fade: 'fadeIn .5s ease-in-out',
				wiggleScaleIn: 'wiggleScaleIn .3s ease-in-out',
			},

			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
        wiggleScaleIn: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top', opacity: '0' },
          '50%': { transform: 'scaleY(1.1) rotate(2deg)', transformOrigin: 'top', opacity: '1' },
          '70%': { transform: 'scaleY(0.9) rotate(-2deg)', transformOrigin: 'top' },
          '90%': { transform: 'scaleY(1.05) rotate(1deg)', transformOrigin: 'top' },
          '100%': { transform: 'scaleY(1)', transformOrigin: 'top' },
				},
			},
    },
  },
  plugins: [],
}