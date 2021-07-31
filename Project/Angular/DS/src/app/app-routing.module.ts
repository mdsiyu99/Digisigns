import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { VotingComponent } from './voting/voting.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },

  {
    path:'aboutus',
    component:AboutusComponent
  },

  {
    path:'upload',
    component:UploadComponent
  },

  {
    path:'voting',
    component:VotingComponent
  },

  {
    path:'gallery',
    component:GalleryComponent
  },

  {
    path:'admin',
    component:AdminComponent
  },

  {
    path:'contactus',
    component:ContactusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
