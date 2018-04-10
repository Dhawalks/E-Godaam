import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './user/profile/profile.component';
import { UserComponent } from './user/user/user.component';
import { OverviewComponent } from './user/overview/overview.component';
import { ImagesComponent } from './user/images/images.component';
import { VideosComponent } from './user/videos/videos.component';
import { DocumentsComponent } from './user/documents/documents.component';
import { OthersComponent } from './user/others/others.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    ProfileComponent,
    UserComponent,
    OverviewComponent,
    ImagesComponent,
    VideosComponent,
    DocumentsComponent,
    OthersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
