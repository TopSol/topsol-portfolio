import React, { useState } from "react";
import Form from "../../../../components/form/Form";
// @ts-ignore
import { db, storage } from "../../../../utils/firebase";
// @ts-ignore
import hrImg from "../../../../images/horizantolLine.png";
import { validateJobApplicatonForm } from "../../../../utils";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  Timestamp,
  addDoc,
  collection,
  doc,
  runTransaction,
  setDoc,
} from "firebase/firestore";
import dotImg from "../../../../images/dot.png";

function AboutUs({ jobDetails }: any) {
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cover: "",
    phone: "",
  });
  const [resumeFile, setResumeFile] = useState(null);

  const handleChange = (e: any, isPhone: any) => {
    if (isPhone) {
      console.log(e, isPhone);
      setFormData({
        ...formData,
        phone: e,
      });
    } else {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file.type === "application/pdf") {
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        alert("PDF file size exceeds 5MB. Please select a smaller PDF.");
        return;
      }
      setResumeFile(file);
    } else {
      alert("Please select a valid PDF file.");
    }
  };

  const handleApplyClick = () => {
    setShowForm(true);
  };

  async function incrementApplicants(documentId: string) {
    try {
      const postRef = doc(db, "jobPosts", documentId);
      await runTransaction(db, async (transaction) => {
        const postDoc = await transaction.get(postRef);
        console.log({ transaction, postDoc });
        if (!postDoc.exists()) {
          throw new Error("Document does not exist");
        }
        const newApplicantsCount = (postDoc.data().applicants || 0) + 1;
        transaction.update(postRef, { applicants: newApplicantsCount });
      });
    } catch (error) {
      console.error("Error updating document:", error);
    }
  }

  const submit = async (e: Event) => {
    e.preventDefault();
    try {
      const response = validateJobApplicatonForm(formData, resumeFile);
      if (!response.isValid) {
        alert(response.msg);
        return;
      }

      setLoading(true);
      const body = {
        ...formData,
        jobId: jobDetails.id,
        JobType: jobDetails.type,
        appliedAt: Timestamp.now(),
        jobTitle: jobDetails.title,
      };
      const docRef = await addDoc(collection(db, "jobApplications"), body);

      if (resumeFile) {
        const storageRef = ref(storage, `resumes/${docRef.id}`);
        await uploadBytes(storageRef, resumeFile);
        const downloadURL = await getDownloadURL(storageRef);
        await setDoc(docRef, { resumeURL: downloadURL }, { merge: true });
      }
      incrementApplicants(jobDetails.id);
      alert("Application submited");
      setResumeFile(null);
      setFormData({
        name: "",
        email: "",
        cover: "",
        phone: "",
      });
      setLoading(false);
      setShowForm(false);
    } catch (e) {
      setLoading(false);
      console.log("Error jobApplications", e);
    }
  };

  return (
    <div className="lg:container lg:mx-auto  mx-[23px]">
      <div className="flex lg:flex-row flex-col lg:mt-[98.5px] lg:mx-[166px]">
        <div className="lg:border-t sm:order-1 order-2 border-pageBorder lg:pr-[52px]">
          <div className="flex flex-row items-center md:mt-[57px] md:mb-[35px] ">
            <img src={hrImg} className="h-[5px] md:w-[49px] w-8" />
            <h1 className="md:text-[28px] text-[22px] font-semibold text-center md:ml-[15.5px] ml-[10px]">
              About us
            </h1>
          </div>
          <div className="md:mb-[41px] md:my-0 my-[25px]">
            <p className=" md:text-lg text-base font-medium md:text-justify text-center">
              At Topsol, we're more than a company - we're a collective of
              passionate innovators dedicated to pushing boundaries and crafting
              exceptional digital solutions. Our journey is rooted in a
              commitment to creativity, collaboration, and client success. With
              a blend of expertise and vision, we strive to create meaningful
              impacts in the digital landscape, one project at a time.
            </p>
          </div>
          <div className="flex flex-row items-center">
            <img src={hrImg} className="h-[5px] md:w-[49px] w-8" />
            <h1 className=" md:text-[28px] text-[22px] font-semibold text-center md:ml-[15.5px] ml-[10px]">
              Job Description
            </h1>
          </div>
          <div className="md:my-6 my-[25px] text-center lg:relative">
            <img
              src={dotImg}
              className="absolute lg:block hidden left-[-77px] bottom-5"
            />
            <p className="md:text-lg text-base font-medium text-justify">
              {jobDetails.description}
            </p>
          </div>
        </div>
        <div className="lg:border-t sm:order-2  border-pageBorder lg:border-l md:pr-0 md:pl-0  md:mb-0 mb-[55px] ">
          <div className="flex flex-row items-center md:ml-[10px] xl:mr-[142px] mt-[55px]  md:mt-[57px] ">
            <img src={hrImg} className="h-[5px] md:w-[49px] w-8" />
            <h1 className="md:text-[28px] text-[22px] flex whitespace-nowrap font-semibold  md:ml-[15.5px] ml-[10px]">
              Job information
            </h1>
          </div>
          <div className="md:ml-[65px] ml-[42px] ">
            <ul className="">
              <li className="flex flex-col md:text-2xl text-lg font-semibold text-primary-darkGray md:mt-8 mt-[25px]">
                <span className=" text-primary-gray md:text-2xl text-lg font-medium">
                  Industry
                </span>
                {jobDetails?.industry}
              </li>
              <li className="flex flex-col md:text-2xl text-lg font-semibold text-primary-darkGray md:my-10 my-[25px]">
                <span className=" text-primary-gray md:text-2xl text-lg md:mb-0 mb-[17px] font-medium">
                  Work Experience
                </span>
                {jobDetails?.experience}
              </li>
              <li className="flex flex-col ml-0 md:text-2xl text-lg font-semibold text-primary-darkGray">
                <span className=" text-primary-gray md:text-2xl text-lg md:mb-0 mb-[17px] font-medium">
                  Location
                </span>
                {jobDetails?.location}
              </li>
              <li className="flex flex-col md:text-2xl text-lg font-semibold text-primary-darkGray md:my-10 my-[25px]">
                <span className=" text-primary-gray md:text-2xl text-lg md:mb-0 mb-[17px] font-medium">
                  State/Province
                </span>
                Punjab
              </li>
              <li className="flex flex-col md:text-2xl text-lg font-semibold text-primary-darkGray">
                <span className=" text-primary-gray md:text-2xl text-lg md:mb-0 mb-[17px] font-medium">
                  Country
                </span>
                Pakistan
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" lg:mx-[160px] md:mr-[209px] md:mt-[58px]">
        <div className="flex flex-row items-center">
          <img src={hrImg} className="h-[5px] md:w-[49px] w-8" />
          <h1 className="md:text-[28px] text-[22px] font-semibold text-center md:ml-[15.5px] ml-[10px]">
            Responsibilities
          </h1>
        </div>
        <div className="md:mt-[35px] md:my-0 my-[25px] mx-[5px]">
          <ul className="pl-5 list-disc">
            {jobDetails?.responsibilities?.map((i: string) => {
              return <li className="md:text-lg text-base font-medium">{i}</li>;
            })}
          </ul>
        </div>
      </div>

      <div className=" lg:ml-[160px] lg:mr-[209px] md:mt-[58px]">
        <div className="flex flex-row items-center">
          <img src={hrImg} className="h-[5px] md:w-[49px] w-8" />
          <h1 className="md:text-[28px] text-[22px] font-semibold text-center md:ml-[15.5px] ml-[10px]">
            Requirements
          </h1>
        </div>
        <div className="md:mt-[35px] md:my-0 my-[25px] mx-[5px] ">
          <ul className="pl-5 list-disc md:text-lg text-base font-medium">
            {jobDetails?.requirements?.map((i: string) => {
              return <li>{i}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className=" lg:ml-[160px] lg:mr-[209px] md:mt-[58px]">
        <div className="flex flex-row items-center">
          <img src={hrImg} className="h-[5px] md:w-[49px] w-8" />
          <h1 className="md:text-[28px] text-[22px] font-semibold text-center md:ml-[15.5px] ml-[10px]">
            Benefits
          </h1>
        </div>
        <div className="md:mt-[35px] md:my-0 my-[25px] mx-[5px] ">
          <ul className="pl-5 list-disc md:text-lg text-base font-medium">
            {jobDetails?.benefits?.map((i: string) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center md:mt-[92px] md:mb-[86px] mb-[63px]">
        <button
          onClick={handleApplyClick}
          className=" font-semibold text-base bg-primary  hover:bg-primary-light rounded-[10px] text-primary-white py-[13px] pr-[41px] pl-[40px] "
        >
          Apply Now
        </button>
      </div>

      {showForm && (
        <Form
          submit={submit}
          loading={loading}
          formData={formData}
          resumeFile={resumeFile}
          setFormData={setFormData}
          handleChange={handleChange}
          setResumeFile={setResumeFile}
          handleFileChange={handleFileChange}
          heading={`Apply for ${jobDetails.title}`}
        />
      )}
    </div>
  );
}

export default AboutUs;
