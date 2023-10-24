import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/headerSection";
import Heading from "./Heading";
import Footer from "../../components/footerSection";
import Card from "./Card";
export default function index() {
  return (
    <div>
      <Navbar />
      <Header
        title="Latest"
        subtitle="Blogs"
        content="Explore the Latest Blogs on Trends and Technologies"
        subContent="Welcome to our blog page! Here you will find informative
         and engaging articles on a variety of topics, including Blockchain,
         WEB, Development. Our blog is updated regularly with fresh
         content, so be sure to check back often.We strive to provide
         insights and perspectives on the latest industrytrends and
         developments. Whether you‘re looking for inspiration, tips, or
         simply some interesting reading, our blog has something for
         everyone.Thanks for visiting and happy reading!"
        imageUrl="https://res.cloudinary.com/asifsaythe/image/upload/v1693224854/new_portfolio/Frame_1_lv9ucy.png"
      />
      <Heading />
      <Card />
      <div className="mt-[100px] md:mt-[139px]">
        <Footer />
      </div>
    </div>
  );
}

export function Head() {
  return (
    <>
      <title>TOPSOL Innovative Solution</title>
      <meta
        name="description"
        content="Topsol Innovative Solutions leads the way in cutting-edge technology, offering creative, tailored solutions to address complex challenges, driving progress across diverse industries."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://topsol.org/" />
      <meta property="og:title" content="TOPSOL Innovative Solution" />
      <meta
        property="og:description"
        content="Topsol Innovative Solutions leads the way in cutting-edge technology, offering creative, tailored solutions to address complex challenges, driving progress across diverse industries."
      />
      <meta property="og:image" content="/icons/logo.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://topsol.org/" />
      <meta property="twitter:title" content="TOPSOL Innovative Solution" />
      <meta
        property="twitter:description"
        content="Topsol Innovative Solutions leads the way in cutting-edge technology, offering creative, tailored solutions to address complex challenges, driving progress across diverse industries."
      />
      <meta property="twitter:image" content="/icons/logo.png" />
      <link rel="icon" href="/icons/icon.png" type="image/png"></link>
    </>
  );
}
