import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-screen',
  templateUrl: './about-screen.component.html',
  styleUrls: ['./about-screen.component.css']
})
export class AboutScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   senderEmail: string = '';

  sendEmail() {
    // Validate sender's email using regular expression
    // const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
    // if (!emailRegex.test(this.senderEmail)) {
    //   alert('Please enter a valid email address');
    //   return;
    // }

    // Send email
    const recipientEmail = 'team5.carpool@gmail.com';
    const subject = 'A message for team carpool';
    const body = this.senderEmail

    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    this.senderEmail = '';
  }

}
