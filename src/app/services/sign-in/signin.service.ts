import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserSignin } from 'src/app/models/signup-signin/user-signin.model';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  constructor(private httpClient: HttpClient) {}

  signIn(signin: UserSignin) {
    return this.httpClient.get('https://backend-carpool.onrender.com/user/login?emailId='+
      signin.email+'&password='+signin.password, {responseType: 'text'});
  }
}
