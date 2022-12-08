import { Component, OnInit  } from '@angular/core';
import { RegisterService } from "../service/register/register.service";
import { UserRegistration } from "../service/register/user-registration";
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from "@angular/router";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
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

 

  constructor(private registerService: RegisterService,private router: Router, private formBuilder: FormBuilder){}
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

  saveForm(){
    console.log('Form data is ', this.profileForm.value);
    
    console.log(this.user);
    const {email,password,cpassword}=this.profileForm.value
    if (
      email == "" ||
      password == "" ||
      cpassword == ""
    ) {
      console.log("Fields cannot be empty!")
     
    } 
    else if (password != cpassword) {
      console.log("password must be same")
    }
      
   
     else {
      this.user.email=email
      this.user.password=password
      this.user.cpassword=cpassword

      this.registerService.registerApi(this.user).subscribe(
        (data) => {
          console.log("Successfully done !!", "User is Registered ", "success");
         
        },
        error => (console.log(error)),
      
     );


      //this.router.navigate(["/login"]);
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

 

