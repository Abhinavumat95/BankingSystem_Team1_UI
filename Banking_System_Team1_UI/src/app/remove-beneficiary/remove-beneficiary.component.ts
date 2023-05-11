import { Component, OnInit } from '@angular/core';
import { AlertComponent } from 'ngx-bootstrap/alert';
import { Beneficiary } from '../beneficiary';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-remove-beneficiary',
  templateUrl: './remove-beneficiary.component.html',
  styleUrls: ['./remove-beneficiary.component.css']
})
export class RemoveBeneficiaryComponent implements OnInit{
  alerts: any[] = [];
  data: any;

  ngOnInit() {
    this.get();
  }

  constructor(private customerService: CustomerService) {
  }

  remove(beneficiaryID: any) {
    this.customerService.customerRemoveBeneficiary(this.customerService.getUsername(), beneficiaryID).subscribe(
      data => {
        console.log(data);
        this.customerService.addAlert(this.alerts, "Success: Beneficiary Removed", "success");
      },
      error => {
        console.log(error);
        this.customerService.addAlert(this.alerts, "Error: Unable to Remove Beneficiary", "danger");
      }
    )
    console.log("jo");
    this.get();
  }

  get() {
    var uname = this.customerService.getUsername();
    this.customerService.customerGetBeneficiaries(uname).subscribe(
      data => {
        this.data = data;
        this.customerService.addAlert(this.alerts, "Success: Beneficiaries Loaded.", "success");
      },
      error => {
        console.log(console.error());
        this.customerService.addAlert(this.alerts, "Error: Unable to get Beneficiaries", "danger");
      }
    );
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
}
