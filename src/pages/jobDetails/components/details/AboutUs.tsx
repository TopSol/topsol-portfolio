import React, { useState } from "react";
import Form from "../../../../components/form/Form";
// @ts-ignore
import { db, storage } from "../../../../utils/firebase";
// @ts-ignore
import hrImg from "../../../../images/horizantolLine.png";
import { addDoc, collection, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


function AboutUs({ jobDetails }: any) {

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

  const handleFileChange = (e:any) => {
    const file = e.target.files[0];
    setResumeFile(file);
  };

  const handleApplyClick = () => {
    setShowForm(true);
  };

  const submit = async () => {
    try {
      const docRef = await addDoc(collection(db, "jobApplications"), formData);

      if (resumeFile) {
        const storageRef = ref(storage, `resumes/${docRef.id}`);
        await uploadBytes(storageRef, resumeFile);
        const downloadURL = await getDownloadURL(storageRef);

        await setDoc(docRef, { resumeURL: downloadURL }, { merge: true });
      }
      
      alert("Application submited")
      setResumeFile(null);
      setFormData({
        name: "",
        email: "",
        cover: "",
        phone: "",
      });
      setShowForm(false);
    } catch (e) {
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
              {jobDetails.detail}
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
                <span className=" text-primary-gray">City</span>Faisalabad
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
            <li>Competitive salary and benefits package.</li>
            <li>Opportunities for professional growth and development.</li>
            <li>Collaborative and inclusive work environment.</li>
            <li>Flexibility in work arrangements.</li>
            <li>Engaging team events and workshops.</li>
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
          formData={formData}
          resumeFile={resumeFile}
          setFormData={setFormData}
          handleChange={handleChange}
          setResumeFile={setResumeFile}
          handleFileChange={handleFileChange}
          heading={`Apply for ${jobDetails.id}`}
        />
      )}
    </div>
  );
}

export default AboutUs;
