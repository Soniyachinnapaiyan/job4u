import { Component ,OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import{PersonalDetails} from '../service/personal-details/personal-details';
import{PersonalDetailsService} from '../service/personal-details/personal-details.service';
interface Location {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  centered = false;
  user: PersonalDetails = new PersonalDetails();
  registerData:PersonalDetailsService;

  contactnumberPattern = new RegExp(
    /(^$|[0-9]{10})/
  );




  constructor(private formBuilder:FormBuilder,private personalDetailservice:PersonalDetailsService,private router:Router){}
  pref_loc: Location[] = [
    {value: 'Hyderabad', viewValue: 'Hyderabad'},
    {value: 'Banglore', viewValue: 'Banglore'},
    {value: 'Chennai', viewValue: 'Chennai'},
    {value: 'Mumbai', viewValue: 'Mumbai'},
    {value: 'Pune', viewValue: 'Pune'},
    {value: 'Delhi', viewValue: 'Delhi'},
    {value: 'Noida', viewValue: 'Noida'},
    {value: 'Kolkata', viewValue: 'Kolkata'}
  ];
  
 profileForm = this.formBuilder.group({
   username:['',Validators.required],
   email:['',Validators.required],
   dob:['',Validators.required],
   gender:['',Validators.required],
   contactnumber:['',Validators.required],
   location:['',Validators.required]
 });

 ngOnInit():void {
  // this.email=localStorage.getItem('loginEmail')

}

 saveForm(){
   console.log('Form data is ', this.profileForm.value);
   const {email,username,contactnumber,dob,location,gender}=this.profileForm.value
   this.user.email=localStorage.getItem('loginEmail')
   this.user.username=username
   this.user.contactnumber=contactnumber
   this.user.dob=dob
   this.user.location=location
   this.user.gender=gender
   this.personalDetailservice.addApi(this.user).subscribe(
     (data) => {
       console.log("Personal Details Added SuccessFully!!");
      
     },
     error => (console.log(error)),
   
  );
 }

}
