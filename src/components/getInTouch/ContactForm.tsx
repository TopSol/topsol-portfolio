import React, { useState } from "react";

function ContactForm() {
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");
  const [help, setHelp] = useState("");
  const [checkBox, setCheckBox] = useState(false);

  const submit = () => {
    alert("helo");
  };
  return (
    <div className=" border rounded-2xl flex flex-col justify-center items-center px-8">
      <input
        type="text"
        placeholder="How can we help?"
        className="bg-[#eff3f9] p-4 text-xs rounded-sm mb-4 w-[507px] "
        value={help}
        onChange={(e) => setHelp(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        className="bg-[#eff3f9] p-4 text-xs rounded-sm w-[507px] "
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        className="bg-[#eff3f9] p-4  text-xs my-4 rounded-sm w-[507px]"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject"
        className="bg-[#eff3f9] p-4  text-xs rounded-sm w-[507px] "
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <textarea
        name=""
        id=""
        cols={38}
        rows={9}
        placeholder="Message..."
        className="bg-[#eff3f9] text-xs p-4 my-4 w-[507px]"
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
      ></textarea>
      <div className="flex self-start pl-4 mt-4">
        <input
          type="checkbox"
          className="mr-2 "
        //   value={checkBox}
        //   onChange={() => setSubject(!checkBox)}
        />
        <label>I agree to term & conditions</label>
      </div>

      <div className=" mt-10 w-[507px]">
        <button
          type="button"
          onClick={submit}
          aria-label="Post Comment"
          className="w-full px-6 py-3  bg-[#00B8F1] border-2 rounded-md  text-white font-medium text-xs leading-tight uppercase  hover:bg-[#96dff6]  focus:bg-[#00B8F1]  active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
