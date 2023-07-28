import React, { useState } from 'react';
import axios from 'axios';

const AddProjectForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [githubLink, setGithubLink] = useState('');

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('gitHublink', githubLink);
    formData.append('image', image);

    try {
      const response = await axios.post('http://127.0.0.1:4000/api/v1/projects/addproject', 
      formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      console.log(response)
      // Show success message or redirect to a success page
    } catch (error) {
      console.error(error);
      // Show error message to the user
    }
  };

  return (
    <div>
      <h1>Add New Project</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Github Link:</label>
          <input type="text" value={githubLink} onChange={(e) => setGithubLink(e.target.value)} />
        </div>
        <div>
          <label>Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default AddProjectForm;
