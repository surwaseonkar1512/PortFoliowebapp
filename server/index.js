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

// Apply CORS middleware first
app.use(
	cors({
		origin: "https://port-foliowebapp-git-main-surwaseonkar1512.vercel.app",
		credentials: true,
	})
);

// Next, add the file upload middleware
app.use(
	fileUpload({
		useTempFiles: true,
	})
);

// Continue with other middlewares
cloudinaryConnect();
database.connect();
app.use(express.json());

// Add your routes after the middleware definitions
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

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
});
