import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

}
