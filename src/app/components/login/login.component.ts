import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  check:boolean;
  loginForm:FormGroup;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',Validators.required)
    })
    this.check=false;
  }

  login(){
    if(this.loginForm.invalid){
      console.log(this.loginForm)
      this.check=true;
    }
    else{
      this.router.navigate(['store'])
    }

  }
}
