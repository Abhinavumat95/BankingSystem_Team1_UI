import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  // store common variables



  // staff login API call
  staffLogin(Staff: object): Observable<object> {
    console.log("success");
    return this.http.post(`${this.baseUrl}/api/authenticate/staff`, Staff);
  }

  // approve account API call
  getAccountsNeedApprove(): Observable<object> {
    var staffToken = sessionStorage.getItem('StaffToken');
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + staffToken);
    const httpOptions = {
      headers: headers_object
    };

    console.log("success");
    return this.http.get(`${this.baseUrl}/api/staff/accounts/approve`, httpOptions);
  }

  // TODO: receive account number as input and add to url
  // by account number API call
  // see transaction
  getTransaction(accountNumber: any): Observable<object> {
    console.log("in API getAccountStatement accountNumber: ", accountNumber)
    var staffToken = sessionStorage.getItem('StaffToken');
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + staffToken);
    const httpOptions = {
      headers: headers_object
    };
    console.log("success");
    return this.http.get(`${this.baseUrl}/api/staff/account/${accountNumber}`, httpOptions); 
  }


  // get user
  getUser(username: any): Observable<object> {
    console.log("in API getUser username: ", username)
    // TODO: extract below
    var staffToken = sessionStorage.getItem('StaffToken');
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + staffToken);
    const httpOptions = {
      headers: headers_object
    };
    console.log("success");
    return this.http.get(`${this.baseUrl}/api/staff/customer/${username}`, httpOptions); 
  }

  // get specific account
  getAccount(accountNumber: any): Observable<object> {
    console.log("in API getUser accountNumber: ", accountNumber)
    // TODO: extract below
    var staffToken = sessionStorage.getItem('StaffToken');
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + staffToken);
    const httpOptions = {
      headers: headers_object
    };
    console.log("success");
    return this.http.get(`${this.baseUrl}/api/staff/account/detail/${accountNumber}`, httpOptions); 
  }


  // get customerInfo
  getAllCustomerInfo(): Observable<object> {

    // TODO: extract below
    var staffToken = sessionStorage.getItem('StaffToken');
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + staffToken);
    const httpOptions = {
      headers: headers_object
    };
    console.log("success");
    return this.http.get(`${this.baseUrl}/api/util/customerinfos`, httpOptions); 
  }

  // transfer money
  transferMoney(): Observable<object> {

    // TODO: extract below
    var staffToken = sessionStorage.getItem('StaffToken');
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + staffToken);
    const httpOptions = {
      headers: headers_object
    };
    console.log("success");
    return this.http.get(`${this.baseUrl}/api/util/customerinfos`, httpOptions); 
  }
  
}
