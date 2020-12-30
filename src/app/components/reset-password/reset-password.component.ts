import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm:FormGroup
  confirmPasswordError:boolean
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.confirmPasswordError = false;
    this.resetForm = new FormGroup({
      password:new FormControl('',[Validators.required,Validators.minLength(8)]),
      confirmPassword:new FormControl('',[Validators.required])
    })
  }
  passwordCompare(){
    if(this.resetForm.get("password").value===this.resetForm.get('confirmPassword').value){
      this.confirmPasswordError = false
    }
    else{
          this.confirmPasswordError = true;
    }
  }
  
  resetPassword(){
      this.router.navigate(['login'])
  }

}
