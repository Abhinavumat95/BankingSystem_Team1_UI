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
  loginError:any;
  notAuthorized = false;

  superAdmin: SuperAdmin = new SuperAdmin();

  adminLoginForm = new FormGroup({

    username: new FormControl('',
      [Validators.required]),
    password: new FormControl('',
      [Validators.required]),
   
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

    //this.router.navigate(['/adminview']);
    

  }


  constructor(private superAdminService: SuperAdminService, private router: Router) {

    
   }

  ngOnInit(): void {
    
    
  }

  adminLogin() {
    this.superAdminService.adminLogin(this.superAdmin)
      .subscribe(data => 
        {
          console.log(data), 
          this.adminToken = data;
          sessionStorage.setItem('AdminToken',this.adminToken.token); 
          this.router.navigate(['/adminview']);
          this.notAuthorized = false;
        }, 
        error => {
          this.loginError = error.error;
          console.log("Error= ",this.loginError); 
          this.router.navigate(['/adminlogin']);    
          this.notAuthorized = true;
      });
    console.log("Admin Login implemented succesfully")
    console.log("Authorization = ",this.notAuthorized)

  }


  get dataV(): any {
    return sessionStorage.getItem('AdminToken'); //Get Global Variable Value
  }

}
