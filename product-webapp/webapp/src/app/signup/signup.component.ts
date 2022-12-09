import { Component, OnInit  } from '@angular/core';
import { RegisterService } from "../service/register/register.service";
import { UserRegistration } from "../service/register/user-registration";
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  centered = false;
  user: UserRegistration = new UserRegistration();
  errorMessage: String = "";
  registerData:RegisterService;

  emailPattern = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  passwordPattern = new RegExp(
    /(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{8,10}/
  );

 

  constructor(private registerService: RegisterService,private router: Router, private formBuilder: FormBuilder,private _snackBar: MatSnackBar){}
 profileForm = this.formBuilder.group({
    email:['',Validators.required],
    password:['',Validators.required],
    cpassword:['',Validators.required]
  });
  
  // get email(): String {
  //   return this. profileForm.get('email');
  // }
  // get password(): String {
  //   return this.profileForm.get('password');
  // }

  // get cpassword(): String {
  //   return this.profileForm.get('cpassword');
  // }
  ngOnInit():void {

  }
  durationInSeconds = 2;
  saveForm(){
    console.log('Form data is ', this.profileForm.value);
    
    console.log(this.user);
    const {email,password,cpassword}=this.profileForm.value
    if (
      email == "" ||
      password == "" ||
      cpassword == ""
    ) {
        // alert("Fields cannot be empty!")
        this._snackBar.open('Fields cannot be empty!', 'close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds * 1000,
        });
     
    } 
    else if (password != cpassword) {
      // alert("password must be same")
      this._snackBar.open('Password must be same!', 'close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      });
    }
    else if (this.checked = false){
      // alert("Accept terms and conditions")
      this._snackBar.open('Accept Terms and Conditions!', 'close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      });

    }
      
   
     else {
      this.user.email=email
      this.user.password=password
      this.user.cpassword=cpassword

      this.registerService.registerApi(this.user).subscribe(
        (data) => {
          // alert("Successfully Registered !!");
          this._snackBar.open('Successfully Registered !!', 'close', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
         
        },
        error => (console.log(error)),
      
     );


      this.router.navigate(["/login"]);
    }
  }
  checked = false;
  
  email = new FormControl('', [Validators.required, Validators.email]);
  RememberMe = false;
   hide = true;

    
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  }

 

