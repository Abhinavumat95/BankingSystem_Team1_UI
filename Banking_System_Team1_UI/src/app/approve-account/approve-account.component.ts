import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../entity/account';
import { StaffService } from '../services/staff.service';

@Component({
  selector: 'app-approve-account',
  templateUrl: './approve-account.component.html',
  styleUrls: ['./approve-account.component.css']
})
export class ApproveAccountComponent implements OnInit{

  accounts:any;
  
  ngOnInit(): void {
    this.getAccounts();

  }

  // only when enable to be true, then I send it to backend
  // otherwiese, ignore false

  constructor(private staffService: StaffService, private router: Router) {
  }

  //below are API calls from backend

  getAccounts() {
    this.staffService.getAccountsNeedApprove()
    .subscribe(data => {
      this.accounts = data;
      { { } }
      console.log("accounts: ",this.accounts)
      for(let acc of this.accounts){
        console.log("*** account: ",acc)
      }
      
    }, error => console.log(error));
  }

  // TODO: detect the UI change, and disable or enable account



}
