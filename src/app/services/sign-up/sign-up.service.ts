import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserSignup } from '../../models/signup-signin/user-signup.model';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private httpClient: HttpClient) {}

  signUp(signup: UserSignup) {
    // console.log(signup);
    return this.httpClient.post('https://backend-carpool.onrender.com/user/signup', signup);
  }
}
