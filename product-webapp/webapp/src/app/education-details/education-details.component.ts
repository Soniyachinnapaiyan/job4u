import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.css']
})
export class EducationDetailsComponent {
  centered = false;
  constructor(private formBuilder:FormBuilder){}
  profileForm = this.formBuilder.group({
    highest_qualification:['',Validators.required],
    specialization:['',Validators.required],
    institute_name:['',Validators.required],
    passing_year:['',Validators.required],
    cgpa:['',Validators.required],
  });
 
 
  saveForm(){
    console.log('Form data is ', this.profileForm.value);
  }
}
