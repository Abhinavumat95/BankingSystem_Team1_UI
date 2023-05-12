import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffService } from '../services/staff.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-enable-or-block-customer',
  templateUrl: './enable-or-block-customer.component.html',
  styleUrls: ['./enable-or-block-customer.component.css']
})
export class EnableOrBlockCustomerComponent implements OnInit {

  customer: Customer = new Customer();
  //checked = false;
  enableDisable = new Map<any, any>();

  constructor(private staffService: StaffService, private router: Router) {
  }

  allCustomerInfoData: any;


  ngOnInit(): void {
    this.getAllCustomerInfo();
    this.viewStaffMembers();
  }


  //below are API calls from backend
  // get all customerInfo
  getAllCustomerInfo() {
    this.staffService.getAllCustomerInfo()
      .subscribe(data => {
        this.allCustomerInfoData = data;  // result from API call
        // TODO: empty res will cause error, add logic
        { { } }

        console.log("allCustomerInfoData: ", this.allCustomerInfoData)
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

  viewStaffMembers() {
    this.staffService.viewCustomer()
      .subscribe(data => {
        this.allCustomerInfoData = data;
        for (var s in this.allCustomerInfoData) {
          this.enableDisable.set(this.allCustomerInfoData[s].username, this.allCustomerInfoData[s].enabled);
        }
        console.log("Data:", this.enableDisable)
        { { } }
        console.log(this.allCustomerInfoData);

      }, error => console.log(error));
  }

  enabledOrDisableCustomerMember(username: any) {

    //var check = this.staffs[0];
    var checked = this.enableDisable.get(username);
    //console.log("Check =", check);
    console.log("Checked =", checked);
    if (checked === false) {
      checked = true;
      var e = true;
      this.enableDisable.set(username, e);
    } else {
      checked = false;
      var e = false;
      this.enableDisable.set(username, e);
    }

    console.log("e = ", e)

    let body = {
      username: username,
      enabled: e
    }
    console.log("Username = ", username)
    this.staffService.enableOrDisableCustomer(body)
      .subscribe(data => console.log(data), error => console.log(error));

  }
  // get user, when staff wants to block user
}
