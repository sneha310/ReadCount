import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginComponent } from '../login/login.component';
import { TokenStorageService } from './token-storage.service';
@Injectable()
export class AuthGuardService implements CanActivate {
    my=false;
  constructor( public router: Router,public tokenStorage:TokenStorageService) {
    if (this.tokenStorage.getToken()) {
        this.my = true;
        
      }
  }
  
  canActivate(): boolean {
    if (!this.my ){
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}