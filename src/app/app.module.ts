import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { EditprofileComponent } from './user/profile/editprofile/editprofile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DropdownDirective } from './user/dropdown.directive';
import { UploadComponent } from './user/upload/upload.component';
import { FileService } from './utilities/fileService';
import { HttpModule } from '@angular/http';
import { StorageService } from './user/storageService';
import { AuthService } from './authentication/authService';
import { AuthGuard } from './authentication/auth-guard.service';



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
    OthersComponent,
    EditprofileComponent,
    NotFoundComponent,
    DropdownDirective,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [FileService, StorageService,AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
