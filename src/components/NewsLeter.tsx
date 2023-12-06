import React, { useState } from "react";
import { db } from "../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const EmailOptInForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    try {
      setLoading(true);
      event.preventDefault();
      // Corrected usage of addDoc
      const res = await addDoc(collection(db, "newsLetter"), {
        email,
        timestamp: new Date(),
      });

      toast.success("Thank you for subscribing!");
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setEmail("");
      setLoading(false);
    }
  };

  return (


    <div>
      <div>
        <ToastContainer />
      </div>
      <h1 className="text-white font-urbanist text-[24px] font-semibold leading-[30px]">
        Join our Newsletter
      </h1>
      <form
        className="rounded-md mt-4 flex xl:flex-row md:flex-col sm:flex-row "
        name="email-opt-in"
        method="post"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="email-opt-in" />
        <input
          className="text-black rounded-tl-[4px] rounded-bl-[4px] mt-3 text-[12px] md:text-[16px] py-4 md:px-4 px-2 placeholder-[#7C7C7C] outline-none"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button
          className={`${loading ? "bg-gray-500" : "bg-primary"
            } text-[12px]    md:text-[16px] font-bold font-figtree py-4 mt-3 md:px-6 px-2 rounded-tr-[4px] rounded-br-[4px]`}
          type="submit"
          disabled={loading}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default EmailOptInForm;
