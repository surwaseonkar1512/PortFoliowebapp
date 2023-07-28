// Addproject.js

import React from 'react';
import { useForm } from 'react-hook-form';
import { apiConnector } from '../../services/apiconnector';
import { projectEndpoint } from '../../services/apis';
import { useEffect } from 'react';
import { toast } from "react-hot-toast"
import Footer from '../Common/Footer';

const Addproject = () => {
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data) => {
    if (!data.title || !data.description || !data.projectlink || !data.gitHublink || !data.imageUrl) {
      console.log('Please enter all details.');
      // Show a pop-up or an error message to the user
      return;
    }
    const formData = new FormData();
formData.append('title', data.title);
formData.append('description', data.description);
formData.append('projectlink', data.projectlink);
formData.append('gitHublink', data.gitHublink);
formData.append('imageUrl', data.imageUrl[0]); // Assuming you want to upload just one image file

console.log(formData);
    console.log(data); // This will log the form data on submit.
    try {
      const res = await apiConnector('POST', projectEndpoint.ADDPROJECT_API, formData);
      toast.success("Project created successfully")
      console.log('Project saved successfully:', res); // Response from the backend will be logged here.
    } catch (error) {
      console.log('ERROR MESSAGE - ', error.message);
    }
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        title: "",
        description: "",
        projectlink: "",
        gitHublink: "",
        imageUrl: "",
      })
    }
  }, [reset, isSubmitSuccessful])

  return (
    <div className='mt-[5rem] flex flex-col max-h-full w-full items-center justify-center gap-10'>
     <h1 className="flex items-center justify-center text-3xl font-base2 text-[#fffffe] underline">Create Project</h1>
    <form onSubmit={handleSubmit(onSubmit)}  enctype="multipart/form-data" className="max-w-sm mx-auto mt-8">
     <div className="mb-4">
        <label htmlFor="title" className="block mb-1 text-[#fffffe] font-base2 ">
          Project Title
        </label>
        <input
          type="text"
          id="title"
          {...register('title', { required: 'Project title is required' })}
          className="form-style w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block mb-1 text-[#fffffe] font-base2">
          Project Description
        </label>
        <textarea
          id="description"
          {...register('description', { required: 'Project description is required' })}
          className="form-style w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="projectlink" className="block mb-1 text-[#fffffe] font-base2">
          Project Link
        </label>
        <input
          type="text"
          id="projectlink"
          {...register('projectlink', { required: 'Project link is required' })}
          className="form-style w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        {errors.projectlink && <p className="text-red-500">{errors.projectlink.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="gitHublink" className="block mb-1 text-[#fffffe] font-base2">
          GitHub Link
        </label>
        <input
          type="text"
          id="gitHublink"
          {...register('gitHublink', { required: 'GitHub link is required' })}
          className="form-style w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        {errors.gitHublink && <p className="text-red-500">{errors.gitHublink.message}</p>}
      </div>
      <div className="mb-4">
          <label htmlFor="imageUrl" className="block mb-1 text-[#fffffe] font-base2">
            ImageUrl
          </label>
          <input
            type="file"
            id="imageUrl"
            {...register('imageUrl', { required: 'imageUrl is required' })}
            className="form-style w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.imageUrl && <p className="text-red-500">{errors.imageUrl.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 mt-4 text-white bg-[#ff8906] rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Submit
          {errors.submit && <p className="text-red-500">{errors.submit.message}</p>}
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default Addproject;