var admin = require('./admin/admin.ctrl');
module.exports = function (app) {

    app.post('/api/register', admin.register)
    app.post('/api/login', admin.doLogin)
    app.post('/api/userlist', admin.userList)
    app.post('/api/removeuser',admin.removeUser)
    app.post('/api/update',admin.updateUserData) 



   // app.post('/api/search',admin.search)
    //app.post('/api/searchId',admin.searchIdData)  
    
    
  
    

}