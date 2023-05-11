import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.css']
})
export class CustomerHeaderComponent implements OnInit{
  username:string = "";

  constructor(private customerService: CustomerService) {

  }

  ngOnInit() {
    this.username = this.customerService.getUsername();
  }

}
