import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Staff } from '../staff';
import { SuperAdminService } from '../super-admin.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit{

  staff: Staff = new Staff();
  submitted: any;
  staffs:any;
  staffView:any;
  isSwitchedOn = false;
  isSwitchedOff = false;
  e: any;
  checked: any;
  disabled = false;

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

  viewStaffForm = new FormGroup({

    username: new FormControl('',
      [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)]),
    fullname: new FormControl('', [Validators.required]),
   
  },
  );
  

  get f() {
    return this.createStaffForm.controls;
  }

  get g() {
    return this.viewStaffForm.controls;
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

  viewStaff() {

    this.staff.username = this.f['username'].value;
    this.staff.fullname = this.f['fullname'].value;
    //this.superAdmin.confirmPassword = this.f['confirmPassword'].value;
    // this.staff.id = Math.floor(Math.random());
    // this.staff.enabled = true;

    console.log(this.staff.id)

    this.submitted = true;

    this.viewStaffMembers();
    this.staffView = true;
    //this.enabledOrDisableStaffMember();

  }

  constructor(private superAdminService: SuperAdminService, private router: Router) { }

  ngOnInit(): void {
    this.staffView = false;
    this.checked = false;
    //this.isSwitchedOn = false;
  }

  deleteToken()
  {
    localStorage.removeItem('AdminToken'); 
    this.router.navigate(['/adminlogin']);
  }


  createStaffMember() {
    this.superAdminService.createStaff(this.staff)
      .subscribe((data: any) => console.log(data), (error: any) => console.log(error));
    console.log("Staff Created succesfully")
  }

  viewStaffMembers() {
    this.superAdminService.viewStaff()
    .subscribe(data => {
      this.staffs = data;
      { { } }
      console.log(this.staffs)

    }, error => console.log(error));
  }

  goToCreateStaff() {
    this.staffView = false;
  }

  goToViewStaff() {
    this.staffView = true;
  }

  enabledOrDisableStaffMember(username: any) {
    
    if (this.checked) {
       var e = true;
       
    }else {
       var e = false;
       
    }
    console.log("e = ",e)

    let body = {
      username: username,
      enabled: e
    }
    console.log("Username = ",username)
    this.superAdminService.enableOrDisableStaff(body)
    .subscribe(data => console.log(data), error => console.log(error));
  }

  onValueChange() {
    this.isSwitchedOff = true;
    this.isSwitchedOn = true;
    console.log('onValueChange', this.isSwitchedOn);
    console.log('onValueChange', this.isSwitchedOff);
  }

}
