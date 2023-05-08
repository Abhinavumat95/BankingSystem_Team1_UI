import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuperAdmin } from '../super-admin';
import { SuperAdminService } from '../super-admin.service';

@Component({
  selector: 'app-super-admin-login',
  templateUrl: './super-admin-login.component.html',
  styleUrls: ['./super-admin-login.component.css']
})
export class SuperAdminLoginComponent implements OnInit{

  adminToken:any;
  SuperAdmin: any;
  submitted = false;

  superAdmin: SuperAdmin = new SuperAdmin();

  adminLoginForm = new FormGroup({

    username: new FormControl('',
      [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)]),
    password: new FormControl('',
      [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(40)]),
   
  },


  );

  get f() {
    return this.adminLoginForm.controls;
  }

  admin() {

    this.superAdmin.username = this.f['username'].value;
    this.superAdmin.password = this.f['password'].value;
    //this.superAdmin.confirmPassword = this.f['confirmPassword'].value;
    //this.superAdmin.id = Math.floor(Math.random());
    //this.superAdmin.enabled = true;

    console.log(this.superAdmin.id)

    this.submitted = true;

    this.adminLogin();

    this.router.navigate(['/adminview']);

  }


  constructor(private superAdminService: SuperAdminService, private router: Router) {

    
   }

  ngOnInit(): void {
    
    
  }

  adminLogin() {
    this.superAdminService.adminLogin(this.superAdmin)
      .subscribe(data => {console.log(data), this.adminToken = data; 
        localStorage.setItem('AdminToken',this.adminToken.token);}, error => console.log(error));
    console.log("Admin Login implemented succesfully")
    console.log("Admin Jwt token =", this.dataV)
  }


  get dataV(): any {
    return localStorage.getItem('AdminToken'); //Get Global Variable Value
  }

}
