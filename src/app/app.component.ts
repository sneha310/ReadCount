import { Component, OnInit,DoCheck } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { LoginComponent } from './login/login.component';
import { UserService } from './_services/user.service';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LoginComponent]
})
export class AppComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username=null;
  usernames="";
  delform: any = {};
  flagged=false;
  inStory=false;
  zz="";
 

  constructor(private tokenStorageService: TokenStorageService,private ap:LoginComponent,private router: Router,private up:UserService) {
   
   }
   ngDoCheck(){
    
    this.zz = this.tokenStorageService.getinStory();
    if(this.zz==="true"){
      this.inStory=true;
    }
    else{
      this.inStory=false;
    }
   }
  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    
    
    if (this.isLoggedIn) {
      
      // const user = this.tokenStorageService.getUser();
       // this.roles = user.roles;
      console.log("i am logged in");
      this.username=this.tokenStorageService.ppUser();
      console.log("final",this.username);
      
    }
  }

  getUsername(){
    if(this.username!=null){
    
      return this.username;
    }
    
  }
storyb(){
  this.delform["username"]=this.tokenStorageService.ppUser();
  this.delform["storyname"]=this.router.url.slice(1);
  console.log("instoryb",this.tokenStorageService.ppUser(),this.router.url.slice(1)); 
  this.up.curr(this.delform).subscribe(
    data => {
      console.log(data);
  })
}

  logout() {
    // this.up.curr(this.delform).subscribe(res=>
    
    this.tokenStorageService.signOut();
    
    // window.location.reload();
    
}

  new(username){
    console.log(this.username);
    this.usernames=username;
  
    } 
}
