import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit{
  
  submitted = false;

  forgotPasswordForm = new FormGroup({

    username: new FormControl('',
      [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)]),
    answer: new FormControl('', [Validators.required]),
  },

  );

  get f() {
    return this.forgotPasswordForm.controls;
  }
  
  forgotPassword() {
    this.submitted = true;
  }



  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
