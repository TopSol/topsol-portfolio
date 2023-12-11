// const path = require('path');

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   // GraphQL query to fetch data from MarkdownRemark (assuming you are using Markdown files)
//   const { data } = await graphql(`
//     query {
//       allMarkdownRemark {
//         nodes {
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   `);
//   exports.createSchemaCustomization = ({ actions }) => {
//     const { createTypes } = actions
//     const allMarkdownRemark = `
//       type allMarkdownRemark implements Node {
//         name: String
//       }
//     `
//     createTypes(allMarkdownRemark)
//   }

//   // Iterate over the data and create pages
//   data.allMarkdownRemark.nodes.forEach((node) => {
//     createPage({
//       path: `/services${node.fields.slug}`, // Fix path generation
//       component: path.resolve('./src/pages/services/[slug]/index.tsx'),
//       context: {
//         slug: node.fields.slug,
//       },
//     });
//   });
// };
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   // GraphQL query to fetch data from Firebase
//   const {result} = await graphql(`
//     query {
//       allMarkdownRemark {
//         nodes {
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   `);
  

//   // Iterate over the data and create pages
//   result.allMarkdownRemark.nodes.forEach((item) => {
//     createPage({
//       path: `/portfolio/${item.name}`,
//       component: path.resolve('./src/pages/portfolio/[slug]/index.tsx'),
//       context: {
//         slug: item.name,  
//       },
//     });
//   });
// };

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   // GraphQL query to fetch data from Firebase
//   const {result} = await graphql(`
//     query {
//       allMarkdownRemark {
//         nodes {
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   `);
  

//   // Iterate over the data and create pages
//   result.allMarkdownRemark.nodes.forEach((item) => {
//     createPage({
//       path: `/blogs/${item.name}`,
//       component: path.resolve('./src/pages/blogs/[slug]/index.tsx'),
//       context: {
//         slug: item.name,  
//       },
//     });
//   });
// };

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   // GraphQL query to fetch data from Firebase
//   const {result} = await graphql(`
//     query {
//       allMarkdownRemark {
//         nodes {
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   `);
  

//   // Iterate over the data and create pages
//   result.allMarkdownRemark.nodes.forEach((item) => {
//     createPage({
//       path: `/careers/${item.name}`,
//       component: path.resolve('./src/pages/careers/[slug]/index.tsx'),
//       context: {
//         slug: item.name,  
//       },
//     });
//   });
// };
