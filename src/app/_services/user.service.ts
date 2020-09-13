import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  // total(s,u) {
  //   console.log("intotal");
   
  //   return this.http.post(API_URL+ 'total',formdata, httpOptions);
  // }
  total(credentials): Observable<any> {
    return this.http.post(API_URL+ 'total', {
      username: credentials.username,
      storyname: credentials.storyname
    }, httpOptions);
  }
  curr(credentials): Observable<any> {
    return this.http.post(API_URL+ 'curr', {
      username: credentials.username,
      storyname: credentials.storyname
    }, httpOptions);
  }
  counting(credentials): Observable<any> {
    return this.http.post(API_URL+ 'counting', {
      storyname: credentials.storyname
    }, httpOptions);
  }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

 

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }


}
