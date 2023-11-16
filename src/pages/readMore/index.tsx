import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footerSection";
import DataScience from "./components/DataScience";
import Hero from "./components/Hero";
import CardSection from "./components/CardSection";
import CommentSection from "./components/CommentSection";
import ImageSection from "./components/ImageSection";
import { ToggleBar } from "../../components/bar";
export default function index() {
  return (
    <div>
      <div>
        <Navbar />
        <ToggleBar />
      </div>
      <Hero />
      <CardSection />
      <DataScience showFlex={true} />
      <DataScience showFlex={true} />
      <DataScience showFlex={false} />
      <ImageSection />
      <DataScience showFlex={false} />
      <CommentSection />
      <Footer />
    </div>
  );
}
