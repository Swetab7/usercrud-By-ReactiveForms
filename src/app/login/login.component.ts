import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loginForm:any;
	submitted=false;
  constructor(public fb:FormBuilder) { }

  ngOnInit() {
  	this.loginForm=this.fb.group({
  		username:['',Validators.required],
  		password:['',Validators.required],
  	})
  }
 get f(){return this.loginForm.controls}
 
  submitForm(){
  	this.submitted=true;
  	if(this.loginForm.invalid){
  		return false;
  	}
  	console.log(this.loginForm.value);
  	this.loginForm.reset();
  	this.submitted=false;
  }
}
