import React, { useEffect, useState } from 'react'
import Navbar from "../../components/Navbar";
import Header from '../../components/headerSection';
import Heading from './Heading';
import Footer from '../../components/footerSection';
import Card from './Card';
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
      <div className='mt-[100px] md:mt-[139px]'>
        <Footer />
      </div>
    </div>
  )
}
