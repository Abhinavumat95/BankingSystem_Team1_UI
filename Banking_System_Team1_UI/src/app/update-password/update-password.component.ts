import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit{
  
  submitted = false;
  customerInfo:any;
  noCustomer = false;
  updateCustomer:any;
  notRightCustomer = false;
  updatedSuccessfully = false;
  pass: any;
  confPass: any;
  match = true;

  customer: Customer = new Customer();

  updatePasswordForm = new FormGroup({

      username: new FormControl('',
      [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)]),
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
    return this.updatePasswordForm.controls;
  }
  

  updatePassword() {
    this.customer.username = this.f['username'].value;
    this.customer.password = this.f['password'].value;
    this.confPass = this.f['confirmPassword'].value;
    this.submitted = true;

    this.pass = this.customer.password
    console.log("Password = ", this.pass)
    console.log("Confirm Password = ", this.confPass)

    this.updateCustomer = sessionStorage.getItem("forgotPasswordCustomer");

    if(this.updateCustomer != this.customer.username){
      console.log("Update Customer = ",this.updateCustomer);
      console.log("Actual Customer = ",this.customer.username);
      this.notRightCustomer = true;
      this.router.navigate(['/updatepassword']);
    }else{
      if (this.pass != this.confPass){
        this.match = false;
        this.submitted = true;
        console.log("Match = ", this.match)   
      }else{
        this.updateCustomerPassword();
      }
    } 
  }

  constructor(private customerService: CustomerService, private router: Router) { }
  ngOnInit(): void {
    
  }

  updateCustomerPassword() {

    let body = {
      username: this.customer.username,
      password: this.customer.password
    }
    console.log("Username = ",this.customer.username)
    console.log("New password = ",this.customer.password)
    this.customerService.updatePassword(body)
    .subscribe(data => {
      console.log(data);
      sessionStorage.removeItem("forgotPasswordCustomer");
      this.updatedSuccessfully = true;
      console.log("Updated Successfully = ",this.updatedSuccessfully)
    }, 
    error => {
      console.log(error),
      this.router.navigate(['/updatepassword']);
      this.noCustomer = true;
    });
  }

}
