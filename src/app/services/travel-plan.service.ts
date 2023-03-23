import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthToken } from '../models/signup-signin/auth-token.model';
import { SigninService } from './sign-in/signin.service';

@Injectable({
  providedIn: 'root'
})
export class TravelPlanService {

  constructor(private httpClient: HttpClient, private signinService: SigninService) { }
  
  currentloc: String = "";
  token: AuthToken = this.signinService.authenticate();

  public updateCurrentUserLoc(coord: String){
    console.log(coord);
    this.currentloc = coord;
    this.token = this.signinService.authenticate();
    if(this.token.isLoggedIn==true) {
      let data = {'coord':coord, 'userId': this.token.userId};
      return this.httpClient.post('https://backend-carpool.onrender.com/user/currentloc', data, {responseType:'text'}).subscribe(
        (res)=>{console.log(res)}
      );
    }
    return null;
  }

  public sendUserTravelPlan(travelData: any) {
    this.token = this.signinService.authenticate();
    if(this.token.isLoggedIn==undefined || this.token.isLoggedIn==false) return;

    travelData.emailId = this.token.email;
    travelData.vehicleNum = "BR1-1111";
    travelData.travelDuration = 10;
    if(travelData.source=="") {
      travelData.source = this.currentloc;
    }

    return this.httpClient.post('https://backend-carpool.onrender.com/travel/plan', travelData);
    
  }

  public getDriver() {
    this.token = this.signinService.authenticate();
    if(this.token.isLoggedIn==undefined || this.token.isLoggedIn==false) return;
    let emailId = this.token.email;
    this.httpClient.get('https://backend-carpool.onrender.com/travel/driver?user_email_id='+emailId)
    .subscribe((res)=>{
      console.log(res);
    });
  }

  public getPassenger() {
    this.token = this.signinService.authenticate();
    if(this.token.isLoggedIn==undefined || this.token.isLoggedIn==false) return;
    let emailId = this.token.email;
    this.httpClient.get('https://backend-carpool.onrender.com/travel/passenger?user_email_id='+emailId)
    .subscribe((res)=>{
      console.log(res);
    });
  }

}
