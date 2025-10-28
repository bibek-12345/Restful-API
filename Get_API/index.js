const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

// path for views(ejs)
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views"));

//for static file (public) path
app.use(express.static(path.join(__dirname, "/public")));

//create array to store data
let posts = [
    {
        username : "lambtonollege",
        content : "I love coding"
    },
    {
        username : "Bibek",
        content : "Hard work is important to achieve success"
    },
    {
        username : "Rahul",
        content : "I got my first internship"
    },
];

app.get("/posts", (req,res)=>{
    res.render("index.ejs",{posts});
});


app.listen(port, ()=>{
    console.log("server is listening to port 8080");
});