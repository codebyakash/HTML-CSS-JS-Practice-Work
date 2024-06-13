const express = require("express");
const app = express();
const port = 80;
app.get("/", (req, res) => {
    res.send("This my first express app");
});
app.get("/about", (req, res) => {
    res.send("This my first express app about");
});
app.post("/about", (req, res) => {
    res.send("This my first post express app about");
});
app.get("/this", (req, res) => {
    res.status(404).send("This is not found");
});
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});