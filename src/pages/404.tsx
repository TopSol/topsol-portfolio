import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import notFoundImg from "../images/Frame.png";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="md:container mx-auto h-[100vh] flex  justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-[590px]">
          <img src={notFoundImg} className="" />
        </div>
        <div className="text-center mt-12">
          <h1 className="md:text-[80px] text-4xl font-bold">
            PAGE NOT <span className=" text-primary">FOUND</span>
          </h1>
        </div>
      </div>
      {/* <br />
      <Link to="/">Go home</Link>. */}
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
