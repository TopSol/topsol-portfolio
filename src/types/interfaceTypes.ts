import { File } from "buffer";
import { Timestamp } from "firebase/firestore";
import React, { ChangeEvent } from "react";
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
  appStoreUrl:string;
  category:string;
  isActive:boolean;
  webUrl:string;
  subTitle:string;
  createdAt:Timestamp;
  imageUrl:string;
}

interface ServiceData {
  id: number;
  heading: string;
  detail: string;
}
interface FormProps {
  submit: () => void;
  loading: boolean;
  heading?: string;
  formData: {
    name: string;
    email: string;
    phone: string;
    cover: string;
  };
  resumeFile: File | null ;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any, isPhone?: boolean) => void;
  handleFileChange: (file: File | null) => void;
}

export {reviewTypes, JobPost,ExpType,PortfolioItem, jobDetailsType, portfolioDetailType, ServiceData,FormProps, }