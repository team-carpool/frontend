import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserSignup } from '../models/user-signup.model';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private httpClient: HttpClient) {}

  signUp(signup: UserSignup) {
    return this.httpClient.post('127.0.0.1:8080/users/signup', signup);
  }
}
