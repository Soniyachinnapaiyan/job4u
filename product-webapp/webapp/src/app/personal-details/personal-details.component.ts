import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
interface Location {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent {
  centered = false;
  constructor(private formBuilder:FormBuilder){}
  pref_loc: Location[] = [
    {value: 'Hyderabad', viewValue: 'Hyderabad'},
    {value: 'banglr', viewValue: 'Banglore'},
    {value: 'Banglore', viewValue: 'Chennai'},
    {value: 'Mumbai', viewValue: 'Mumbai'},
    {value: 'Pune', viewValue: 'Pune'},
    {value: 'Delhi', viewValue: 'Delhi'},
    {value: 'Noida', viewValue: 'Noida'},
    {value: 'Kolkata', viewValue: 'Kolkata'}
  ];
 profileForm = this.formBuilder.group({
   fullName:['',Validators.required],
   email:['',Validators.required],
   address:['',Validators.required],
   dob:['',Validators.required],
   gender:['',Validators.required],
   phonenumber:['',Validators.required],
   preffered_location:['',Validators.required]
 });

 saveForm(){
   console.log('Form data is ', this.profileForm.value);
 }
}
