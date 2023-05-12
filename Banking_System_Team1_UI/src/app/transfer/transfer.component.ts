import { Component } from '@angular/core';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {

  accounts:any
  alerts:any
  alert:any
  accountForm:any
  

  get f(){
    return this.accountForm.controls;
  }

    // get input from user
    // accountForm = new FormGroup({
    //   accountNumber: new FormControl(
    //     '', [
    //     Validators.required, Validators.minLength(6), 
    //     Validators.maxLength(20)
    //   ]),
    // })


  submit(){

  }

  onClosed(){}

  // get user input from form


  //below are API calls from backend
  // transfer money, show success or failed


  // show sender account, current balance



}
