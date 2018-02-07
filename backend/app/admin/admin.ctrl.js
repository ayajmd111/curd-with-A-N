var config = require("../../config/config");
var admin = require("./adminSchema.model")
var jwt = require('jsonwebtoken');
//var admin = {};

var adminSchema = require('mongoose').model('profile1');

admin.register = (req, res) => {
    console.log(req.body)

    var AdminObj = new adminSchema(req.body)
    AdminObj.save(function (err, results) {
        if (!err) {
            console.log(results)
            res.json(results)

        }
        else {
            console.log(results)
        }
     })
}

admin.userList = (req, res) => {
 adminSchema.find({}, function (err, doc) {
        if (!err) {
            res.json(doc)
        }
        else {
            res.json(err)

        }

    })
}

admin.removeUser =(req,res) => {
    console.log(req.body.userId)

    adminSchema.remove({_id:req.body.userId}, function(err,doc){
        if(!err){
            res.json(doc)
        }
      else{
            res.json(err)
        }
    })
}
admin.updateUserData=(req,res)=>
{
var params=req.body;

    adminSchema.update({_id:params.userId},{$set:params.userDate} ,function (err, doc) {
        
                if (!err) {
                    res.json(doc)
                }
                else {
                    res.json(err)
        
                }
        
            })


}

// admin.searchIdData=function(req, res){
//     var params=req.body;
//     var promise=adminSchema.find({"_id":params._id}).exec();
//     promise.then(function(data){
//     res.send(data);
//     console.log(data);
//     }).catch(function(error){
//     res.status(500).json({error:error});
//     });
//     }


// admin.search = function(req,res){
//     var params = req.body;
//     var promise = adminSchema.find({'FirstName':new RegExp('^'+params.FirstName)}).exec();
//     promise.then(function(data){
//         res.json(data);
//         console.log(data);
//     })
//     .catch(function(error){
//         console.log(error);
//         res.status(420).json({error});
//     })
// }





    // token-code
admin.doLogin = (req, res) => {
    var params = req.body;

    if (params.userName == "ayaj") {
        if (params.password == "ayaj") {
            var createToken = webToken(params)

            var output = {
                msg: "sucess",
                tokenget: createToken,
                status: 400
            }
            res.json(output)
        }
        else {
            var output = {
                msg: "password wrong",
                status: 400
            }
            res.json(output)

        }

    }
    else {

        var output = {
            msg: "user not exist",
            status: 400
        }
        res.json(output)
    }

}

function webToken(data) {
    var token = jwt.sign(data, config.key);
    return token;
}

module.exports = admin;