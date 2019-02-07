import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component'
import { AuthGuardService } from './providers/auth-guard.service';
import { SigninComponent } from './components/signin/signin.component';
import { TopVotedComponent } from './components/top-voted/top-voted.component';
import { MovieDetailComponent } from './components/movie/movie-detail.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PROFILE_ROUTES } from './components/profile/profile.routes';
import { ADMIN_ROUTES } from './components/admin/admin.routes';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
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
