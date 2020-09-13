import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'https://pratilipi-backend.herokuapp.com';

const AUTH_API = `${BASE_URL}/api/auth/`;

let httpHeaders = new HttpHeaders();
httpHeaders = httpHeaders.append('Authorization', 'my-auth-token');
httpHeaders.set('Content-Type', 'application/json');    

const httpOptions = {
  headers: httpHeaders
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
}
