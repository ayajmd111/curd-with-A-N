import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';


@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {
  ayaj={
    userName:"",
    password:""
  }

  constructor(private cmnsvc:CommonService) { }
  
  tokenuser()
  {
    var url="/api/login";
    this.cmnsvc.postData2(url, this.ayaj)
    .subscribe(data => {
      
              console.log(data);
            })
    console.log(this.ayaj);
  }

  ngOnInit() {
  }

}
