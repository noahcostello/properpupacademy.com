module.exports = {
  siteMetadata: {
    title: `Proper Pup Academy - A Certified Dog Trainer`,
    description: `I am an Animal Behavior College Certified Dog Trainer in Huntington Beach, CA. I have worked with various breeds, of all ages and sizes.`,
    author: `@noahcostello`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `proper-pup-academy`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#494866`,
        theme_color: `#494866`,
        display: `minimal-ui`,
        icon: `src/images/pup-icon.png` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        navigateFallback: null,
        navigateFallbackWhitelist: []
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`
      }
    }
  ]
};
