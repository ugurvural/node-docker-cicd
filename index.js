var express = require('express');
 
var app = express();
 
app.get('/',function(req,res){
  res.send('<h1>Hello CI</h1>'); 
});
 
app.listen(5000,function(){
  console.log("Server started! port:5000");
});