import type { GatsbyConfig } from "gatsby";

module.exports = {
  flags: {
    DEV_SSR: true,
  },
};

const config: GatsbyConfig = {
  siteMetadata: {
    title: `TOPSOL`,
    siteUrl: `https://www.topsol.org`,
    description: `TopSol Innovative Solution`,
    defaultImage: `./src/images/favicon-01.png`,
    image: "./og_image.jpg",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-wrap-pages`,
      options: {
        pixelId: "651807596939712",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-28SQWDEXY0", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  ],
};

export default config;
