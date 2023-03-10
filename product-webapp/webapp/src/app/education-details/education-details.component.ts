import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import{Educationdetails} from '../service/education-details/educationdetails';
import{EducationdetailsService} from '../service/education-details/educationdetails.service';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
import { ErrorStateMatcher } from '@angular/material/core';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid);
  }
}
@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.css']
})
export class EducationDetailsComponent implements OnInit{
  profileForm: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  centered = false;
  user: Educationdetails = new Educationdetails();
  registerData:EducationdetailsService;
  matcher = new MyErrorStateMatcher();
  constructor(private formBuilder:FormBuilder,private educationdetailservice:EducationdetailsService,private router:Router,private _snackBar: MatSnackBar){}
  // profileForm = this.formBuilder.group({
  //   highest_qualification:['',Validators.required],
  //   email:['',Validators.required],
  //   specialization:['',Validators.required],
  //   institute_name:['',Validators.required],
  //   passing_year:['',Validators.required],
  //   cgpa:['',Validators.required],
  // });
  
  ngOnInit():void {
    this.profileForm = new FormGroup({
      email:new FormControl('', [Validators.email]),
      highest_qualification:new FormControl('',[Validators.required]),
      specialization:new FormControl('', [Validators.required]),
      institute_name:new FormControl('', [Validators.required]),
      passing_year:new FormControl('',[Validators.pattern("^[0-9]*$")]),
      cgpa:new FormControl('',[Validators.required])
    });
    // this.email=localStorage.getItem('loginEmail')
    if(localStorage.getItem("STEP_2")){
      var values =  JSON.parse(localStorage.getItem("STEP_2"));
      console.log(values);
        this.profileForm.setValue({
          highest_qualification:values.highest_qualification,
          specialization:values.specialization,
          institute_name:values.institute_name,
          passing_year:values.passing_year,
          cgpa:values.cgpa,
          email:values.email,
  
     });
  
  }}
  durationInSeconds = 2;
 
  saveForm(){
    console.log('Form data is ', this.profileForm.value);
    localStorage.setItem("STEP_2",JSON.stringify(this.profileForm.value));
    const {email,highest_qualification,specialization,institute_name,passing_year,cgpa}=this.profileForm.value
    this.user.email=localStorage.getItem('loginEmail')
    this.user.highest_qualification=highest_qualification
    this.user.specialization=specialization
    this.user.institute_name=institute_name
    this.user.passing_year= passing_year
    this.user.cgpa = cgpa

    if (
      highest_qualification == "" ||specialization == "" || institute_name=="" || passing_year=="" || cgpa=="") {
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
      this.router.navigate(["/experience-details"]);
    this.educationdetailservice.addApi(this.user).subscribe(
      (data) => {
        // alert("Education Details Added SuccessFully!!");
        {
          this._snackBar.open('Education Details Added Successfully!', 'close', {
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