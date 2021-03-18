module.exports = {
  siteMetadata: {
    title: 'Kull Thana',
  },
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require('tailwindcss')],
      },
    },
    `gatsby-plugin-antd`,
  ],
}
