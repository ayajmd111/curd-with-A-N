import { Injectable } from '@angular/core';
import {Observable}  from 'rxjs/Observable';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { ErrorHandler } from '@angular/core';


import 'rxjs/add/operator/map';
import {Http,Headers, RequestOptions, URLSearchParams}  from '@angular/http';

@Injectable()
export class CommonService {
  headers: Headers;
  options: RequestOptions;

  constructor(private http:Http) { 
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'q=0.8;application/json;q=0.9'
    });
    this.options = new RequestOptions({ headers: this.headers });

  }
  displayName = '';
  
    getAuthorizationHeader(): any {
      const headers = new Headers();
      // tslint:disable-next-line:prefer-const
      let userDetails = JSON.parse(localStorage.getItem('userDetails'));
      headers.append('Authorization', userDetails.token);
      headers.append('userName', userDetails.userName);
       return headers;
  }
    setToken(token, userName,Email,PhoneNumber) {
      localStorage.setItem('authToken', token);
      localStorage.setItem('userName', userName);
   }

   
      postData2(url, data):Observable<any>{
    return this.http.post(url, data)
      .map(res => res.json());
  }




  postData(url, data):Observable<any>{
    return this.http.post(url, data)
      .map(res => res.json());
  }


  postMethod(url,data):Observable<any>{
    return this.http.post(url, data)
    .map((res) => {
        let data = res.json();
      return data;
    });

}
//search 

// viewUser(url,data): Observable<any> {
//   return this.http.post(url,data)
//     .map(res => res.json())
// };

// searchUser(data): Observable<any> {
//   return this.http.post("/api/search", data)
//     .map(res => res.json());
// }


}
