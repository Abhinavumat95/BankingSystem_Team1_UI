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
export class SuperAdminRegisterComponent implements OnInit{

  SuperAdmin:any;

  superAdmin: SuperAdmin = new SuperAdmin();

  adminForm = new FormGroup({

    username: new FormControl('', [Validators.required]),
    fullname: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required,]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.adminForm.controls;
  }

  admin() {

    this.superAdmin.username = this.f['username'].value;    
    this.superAdmin.fullname = this.f['fullname'].value;
    this.superAdmin.password = this.f['password'].value;
    //this.superAdmin.confirmPassword = this.f['confirmPassword'].value;
    this.superAdmin.id = Math.floor(Math.random());
    this.superAdmin.enabled = true;

    console.log(this.superAdmin.id)

    this.adminRegister();

  }

  // private _id(_id: any) {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private superAdminService: SuperAdminService, private router: Router) { }

  ngOnInit(): void {
    
  }

  adminRegister() {
    this.superAdminService.adminSignUp(this.superAdmin)
      .subscribe(data => console.log(data), error => console.log(error));
      console.log("Admin Register implemented succesfully")
  }

}
