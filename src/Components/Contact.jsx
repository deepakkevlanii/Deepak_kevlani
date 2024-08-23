import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import env from 'react-dotenv';

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key",import.meta.env.VITE_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Form Successfully Submitted")
      event.target.reset();
    } else {
      toast.error("Form Not Submited")
    }
  };

  return (
    <section className='shadow-[5px_5px_50px_0px_rgba(0,0,0,.2),-5px_-5px_20px_0px_rgba(255,255,255,.1)] rounded-md py-4 px-6 mb-12 w-4/5 mx-auto mt-4'>
    <form  onSubmit={onSubmit}>
        <div>
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="user_name">Name</label>
            <input type="text" name="user_name" id="user_name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-transparent"  required/>
        </div>
        <div>
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="user_email">Email</label>
            <input type="email" name="user_email" id="user_email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-transparent"  required/>
        </div>
        <div>
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="subject">Subject</label>
            <input type="text" name="subject" id="subject" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-transparent"  required/>
        </div>
        <div>
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="message">Message</label>
            <textarea name="message" id="message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-transparent h-32 resize-none" required></textarea>
        </div>
        <div>
            <input type="submit" value="Send" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer" />
        </div>
    </form>
</section>

  );
};

export default ContactUs
