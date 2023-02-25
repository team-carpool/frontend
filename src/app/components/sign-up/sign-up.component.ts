import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserSignup } from 'src/app/models/signup-signin/user-signup.model';
import { SignUpService } from '../../services/sign-up/sign-up.service';
import { SignInComponent } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signup: UserSignup = {
    firstName: '',
    lastName: '',
    emailId: '',
    password: '',
  };

  constructor(
    private signupService: SignUpService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.closeAll();
    this.dialog.open(SignInComponent);
  }

  onSubmit() {
    this.signupService.signUp(this.signup).subscribe((data) => {
      console.log(data);
    });
  }
}
