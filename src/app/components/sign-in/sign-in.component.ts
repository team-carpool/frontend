import { Component, OnInit } from '@angular/core';
import { UserSignin } from 'src/app/models/signup-signin/user-signin.model';
import { SigninService } from 'src/app/services/sign-in/signin.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  signin: UserSignin = {
    email: '',
    password: '',
  };

  constructor(
    private signinService: SigninService,
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.signinService.signIn(this.signin).subscribe((data) => {
      console.log(data);
    });
  }
}
