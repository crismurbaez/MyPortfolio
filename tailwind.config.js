/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        escribiendo: 'escribiendo 2s steps(30) infinite',
        parpadeo: '0.5s parpadeo infinite',
      },
      keyframes: {
        escribiendo: {
          'from': { width: '0' },
        },
        parpadeo: {
          '50%': { opacity: '0' },
        },

      },
      plugins: [
        require('@tailwindcss/aspect-ratio'),
      ],
    }
  }
}

// animation: bounce 1s infinite;

// @keyframes bounce {
//   0%, 100% {
//     transform: translateY(-25%);
//     animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
//   }
//   50% {
//     transform: translateY(0);
//     animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
//   }
// }