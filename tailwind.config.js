/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './sections/**/*.{js,ts,jsx,tsx}',
        './layouts/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        container: {
            // you can configure the container to be centered
            center: true,

            // or have default horizontal padding
            padding: '2rem',

            // default breakpoints but with 40px removed
            screens: {
                sm: '600px',
                md: '728px',
                lg: '984px',
                xl: '1040px',
                '2xl': '1260px',
            },
        },
        extend: {
            boxShadow: {
                'bottom-x': '0px 34px 68px 0px #7473801A',
            },
            colors: {
                'gray-middle': '#8C8C8C',
                'midnight-blue': '#20202D',
                'my-emerald': 'hsla(166,50%,44%,1)',
                'my-emerald-light': 'hsla(166,50%,44%,.6)',
                'blue-coral': 'hsla(183,68%,36%,1)',
                'blue-coral-light': 'hsla(183,68%,36%,.6)',
                'my-blue': 'hsla(203,64%,29%,1)',
                'my-blue-light': 'hsla(203,64%,29%,.6)',
                'my-purple': 'hsla(241,44%,26%,1)',
                'my-purple-light': 'hsla(241,44%,26%,.6)',
                'fancy-purple': '#571C56',
                'fancy-purple-light': 'hsla(298,50%,23%,.6)',
                'solid-brown': 'rgba(101, 100, 100, 1)',
                'fancy-blue': 'hsla(214, 91%, 54%, 1)',
                'solid-purple': 'hsla(297, 14%,50%,1)',
                'purple-bold': '#2F2C4A',
                'gray-helper': '#656464',
                'gray-blue-200': '#E2EEFF',
                'white-50': '#F3F3F3',
                'blue-50': '#E2EEFF',
            },
            backgroundImage: {
                'linear-red':
                    'linear-gradient(154.49deg, #FF858A 6.61%, #F04148 89.72%)',
                'linear-yellow':
                    'linear-gradient(154.49deg, #FFD085 6.61%, #FFAF2E 89.72%)',
                'linear-blue':
                    'linear-gradient(154.49deg, #5CA1FE 6.61%, #217BF4 89.72%)',
                'linear-green-center':
                    'linear-gradient(0deg, rgba(126, 192, 177, 0) 1.63%, rgba(126, 192, 177, 0.2) 20.5%, rgba(126, 192, 177, 0.2) 58.57%, rgba(126, 192, 177, 0) 100%)',
            },
        },
    },
    plugins: [],
};
