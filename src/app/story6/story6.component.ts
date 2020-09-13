import { Component, OnInit ,DoCheck} from '@angular/core';
import { HostListener } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AppComponent } from '../app.component';
import { UserService } from '../_services/user.service';
import { LoginComponent } from '../login/login.component';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-story6',
  templateUrl: './story6.component.html',
  styleUrls: ['./story6.component.css'],
  providers:[LoginComponent]
})
export class Story6Component implements OnInit {
  ans=0;
  tans=0;
  public username:string;
  content = '';
  form: any = {};
  delform: any = {};
  cform: any = {};
  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    this.delform["username"]=this.username;
    this.delform["storyname"]=this.router.url.slice(1);
    
    this.up.curr(this.delform).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  constructor(private router: Router,private ap:AppComponent,private up:UserService,private tokenStorage: TokenStorageService) { 

    this.tokenStorage.setinStory("true");
    console.log("in srory wala checkv",this.tokenStorage.getinStory());
    
    this.username=this.ap.getUsername();
    console.log("in srory 1",this.username);
    
    //var formdata=new FormData();
    this.form["username"]=this.username;
    var sliced = this.router.url.slice(1); 
    this.form["storyname"]=sliced;
    
    this.up.total(this.form).subscribe(
      data => {
        this.ans=data['curr'];
        this.tans=data['total'];
        console.log(data);
      }
    );

  
  //  console.log("sn",this.router.url);
  //   this.router.events.pipe(filter(event => event instanceof NavigationEnd))
  // .subscribe(event => this.storyname = (event as NavigationEnd).url.toString());

  // console.log(this.storyname);
  }

  ngOnInit() {

    
  }

  ngDoCheck(){
    
    var sliced = this.router.url.slice(1); 
    this.cform["storyname"]=sliced;
    
    this.up.counting(this.cform).subscribe(
      data => {
        this.ans=data['curr'];
        this.tans=data['total'];
        //console.log(data);
      }
    );
  }



}
