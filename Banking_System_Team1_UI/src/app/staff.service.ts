import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  staffLogin(Staff: object): Observable<object> {
    console.log("success");
    return this.http.post(`${this.baseUrl}/api/authenticate/staff`, Staff);
  }

  getAccountsNeedApprove(): Observable<object> {
    var staffToken = sessionStorage.getItem('StaffToken');
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + staffToken);
    const httpOptions = {
      headers: headers_object
    };

    console.log("success");
    return this.http.get(`${this.baseUrl}/api/staff/accounts/approve`, httpOptions);
  }

  
}
