const path = require("path");
const { db } = require("./src/utils/firebase");
const { collection, query, orderBy, getDocs } = require("firebase/firestore");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  try {
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
  } catch (error) {
    console.log(error);
  }
};
