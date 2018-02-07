
var config2= require('./config'),
mongoose = require('mongoose');


module.exports =function()
{

    mongoose.connect(config2.dbConnection).then(() => {
     console.log("Database connected");
     
    }).catch((error) => {
        console.log("Error in connecting to Database");
    });
   
   

   }