import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingCredentialsComponent } from './components/signin/landing-credentials.component';
import { LandingComponent } from './components/landing/landing.component'
import { AuthGuardService } from './providers/auth-guard.service';
import { TopVotedComponent } from './components/top-voted/top-voted.component';
import { MovieDetailComponent } from './components/movie/movie-detail.component';
import { ProfileComponent } from './components/profile/profile.component';

import { PROFILE_ROUTES } from './components/profile/profile.routes';
import { ADMIN_ROUTES } from './components/admin/admin.routes';
import { SIGNIN_ROUTES } from './components/signin/signin.routes';

const routes: Routes = [
  { path: 'landing', children: SIGNIN_ROUTES, component: LandingCredentialsComponent },
  { path: 'home', component: LandingComponent },
  { path: 'topVoted', component: TopVotedComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'profile/:uid', canActivate: [AuthGuardService], component: ProfileComponent, children: PROFILE_ROUTES },
  { path: 'admin', canActivate: [AuthGuardService], children: ADMIN_ROUTES},
  { path: '**', pathMatch: 'full', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
