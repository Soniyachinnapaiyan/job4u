import { Component, OnInit } from '@angular/core';
//import { FormBuilder, Validators } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { LoginService } from '../service/login/login.service';
import { User } from '../service/login/user';
import { Router } from "@angular/router";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  // constructor(private formBuilder:FormBuilder){}
  // profileForm = this.formBuilder.group({
  //   email:['',Validators.required],
  //   password:['',Validators.required],
  //   confirmpassword:['',Validators.required]
  // });
 
  // saveForm(){
  //   console.log('Form data is ', this.profileForm.value);
  // }
  // profileForm: FormGroup;
  submitted = false;
  errorMessage:string;
 

  constructor(private formBuilder: FormBuilder,private loginService:LoginService,private router: Router,private _snackBar: MatSnackBar) {}
    // this.profileForm=new FormGroup({
    //   email:new FormControl("", [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    //   password:new FormControl("", [Validators.required,Validators.minLength(8), Validators.maxLength(15)]),
    //   checkbox:
    // });
    profileForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required],
      checkbox: [false]
    });




    ngOnInit(): void {
  
    }
    durationInSeconds = 2;
    

    

    loginObj:User=new User();
  
    onSubmit(): void {
      const {email,password}=this.profileForm.value
      if (
        email == "" ||
        password == ""
        
      ) {
        this._snackBar.open('Field Cannot be Empty', 'close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds * 1000,
        });
       
      } 
      else if (!this.profileForm.value.checkbox ){
        this._snackBar.open('Accept Terms and Conditions!', 'close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      });

    }

      // this.submitted = true;
  
      // if (this.form.invalid) {
      //   return;
      // }
  
      // console.log(JSON.stringify(this.form.value, null, 2));
      else{

      
      console.log("FORMDATA",this.profileForm.value);
      this.loginObj.email=this.profileForm.value.email;
      this.loginObj.password=this.profileForm.value.password;
      this.loginService.loginApi(this.loginObj).subscribe(data=>{
        console.log("validated",data);
          this.profileForm.reset();
          localStorage.setItem("loginEmail",this.loginObj.email);
         this.router.navigate(["/personal-details"]);
      },
      (
        error=>{console.log(error);
           this.errorMessage=error.error;

        }
        )
      )
      }
    }
    email = new FormControl('', [Validators.required, Validators.email]);
    RememberMe = false;
    hide = true;

    
  getErrorMessage() {
    if (this.email.hasError('required')) {
      console.log('You must enter a value');
    }

    console.log( this.email.hasError('email') ? 'Not a valid email' : '');
  }
}
