import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from './transaction';
import { CustomerInfo } from './customer-info';
import { Beneficiary } from './beneficiary';
import { Account } from './entity/account';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private isLoggedIn:boolean = false;
  private username:string = "";
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getCustomerSecurity(username: any): Observable<object> {
    console.log("success");
    return this.http.get(`${this.baseUrl}/api/util/customer/${username}`);
  }

  updatePassword(data: any): Observable<object> {
    console.log("success");
    return this.http.put(`${this.baseUrl}/api/util/customer/updatepassword`, data)
  }


  customerLoginUpdate(username:string) {
    this.isLoggedIn = true;
    this.username = username;
  }

  customerLogoutUpdate() {
    this.isLoggedIn = false;
    this.username = "";
  }

  getUsername() {
    if(this.isLoggedIn) {
      return this.username;
    }else {
      console.log("cannot get username");
      return "";
    }
  }

  customerSignUp(Customer: object): Observable<object> {
    return this.http.post(`${this.baseUrl}/api/customer/register`, Customer);
  }

  customerLogin(Customer: object): Observable<object> {
    return this.http.post(`${this.baseUrl}/api/authenticate/customer`, Customer);
  }

  customerCreateAccount(username: string, account: Account): Observable<object> {
    var token = sessionStorage.getItem('CustomerToken');
    var headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    const httpOptions = {
      headers: headers
    };
    return this.http.post(`${this.baseUrl}/api/customer/`+username+`/account`, account, httpOptions);
  }

  customerAddBeneficiary(username: string, beneficiary: Beneficiary): Observable<object> {
    var token = sessionStorage.getItem('CustomerToken');
    var headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    const httpOptions = {
      headers: headers
    };
    return this.http.post(`${this.baseUrl}/api/customer/`+username+`/beneficiary`, beneficiary, httpOptions);
  }

  customerGetBeneficiaries(username:string): Observable<object> {
    var token = sessionStorage.getItem('CustomerToken');
    var headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    const httpOptions = {
      headers: headers
    };
    return this.http.get(`${this.baseUrl}/api/customer/`+username+`/beneficiary`, httpOptions);
  }

  customerRemoveBeneficiary(username: string, beneficiaryId: number): Observable<object> {
    var token = sessionStorage.getItem('CustomerToken');
    var headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    const httpOptions = {
      headers: headers
    };
    return this.http.delete(`${this.baseUrl}/api/customer/`+username+`/beneficiary/`+beneficiaryId, httpOptions);
  }

  customerUpdateProfile(username: string, customerInfo: CustomerInfo): Observable<object> {
    return this.http.put(`${this.baseUrl}/api/customer/`+username, customerInfo);
  }

  customerTransfer(transaction: Transaction) {
    return this.http.put(`${this.baseUrl}/api/customer/transfer`, transaction);
  }

  addAlert(alerts:any[], msgInput: string, typeInput: string) {
    alerts.push({
      type: typeInput,
      msg: msgInput,
      timeout: 5000
    });
  }
}
