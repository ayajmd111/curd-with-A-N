var jwt = require('jsonwebtoken');
var config =require('./config')

module.exports = function (req, res, next) {
    if (req.url == '/api/register' || req.url == '/api/login') {
        next();
    }
    else
    {
        var token=req.body.tokenget;
     

        var decoded=jwt.verify(token,config.key)
      
            if(decoded)
            {
               next();
                

            }
            else{
                var output={
                    msg:"auth failed",
                    status:400
                }
                res.json(output)
            }


    }




}