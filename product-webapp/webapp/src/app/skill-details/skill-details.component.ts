import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import{SkillDetails} from '../service/skill-details/skill-details';
import{SkillDetaisService} from '../service/skill-details/skill-detais.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
interface SkillList{
  value: string;
  viewValue: string;
}
interface levelList{
  value: string;
  viewValue: string;
}
export interface Skill {
  name: string;
  level:string;
}

@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.css']
})
export class SkillDetailsComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  centered = false;
  user: SkillDetails = new SkillDetails();
  registerData:SkillDetaisService;
  selectedSkill1: string;
  selectedLevel1: string;
  selectedSkill2: string;
  selectedLevel2: string;
  selectedSkill3: string;
  selectedLevel3: string;
  pref_skill: SkillList[] = [
    {value: 'Angular', viewValue: 'Angular'},
    {value: 'Html', viewValue: 'Html'},
    {value: 'Css', viewValue: 'Css'},
    {value: 'Javascript', viewValue: 'Javascript'},
    {value: 'Neo4j', viewValue: 'Neo4j'},
    {value: 'C', viewValue: 'C'},
    {value: 'C++', viewValue: 'C++'},
    {value: 'Java', viewValue: 'Java'},
    {value: 'Python', viewValue: 'Python'},   
  ];
 
  pref_level: levelList[] = [
    {value: 'Basic', viewValue: 'Basic'},
    {value: 'Intermediate', viewValue: 'Intermediate'},
    {value: 'Advanced', viewValue: 'Advanced'},
  ];

  
  constructor(private formBuilder:FormBuilder,private skilldetailservice:SkillDetaisService,private router:Router,private _snackBar: MatSnackBar){}
  profileForm = this.formBuilder.group({
    email:['',Validators.required],
    skill1:['',Validators.required],
    level1:['',Validators.required],
    skill2:['',Validators.required],
    level2:['',Validators.required],
    skill3:['',Validators.required],
    level3:['',Validators.required],
    
  });
  ngOnInit():void {
    // this.email=localStorage.getItem('loginEmail')
  
    if(localStorage.getItem("STEP_4")){
      var values =  JSON.parse(localStorage.getItem("STEP_4"));
      console.log(values);
        this.profileForm.setValue({
       email:values.email,
       skill1:values.skill1,
       level1:values.level1,
       skill2:values.skill2,
       level2:values.level2,
       skill3:values.skill3,
       level3:values.level3,

       });
  
  }}
  durationInSeconds = 2;
  saveForm(){
    console.log('Form data is ', this.profileForm.value);
    localStorage.setItem("STEP_4",JSON.stringify(this.profileForm.value));
    const {email,skill1,level1,skill2,level2,skill3,level3}=this.profileForm.value
    this.user.email=localStorage.getItem('loginEmail')
    this.user.skill1=skill1;
    this.user.skill2=skill2;
    this.user.skill3=skill3;
    this.user.level1=level1;
    this.user.level2=level2;
    this.user.level3=level3;
    if (
      skill1 == "" && level1 == "" 
      // && skill2 == "" && level2 =="" && skill3=="" && level3
      ) {
        // alert("Fields cannot be empty!")
        {
          this._snackBar.open('Enter Any One Skill & Level!', 'close', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: this.durationInSeconds * 1000,
          });
         
        }
     
    } 
    else{
      // this.router.navigate(["/skill-details"]);
    this.skilldetailservice.addApi(this.user).subscribe(
      (data) => {
        // alert("Education Details Added SuccessFully!!");
        {
          this._snackBar.open('Skill Details Added SuccessFully!!', 'close', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: this.durationInSeconds * 1000,
          });
         
        } 
      
        window.localStorage.removeItem('STEP_1');
      },
      
      error => (console.log(error)),
    
   );
    }

  }


}