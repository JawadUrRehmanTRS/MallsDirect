import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetForm:FormGroup
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.forgetForm = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email])
    })
  }

  forgetPassword(){
    this.router.navigate(['resetPassword'])
  }

}
