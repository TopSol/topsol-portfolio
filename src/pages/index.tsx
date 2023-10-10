import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Home from "./home";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default IndexPage;

export function Head() {
  return (
    <>
      <title>TOPSOL Innovative Solution</title>
      <meta name="description" content="TopSol Portfolio " />
      <link rel="icon" href="/topsol-favicon.png" type="image/png"></link>
    </>
  );
}
