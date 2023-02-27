import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthToken } from './models/signup-signin/auth-token.model';
import { SigninService } from './services/sign-in/signin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private dialog: MatDialog, public signinService: SigninService) {}

  ngOnInit(): void {
  }

  title = 'carPool';

  logout() {
    sessionStorage.removeItem("AUTH_TOKEN");
  }

  openDialog() {
    this.dialog.open(SignUpComponent);
  }
}
