import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.css']
})
export class ExperienceDetailsComponent {
  centered = false;
  constructor(private formBuilder:FormBuilder){}
  profileForm = this.formBuilder.group({
    designation: ['',Validators.required],
    companyname:['',Validators.required],
    currentsalary:['',Validators.required],
    noticeperiod:['',Validators.required],
    experience:['',Validators.required],
    jobprofile:['',Validators.required],
    
  });
  saveForm(){
    console.log('Form data is ', this.profileForm.value);
  }
}
