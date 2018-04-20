import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserComponent } from './user/user/user.component';
import { OverviewComponent } from './user/overview/overview.component';
import { ImagesComponent } from './user/images/images.component';
import { VideosComponent } from './user/videos/videos.component';
import { DocumentsComponent } from './user/documents/documents.component';
import { OthersComponent } from './user/others/others.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditprofileComponent } from './user/profile/editprofile/editprofile.component';
import { UploadComponent } from './user/upload/upload.component';
import { AuthGuard } from './authentication/auth-guard.service';


const appRoutes: Routes = [
    {path:'', component:HomeComponent},
    {path:"home", component:HomeComponent},
    {path:"login", component:LoginComponent},
    {path:"signup", component:SignupComponent},
    {path:"user", component:UserComponent, children:[
      {path:":id/profile", component:ProfileComponent, canActivate:[AuthGuard]},
      {path: ":id/overview", component:OverviewComponent, canActivate:[AuthGuard]},
      {path:":id/images", component:ImagesComponent, canActivate:[AuthGuard]},
      {path:":id/videos", component:VideosComponent, canActivate:[AuthGuard]},
      {path:":id/documents", component:DocumentsComponent, canActivate:[AuthGuard]},
      {path:":id/others", component:OthersComponent, canActivate:[AuthGuard]},
      {path:":id/edit", component:EditprofileComponent, canActivate:[AuthGuard]},
      {path:":id/upload", component:UploadComponent, canActivate:[AuthGuard]}
  ]},
    {path:"not-found", component:NotFoundComponent},
    {path:"**", redirectTo:"not-found"}
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
