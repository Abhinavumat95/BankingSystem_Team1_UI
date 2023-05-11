import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Account } from '../account';
import { CustomerService } from '../customer.service';
import { AlertComponent } from 'ngx-bootstrap/alert';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit{
  baseUrl: string = 'http://localhost:8080';
  ngOnInit() {

  }

  alerts: any[] = [];
  constructor(private customerService: CustomerService, private http: HttpClient) {

  }
  account: Account = new Account;
  accountForm = new FormGroup({
    deposit: new FormControl('',
      [Validators.required,
      Validators.min(0)]),
    type: new FormControl('',
    [Validators.required])
  });

  get f() {
    return this.accountForm.controls;
  }

  submit() {
    this.account.accountType = this.f['type'].value;
    this.account.balance = this.f['deposit'].value;
    console.log(this.account);
    var uname:string = this.customerService.getUsername();
    console.log(uname);
    // this.createAccount(uname, this.account).subscribe(
    this.customerService.customerCreateAccount(this.customerService.getUsername(), this.account).subscribe(
      data => {
        console.log(data);
        this.customerService.addAlert(this.alerts, "Success: Account Created", "success");
      },
      (error) => {
        this.customerService.addAlert(this.alerts, "Error: Failed to create account. Error Message:" + error, "danger");
      }
      );
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

  // createAccount(username: string, account: any) {
  //   var token = sessionStorage.getItem('CustomerToken');
  //   var headers = new HttpHeaders().set("Authorization", "Bearer " + token);
  //   const httpOptions = {
  //     headers: headers
  //   };
  //   return this.http.post(`${this.baseUrl}/api/customer/`+username+`/account`, account, httpOptions).pipe(
  //     catchError(err => this.errorHandler(err))
  //   );
  // }

  // errorHandler(error: HttpErrorResponse) {
  //   if (error.status === 0) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error);
  //     this.customerService.addAlert(this.alerts, "Error: Failed to create account due to a client-side Error", "danger");
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     this.customerService.addAlert(this.alerts, "Error: Failed to create account due to a Server-side Error", "danger");
  //     console.error(
  //       `Backend returned code ${error.status}, body was: `, error.error);
  //   }
  //   // Return an observable with a user-facing error message.
  //   return throwError(() => new Error('Something bad happened; please try again later.'));
  // }


}
