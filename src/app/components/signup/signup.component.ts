import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  check:boolean;
    confirmPasswordError:boolean;
  signupForm:FormGroup;
  constructor(private router:Router, private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this._fb.group ({
      firstName:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)]),
      confirmPassword:new FormControl('',[Validators.required])
    });
    this.check = false;
       this.confirmPasswordError = false;
  } 
  signup(){
    this.router.navigate(['login'])
  }
  passwordCompare(){
    if(this.signupForm.get("password").value===this.signupForm.get('confirmPassword').value){
      this.confirmPasswordError = false
    }
    else{
          this.confirmPasswordError = true;
    }
  }
}
