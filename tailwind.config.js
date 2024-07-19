/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  content: [
    './*.html',      // Vérifiez que ce chemin couvre tous vos fichiers HTML à la racine
    './js/**/*.js'   // Assurez-vous d'inclure les fichiers JavaScript s'ils contiennent des classes Tailwind
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#E0BD02'
      }
    }
  },
  plugins: []
}
