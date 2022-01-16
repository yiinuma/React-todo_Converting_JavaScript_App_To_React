/* eslint-disable global-require */
module.exports = {
  style: {
    postcssOptions: {
      // eslint-disable-next-line import/no-extraneous-dependencies
      // eslint-disable-next-line global-require
      // eslint-disable-next-line import/no-extraneous-dependencies
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};
