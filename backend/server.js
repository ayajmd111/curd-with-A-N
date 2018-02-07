var config=require('./config/config');
var express=require('./config/express');
var db= require('./config/mongoose')();
server=express();
server.listen(config.port)
console.log("Your Port Number:"+config.port)

