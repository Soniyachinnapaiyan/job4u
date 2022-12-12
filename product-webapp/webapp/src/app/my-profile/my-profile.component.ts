import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import{SkillDetails} from '../service/skill-details/skill-details';
import{SkillDetaisService} from '../service/skill-details/skill-detais.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ProfileDetailsService} from '../service/profile-details/profile-details.service'
import { ProfileDetails } from '../service/profile-details/profile-details';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  centered = false;
  public profiledata:any;
  user: ProfileDetails = new ProfileDetails();
    posts;
    username:String;
    location:String;
    email:String;
    dob:String;
    gender:String;
    contactnumber:String;
    highest_qualification:string;
    specialization:string;
    institute_name:string;
    passing_year:string;
    cgpa:string;
    designation:string;
    companyname:string;
    noticeperiod:string;
    experience:string;
    currentsalary:string;
    skill1:string;
    skill2:string;
    skill3:string;
    level1:string;
    level2:string;
    level3:string;
  
    constructor(private formBuilder:FormBuilder,private router:Router,private profiledetailservice:ProfileDetailsService,private _snackBar: MatSnackBar){}
  form = this.formBuilder.group({
    username:['',Validators.required],
 
  })
  // });ngOnInit():void {
    // this.email=localStorage.getItem('loginEmail')
  
    ngOnInit():void {
   // this.username = "soniya";
      this.email=localStorage.getItem('loginEmail')
      if(localStorage.getItem("STEP_1")!=null){
        var values =  JSON.parse(localStorage.getItem("STEP_1"));
            this.username=values.username
            this.location=values.location
            this.dob =values.dob
            this.gender=values.gender
            this.contactnumber=values.contactnumber
       
        }
        if(localStorage.getItem("STEP_2")!=null){
          var values =  JSON.parse(localStorage.getItem("STEP_2"));
              this.highest_qualification=values.highest_qualification
              this.specialization=values.specialization
              this.institute_name=values.institute_name
              this.passing_year=values.passing_year
              this.cgpa=values.cgpa
        
          }
          if(localStorage.getItem("STEP_3")!=null){
            var values =  JSON.parse(localStorage.getItem("STEP_3"));
                this.designation=values.designation
                this.companyname=values.companyname
                this.noticeperiod=values.noticeperiod
                this.experience=values.experience
                this.currentsalary=values.currentsalary
          
            }
            if(localStorage.getItem("STEP_4")!=null){
              var values =  JSON.parse(localStorage.getItem("STEP_4"));
                this.skill1=values.skill
                this.level1=values.level1
                this.skill2=values.skill2
                this.level2=values.level2
                this.skill3=values.skill3
                this.level3=values.level3
            
              }
              
  

      }
      durationInSeconds = 2;
      deleteprofile(){
        this.profiledetailservice.deleteproductbyId(localStorage.getItem("loginEmail")).subscribe((data) => {
          this.profiledata = data;
          console.log(this.profiledata);
          this.email = this.profiledata.email;
          this.username = this.profiledata.username;
          this.contactnumber = this.profiledata.contactnumber;
          this.dob = this.profiledata.dob;
          this.gender = this.profiledata.gender;
          this.location = this.profiledata.location;
          this.highest_qualification = this.profiledata.highest_qualification;
          this.specialization = this.profiledata.specialization;
          this.institute_name = this.profiledata.institute_name;
          this.passing_year = this.profiledata.passing_year;
          this.cgpa = this.profiledata.cgpa;
          this.designation = this.profiledata.designation;
          this.companyname = this.profiledata.companyname;
          this.noticeperiod = this.profiledata.noticeperiod;
          this.experience = this.profiledata.experience;
          this.currentsalary = this.profiledata.currentsalary;
          this.skill1 = this.profiledata.skill1;
          this.skill2 = this.profiledata.skill2;
          this.skill3 = this.profiledata.skill3;
          this.level1 = this.profiledata.level1;
          this.level2 = this.profiledata.level2;
          this.level3 = this.profiledata.level3;
        });
      this.profiledetailservice.deleteproductbyId(this.profiledata)
    .subscribe((data) =>{
      // alert("Education Details Added SuccessFully!!");
      {
        this._snackBar.open('User Deleted SuccessFully!!', 'close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds * 1000,
        });
       
      } 

    window.localStorage.removeItem('STEP_1');
  window.localStorage.removeItem('STEP_2');
  window.localStorage.removeItem('STEP_3');
  window.localStorage.removeItem('STEP_4');
      
    },
    error => (console.log(error)),

);
  }
}
