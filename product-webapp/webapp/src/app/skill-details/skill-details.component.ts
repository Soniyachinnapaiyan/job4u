import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
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
export class SkillDetailsComponent {
  selectedSkill: string;
  selectedLevel: string;
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
  centered = false;
  constructor(private formBuilder:FormBuilder){}
  profileForm = this.formBuilder.group({
    skill_name:['',Validators.required],
    level:['',Validators.required],
    
  });
  saveForm(){
    console.log('Form data is ', this.profileForm.value);
  }

  addOnBlur = true;
  skills: Skill[] = [];
  
  add(event: MatChipInputEvent): void {
    const value = (this.selectedSkill);
    const value1 = (this.selectedLevel);
    
    // Add our skills
    if (value) {
      this.skills.push({name: value, level: value1});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(skill: Skill): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

}
