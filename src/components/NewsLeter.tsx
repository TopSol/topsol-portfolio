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
            // Corrected usage of addDoc
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
        // <form name="email-opt-in" className='flex items-center justify-center md:justify-start' method="post" onSubmit={handleSubmit}>
        //     <div>
        //         <ToastContainer />
        //     </div>
        //     <input type="hidden" name="form-name" value="email-opt-in" />
        //     <label className='flex flex-col text-white font-urbanist text-[24px] font-semibold leading-[30px]'>
        //         Join our Newsletter
        //         <input
        //             className='text-black mt-3 text-[16px] placeholder-[#7C7C7C] outline-none rounded-tl-[4px] rounded-bl-[4px] py-4 md:px-6 px-1 '
        //             type="email"
        //             name="email"
        //             value={email}
        //             onChange={(e) => setEmail(e.target.value)}
        //             placeholder="Enter your email"
        //             required
        //         />
        //     </label>
        //     <button className='bg-primary mt-[72px] text-[16px] font-bold font-figtree md:mt-[42px] py-[19px] md:px-4 px-1 rounded-tr-[4px] rounded-br-[4px]' type="submit">Subscribe</button>
        // </form>

        <div>
            <div>
                <ToastContainer />
            </div>
            <h1 className='text-white font-urbanist text-[24px] font-semibold leading-[30px]'>Join our Newsletter</h1>
            <form className='rounded-md mt-4' name="email-opt-in" method="post" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="email-opt-in" />
                <input
                    className='text-black rounded-tl-[4px] rounded-bl-[4px] text-[12px] md:text-[16px] py-4 md:px-4 px-1 placeholder-[#7C7C7C] outline-none'
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                <button className='bg-primary text-[12px] px-1 md:text-[16px] font-bold font-figtree py-4 md:px-6 rounded-tr-[4px] rounded-br-[4px]' type="submit">Subscribe</button>

            </form>
        </div>

    );
};

export default EmailOptInForm;
