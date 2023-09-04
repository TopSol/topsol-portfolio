import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby";
import notFoundImg from '../images/Frame.png';


const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main>
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
        <br />
        <Link to="/">Go home</Link>.
      
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
