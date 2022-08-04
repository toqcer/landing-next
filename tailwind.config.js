/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'my-emerald': 'hsla(166,50%,44%,1)',
        'my-emerald-light': 'hsla(166,50%,44%,.6)',
        'blue-coral': 'hsla(183,68%,36%,1)',
        'blue-coral-light': 'hsla(183,68%,36%,.6)',
        'my-blue': 'hsla(203,64%,29%,1)',
        'my-blue-light': 'hsla(203,64%,29%,.6)',
        'my-purple': 'hsla(241,44%,26%,1)',
        'my-purple-light': 'hsla(241,44%,26%,.6)',
        'fancy-purple': 'hsla(298,50%,23%,1)',
        'fancy-purple-light': 'hsla(298,50%,23%,.6)',
        'solid-brown': 'rgba(101, 100, 100, 1)',
      },
    },
  },
  plugins: [],
};
