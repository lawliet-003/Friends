import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat-main-page',
  templateUrl: './Chat-main-page.component.html',
  styleUrls: ['./Chat-main-page.component.css']
})
export class ChatMainPage implements  OnInit{
  
    FriendsList = [{"name":"Rohit","image":"","Lasttext":"hello","LastTextTime":"22:07"},{"name":"Rohit","image":"","Lasttext":"hello","LastTextTime":"22:07"}];
    CopyFriendList =  [{"name":"Rohit","image":"","Lasttext":"hello","LastTextTime":"22:07"},{"name":"Rohit","image":"","Lasttext":"hello","LastTextTime":"22:07"}];
    ngOnInit(): void {
        
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