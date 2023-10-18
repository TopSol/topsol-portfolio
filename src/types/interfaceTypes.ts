interface reviewTypes {
  id: string;
  heading: string;
  desc: string;
  avatar: string;
}


type JobPost = {
id: string;
title: string;
experience: string;
type: string;

};
type ExpType = {
title: string;
experience: string;
type: string;
};

type PortfolioItem = {
  id: string;
  htmlCode: string;
  title: string;
  image: string;
};

interface jobDetailsType {
  id: string;
  type: string;
  title: string;
  description: string;
  industry: string;
  experience: string;
  location: string;
  postedAt: { seconds: number; nanoseconds: number };
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

interface portfolioDetailType {
  title: string;
  aboutDesc: string;
  videoUrl: string;
  unlockTitle: string;
  unlockDesc: string;
  imageCollection: string[];
  clientVisions: string[]; 
  detailImageUrl:string;
  description:string;
}

interface ServiceData {
  id: number;
  heading: string;
  detail: string;
}
export {reviewTypes, JobPost,ExpType,PortfolioItem, jobDetailsType, portfolioDetailType, ServiceData}