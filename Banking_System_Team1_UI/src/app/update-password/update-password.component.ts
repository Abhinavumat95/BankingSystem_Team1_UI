import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit{
  ngOnInit(): void {
    
  }

  submitted = false;

  updatePasswordForm = new FormGroup({

      username: new FormControl('',
      [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)]),
      password: new FormControl('',
      [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(40)]),
      confirmPassword: new FormControl('',
      [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(40)]),
  },

  );

  get f() {
    return this.updatePasswordForm.controls;
  }
  
  updatePassword() {
    this.submitted = true;
  }



  constructor(private router: Router) { }

}
