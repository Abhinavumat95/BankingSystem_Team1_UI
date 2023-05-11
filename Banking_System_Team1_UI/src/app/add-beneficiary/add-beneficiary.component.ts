import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Beneficiary } from '../beneficiary';
import { CustomerService } from '../customer.service';
import { AlertComponent } from 'ngx-bootstrap/alert';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']
})
export class AddBeneficiaryComponent {
  baseUrl: string = 'http://localhost:8080';
  alerts: any[] = [];

  constructor(private customerService: CustomerService, private http: HttpClient) {}

  beneficiary: Beneficiary = new Beneficiary;
  beneficairyForm = new FormGroup({
    accInput: new FormControl('',
      [Validators.required]),
    confInput: new FormControl('',
    [Validators.required]),
    type: new FormControl('',
    [Validators.required]),
  });

  get f() {
    return this.beneficairyForm.controls;
  }

  submit() {
    var accInput = this.f['accInput'].value;
    var confInput = this.f['confInput'].value;
    if(accInput != confInput) {
      this.customerService.addAlert(this.alerts, "Account Number is not confirmed.", "danger");
    } else {
      this.beneficiary.accNum = this.f['accInput'].value;
      this.beneficiary.type = this.f['type'].value;
      console.log(this.beneficiary);
      var uname:string = this.customerService.getUsername();
      this.customerService.customerAddBeneficiary(uname, this.beneficiary).subscribe(
        data => {
          console.log(data);
          this.customerService.addAlert(this.alerts, "Success: Beneficiary Added", "success");
        },
        error => {
          this.customerService.addAlert(this.alerts, "Error: Failed to add beneficiary. Error Message:" + error, "danger");
        }
      )
    }


  }


  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
}
