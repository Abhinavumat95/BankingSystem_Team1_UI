import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Staff } from '../staff';
import { StaffService } from '../services/staff.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})

export class StaffLoginComponent {

  get f(){
    return this.staffLoginForm.controls;
  }

  // get input from user
  staffLoginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6),Validators.maxLength(40)]),

  })

  staffToken: any;
  Staff: any;
  submitted = false;
  notAuthorized = false;
  loginError:any;
  staff: Staff = new Staff();


  constructor(private staffService: StaffService, private router: Router) {
  }

  getStaff(){
    this.staff.username = this.f['username'].value;
    this.staff.password = this.f['password'].value;

    console.log("staff username: ",this.staff.username);
    this.submitted = true;
    this.staffLogin();

    this.router.navigate(['/staffboard']);

  }

  staffLogin() {
    this.staffService.staffLogin(this.staff)
      .subscribe(data => 
        {
          console.log(data), 
          this.staffToken = data; 
          sessionStorage.setItem('StaffToken',this.staffToken.token);
          sessionStorage.setItem('StaffUser',this.staff.username);
          this.router.navigate(['/staffdashboard']);  
          this.notAuthorized = false;
        }, 
        error => {
          console.log("error: "+error)
          console.log("Error= ",this.loginError); 
          this.router.navigate(['/staffdashboard']);    
          this.notAuthorized = true;
        });

    console.log("staff Login implemented succesfully")
    console.log("Authorization = ",this.notAuthorized) 
    console.log("staff Jwt token =", this.dataV) 
  }

  get dataV(): any {
    return sessionStorage.getItem('StaffToken'); //Get Global Variable Value
  }



}
