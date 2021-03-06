import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ROUTER_CONFIGURATION, ɵROUTER_PROVIDERS } from '@angular/router';
import { AppRoutingModule } from '../../app/app-routing.module';
import { GalleryComponent } from '../gallery/gallery.component';
import { CurdComponent } from '../curd/curd.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  // providers: [ɵROUTER_PROVIDERS]
})
export class AdminComponent implements OnInit {
  // adminForm!: FormGroup;
  constructor(private router: Router){ }

  adminForm = {username: '', password: ''};
  // adminForm = new FormGroup();
  redirect()
  {
    //  alert("Welcome !!");
    // this.router.navigateByUrl('/upload');
    // this.router.navigate('');    
    this.router.navigate(['/curd']);
  }

  ngOnInit(): void { }
}
function forbiddenNameValidator(arg0: RegExp): import("@angular/forms").ValidatorFn {
  throw new Error('Function not implemented.');
}