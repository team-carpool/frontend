import { Component, OnInit } from '@angular/core';
import { UserSignup } from 'src/app/models/user-signup.model';
import { SignUpService } from '../../services/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signup: UserSignup = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  constructor(private signupService: SignUpService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.signupService.signUp(this.signup).subscribe((data) => {
      console.log(data);
    });
  }
}
