import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router,NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  public storyname:string;
  content = '';
  form: any = {};
 
   constructor(private router: Router,private userService: UserService,private tokenStorage:TokenStorageService){

    this.tokenStorage.setinStory("false");
    // router.events.pipe(filter(event => event instanceof NavigationEnd))
    //       .subscribe(event => 
    //        {
    //           this.storyname = event.url;          
    //           console.log(event);
    //        });
     }

    //  func(){
    //   console.log("sn",this.router.url);
    //   this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    // .subscribe(event => this.storyname = event.url);
  
    // console.log(this.storyname);
    //  }

  ngOnInit() {
    //console.log(this.storyname);
  }

  
}
