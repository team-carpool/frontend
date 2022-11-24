import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserSignin } from 'src/app/models/signup-signin/user-signin.model';
import { SigninService } from 'src/app/services/sign-in/signin.service';
import { SignUpComponent } from '../sign-up/sign-up.component';

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
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.closeAll();
    this.dialog.open(SignUpComponent);
  }

  onSubmit() {
    this.signinService.signIn(this.signin).subscribe((data) => {
      console.log(data);
    });
  }
}
