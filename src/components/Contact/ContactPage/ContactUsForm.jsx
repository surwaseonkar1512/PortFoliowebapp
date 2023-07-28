import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import CountryCode from "./data/countrycode.json"
import axios from "axios";
import { contactusEndpoint } from "../../../services/apis";
import { apiConnector } from "../../../services/apiconnector";
import { motion } from 'framer-motion';
import { toast } from "react-hot-toast";
const ContactUsForm = () => {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm()

  const submitContactForm = async (data) => {
  console.log("Form Data - ", data)
    try {
      setLoading(true)
      const res = await apiConnector(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        data
      )
      console.log("Email Res - ", res)
      setLoading(false)
      toast.success("Email send Succesfully")
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
      setLoading(false)
    }
  }
  
  
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
      })
    }
  }, [reset, isSubmitSuccessful])

  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
   animate={{ opacity: 1, y: 0 }}
     exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 1.5 }}>
    <form
      className="flex flex-col gap-7 text-[1rem] font-base4 bg-[#0f0e17] h-full"
      onSubmit={handleSubmit(submitContactForm)}
    >
      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="firstname" className="lable-style text-[#fffffe]">
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter first name"
            className="form-style w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            {...register("firstname", { required: true })}
          />
          {errors.firstname && (
            <span className="-mt-1 text-[12px] text-[#ff2828]">
              Please enter your name.
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="lastname" className="lable-style text-[#fffffe]">
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Enter last name"
            className="form-style w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            {...register("lastname")}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="lable-style text-[#fffffe]">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email address"
          className="form-style w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="-mt-1 text-[12px] text-[#ff2828]">
            Please enter your Email address.
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phonenumber" className="lable-style text-[#fffffe]">
          Phone Number
        </label>

        <div className="flex gap-5">
          <div className="flex w-[81px] flex-col gap-2 text-gray-900">
            <select
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Enter first name"
              className="form-style w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              {...register("countrycode", { required: true })}
            >
              {CountryCode.map((ele, i) => {
                return (
                  <option key={i} value={ele.code}>
                    {ele.code} -{ele.country}
                  </option>
                )
              })} 
            </select>
          </div>
          <div className="flex w-[calc(100%-90px)] flex-col gap-2">
            <input
              type="number"
              name="phonenumber"
              id="phonenumber"
              placeholder="12345 67890"
              className="form-style w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              {...register("phoneNo", {
                required: {
                  value: true,
                  message: "Please enter your Phone Number.",
                },
                maxLength: { value: 12, message: "Invalid Phone Number" },
                minLength: { value: 10, message: "Invalid Phone Number" },
              })}
            />
          </div>
        </div>
        {errors.phoneNo && (
          <span className="-mt-1 text-[12px] text-[#ff2828]">
            {errors.phoneNo.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="lable-style text-[#fffffe]">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="7"
          placeholder="Enter your message here"
          className="form-style w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <span className="-mt-1 text-[12px] text-[#ff2828]">
            Please enter your Message.
          </span>
        )}
      </div>

      <button
        disabled={loading}
        type="submit"
        className={`rounded-md bg-[#ff8906] px-6 py-3 text-center text-[13px] font-bold text-[#fffffe] shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
         ${
           !loading &&
           "transition-all duration-200 hover:scale-95 hover:shadow-none"
         }  disabled:bg-richblack-500 sm:text-[16px] `}
      >
        Send Message
      </button>
    </form>
    </motion.div>
  )
}

export default ContactUsForm