const Project = require('../modal/Project'); // Assuming you have defined the Project model in a separate file.
const {uploadImageToCloudinary} = require("../utils/imageUploader");




exports.addProject = async (req, res) => {
  try {
   

    let { title, description, projectlink, gitHublink } = req.body;

    // Get thumbnail image from request files
    const imageUrl = req.files
 
    console.log(imageUrl);
   // Upload the Thumbnail to Cloudinary
    const thumbnailImage = await uploadImageToCloudinary(
      req.files.imageUrl,
      process.env.FOLDER_NAME
    )
    console.log(thumbnailImage)
    // Create a new project with the given details

   
    const newProject = new Project({
      title:title,
      description:description,
      projectlink:projectlink,
      gitHublink:gitHublink,
      imageUrl:thumbnailImage.secure_url,
          });
      
          // Retrieve the existing list of projects from the database
          const existingProjects = await Project.find();
      
          // Add the new project to the beginning of the list
          existingProjects.unshift(newProject);
      
          // Save the updated list back to the database
          await Project.deleteMany({}); // Delete all existing projects
          await Project.insertMany(existingProjects); // Insert the updated list of projects
      
          console.log("new=", newProject);
      
    console.log("end")
 res.status(200).json({
      success: true,
      data: newProject,
      message: "Project Created Successfully",
    })
  } catch (error) {
    
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Failed to create Project",
      error: error.message,
    })
  }
}












// exports.addProject = async (req, res) => {
//   try {
//     const {title, description, projectlink, gitHublink,  file } = req.body;

//     // Upload the image to Cloudinary
//     const cloudinaryUploadOptions = {
//       folder: 'project_images', // Change this to your desired folder in Cloudinary
//       height: 300, // Change this to your desired height
//       quality: 'auto', // Change this to your desired quality
//     };

//     const uploadedImage = await uploadImageToCloudinary(file, cloudinaryUploadOptions);

    
//      // Save the Cloudinary image URL and other project data in the project document
//      const projectData = {
//       title,
//       description,
//       projectlink,
//       gitHublink,
//       imageUrl: uploadedImage.secure_url,
//     };

//     // Save the project into the MongoDB database
//     const newProject = new Project(projectData);
//     const savedProject = await newProject.save();

//     res.status(201).json(savedProject);
//   } catch (error) {
//     res.status(500).json({ error: 'Something went wrong!' });
//   }
// };

















// exports.addProject = async (req, res) => {
//   console.log("start");
//   try {
//     let { title, description, projectlink, gitHublink, imageUrl } = req.body;

//     // Create a new project instance
//     const newProject = new Project({
//       title: title,
//       description: description,
//       projectlink: projectlink,
//       gitHublink: gitHublink,
//       imageUrl: imageUrl,
//     });

//     // Retrieve the existing list of projects from the database
//     const existingProjects = await Project.find();

//     // Add the new project to the beginning of the list
//     existingProjects.unshift(newProject);

//     // Save the updated list back to the database
//     await Project.deleteMany({}); // Delete all existing projects
//     await Project.insertMany(existingProjects); // Insert the updated list of projects

//     console.log("new=", newProject);

//     res.json({ message: 'Project saved successfully', project: newProject });
//     console.log("end")
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// };




// Assuming you have imported the required dependencies and the Project model.

// Function to fetch all projects
exports.fetchAllProjects = async (req, res) => {
  console.log("start1");
  try {
    // Fetch all projects from the database
    const projects = await Project.find({}, {
      _id: 0, // Exclude the _id field from the result
      title: 1,
      description: 1,
      imageUrl: 1,
      gitHublink: 1,
    });

    // Check if there are any projects
    if (projects.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No projects found.",
      });
    }
    
    console.log(projects);

    // If projects are found, return them in the response
    return res.status(200).json({
      success: true,
      projects: projects,
    });
  } catch (error) {
    // Handle errors
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const allCourses = await Project.find(
     
      {
        _id: true, // Exclude the _id field from the result
        title:true,
        description:true,
        imageUrl: true,
        gitHublink: true,
      }
    )
      
      .exec()

    return res.status(200).json({
      success: true,
      data: allCourses,
    })
  } catch (error) {
    console.log(error)
    return res.status(404).json({
      success: false,
      message: `Can't Fetch Course Data`,
      error: error.message,
    })
  }
}
