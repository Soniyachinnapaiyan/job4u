import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import{Experiencedetails} from '../service/experience-details//experiencedetails';
import{ExperiencedetailsService} from '../service/experience-details/experiencedetails.service';
import { ErrorStateMatcher } from '@angular/material/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
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
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.css']
})
export class ExperienceDetailsComponent implements OnInit{

  profileForm: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  centered = false;
  user: Experiencedetails = new Experiencedetails();
  registerData:ExperiencedetailsService;
  pref_exp: Location[] = [
    {value: 'Fresher', viewValue: 'Fresher'},
    {value: '1 - 2', viewValue: '1 - 2'},
    {value: '2 - 3', viewValue: '2 - 3'},
    {value: '3 - 4', viewValue: '3 -4'},
    {value: '4 - 5', viewValue: '4 - 5'},
    {value: '5+', viewValue: '5+'},
  ]
  matcher = new MyErrorStateMatcher();
 constructor(private formBuilder:FormBuilder,private experiencedetailservice:ExperiencedetailsService,private router:Router,private _snackBar: MatSnackBar){}
  // profileForm = this.formBuilder.group({
  //   email:['',Validators.required],
  //   designation: ['',Validators.required],
  //   companyname:['',Validators.required],
  //   currentsalary:['',Validators.required],
  //   noticeperiod:['',Validators.required],
  //   experience:['',Validators.required],
    
  // });

  ngOnInit():void {
    this.profileForm = new FormGroup({
      email:new FormControl('', [Validators.email]),
      designation:new FormControl('',[Validators.required]),
      companyname:new FormControl('', [Validators.required]),
      currentsalary:new FormControl('', [Validators.required]),
      noticeperiod:new FormControl('',[Validators.pattern('/(^$|[0-9]{10})/')]),
      experience:new FormControl('',[Validators.required])
    });
    // this.email=localStorage.getItem('loginEmail')
    if(localStorage.getItem("STEP_3")){
      var values =  JSON.parse(localStorage.getItem("STEP_3"));
      console.log(values);
        this.profileForm.setValue({
       email:values.email,
       designation:values.designation,
       companyname:values.companyname,
       currentsalary:values.currentsalary,
       noticeperiod:values.noticeperiod,
       experience:values.experience
       });
  
  }}

  durationInSeconds = 2;
  saveForm(){
    console.log('Form data is ', this.profileForm.value);
    localStorage.setItem("STEP_3",JSON.stringify(this.profileForm.value));
    const {designation,companyname,currentsalary,noticeperiod,experience}=this.profileForm.value
    this.user.email=localStorage.getItem('loginEmail')
    this.user.designation=designation
    this.user.companyname=companyname
    this.user.currentsalary=currentsalary
    this.user.noticeperiod= noticeperiod
    this.user.experience = experience
    //this.user.jobprofile = jobprofile

    if (
      designation == "" || companyname == "" ||currentsalary == "" || noticeperiod =="" || experience=="" ) {
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
      this.router.navigate(["/skill-details"]);
    this.experiencedetailservice.addApi(this.user).subscribe(
      (data) => {
        // alert("Education Details Added SuccessFully!!");
        {
          this._snackBar.open('Experience Details Added SuccessFully!!', 'close', {
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