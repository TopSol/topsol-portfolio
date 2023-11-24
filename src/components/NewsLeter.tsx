import React, { useState } from 'react';
import { db } from "../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const EmailOptInForm = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await addDoc(collection(db, "newsLetter"), {
                email,
                timestamp: new Date(),
            });

            toast.success('Thank you for subscribing!');
            setEmail('');
        } catch (error) {

            toast.error('An error occurred. Please try again later.');
        }
    };

    return (

        <div className=''>
            <div>
                <ToastContainer />
            </div>
            <h1 className='text-white font-urbanist text-[24px] font-semibold leading-[30px]'>Join our Newsletter</h1>
            <form className='rounded-md mt-4 flex flex-col lg:flex-row ' name="email-opt-in" method="post" onSubmit={handleSubmit}>
                <input
                    className='text-black rounded-tl-[4px] rounded-bl-[4px] flex justify-start text-[12px] my-2 md:text-[16px] py-4 md:px-4 px-1 placeholder-[#7C7C7C] outline-none'
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                <button className='bg-primary text-[12px] px-1 md:text-[16px] w-[50%] ml-auto flex justify-center items-end font-bold my-2 font-figtree py-4 md:px-6 rounded-tr-[4px] rounded-br-[4px]' type="submit">Subscribe</button>

            </form>
        </div>

    );
};

export default EmailOptInForm;
