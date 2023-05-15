import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffService } from '../services/staff.service';
import { Beneficiary } from '../entity/beneficiary';

@Component({
  selector: 'app-approve-beneficiary',
  templateUrl: './approve-beneficiary.component.html',
  styleUrls: ['./approve-beneficiary.component.css']
})
export class ApproveBeneficiaryComponent implements OnInit{

  constructor(private staffService: StaffService, private router: Router) {
  }
  ngOnInit(): void {
    // this.approveAccView = false;
    this.getAllBeneficiaryNeedApprove();

  }

  beneficiaryData:any 

  // below is API call from backend

  // get beneficiary need approve 
  getAllBeneficiaryNeedApprove(){
    this.staffService.getAllBeneficiaryNeedApprove()
    .subscribe(data => { 
      this.beneficiaryData = data;  // result from API call, an array
      // TODO: empty res will cause error, add logic
      { { } }
      console.log("beneficiaryData: ",this.beneficiaryData)
      // var creationDate = this.accountStatementData[0].creationDate; // [0] is the sender
      // var amount = this.accountStatementData[0].amount;
      // this.balance = this.accountStatementData[0].amount;
      // this.username = this.accountStatementData[0].username;

      // console.log("creationDate: ",creationDate)
      // console.log("amount: ",amount)
      // this.showByAccTable=true
      
    }, error => {
      console.log(error);

    });
  }




}
