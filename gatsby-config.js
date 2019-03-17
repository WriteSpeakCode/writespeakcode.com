module.exports = {
  siteMetadata: {
    title: `Write/Speak/Code`,
    description: `Write/Speak/Code is on a mission to promote the visibility and leadership of technologists with marginalized genders through peer-led professional development.`,
    author: `@writespeakcode`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `writespeakcode.com`,
        short_name: `W/S/C`,
        start_url: `/`,
        background_color: `#172751`,
        theme_color: `#EB6851`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        include_favicon: true,
      },
    },
    "gatsby-plugin-offline",
  ],
}
