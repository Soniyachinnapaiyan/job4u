import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
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
