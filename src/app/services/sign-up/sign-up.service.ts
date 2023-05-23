import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserSignup } from '../../models/signup-signin/user-signup.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private httpClient: HttpClient) {}

  signUp(signup: UserSignup) {
    // console.log(signup);
    let api = environment.API
    return this.httpClient.post(api+'/user/signup', signup);
  }
}
