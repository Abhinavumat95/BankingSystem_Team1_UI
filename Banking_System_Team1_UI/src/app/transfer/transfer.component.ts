import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StaffService } from '../services/staff.service';
import { Router } from '@angular/router';
import { Transaction } from '../entity/transaction';


@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit{

  accounts:any
  alerts:any
  alert:any

  isDBdataExist:any
  transactionInput = new Transaction(); // input from user typing
  transactionData : any; // result from DB
  
  ngOnInit(): void {
    this.isDBdataExist = false;
  }

  get f(){
    return this.accountForm.controls;
  }

  // validate the user input
  accountForm = new FormGroup({
    senderAcc: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    receiverAcc: new FormControl('', [Validators.required, Validators.minLength(6),Validators.maxLength(40)]),
    amount: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(15)]),
    remarks: new FormControl('', [Validators.required, Validators.maxLength(200)]),
  })

  constructor(private staffService: StaffService, private router: Router) {
  }




  submit(){
    // acquire user input
    this.transactionInput.senderAccountNumber = this.f['senderAcc'].value;
    this.transactionInput.receiverAccountNumber = this.f['receiverAcc'].value;
    this.transactionInput.amount = this.f['amount'].value;
    this.transactionInput.comments = this.f['remarks'].value;

    console.log("this.transactionInput.senderAcc: ",this.transactionInput.senderAccountNumber);
    console.log("this.transactionInput.receiverAcc: ",this.transactionInput.receiverAccountNumber);
    console.log("this.transactionInput.amount: ",this.transactionInput.amount);
    console.log("this.transactionInput.comments: ",this.transactionInput.comments);

    this.staffTransfer(this.transactionInput);

  }

  


  onClosed(){}

  //below are API calls from backend
  // transfer money, show success or failed
  staffTransfer(transactionInput:Transaction){
    this.staffService.staffTransfer(transactionInput)
    .subscribe(data => { 
      this.transactionData = data;  // result from API call
      // TODO: empty res will cause error, add logic
      { { } }
      console.log("transactionData: ",this.transactionData)

      // display transaction result
      this.isDBdataExist = true;
      
    }, error => {
      console.log(error);
    });
  }


}
