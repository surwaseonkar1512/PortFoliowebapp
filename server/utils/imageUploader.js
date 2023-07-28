const cloudinary = require('cloudinary').v2;

// exports.uploadImageToCloudinary = async (file, options) => {
//   const result = await cloudinary.uploader.upload(file.tempFilePath, options);
//   return result;
// };












exports.uploadImageToCloudinary  = async (file, folder, height, quality) => {
   
  const options = {folder};
    if(height) {
        options.height = height;
    }
    if(quality) {
        options.quality = quality;                    
    }
    options.resource_type = "auto";
 
    return await cloudinary.uploader.upload(file.tempFilePath, options);
    
}

// const uploadImageToCloudinary = async (imagePath, folderName) => {
//     try {
//       // Upload the image to Cloudinary
//       const result = await cloudinary.uploader.upload(imagePath, {
//         folder: folderName, // Cloudinary folder name where the image will be stored
//         use_filename: true, // Use the original filename from the upload
//       });
  
//       return result.secure_url; // Return the secure URL of the uploaded image
//     } catch (error) {
//       console.error('Error uploading image to Cloudinary:', error);
//       throw new Error('Failed to upload image to Cloudinary');
//     }
//   };