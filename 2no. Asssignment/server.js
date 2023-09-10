const express = require("express");
const app = express();
const port = 8080;


app.use(express.json());


const apiRoutes = require("./routes/api");


const apiVersion = "/api/v1";

// Use the API routes
app.use(apiVersion, apiRoutes);

// Define the greeting route
app.get(`${apiVersion}/greet`, (req, res) => {
  res.send("Good Morning Dear User from NodeJS Server!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});