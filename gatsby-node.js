// gatsby-node.js
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // GraphQL query to fetch data from Firebase
  const result = await graphql(`
    query {
      allFirebaseData {
        nodes {
          name
        }
      }
    }
  `);
  console.log("GraphQL Result:", result);

  // Iterate over the data and create pages
  result.data.allFirebaseData.nodes.forEach((item) => {
    createPage({
      path: `/services/${item.name}`,
      component: path.resolve('./src/pages/services/[slug]/index.tsx'),
      context: {
        slug: item.name,  // Using 'serviceName' instead of 'name'
      },
    });
  });
};
