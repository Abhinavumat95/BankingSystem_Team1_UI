import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit{

  adminUser:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.adminUser = sessionStorage.getItem('AdminUser');
  }

  deleteToken()
  {
    sessionStorage.removeItem('AdminToken'); 
    sessionStorage.removeItem('AdminUser'); 
    this.router.navigate(['/adminlogin']);
  }




}
