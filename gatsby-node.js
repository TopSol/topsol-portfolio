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
  

  // Iterate over the data and create pages
  result.data.allFirebaseData.nodes.forEach((item) => {
    createPage({
      path: `/services/${item.name}`,
      component: path.resolve('./src/pages/services/[slug]/index.tsx'),
      context: {
        slug: item.name,  
      },
    });
  });
};

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
  

  // Iterate over the data and create pages
  result.data.allFirebaseData.nodes.forEach((item) => {
    createPage({
      path: `/portfolio/${item.name}`,
      component: path.resolve('./src/pages/portfolio/[slug]/index.tsx'),
      context: {
        slug: item.name,  
      },
    });
  });
};

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
  

  // Iterate over the data and create pages
  result.data.allFirebaseData.nodes.forEach((item) => {
    createPage({
      path: `/blogs/${item.name}`,
      component: path.resolve('./src/pages/blogs/[slug]/index.tsx'),
      context: {
        slug: item.name,  
      },
    });
  });
};

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
  

  // Iterate over the data and create pages
  result.data.allFirebaseData.nodes.forEach((item) => {
    createPage({
      path: `/careers/${item.name}`,
      component: path.resolve('./src/pages/careers/[slug]/index.tsx'),
      context: {
        slug: item.name,  
      },
    });
  });
};
