const manifestConfig = require('./manifest-config');
require('dotenv').config();

const { ACCESS_TOKEN, SPACE_ID } = process.env;

module.exports = {
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Cabin', 'Open Sans'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: manifestConfig,
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: SPACE_ID,
        accessToken: ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-offline',
  ],
  flags: {
    DEV_SSR: false,
  }
}
