import React, { useState } from "react";
import hrImg from "../../../images/horizantolLine.png";
import PrimaryBtn from "../../PrimaryBtn";
import Form from "../form/Form";

function AboutUs() {
  const [showForm, setShowForm] = useState(false);
  const handleApplyClick = () => {
    setShowForm(true);
  };

  const handleSendMessage = () => {
    setShowForm(false);
  };

  return (
    <div className="py-10 sm:px-32 px-10">
      <div className="grid md:grid-cols-2 grid-cols-1 mb-4">
        <div className="md:border-t pt-8 md:pr-12">
          <div className="flex sm:flex-row flex-col items-center">
            <img src={hrImg} className="h-[5px] max-w-[49px]" />
            <h1 className="sm:text-2xl text-xl text-center">About us</h1>
          </div>
          <div className="my-6">
            <p className="text-justify ">
              At TOPSOL, we're more than a company - we're a collective of
              passionate innovators dedicated to pushing boundaries and crafting
              exceptional digital solutions. Our journey is rooted in a
              commitment to creativity, collaboration, and client success. With
              a blend of expertise and vision, we strive to create meaningful
              impacts in the digital landscape, one project at a time.
            </p>
          </div>
          <div className="flex sm:flex-row flex-col items-center">
            <img src={hrImg} className="h-[5px] max-w-[49px]" />
            <h1 className="sm:text-2xl text-xl text-center">Job Description</h1>
          </div>
          <div className="my-6 text-center">
            <p className="text-justify">
              We are seeking a talented Product Designer to join our team. As a
              Product Designer at TOPSOL, you will play a pivotal role in
              shaping user-centered web solutions that seamlessly blend
              aesthetics with functionality. Your creative vision and attention
              to detail will be key in crafting captivating digital experiences
              that resonate with users and drive client success
            </p>
          </div>
        </div>
        <div className="md:border-t md:border-l pl-2 pt-8">
          <div className="flex sm:flex-row flex-col items-center">
            <img src={hrImg} className="h-[5px] max-w-[49px]" />
            <h1 className="sm:text-2xl text-xl text-center">Job information</h1>
          </div>
          <div className="md:pl-12">
            <div className="my-4">
              <label className=" text-primary-gray text-lg">Industry</label>
              <h1 className=" text-lg font-bold">UI/UX Design</h1>
            </div>
            <div className="my-4">
              <label className=" text-primary-gray text-lg">
                Work Experience
              </label>
              <h1 className=" text-lg font-bold">3 to 5 years</h1>
            </div>
            <div className="my-4">
              <label className=" text-primary-gray text-lg">City</label>
              <h1 className=" text-lg font-bold">Faisalabad</h1>
            </div>
            <div className="my-4">
              <label className=" text-primary-gray text-lg">
                State/Province
              </label>
              <h1 className=" text-lg font-bold">Punjab</h1>
            </div>
            <div className="my-4">
              <label className=" text-primary-gray text-lg">Country</label>
              <h1 className=" text-lg font-bold">Pakistan</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex sm:flex-row flex-col items-center">
          <img src={hrImg} className="h-[5px] max-w-[49px]" />
          <h1 className="text-2xl text-center">Responsibilities</h1>
        </div>
        <div className="my-6 px-2">
          <ul className="sm:pl-5 list-disc">
            <li>
              Collaborate closely with cross-functional teams to understand
              project requirements, objectives, and user needs.
            </li>
            <li>
              Create intuitive and visually appealing design concepts,
              wireframes, and prototypes for web-based products.
            </li>
            <li>
              Develop interactive mockups and user flows that effectively
              communicate design ideas and user journeys.
            </li>
            <li>
              Refine and iterate designs based on feedback, user testing, and
              project requirements.
            </li>
            <li>
              Ensure design consistency and a seamless user experience across
              different devices and platforms.
            </li>
            <li>
              Stay updated with industry trends, best practices, and emerging
              design technologies.
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className="flex sm:flex-row flex-col items-center">
          <img src={hrImg} className="h-[5px] max-w-[49px]" />
          <h1 className="text-2xl text-center">Requirements</h1>
        </div>
        <div className="my-6 px-2">
          <ul className="sm:pl-5 list-disc">
            <li>
              Proven experience as a Product Designer, UI/UX Designer, or
              similar role with a minimum of 5 years of experience.
            </li>
            <li>
              Strong portfolio showcasing design skills and a deep understanding
              of user-centered design principles.
            </li>
            <li>
              Proficiency in design and prototyping tools such as Figma, Adobe
              XD, Sketch, or similar.
            </li>
            <li>
              Solid knowledge of responsive design, mobile-first design, and
              design systems.
            </li>
            <li>
              Excellent communication skills to effectively collaborate with
              cross-functional teams and present design ideas.
            </li>
            <li>
              Creative thinking, attention to detail, and a passion for crafting
              exceptional user experiences.
            </li>
            <li>
              Ability to adapt to fast-paced environments and prioritize
              multiple projects.
            </li>
            <li>
              Bachelor's degree in Design, Interaction Design, or a related
              field (or equivalent experience).
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="flex sm:flex-row flex-col items-center">
          <img src={hrImg} className="h-[5px] max-w-[49px]" />
          <h1 className="text-2xl text-center">Benefits</h1>
        </div>
        <div className="my-6 px-2">
          <ul className="sm:pl-5 list-disc">
            <li>Competitive salary and benefits package.</li>
            <li>Opportunities for professional growth and development.</li>
            <li>Collaborative and inclusive work environment.</li>
            <li>Flexibility in work arrangements.</li>
            <li>Engaging team events and workshops.</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button
          onClick={handleApplyClick}
          className="font-bold bg-primary  hover:bg-primary-light font-montserrat rounded-xl text-primary-white py-3 px-10"
        >
          apply now
        </button>
      </div>

      {showForm && <Form onClose={handleSendMessage} />}
    </div>
  );
}

export default AboutUs;
