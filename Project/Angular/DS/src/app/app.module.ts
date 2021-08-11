import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UploadComponent } from './upload/upload.component';
import { VotingComponent } from './voting/voting.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AdminComponent } from './admin/admin.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UploadvideosComponent } from './uploadvideos/uploadvideos.component';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { SignupComponent } from './signup/signup.component';
>>>>>>> f9fba5adad91715ae7c8acb6a9e8aab66317391b

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    UploadComponent,
    VotingComponent,
    GalleryComponent,
    AdminComponent,
    ContactusComponent,
    UploadvideosComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
