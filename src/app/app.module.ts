import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

import { BoardUserComponent } from './board-user/board-user.component';

import { ProfileComponent } from './profile/profile.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { Story1Component } from './story1/story1.component';
import { Story2Component } from './story2/story2.component';
import { Story3Component } from './story3/story3.component';
import { Story4Component } from './story4/story4.component';
import { Story5Component } from './story5/story5.component';
import { Story6Component } from './story6/story6.component';
import { AuthGuardService } from './_services/auth_guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
 
    BoardUserComponent,
   
    ProfileComponent,
   
    Story1Component,
   
    Story2Component,
   
    Story3Component,
   
    Story4Component,
   
    Story5Component,
   
    Story6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders,
  AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
