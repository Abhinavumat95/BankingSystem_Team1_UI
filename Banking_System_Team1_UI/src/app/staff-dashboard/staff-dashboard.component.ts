import { Component, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../account';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.css']
})
export class StaffDashboardComponent {

  clickViewAccount=false;

  constructor(private staffService: StaffService, private router: Router) {
  }




  // deleteToken()
  // {
  //   console.log("sessionStorage: ", sessionStorage)
  //   sessionStorage.removeItem('staffToken'); 
  //   this.router.navigate(['/staffcorner']);
  // }





  goToApproveAccounts(){
    // present approve account page
    this.clickViewAccount=true
    this.viewAccounts();

  }


  // <!----> 

  account: Account = new Account();
  submitted: any;
  checked: boolean | undefined;
  accounts:any;
  accountView:any;


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
  //<!----> 


}
