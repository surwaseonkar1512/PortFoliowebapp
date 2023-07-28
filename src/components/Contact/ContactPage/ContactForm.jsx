import React from "react";
import ContactUsForm from "./ContactUsForm";
import ParticleEffect from "../../Common/ParticleEffect";


const ContactForm = () => {
  return (
   
    
   
    <div className="border-2 border-[#e53170] bg-[#0f0e17] p-6 shadow-[5px_5px_#e53170,_10px_10px_#ff8906,_15px_15px_#fffffe,_20px_20px_#a7a9be]  text-gray-900 rounded-xl  lg:p-14 flex gap-3 flex-col">
      <h1 className="leading-10 text-3xl font-base2 text-[#fffffe]">
        Got a Idea? We&apos;ve got the skills. Let&apos;s team up
      </h1>
      <p className="text-[#fffffe] font-base2">
        Tell us more about yourself and what you&apos;re got in mind.
      </p>

      <div className=" ">
       <ContactUsForm/>
      </div>
    </div>

  );
};
export default ContactForm;