import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SharedModule } from './components/shared/shared.module'
import { TopVotedModule } from './components/top-voted/top-voted-module';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { SigninComponent } from './components/signin/signin.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFirestoreModule,
    SharedModule,
    TopVotedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
