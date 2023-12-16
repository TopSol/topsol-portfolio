import React, { useEffect, useState } from "react";
import AboutUs from "../pages/careers/components/details/AboutUs";
import Designer from "../pages/careers/components/productDesigner/Designer";
import Logo from "../images/favicon-01.png";
import Navbar from "../components/Navbar";
import Footer from "../components/footerSection";
import metaImage from "../images/main-logo2.png";
import { ToggleBar } from "../components/bar";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../utils/firebase";
import { PulseLoader } from "react-spinners";

function JobDetail({ pageContext }) {
    const [careers, setCareers] = useState([pageContext?.careers]);

    return (
        <>
            <Navbar />
            <ToggleBar />
            <Designer jobDetails={careers[0]} />
            <AboutUs jobDetails={careers[0]} />
            <Footer />
        </>
    );
}

export default JobDetail;

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
