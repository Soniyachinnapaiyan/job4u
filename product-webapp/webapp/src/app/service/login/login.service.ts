import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/service/login/user';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }
  


  loginApi(loginData: User) {
    return this.httpClient.post<any>(
      "http://localhost:8080/user-authentication-service/login",loginData
    );
  }
}