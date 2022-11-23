import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserSignin } from 'src/app/models/signup-signin/user-signin.model';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  constructor(private httpClient: HttpClient) {}

  signIn(signin: UserSignin) {
    return this.httpClient.post('http://localhost:8080/users/signin', signin);
  }
}
