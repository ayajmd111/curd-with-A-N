import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ayaj={}

  constructor(private common:CommonService) { }
  employee()
  {
    var url = "/api/register";
    this.common.postData(url, this.ayaj)
      .subscribe(data => {
      console.log(data);
      })


    
  }

  ngOnInit() {
  }

}
