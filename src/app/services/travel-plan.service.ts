import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthToken } from '../models/signup-signin/auth-token.model';
import { SigninService } from './sign-in/signin.service';

@Injectable({
  providedIn: 'root'
})
export class TravelPlanService {

  constructor(private httpClient: HttpClient, private signinService: SigninService) { }

  public updateCurrentUserLoc(coord: String){
    console.log(coord);
    let token: AuthToken = this.signinService.authenticate();
    if(token.isLoggedIn==true) {
      let data = {'coord':coord, 'userId': token.userId};
      return this.httpClient.post('https://backend-carpool.onrender.com/user/currentloc', data, {responseType:'text'}).subscribe(
        (res)=>{console.log(res)}
      );
    }
    return null;
  }
}
