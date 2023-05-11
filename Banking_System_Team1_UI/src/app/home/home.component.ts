import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  submitted = false;
  token:any;
  Customer: any;
  // submitted = false;

  customer: Customer = new Customer();

  customerForm = new FormGroup({

    username: new FormControl('',
      [Validators.required]),
    password: new FormControl('',
      [Validators.required]),

  },


  );

  get f() {
    return this.customerForm.controls;
  }

  customerLogin() {

    this.customer.username = this.f['username'].value;
    this.customer.password = this.f['password'].value;

    this.submitted = true;

    this.Login();
  }


  constructor(private customerService: CustomerService, private router: Router) {


   }

  ngOnInit(): void {


  }

  Login() {
    this.customerService.customerLogin(this.customer)
      .subscribe(data => {
        console.log(data);
        this.token = data;
        sessionStorage.setItem('CustomerToken',this.token.token);
        console.log("Customer token:", this.dataV);
        this.customerService.customerLoginUpdate(this.customer.username);
        // this.submitted = true;
        this.router.navigate(['/customerprofile']);
      });
  }


  get dataV(): any {
    return localStorage.getItem('CustomerToken'); //Get Global Variable Value
  }
}
