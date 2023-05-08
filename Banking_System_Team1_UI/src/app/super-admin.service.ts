import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  adminSignUp(SuperAdmin: object): Observable<object> {
    console.log("success");
    return this.http.post(`${this.baseUrl}/api/admin/register`, SuperAdmin);
  }

  adminLogin(SuperAdmin: object): Observable<object> {
    console.log("success");
    return this.http.post(`${this.baseUrl}/api/authenticate/admin`, SuperAdmin);
  }

  createStaff(SuperAdmin: object): Observable<object> {
    var adminToken = localStorage.getItem('AdminToken');
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + adminToken);
    const httpOptions = {
      headers: headers_object
    };

    console.log("success");
    return this.http.post(`${this.baseUrl}/api/admin/staff`, SuperAdmin, httpOptions);
  }

  viewStaff(): Observable<object> {
    var adminToken = localStorage.getItem('AdminToken');
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + adminToken);
    const httpOptions = {
      headers: headers_object
    };

    console.log("success");
    return this.http.get(`${this.baseUrl}/api/admin/staff`, httpOptions);
  }

  enableOrDisableStaff(data: any): Observable<object> {
    var adminToken = localStorage.getItem('AdminToken');
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + adminToken);
    const httpOptions = {
      headers: headers_object
    };
    console.log("success");
    return this.http.put(`${this.baseUrl}/api/admin/staff`, data, httpOptions)
  }

}
