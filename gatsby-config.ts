import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `TopSol-portfolio`,
    siteUrl: `https://www.topsol.org`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "651807596939712",
      },
    },
  ],
};

export default config;
