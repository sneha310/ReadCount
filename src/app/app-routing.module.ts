import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { Story1Component } from './story1/story1.component';
import { Story2Component } from './story2/story2.component';
import { Story3Component } from './story3/story3.component';
import { Story4Component } from './story4/story4.component';
import { Story5Component } from './story5/story5.component';
import { Story6Component } from './story6/story6.component';
import { AuthGuardService } from './_services/auth_guard';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent,canActivate:[AuthGuardService] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'story1', component: Story1Component ,canActivate:[AuthGuardService]},
  { path: 'story2', component: Story2Component,canActivate:[AuthGuardService] },
  { path: 'story3', component: Story3Component ,canActivate:[AuthGuardService]},
  { path: 'story4', component: Story4Component ,canActivate:[AuthGuardService]},
  { path: 'story5', component: Story5Component,canActivate:[AuthGuardService] },
  { path: 'story6', component: Story6Component,canActivate:[AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
