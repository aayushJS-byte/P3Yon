const express = require("express");
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express()
// mongoose.connect("mongodb+srv://aayush:aayushgupta123456789@cluster0.yylvo.mongodb.net/testDB", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
// });
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())
app.set('view engine', 'ejs');
app.use(express.static("public"));



var userFeed =[
    {
    name: "",
    last_name: "",
    phone: "",
    feedback: ""
}
]
// Feedzzz = new mongoose.model('Feedzzz', feedSchema);


app.get("/", (req, res) => {
    res.render("index")
})
app.get("/classes", (req, res) => {
    res.render("guide")
})
app.get("/about", (req, res) => {
    res.render("about")
})
app.get("/feedback", (req, res) => {
    res.render("feed")

})

app.post("/feedback", (req, res) => {
    var name = req.body.naame;
    var lname = req.body.lname;
    var phone = req.body.em;
    var feed = req.body.cntn;
     console.log("["+name+"] "+ "["+lname + "] "+ "["+phone +"]"+" [said: "+feed+"]");
    // var userFeed = new Feedzzz({
    //     name: req.body.naame,
    //     last_name: req.body.lname,
    //     email: req.body.em,
    //     feedback: req.body.cntn
    // })
    var Feed = {
        name: req.body.naame,
        last_name: req.body.lname,
        phone: req.body.em,
        feedback: req.body.cntn
    }
    userFeed.push(Feed)
    // userFeed.save(function(err) {
        // if (err) {
            // console.error(err);
        // } else {
            res.redirect("/")
        // }
    })
app.get("/feed", (req,res)=>{
    res.render("submit")
})
app.post("/view", (req, res)=>{
    var password = req.body.password;
    if(password == "aayushgupta123456789"){
        res.send(userFeed)
    }
    else{
        res.redirect("/")
    }
})

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3001;
}
app.listen(port, () => {
    console.log("Server is running on port: " + port);
})
