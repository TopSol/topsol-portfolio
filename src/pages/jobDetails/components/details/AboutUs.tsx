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
    <div className="py-10 sm:px-32 px-10">
      <div className="grid md:grid-cols-2 grid-cols-1 mb-4">
        <div className="md:border-t pt-8 md:pr-12">
          <div className="flex sm:flex-row flex-col items-center">
            <img src={hrImg} className="h-[5px] max-w-[49px]" />
            <h1 className="sm:text-2xl text-xl text-center px-2">About us</h1>
          </div>
          <div className="my-6">
            <p className="font-montserrat text-justify font-bold">
              At Topsol, we're more than a company - we're a collective of
              passionate innovators dedicated to pushing boundaries and crafting
              exceptional digital solutions. Our journey is rooted in a
              commitment to creativity, collaboration, and client success. With
              a blend of expertise and vision, we strive to create meaningful
              impacts in the digital landscape, one project at a time.
            </p>
          </div>
          <div className="flex sm:flex-row flex-col items-center">
            <img src={hrImg} className="h-[5px] max-w-[49px]" />
            <h1 className="sm:text-2xl text-xl text-center px-2">
              Job Description
            </h1>
          </div>
          <div className="my-6 text-center">
            <p className="font-montserrat text-justify font-bold">
              {jobDetails.description}
            </p>
          </div>
        </div>
        <div className="md:border-t md:border-l pl-2 pt-8">
          <div className="flex sm:flex-row flex-col items-center">
            <img src={hrImg} className="h-[5px] max-w-[49px]" />
            <h1 className="sm:text-2xl text-xl text-center px-2">
              Job information
            </h1>
          </div>
          <div className="md:pl-12">
            <ul>
              <li className="flex flex-col text-lg font-extrabold font-montserrat text-primary-darkGray my-4">
                <span className=" text-primary-gray">Industry</span>
                {jobDetails?.industry}
              </li>
              <li className="flex flex-col text-lg font-extrabold font-montserrat text-primary-darkGray my-4">
                <span className=" text-primary-gray">Work Experience</span>
                {jobDetails?.experience}
              </li>
              <li className="flex flex-col text-lg font-extrabold font-montserrat text-primary-darkGray my-4">
                <span className=" text-primary-gray">Location</span>{" "}
                {jobDetails?.location}
              </li>
              <li className="flex flex-col text-lg font-extrabold font-montserrat text-primary-darkGray my-4">
                <span className=" text-primary-gray">State/Province</span>
                Punjab
              </li>
              <li className="flex flex-col text-lg font-extrabold font-montserrat text-primary-darkGray my-4">
                <span className=" text-primary-gray">Country</span>Pakistan
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="flex sm:flex-row flex-col items-center">
          <img src={hrImg} className="h-[5px] max-w-[49px]" />
          <h1 className="text-2xl text-center px-2">Responsibilities</h1>
        </div>
        <div className="my-6 px-2">
          <ul className="sm:pl-5 list-disc font-montserrat font-bold">
            {jobDetails?.responsibilities?.map((i: string) => {
              return <li>{i}</li>;
            })}
          </ul>
        </div>
      </div>

      <div>
        <div className="flex sm:flex-row flex-col items-center">
          <img src={hrImg} className="h-[5px] max-w-[49px]" />
          <h1 className="text-2xl text-center px-2">Requirements</h1>
        </div>
        <div className="my-6 px-2">
          <ul className="sm:pl-5 list-disc font-montserrat font-bold">
            {jobDetails?.requirements?.map((i: string) => {
              return <li>{i}</li>;
            })}
          </ul>
        </div>
      </div>
      <div>
        <div className="flex sm:flex-row flex-col items-center">
          <img src={hrImg} className="h-[5px] max-w-[49px]" />
          <h1 className="text-2xl text-center px-2">Benefits</h1>
        </div>
        <div className="my-6 px-2">
          <ul className="sm:pl-5 list-disc font-montserrat font-bold">
            {jobDetails?.benefits?.map((i: string) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center my-14">
        <button
          onClick={handleApplyClick}
          className="font-bold bg-primary  hover:bg-primary-light font-montserrat rounded-xl text-primary-white py-3 px-10"
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
