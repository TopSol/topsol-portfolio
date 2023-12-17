import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footerSection";
import { ToggleBar } from "../components/bar";
import Logo from "../images/favicon-01.png";
import metaImage from "../images/main-logo2.png";
import "../styles/global.css";

export default function index({ pageContext }) {
    const [blogs, setBlogs] = useState([pageContext?.blogs]);
    return (
        <>
            <ToggleBar />
            <Navbar />
            <div dangerouslySetInnerHTML={{ __html: blogs[0]?.htmlCode || "" }} />
            <div className="mt-10">
                <Footer />
            </div>
        </>
    );
}

export function Head() {
    return (
        <>
            <title>TOPSOL Innovative Solution</title>
            <meta
                name="description"
                content="TOPSOL Innovative Solutions leads the way in cutting-edge technology, offering creative, tailored solutions to address complex challenges, driving progress across diverse industries."
            />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://topsol.org/" />
            <meta property="og:title" content="TOPSOL Innovative Solution" />
            <meta
                property="og:description"
                content="TOPSOL Innovative Solutions leads the way in cutting-edge technology, offering creative, tailored solutions to address complex challenges, driving progress across diverse industries."
            />
            <meta property="og:image" content={metaImage} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://topsol.org/" />
            <meta property="twitter:title" content="TOPSOL Innovative Solution" />
            <meta
                property="twitter:description"
                content="TOPSOL Innovative Solutions leads the way in cutting-edge technology, offering creative, tailored solutions to address complex challenges, driving progress across diverse industries."
            />
            <meta property="twitter:image" content={metaImage} />
            <link rel="icon" href={Logo} type="image/png"></link>
        </>
    );
}