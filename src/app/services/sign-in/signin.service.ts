import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserSignin } from 'src/app/models/signup-signin/user-signin.model';
import { AuthToken } from 'src/app/models/signup-signin/auth-token.model';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  constructor(private httpClient: HttpClient) {}

  signIn(signin: UserSignin) {
    return this.httpClient.get('https://backend-carpool.onrender.com/user/login?emailId='+
      signin.email+'&password='+signin.password, {responseType: 'text'});
  }

  saveToken(res: string) {
    let resArray = res.split(";");
    let token: AuthToken = {
      isLoggedIn : true,
      email : resArray[0],
      userId : resArray[1]
    }
    sessionStorage.setItem("AUTH_TOKEN", JSON.stringify(token));
  }

  authenticate() {
    let token: AuthToken = JSON.parse(sessionStorage.getItem("AUTH_TOKEN") || "{}");
    return token;
  }

}
