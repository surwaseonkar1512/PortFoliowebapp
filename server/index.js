const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const contactUsRoute = require("./routes/Contact");
const projects = require("./routes/Project")
const {cloudinaryConnect } = require("./config/cloudinary");
const database = require("./config/database");
const fileUpload = require("express-fileupload");
dotenv.config();

const PORT = process.env.PORT || 4000;

//database connect
app.use(
	fileUpload({
		useTempFiles:true,
		
	})
)
cloudinaryConnect();
database.connect();
//middlewares
app.use(express.json());
app.use(cors());

app.use(
	cors({
		origin:"https://port-foliowebapp.vercel.app/",
		credentials:true,
	})
)


//routes
// Add this to your index.js file

const Project = require('./modal/Project'); // Import the Project model

// Fetch all projects
const data = async (req, res) => {
	try {
	  const projects = await Project.findProject.find().sort({ _id: -1 }).exec();
	  console.log('Fetched projects:', projects);
	  return res.status(200).json(projects);
	} catch (error) {
	  console.error('Error fetching projects:', error);
	  return res.status(500).json({ error: 'Failed to fetch projects' });
	}
  };
  

console.log(data)


app.use("/api/v1/reach", contactUsRoute);
app.use("/api/v1/projects", projects);

app.get('/allprojects', async (req, res) => {
	try {
	  const projects = await Project.find();
	  console.log(projects)
	  res.json(projects);
	} catch (err) {
	  res.status(500).json({ error: 'Failed to fetch projects' });
	}
  });
  
//def route

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})

