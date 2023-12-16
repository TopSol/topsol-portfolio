const path = require("path");
const { db } = require("./src/utils/firebase");
const { collection, query, orderBy, getDocs } = require("firebase/firestore");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  try {
    // Create pages for services
    const serviceCollection = collection(db, "services");
    const servicesQuery = query(serviceCollection, orderBy("createdAt"));
    const servicesSnapshots = await getDocs(servicesQuery);
    const servicesData = servicesSnapshots.docs.map((doc) => doc.data());
    servicesData?.forEach((service) => {
      createPage({
        path: `/services/${service.name}`,
        component: path.resolve("./src/templates/serviceTemplate.tsx"),
        context: { service },
      });
    });

    // Create pages for portfolio
    const portfolioCollection = collection(db, "portFolio");
    const portfoliosQuery = query(portfolioCollection, orderBy("createdAt"));
    const portfoliosSnapshots = await getDocs(portfoliosQuery);
    const portfoliosData = portfoliosSnapshots.docs.map((doc) => doc.data());
    portfoliosData?.forEach((portfolio) => {
      createPage({
        path: `/portfolio/${portfolio.name}`,
        component: path.resolve("./src/templates/portfolioTemplate.tsx"),
        context: { portfolio },
      });
    });

     // Create pages for blogs
    const blogsCollection = collection(db, "blogs");
    const blogssQuery = query(blogsCollection, orderBy("createdAt"));
    const blogssSnapshots = await getDocs(blogssQuery);
    const blogssData = blogssSnapshots.docs.map((doc) => doc.data());
    blogssData?.forEach((blogs) => {
      createPage({
        path: `/blogs/${blogs.name}`,
        component: path.resolve("./src/templates/blogsTemplate.tsx"),
        context: { blogs },
      });
    });

     // Create pages for careers
    const careersCollection = collection(db, "jobPosts");
    const careerssQuery = query(careersCollection, orderBy("postedAt"));
    const careerssSnapshots = await getDocs(careerssQuery);
    const careerssData = careerssSnapshots.docs.map((doc) => doc.data());
    careerssData?.forEach((careers) => {
      createPage({
        path: `/careers/${careers.name}`,
        component: path.resolve("./src/templates/careersTemplate.tsx"),
        context: { careers },
      });
    });
  } catch (error) {
    console.log(error);
  }
};
