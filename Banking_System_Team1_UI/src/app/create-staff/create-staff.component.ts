import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Staff } from '../staff';
import { SuperAdminService } from '../super-admin.service';

@Component({
  selector: 'app-create-staff',
  templateUrl: './create-staff.component.html',
  styleUrls: ['./create-staff.component.css']
})
export class CreateStaffComponent implements OnInit{

  staff: Staff = new Staff();
  submitted: any;
  staffs:any;

  createStaffForm = new FormGroup({

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
    return this.createStaffForm.controls;
  }

  createStaff() {

    this.staff.username = this.f['username'].value;
    this.staff.fullname = this.f['fullname'].value;
    this.staff.password = this.f['password'].value;
    //this.superAdmin.confirmPassword = this.f['confirmPassword'].value;
    this.staff.id = Math.floor(Math.random());
    this.staff.enabled = true;

    console.log(this.staff.id)

    this.submitted = true;

    this.createStaffMember();

  }

  constructor(private superAdminService: SuperAdminService, private router: Router) { }
  ngOnInit(): void {
    
  }

  deleteToken()
  {
    localStorage.removeItem('AdminToken'); 
  }


  createStaffMember() {
    this.superAdminService.createStaff(this.staff)
      .subscribe((data: any) => console.log(data), (error: any) => console.log(error));
    console.log("Staff Created succesfully")
  }

  goToCreateStaff(){
    this.router.navigate(['/createstaff']);
  }

  goToViewStaff() {
    
    this.superAdminService.viewStaff()
    .subscribe(data => {
      this.staffs = data;
      { { } }
      console.log(this.staffs)

    }, error => console.log(error));
    this.router.navigate(['/viewstaff']);
  }
  

}
