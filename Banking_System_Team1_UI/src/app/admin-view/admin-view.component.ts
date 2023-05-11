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
  staffCreated = false;
  staffs:any;
  staffView:any;
  e: any;
  confPass:any;
  pass:any;
  checked = false;
  match = true;
  registerError: any;
  Error = false;

  pages: number = 1;


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

    this.Error = false;
    this.staffCreated = false;
    this.match = true;

    this.staff.username = this.f['username'].value;
    this.staff.fullname = this.f['fullname'].value;
    this.staff.password = this.f['password'].value;
    this.confPass = this.f['confirmPassword'].value;
    this.staff.id = Math.floor(Math.random());
    this.staff.enabled = true;

    this.pass = this.staff.password

    console.log("Password = ", this.pass)
    console.log("Confirm Password = ", this.confPass)

    if (this.pass == this.confPass) {
      console.log(this.staff.id)
      this.submitted = true;
      this.createStaffMember();
    } else {
      this.match = false;
      this.submitted = true;
      console.log("Admin Created = ", this.staffCreated)
      console.log("Match = ", this.match)
      console.log("Error = ", this.Error)
    }

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

  constructor(private superAdminService: SuperAdminService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.staffView = false;
    //this.checked = false;
    //this.isSwitchedOn = false;
  }

  deleteToken()
  {
    sessionStorage.removeItem('AdminToken'); 
    this.router.navigate(['/adminlogin']);
  }


  createStaffMember() {
    this.superAdminService.createStaff(this.staff)
      .subscribe(
        (data: any) => console.log(data), 
        (error: any) => {
          console.log(error);
          this.registerError = error.error;
          var str = "Username: "+this.staff.username+" already exists.";
          console.log("str = ",str);
          console.log("Type of str = ",typeof(str));
          console.log("Registered error = ",this.registerError);
          console.log("Type of Registered error = ",typeof(this.registerError));
          if(this.registerError !== str){
            this.staffCreated = true;
          }else{
            this.Error = true;
          }
          console.log("Admin Created = ", this.staffCreated)
          console.log("Match = ", this.match)
          console.log("Error = ", this.Error)
        });
    //this.staffCreated = true;
    
    console.log("Staff Created succesfully")
  }

  viewStaffMembers() {
    this.superAdminService.viewStaff()
    .subscribe(data => {
      this.staffs = data;
      { { } }
      console.log(this.staffs);

    }, error => console.log(error));
  }

  goToCreateStaff() {
    this.staffView = false;
  }

  goToViewStaff() {
    this.staffView = true;
  }

  enabledOrDisableStaffMember(username: any) {
    
    if (this.checked === false) {
       this.checked = true;
       var e = true;
       
    }else {
       this.checked = false;
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
    this.goToViewStaff();
  }

  onChange() {
    if (this.checked === true) {
      this.checked = false;
    } else {
      this.checked = true;
    }
  }

}
