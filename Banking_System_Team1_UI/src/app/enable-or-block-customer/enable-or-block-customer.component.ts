import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffService } from '../services/staff.service';

@Component({
  selector: 'app-enable-or-block-customer',
  templateUrl: './enable-or-block-customer.component.html',
  styleUrls: ['./enable-or-block-customer.component.css']
})
export class EnableOrBlockCustomerComponent implements OnInit{

  constructor(private staffService: StaffService, private router: Router) {
  }

  allCustomerInfoData:any; 


  ngOnInit(): void {
    this.getAllCustomerInfo();

  }


  //below are API calls from backend
  // get all customerInfo
  getAllCustomerInfo(){
    this.staffService.getAllCustomerInfo()
    .subscribe(data => { 
      this.allCustomerInfoData = data;  // result from API call
      // TODO: empty res will cause error, add logic
      { { } }
      console.log("allCustomerInfoData: ",this.allCustomerInfoData)
      // var creationDate = this.accountStatementData[0].creationDate; // [0] is the sender
      // var amount = this.accountStatementData[0].amount;
      // this.balance = this.accountStatementData[0].amount;
      // this.username = this.accountStatementData[0].username;

      // console.log("creationDate: ",creationDate)
      // console.log("amount: ",amount)

      
    }, error => {
      console.log(error);

    });
  }



  // get user, when staff wants to block user

  




}
