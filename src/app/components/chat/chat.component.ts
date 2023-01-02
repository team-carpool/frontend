import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  // make a user list with a few messages

  users = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6'];

  constructor() {}

  ngOnInit(): void {}
}
