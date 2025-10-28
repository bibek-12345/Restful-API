const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

//using middleware for parsing the data send through form submition
app.use(express.urlencoded({extended:true}));


//views engine
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));

//for static file (public) path
app.use(express.static(path.join(__dirname, "/public")));

// create array to store data
let posts = [
    {
        id : "1a",
        username : "lambtonollege",
        content : "I love coding"
    },
    {
        id : "2b",
        username : "Bibek",
        content : "Hard work is important to achieve success"
    },
    {
        id : "3c",
        username : "Rahul",
        content : "I got my first internship"
    },
];

//get data(all post path) main page path
app.get("/posts",(req,res)=>{
   res.render("index.ejs",{posts});
});

//creating new form (new form path)
app.get("/posts/new", (req,res)=> {
   res.render("new.ejs");
});

//post/display the filledup form after submition (path of page which appears after form submition)
app.post("/posts", (req,res)=>{
   let {username, content} = req.body; //giving variable name to a data getting in req.body(form data)
   posts.push({username, content}); //adding/pushing the username and content to an array named as posts
   res.redirect("/posts"); //by default it send get request
});

//route to view the individual post with the help of specific id 
app.get("/posts/:id",(req,res) => {
   let {id} = req.params;
   let post = posts.find((p) => id === p.id); //check id match
   res.render("show.ejs", {post}); //here is post which we got based on id
})

//listen to a server"
app.listen(port, ()=>{
   console.log(`server is running at port ${port}`); 
});


