import { Component ,OnInit} from '@angular/core';
import { Route, Router } from '@angular/router';
import{PersonalDetails} from '../service/personal-details/personal-details';
import{PersonalDetailsService} from '../service/personal-details/personal-details.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {filter} from "rxjs/operators";
import { of } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
interface Location {
  value: string;
  viewValue: string;
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid);
  }
}
@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})

export class PersonalDetailsComponent implements OnInit {
  profileForm: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  centered = false;
  user: PersonalDetails = new PersonalDetails();
  registerData:PersonalDetailsService;

  contactnumberPattern = new RegExp(
    /(^$|[0-9]{10})/
  );


  matcher = new MyErrorStateMatcher();
maxDate= "2004-12-17"
  constructor(private formBuilder:FormBuilder,private personalDetailservice:PersonalDetailsService,private router:Router,private _snackBar: MatSnackBar){}
  pref_loc: Location[] = [
    {value: 'Hyderabad', viewValue: 'Hyderabad'},
    {value: 'Bangalore', viewValue: 'Bangalore'},
    {value: 'Chennai', viewValue: 'Chennai'},
    {value: 'Mumbai', viewValue: 'Mumbai'},
    {value: 'Pune', viewValue: 'Pune'},
    {value: 'Delhi', viewValue: 'Delhi'},
    {value: 'Noida', viewValue: 'Noida'},
    {value: 'Kolkata', viewValue: 'Kolkata'}
  ];
  


 ngOnInit():void {
  this.profileForm = new FormGroup({
    email:new FormControl('', [Validators.email]),
    username:new FormControl('',[Validators.required]),
    location:new FormControl('', [Validators.required]),
    gender:new FormControl('', [Validators.required]),
    contactnumber:new FormControl('',[Validators.pattern('[6-9]\\d{9}')]),
    dob:new FormControl('',[Validators.required])
  });
  if(localStorage.getItem("STEP_1")){
    var values =  JSON.parse(localStorage.getItem("STEP_1"));
    console.log(values);
      this.profileForm.setValue({
     username:values.username,
     email:values.email,
     dob:values.dob,
     gender:values.gender,
     contactnumber:values.contactnumber,
     location:values.location
   });

}}
durationInSeconds = 2;

 saveForm(){
   console.log('Form data is ', this.profileForm.value);
   console.log('Form data is ', this.profileForm.value);
   localStorage.setItem("STEP_1",JSON.stringify(this.profileForm.value));
   const {email,username,contactnumber,dob,location,gender}=this.profileForm.value
   this.user.email=localStorage.getItem('loginEmail')
   this.user.username=username
   this.user.contactnumber=contactnumber
   this.user.dob=dob
   this.user.location=location
   this.user.gender=gender
   if (
    username == "" ||contactnumber == "" || dob =="" || location=="" || gender=="") {
      // alert("Fields cannot be empty!")
      {
        this._snackBar.open('Fields cannot be empty!', 'close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds * 1000,
        });
       
      } 
   
  } 
  else{
    console.log("else part")
    this.router.navigate(["/education-details"]);
   this.personalDetailservice.addApi(this.user).subscribe(
     (data) => {
      //  console.log("Personal Details Added SuccessFully!!");
      {
        this._snackBar.open('Personal Details Added Successfully', 'close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds * 1000,
        });
       
      } 
  
  
      
     },
     error => (console.log(error)),
   
  );
 }
 }
}
