const express = require("express");

// Define express app
const app = express();
const port = 4000;

// Define what the express app will use
app.use(express.urlencoded({extended: true}));
app.use(express.json())

// GET request to welcome to server
app.get("/api", (req, res) => {
    res.json({
        message: "Hellow World! 👋",
    });
})

// Function to bind and listen to the connetion on specific host and port
app.listen(port, () => {
    console.log(`Server listenting on ${port}`);
})