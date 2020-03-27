import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	signupForm:any;
	submitted=false;
	signupdata=[];
	signup_btn=true;
	update_btn=false;
	index=0;
  constructor() { }

  ngOnInit() {
  	this.signupForm=new FormGroup({
  		fname:new FormControl('',Validators.required),
  		lname:new FormControl('',Validators.required),
  		email:new FormControl('',[Validators.required,Validators.email]),
  		username:new FormControl('',Validators.required),
  		password:new FormControl('',Validators.required),

  	})
  }

  get f(){return this.signupForm.controls}

  submitForm(){

  this.submitted=true;
  this.signup_btn=true;
  if (this.signupForm.invalid) {
    
    return false;

  }
    	console.log(this.signupForm.value);
    	this.signupdata.push(this.signupForm.value);
    	console.log(this.signupdata);
    	this.signupForm.reset();
    	this.submitted=false;
  }

  edit(data,i){
  	this.signup_btn=false;
  	this.update_btn=true;
  	this.index=i;
  	this.signupForm.patchValue({
  		fname:data.fname,
  		lname:data.lname,
  		email:data.email,
  		username:data.username,
  		password:data.password
  	})
  }

  update(i){
  	this.update_btn=false;
  	this.submitted=true;
  	if (this.signupForm.invalid) {
    
    return false;

  	}
  	this.signupdata[this.index]=this.signupForm.value;
  	this.signupForm.reset();
  	this.submitted=false;
  	this.signup_btn=true;
  }

  delete(i){
      this.signupdata.splice(i,1);
      this.signup_btn=true;
      this.update_btn = false;
    }
}
