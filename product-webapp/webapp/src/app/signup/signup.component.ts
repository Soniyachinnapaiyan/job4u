import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  centered = false;
  constructor(private formBuilder:FormBuilder){}
  profileForm = this.formBuilder.group({
    email:['',Validators.required],
    password:['',Validators.required],
    confirmpassword:['',Validators.required]
  });
 
  saveForm(){
    console.log('Form data is ', this.profileForm.value);
  }
}

