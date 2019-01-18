import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from '../common/toastr.service';
import { AuthService } from './auth.service';
import { Router} from '@angular/router';
@Component({
  templateUrl: './profile.component.html',
   styles: [`
      em { float:right; color:#E05C65; padding-left:10px;}
      .has-error input {background-color: #BC8F8F;}
      .has-error ::-webkit-input-placeholder { color: #999; }
      .has-error ::-moz-placeholder { color: #999; }
      .has-error :-moz-placeholder { color: #999; }
      .has-error :ms-input-placeholder { color: #999; }
     `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  constructor(private router: Router,  private toastr: ToastrService, private authService: AuthService, private fb: FormBuilder) { }
  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup ({
      firstName: this.firstName,
      lastName: this.lastName
    });
   /* this.profileForm = this.fb.group({
      firstName: ['', Validators.required, Validators.minLength(3)],
      lastName: ''
    });*/
  }
  saveProfile(formValues) {
    if (this.profileForm.valid) {
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
    this.toastr.success('Profile updated successfully!');
    //this.router.navigate(['events']);
    }
  }
  validateFirstName() {
    // return this.profileForm.get('firstName').valid || this.profileForm.get('firstName').untouched;
    return this.firstName.valid || this.firstName.untouched;
  }
  validateLastName() {
    // return this.profileForm.get('lastName').valid || this.profileForm.get('lastName').untouched;
    return this.lastName.valid || this.lastName.untouched;
  }
  cancel() {
    this.router.navigate(['events']);
  }
  test() {
    this.profileForm.setValue({
      firstName: 'Albena',
      lastName: 'Rammou'
    });
  }
}
