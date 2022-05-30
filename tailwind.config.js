module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#B62122',
        'primary-gray': '#F4F4F4',
        'primary-blue': '#036EEB',
        'primary-green': '#99CB98',
        'usual-gray': "#717274",
        'deep-green': "#16AFA0",
        'shallow-green': "rgba(22, 175, 160, 0.5)",
        'shallow-red': "rgba(182, 33, 34, 0.68)",
        'deep-orange': "#E37917",
        'shallow-orange': "#E99548",
        state: {
          proposal: '#3F90F0',
          progress: '#86D3B4',
          review: '#C4C4C4',
          finish: '#F57E7E'
        }
      },
      backgroundImage: {
        'ui-bubble': "url('/images/bubbleBg.png')"
      },
      backgroundColor: ['checked']
    }
  },
  plugins: [require('@tailwindcss/forms')],
};
