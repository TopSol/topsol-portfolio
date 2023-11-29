// const path = require("path");

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   // Fetch data or use your existing data source
//   // For example, fetch data from a GraphQL query
//   // const result = await graphql(`
//   //   query {
//   //     allYourBlogData {
//   //       nodes {
//   //         name
//   //       }
//   //     }
//   //   }
//   // `);

//   // Use the fetched data to create pages
//   result.data.blogs.nodes.forEach(({ name }) => {
// //   ["future-ai", "mastering-git", "development-trends"].forEach((name) => {
//     createPage({
//       path: `/blogs/${name}`,
//       component: path.resolve("./src/pages/blogs/index.tsx"),
//       context: {
//         name,
//       },
//     });
//   });
// };
