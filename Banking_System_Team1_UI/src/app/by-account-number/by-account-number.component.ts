import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StaffService } from '../services/staff.service';

@Component({
  selector: 'app-by-account-number',
  templateUrl: './by-account-number.component.html',
  styleUrls: ['./by-account-number.component.css']
})
export class ByAccountNumberComponent implements OnInit {

  constructor(private staffService: StaffService, private router: Router) {
  }


  // declare variables
  // account: Account = new Account();
  submitted: any;
  checked: boolean | undefined;
  accNumber:any;
  balance:any;
  username:any; // see any change
  fullname:any;

  approveAccView:any;
  accountView:any;


  // By Account Number
  byAccView:any;
  showByAccTable:any;
  accountStatementData:any;

  ngOnInit(): void {
    this.approveAccView = false;
    this.byAccView = false;
    this.showByAccTable = false;

  }


  get f(){
    return this.accountSearchForm.controls;
  }

  // get input from user
  accountSearchForm = new FormGroup({
    accountNumber: new FormControl(
      '', [
      Validators.required, Validators.minLength(6), 
      Validators.maxLength(20)
    ]),
  })


  goGetAccount(){
    this.accNumber = this.f['accountNumber'].value;
    console.log("input this.accNumber: ",this.accNumber);
    this.getTransaction(this.accNumber); 

  }

 
  // below is API call from backend
  // TODO: see transaction history

  // get transaction
  getTransaction(accountNumber:any){
    this.staffService.getTransaction(accountNumber)
    .subscribe(data => { 
      this.accountStatementData = data;  // result from API call
      // TODO: empty res will cause error, add logic
      { { } }
      console.log("accountStatementData: ",this.accountStatementData)
      var creationDate = this.accountStatementData[0].creationDate; // [0] is the sender
      var amount = this.accountStatementData[0].amount;
      this.balance = this.accountStatementData[0].amount;
      this.username = this.accountStatementData[0].username;

      console.log("creationDate: ",creationDate)
      console.log("amount: ",amount)
      this.showByAccTable=true
      
    }, error => {
      console.log(error);
      //this.noCustomer = true;
    });

  }
  // TODO: write new API call from backend, get account entity
  // get account current balance


  // get fullname API call
  getUser(){
    this.staffService.getUser(this.username)
    .subscribe(data => { 
      this.accountStatementData = data;  // result from API call
      // TODO: empty res will cause error, add logic
      { { } }
      console.log("accountStatementData: ",this.accountStatementData)
      var creationDate = this.accountStatementData[0].creationDate; // [0] is the sender
      var amount = this.accountStatementData[0].amount;
      this.balance = this.accountStatementData[0].amount;

      console.log("creationDate: ",creationDate)
      console.log("amount: ",amount)
      this.showByAccTable=true
      
    }, error => {
      console.log(error);
      //this.noCustomer = true;
    });
  }


}
