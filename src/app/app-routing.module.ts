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


const appRoutes: Routes = [
    {path:'', component:HomeComponent},
    {path:"home", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"user", component:UserComponent, children:[
    {path:":id/profile", component:ProfileComponent},
    {path: ":id/overview", component:OverviewComponent},
    {path:":id/images", component:ImagesComponent},
    {path:":id/videos", component:VideosComponent},
    {path:":id/documents", component:DocumentsComponent},
    {path:":id/others", component:OthersComponent}
  ]},
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
