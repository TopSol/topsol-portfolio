import React from "react";
import notFoundImg from "../../images/Frame.png";
import metaImage from "../../images/main-logo2.png";
import Logo from "../../images/favicon-01.png";

function PageNotFound() {
  return (
    <div className="flex flex-col justify-center items-center px-6 py-28">
      <div className="max-w-[590px]">
        <img src={notFoundImg} className="" />
      </div>
      <div className="pt-10 text-center">
        <h1 className="md:text-8xl text-4xl font-extrabold">
          PAGE NOT <span className=" text-primary">FOUND</span>
        </h1>
      </div>
    </div>
  );
}

export default PageNotFound;

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
