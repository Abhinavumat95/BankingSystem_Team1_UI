import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

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
  getAccountStatement(accountNumber: any): Observable<object> {
    var staffToken = sessionStorage.getItem('StaffToken');
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + staffToken);
    const httpOptions = {
      headers: headers_object
    };

    console.log("success");
    return this.http.get(`${this.baseUrl}/api/staff/account/${accountNumber}`, httpOptions); 
  }

  
}
