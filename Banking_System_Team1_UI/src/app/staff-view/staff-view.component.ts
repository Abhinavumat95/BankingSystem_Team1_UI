import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Staff } from '../staff';
import { SuperAdminService } from '../super-admin.service';

@Component({
  selector: 'app-staff-view',
  templateUrl: './staff-view.component.html',
  styleUrls: ['./staff-view.component.css']
})
export class StaffViewComponent implements OnInit{

  staff: Staff = new Staff();
  submitted: any;
  checked: boolean | undefined;
  staffs:any;

  viewStaffForm = new FormGroup({

    username: new FormControl('',
      [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)]),
    fullname: new FormControl('', [Validators.required]),
   
  },
  );
  

  get f() {
    return this.viewStaffForm.controls;
  }

  createStaff() {

    this.staff.username = this.f['username'].value;
    this.staff.fullname = this.f['fullname'].value;
    //this.superAdmin.confirmPassword = this.f['confirmPassword'].value;
    // this.staff.id = Math.floor(Math.random());
    // this.staff.enabled = true;

    console.log(this.staff.id)

    this.submitted = true;

    this.viewStaffMembers();

  }

  constructor(private superAdminService: SuperAdminService, private router: Router) { }
  ngOnInit(): void {
    
  }


  viewStaffMembers() {
    this.router.navigate(['/viewstaff']);
    this.superAdminService.viewStaff()
    .subscribe(data => {
      this.staffs = data;
      { { } }
      console.log(this.staffs)

    }, error => console.log(error));
  }

  goToCreateStaff(){
    this.router.navigate(['/createstaff']);
  }

  deleteToken()
  {
    localStorage.removeItem('AdminToken'); 
  }

  

}
