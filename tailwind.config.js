/** @type {import('tailwindcss').Config} */
module.exports = {
      content: [
            "./src/**/*.{html,ts}",
      ],
      theme: {
            extend: {
                  colors: {
                        pokemon: {
                              //main app palette
                              water: '#2D43FA',
                              grass: '#0FFA4D',
                              fire: '#FA4147',
                              normal: '#FAD141',
                              ground: '#E0C068',

                              //one color to each type
                              fighting: '#FA6941',
                              flying: '#C1D7FF',
                              poison: '#8A1EA8',
                              rock: '#9E9783',
                              bug: '#8CC25F',
                              ghost: '#D9D9D9',
                              steel: '#536772',
                              electric: '#FFFF00',
                              psychicPink: '#FFC2FB',
                              psychicBlue: '#A6E6FB',
                              ice: '#C1FFFF',
                              dragonRed: '#FF5877',
                              dragonYellow: '#FFCE53',
                              dark: '#00158A',
                              fairyBlue: '#A6E6FB',
                              fairyYellow: '#FFCE53',
                              unknown: '#D9D9D9',
                              shadow: '#5C5C5C'
                        },
                        colors:{
                              primary: '#2D43FA',       // water
                              secondary: '#FAD141',     // normal
                              accent: '#FA4147',        // fire
                              success: '#0FFA4D',       // grass
                              neutral: '#E0C068',       // ground
                        }
                  }
            },
      },
      plugins: [],
}

