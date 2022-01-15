import { Component, OnInit } from '@angular/core';
import { Client, UserDto } from '../apibase';

@Component({
  selector: 'chat-main-page',
  templateUrl: './Chat-main-page.component.html',
  styleUrls: ['./Chat-main-page.component.css']
})
export class ChatMainPage implements  OnInit{
  
    FriendsList = [{"name":"Rohit","image":"","Lasttext":"hello","LastTextTime":"22:07"},{"name":"Rohit","image":"","Lasttext":"hello","LastTextTime":"22:07"}];
    CopyFriendList =  [{"name":"Rohit","image":"","Lasttext":"hello","LastTextTime":"22:07"},{"name":"Rohit","image":"","Lasttext":"hello","LastTextTime":"22:07"}];
    constructor(private apiBase:Client){
      
    }
    ngOnInit(): void {
      let v = new UserDto();
      v.username = "U1";
      v.password = "123qwe";
     this.apiBase.login(v).subscribe(res=>{
       
     });   
    }
    searchText="";
    searchContact(event:any){
     debugger
    //  let temp = [...this.CopyFriendList];
      if(this.searchText.length>0){
        this.FriendsList =[];
        this.CopyFriendList.forEach(x=>{
          let match =x.name.toLowerCase().search(this.searchText.toLowerCase())
          if(match != -1){
            this.FriendsList.push(x);
          }
        });
          
      }
      else{
        this.FriendsList = [...this.CopyFriendList];
      }
      
    }
}