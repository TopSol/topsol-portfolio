import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SmallFooter from "../components/smallFooter";
import Footer from "../components/footerSection";
import Hero from "../pages/portfolio/component/HeroDetails";
import PortfolioDetailBody from "../pages/portfolio/component/portfolioDetailBody";
import { db } from "../utils/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { PulseLoader } from "react-spinners";
import { ToggleBar } from "../components/bar";
import metaImage from "../images/main-logo2.png";
import Logo from "../images/favicon-01.png";
import "../styles/global.css";

export default function index({ pageContext }) {
    const [portfolio, setportfolio] = useState([pageContext?.portfolio]);

    return (
        <>
            <Navbar />
            <ToggleBar />
            <Hero data={portfolio[0]} />
            <PortfolioDetailBody data={portfolio[0]} />
            <div className="mb-[70px]">
                <SmallFooter />
            </div>
            <Footer />
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
