require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;
const projects = require("./projects.json")
const about = require("./about.json")

//MIDDLEWARE
app.use(express.json());
app.use(cors());

//ROUTES
app.get('/', (req, res) => {
    res.send("Hello world");
})

app.get('/projects', (req, res) => {
    try {
        res.json(projects);
    } catch (error) {
        res.status(400).json(error);
    }
})

app.get("/about", (req, res) => {
    try {
        res.json(about);
    } catch (error) {
        res.status(400).json(error);
    }
})

app.listen(PORT, () => {
    console.log("We are listening on PORT: ", PORT);
})