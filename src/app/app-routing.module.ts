import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component'
import { AuthGuardService } from './providers/auth-guard.service';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: '', canActivate: [AuthGuardService], children: [
    { path: 'home', component: LandingComponent },
    { path: 'topVoted', component: LandingComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
