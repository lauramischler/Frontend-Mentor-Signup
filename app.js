const express = require("express");
const bodyParser = require("body-parser");
const request = require('request');


const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
})
app.post("/index.html",function(req, res){
  const firstN = req.body.firstN;
  const lastN = req.body.lastN;
  const email = req.body.email;
  const password = req.body.password;
  res.write("<h1>You have entered the following details:</h1>")
  res.write("<h3>" + firstN)
  res.write("<h3>" + lastN)
  res.write("<h3>" + email)
  res.send()
})




app.listen(3000,function(req, res){
  console.log("server is running");
})
