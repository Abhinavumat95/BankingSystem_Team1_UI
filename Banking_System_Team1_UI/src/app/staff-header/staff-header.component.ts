import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-header',
  templateUrl: './staff-header.component.html',
  styleUrls: ['./staff-header.component.css']
})
export class StaffHeaderComponent {

  staffUser:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.staffUser = sessionStorage.getItem('StaffUser');
  }

  deleteToken()
  {
    sessionStorage.removeItem('StaffToken');
    sessionStorage.removeItem('StaffUser');
    this.router.navigate(['/staffcorner']);
  }


}
