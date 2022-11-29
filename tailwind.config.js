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