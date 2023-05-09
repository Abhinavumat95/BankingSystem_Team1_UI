import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuperAdmin } from '../super-admin';
import { SuperAdminService } from '../super-admin.service';

@Component({
  selector: 'app-super-admin-register',
  templateUrl: './super-admin-register.component.html',
  styleUrls: ['./super-admin-register.component.css']
})
export class SuperAdminRegisterComponent implements OnInit {

  SuperAdmin: any;
  submitted = false;
  match = true;
  pass: any;
  confPass: any;
  adminCreated: any;
  registerError: any;
  Error: any;

  superAdmin: SuperAdmin = new SuperAdmin();

  adminForm = new FormGroup({

    username: new FormControl('',
      [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)]),
    fullname: new FormControl('', [Validators.required]),
    password: new FormControl('',
      [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(40)]),
    confirmPassword: new FormControl('',
      [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(40)]),
  },


  );

  get f() {
    return this.adminForm.controls;
  }

  admin() {

    this.Error = false;
    this.adminCreated = false;
    this.match = true;

    this.superAdmin.username = this.f['username'].value;
    this.superAdmin.fullname = this.f['fullname'].value;
    this.superAdmin.password = this.f['password'].value;
    this.superAdmin.confirmPassword = this.f['confirmPassword'].value;
    this.superAdmin.id = Math.floor(Math.random());
    this.superAdmin.enabled = true;

    this.pass = this.superAdmin.password
    this.confPass = this.superAdmin.confirmPassword
    console.log("Password = ", this.pass)
    console.log("Confirm Password = ", this.confPass)

    if(this.pass == this.confPass) {
      console.log(this.superAdmin.id)
      this.submitted = true;
      this.adminRegister();
    }else{
      this.match = false;
      this.submitted = true;
    }

  }

  constructor(private superAdminService: SuperAdminService, private router: Router) { }

  ngOnInit(): void {

  }

  adminRegister() {
    this.superAdminService.adminSignUp(this.superAdmin)
      .subscribe(
        data => {
          console.log(data);
          //this.adminCreated = true;
          sessionStorage.setItem("adminCreate", "true");
          this.adminCreated = sessionStorage.getItem("adminCreate");
        }, 
        error => {
          console.log(error);
          this.registerError = error.error;
          this.Error = true;
        
        });
        if(this.adminCreated == "true"){
          this.adminCreated = true;
        }else{
          this.adminCreated = false;
        }
    //this.adminCreated = true;
    console.log("Admin Register implemented succesfully")
  }

}
