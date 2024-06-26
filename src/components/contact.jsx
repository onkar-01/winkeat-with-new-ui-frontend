import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loader from './Loader';
import { BASE_URL } from '../helper';
import toast, { Toaster } from "react-hot-toast";
const ContactForm = () => {
    const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const data = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
  
    console.log(data);
  
    try {
      const response = await fetch(`${BASE_URL}/api/v1/contact-us`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
  
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          toast.success(
            data.message
          );
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setLoading(false);
          console.log(data);
        } else {
          toast.error(data.message);
          setLoading(false);
        }
      } else {
        toast.error("Something went wrong");
        setLoading(false);
      }
    } catch (error) {
      toast.error("Something went wrong");
      setLoading(false);
    }
  };

//   if (loading) {
//     return <Loader />;
//   }
  return (
    <div className='w-full'>
        {loading && <Loader /> }
    <header className="bg-[#ff742e] text-white p-4 h-[200px]">
    <img onClick={()=>navigate("/")} src='logo2.png' alt='logo' className='w-[60px] cursor-pointer h-[60px] mx-auto' />
    
    </header>
    <form onSubmit={handleSubmit} className="min-w-[70%] bg-[#ffffff]  shadow-[#fff] md:shadow-[#bcbaba] shadow-[0px_10px_10px] p-[20px]  sm:p-[50px] mt-[-50px] rounded-[10px]    max-w-lg mx-auto">
        <h1 className="text-[35px] font-bold my-[50px] text-[#ff742e]">Contact Us</h1>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="appearance-none block w-full    text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full    text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2"
            htmlFor='subject'
          >
            Subject
          </label>
          <input
            className="appearance-none block w-full    text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="subject"
            type="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="no-resize appearance-none block w-full    text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-30 resize-none"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
      </div>
      <div className="flex flex-row w-full mx-auto md:items-center justify-center">
        <div className="w-full mx-auto flex  justify-center">
          <button
            className="shadow bg-[#ff742ef4] hover:bg-[#ff742e] focus:shadow-outline-orange focus:outline-none text-white font-bold py-[5px] w-[150px] rounded"
            type="submit"
          >
            Send
          </button>
        </div>
        <div className="w-full mx-auto flex justify-center">
            <button
            onClick={()=>navigate("/")}
                className="border-2 border-[#ff742e] hover:bg-[#ff742e] hover:text-white focus:shadow-outline-orange focus:outline-none text-[#ff742e] font-bold py-[5px] w-[150px] rounded"
                type="submit"
            >
                Cancel
            </button>
            </div>
      </div>
    </form>

    <div className="flex flex-col items-center justify-center mt-[100px] text-center">
      <h1 className="text-[#ff742e] font-['josefin sans'] mb-4">For any queries or feedback, please feel free to contact us. We will get back to you as soon as possible.</h1>
      <h1 className="text-[#ff742e] mb-4">Email: <a href="mailto:winkeat.info@gmail.com" className="text-[#ff742e]">winkeat.info@gmail.com</a></h1>
      <h1 className="text-[#ff742e] mb-4">phone: <a href="mailto:winkeat.info@gmail.com" className="text-[#ff742e]">+91 9006005081</a></h1>
      <h1 className="text-[#ff742e] mb-4">Address: KEIC Shell, K.R. Mangalam University Sohna Road, Gurugram, Sohna Rural, Sohna, Haryana 122103  </h1>
    </div>
    <div className=" bg-[#efeded] !w-full text-[#ff742e] flex flex-wrap justify-center  gap-[10px] font-josefin-sans text-center sm:text-right  bottom-0 right-0 px-4 py-2  sm:w-auto">
  <h1 className="flex text-[12px] flex-row flex-wrap justify-center sm:justify-end">
    © 2024, Winkeat{" "}
    <Link
      to="/return-and-refund-policy"
      className="hover:underline mx-[10px] flex items-center"
    >
      Return and Refund Policy
    </Link>
    <span className="hidden sm:inline">|</span> 
    <Link
      to="/privacy-policy"
      className="hover:underline mx-[10px] flex items-center"
    >
      Privacy Policy
    </Link>
    <span className="hidden sm:inline">|</span> {/* Show pipe separator on small screens */}
    <Link
      to="/terms-and-condition"
      className="hover:underline mx-[10px] flex items-center"
    >
      Terms and Conditions
    </Link>{" "}
    and{" "}
    <Link
      to="/contact-us"
      className="hover:underline flex items-center ml-[10px]"
    >
      Contact Us
    </Link>
  </h1>
</div>
    <Toaster />
    </div>
  );
};

export default ContactForm;