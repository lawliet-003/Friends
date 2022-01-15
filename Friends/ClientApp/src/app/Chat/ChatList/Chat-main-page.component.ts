import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat-main-page',
  templateUrl: './Chat-main-page.component.html',
  styleUrls: ['./Chat-main-page.component.css']
})
export class ChatMainPage implements  OnInit{
  
    FriendsList:any = ["Rohit","Mohit","KK","jj"];
    ngOnInit(): void {
        
    }
}