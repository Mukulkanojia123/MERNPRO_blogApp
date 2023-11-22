const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();
const portNo = 8000;

mongoose
	.connect("mongodb://127.0.0.1/blogapp")
	.then(() => {
		console.log("CONNECTION ESTABLISHED SUCCESSFULLY");
	})
	.catch((err) => {
		console.log("ERROR WHILE CONNECTION DATABASE", err);
	});

app.use(express.static("./public"));
app.use(express.json());
app.use(cors());

const authMiddleWare = require("./middleWare/authMiddleWare");

// taking routes from routes folder
const approute = require("./routes/auth");
const blogroutes = require("./routes/blog");

app.use("/api/v1/auth/", approute);
app.use("/api/v1/blog/", blogroutes);
// app.use('/api/v1/blog/',authMiddleWare,blogroutes)

app.listen(portNo, () => console.log(`port is listening on ${portNo}`));
