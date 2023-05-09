import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit{
  
  submitted = false;
  customerInfo:any;
  noCustomer = false;

  customer: Customer = new Customer();


  forgotPasswordForm = new FormGroup({

    username: new FormControl('',
      [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)]),
    question: new FormControl('', [Validators.required]),
    answer: new FormControl('', [Validators.required])
  },

  );

  get f() {
    return this.forgotPasswordForm.controls;
  }
  
  forgotPassword() {

    this.customer.username = this.f['username'].value;
    this.customer.question = this.f['question'].value;
    this.customer.answer = this.f['answer'].value;

    this.submitted = true;
  }

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  customerForgotPassword(username:any){
    this.customerService.getCustomerSecurity(username)
    .subscribe(data => {
      this.customerInfo = data;
      { { } }
      console.log(this.customerInfo)
      var ans = this.customerInfo.securityAnswer;
      var ques = this.customerInfo.securityQuestion;
      console.log("Actual Answer = ",ans)
      console.log("Actual Question = ",ques)

      console.log("Form Answer = ",this.customer.answer)
      console.log("Form Question = ",this.customer.question)

      sessionStorage.setItem("forgotPasswordCustomer",this.customer.username);

      if(this.customer.answer == ans && this.customer.question == ques){
        this.router.navigate(['/updatepassword']);
      }else {
        this.router.navigate(['/security']);
      }
    }, error => {
      console.log(error);
      this.router.navigate(['/forgetpassword']);
      this.noCustomer = true;
    });

    
  }

  }

