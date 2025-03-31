/** @type {import('tailwindcss').Config} */
module.exports = {
      content: [
            "./src/**/*.{html,ts}",
      ],
      theme: {
            extend: {
                  colors: {
                        colors:{
                              primary: '#2D43FA',       // water
                              secondary: '#FAD141',     // normal
                              accent: '#FA4147',        // fire
                              accentDark: '#C03237',
                              success: '#0FFA4D',       // grass
                              neutral: '#E0C068',       // ground
                        }
                  }
            },
      },
      plugins: [],
}

