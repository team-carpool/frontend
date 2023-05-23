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
  email_regex = "r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b'"

  errorMessage: string = '';

  constructor(
    private signupService: SignUpService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.closeAll();
    this.dialog.open(SignInComponent);
  }

  validateEmail(email: string): boolean {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
    return emailRegex.test(email);
  }


  onSubmit() {
    if (this.signup.emailId === '') {
      alert('Please enter your email address');
    } else if (this.signup.password === '') {
      alert('Please enter your password');
    } else if (!this.validateEmail(this.signup.emailId)) {
      alert('Please enter a valid email address');
    } else {
      this.signupService.signUp(this.signup).subscribe((data) => {
        console.log(data);
        if(data === "USER_CREATED_SUCCESSFULLY") {
          this.openDialog();
        } else {
          console.log(data);
          this.errorMessage = data.toString();
        }
      }
      );
    }
  }
}
