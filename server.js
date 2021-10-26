var express = require('express');
var app = express();
var router = express.Router();
var path = __dirname + '/public/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

app.use("/",router);
app.use(express.static('public'));

// app.use("*",function(req,res){
//   res.sendFile(path + "404.html");
// });

app.listen(8080,function(){
  console.log("Live at Port 8080");
});