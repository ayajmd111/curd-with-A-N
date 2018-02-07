import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList:any;
  model2:any;
  searchInfo={
    FirstName:''
  };
  ayaj:{
    FirstName:"",
    LastName:"",
    Email:"",
    MobileNumber:"",
  }
  userIdUpdated;
  
  constructor(private svc:CommonService) {
    //this.userList=[]
   }

  ngOnInit() {
    this.getUserData();
    }
    getUserData()
    {
      this.svc.postMethod("/api/userlist",null)
      .subscribe((results)=>{
        this.userList = results;
        console.log(results)
  
      })
  
    }
  
  
    removeUser(userid)
    {
      console.log(userid)
  
      var payload={
        userId:userid
      }
      this.svc.postMethod('/api/removeuser',payload)
      .subscribe((results)=>{
        this.getUserData();
          console.log(results)
    });
  
  }

  Edit(UserList)
  {
    console.log(UserList._id)
  this.userIdUpdated = UserList._id;
    this.ayaj={
      FirstName:UserList.FirstName,
      LastName:UserList.LastName,
      Email:UserList.Email,
      MobileNumber:UserList.MobileNumber
    }
  
  
  
  }
  
  updated()
  {
    var payload={
      userId:this.userIdUpdated,
      userDate:this.ayaj
    }
   
    this.svc.postMethod(' /api/update',payload)
    .subscribe((results)=>{
    this.getUserData();
        console.log(results)
  });
  
  }

  //search functionality
//   viewData:any={

//   }

//   // View Data Based On Id  method
//   viewUsersDetail(p):void{
//     var url="/api/searchId";
//  let mydata ={ _id:p._id};   
//    this.svc.viewUser(url, mydata) 
//       .subscribe((data) => {       
//            this.viewData=data[0];                
//    });
//  }

//   mydata:any
//   // Search Data  method
//     searchInfo:any={
     
//     }
//      onChange(searchInfo) { 
//        this.svc.searchUser(searchInfo)
//        .subscribe(res=>{
//          this.mydata=res.json()
//          console.log(this.mydata)
//         })
//     }
  



}
