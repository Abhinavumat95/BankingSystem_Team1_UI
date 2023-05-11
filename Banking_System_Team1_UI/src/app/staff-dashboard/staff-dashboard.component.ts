import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../entity/account';
import { StaffService } from '../services/staff.service';
import { Transaction } from '../entity/transaction';

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.css']
})
export class StaffDashboardComponent implements OnInit{

  constructor(private staffService: StaffService, private router: Router) {
  }

  account: Account = new Account();
  submitted: any;
  checked: boolean | undefined;
  accounts:any;

  approveAccView:any;
  accountView:any;


  // By Account Number
  byAccView:any;
  showByAccTable:any;
  accountStatementData:any;
  accNum2:any;
  currentItem = 'Television';

  

  ngOnInit(): void {
    this.approveAccView = false;
    this.byAccView = false;
    this.showByAccTable = false;
  }



  goToApproveAccounts(){
    // present approve account page
    this.approveAccView=true;
    this.viewAccounts();

  }

  goToByAccNumber(){
    this.byAccView=true;

  }


  // <!-- START**  logic for APPROVE ACCOUNT--> 

  viewAccounts(){
    this.getAccounts();
    this.accountView = true;
    console.log("in viewAccounts after click")
  }



  getAccounts() {
    this.staffService.getAccountsNeedApprove()
    .subscribe(data => {
      this.accounts = data;
      { { } }
      console.log("accounts: ",this.accounts)

    }, error => console.log("error: ",error));
  }
  //<!-- END logic for APPROVE ACCOUNT --> 



   //<!-- START** logic for BY ACCOUNT NUMBER-->  
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
    this.account.accountNumber = this.f['accountNumber'].value;
    // this.accNum2 = this.f['accountNumber'].value;
    // console.log(" this.accNum2: ", this.accNum2);

    console.log("input accountNumber: ",this.account.accountNumber);
    // TODO: how to render child page
    // this.router.navigate(['/staffdashboard']);
    // this.router.navigate(['/byaccountnumber']);

    this.getAccountStatement(this.account.accountNumber); 

  }

 
  // API call from backend
  getAccountStatement(accountNumber:any){
    this.staffService.getAccountStatement(accountNumber)
    .subscribe(data => { 
      this.accountStatementData = data;  // result from API call
      { { } }
      console.log(this.accountStatementData)
      var creationDate = this.accountStatementData[0].creationDate; // [0] is the sender
      var amount = this.accountStatementData[0].amount;
      console.log("creationDate: ",creationDate)
      console.log("amount: ",amount)
      this.showByAccTable=true
      
    }, error => {
      console.log(error);
      //this.noCustomer = true;
    });

  }


 //<!-- END logic for BY ACCOUNT NUMBER-->  

}
