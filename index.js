// Import the express module to create a web server
import express from "express";

// Initialize the express application
const app = express();

// Define the port number the server will listen on
const port = 3002;

// Define a route for the GET request to the root URL ("/").
// This function will send "Hello, World!" as a response to any requests to the root URL.
app.get("/", (req, res) => {
  res.send("Hello, World!")
})

// Start the server and listen on the specified port. 
// Print a message to the console once the server is running and listening for requests.
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
