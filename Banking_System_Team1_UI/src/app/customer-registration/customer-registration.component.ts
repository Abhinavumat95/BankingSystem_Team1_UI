import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {

  submitted = false;

  customer: Customer = new Customer();

  customerForm = new FormGroup({

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
    return this.customerForm.controls;
  }

  customerMethod() {

    this.customer.username = this.f['username'].value;
    this.customer.fullname = this.f['fullname'].value;
    this.customer.password = this.f['password'].value;
    //this.superAdmin.confirmPassword = this.f['confirmPassword'].value;
    this.customer.id = Math.floor(Math.random());
    this.customer.enabled = true;

    console.log(this.customer.id)

    this.submitted = true;

    this.customerRegister();

  }

  // private _id(_id: any) {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {

  }

  customerRegister() {
    this.customerService.customerSignUp(this.customer)
      .subscribe(data => console.log(data), error => console.log(error));
    console.log("Customer Register implemented succesfully")
  }

}
