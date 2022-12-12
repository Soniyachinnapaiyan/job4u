import { Component, OnInit } from '@angular/core';
import {ProfileDetailsService} from '../service/profile-details/profile-details.service'
import { ProfileDetails } from '../service/profile-details/profile-details';
interface Location {
  value: string;
  viewValue: string;
}
interface Experience {
  value: string;
  viewValue: string;
}
interface SkillList {
  value: string;
  viewValue: string;
}
interface levelList {
  value: string;
  viewValue: string;
}

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-main-homepage',
  templateUrl: './main-homepage.component.html',
  styleUrls: ['./main-homepage.component.css']
})
export class MainHomepageComponent implements OnInit {
  public searchTerm : string='';
  recommendedobj:ProfileDetails=new ProfileDetails;
  skill:any;
  level:any;
  location:any;
  experience:any;
  profileForm:FormGroup;
  public abc:Array<ProfileDetails>=[];
  constructor(private formBuilder:FormBuilder, private profiledetailservice:ProfileDetailsService){
    this.profileForm = new FormGroup({
      location: new FormControl(),
      experience: new FormControl(),
      skill: new FormControl(),
      level:new FormControl(),
          });
  }
  
  // profileForm = this.formBuilder.group({});
  pref_loc: Location[] = [
    
    {value: 'Hyderabad', viewValue: 'Hyderabad'},
    {value: 'banglore', viewValue: 'Banglore'},
    {value: 'Chennai', viewValue: 'Chennai'},
    {value: 'Mumbai', viewValue: 'Mumbai'},
    {value: 'Pune', viewValue: 'Pune'},
    {value: 'Delhi', viewValue: 'Delhi'},
    {value: 'Noida', viewValue: 'Noida'},
    {value: 'Kolkata', viewValue: 'Kolkata'}
  ];
  
  selectedlocation = this.pref_loc[0].value;

  selectlocation(event: Event) {
    console.log(this.selectedlocation);
    this.selectedlocation = (event.target as HTMLSelectElement).value;
   if(!this.selectedskill && !this.selectedexperience && !this.selectedlevel){
    // return this.profiledetailservice.getProductRecommendationsByLocation(this.selectedlocation).subscribe(data=>{
    //   this.abc=data;
    //   console.log(this.abc);

    //   });

      

     }
     else{
      // this.profiledetailservice.getProductRecommendationsByChoice(this.selectedlocation,this.selectedskill,this.selectedexperience,this.selectedlevel)
     }
   }
  pref_exp: Experience[] = [
    {value: 'Fresher', viewValue: 'Fresher'},
    {value: '1 - 2', viewValue: '1 - 2'},
    {value: '2 - 3', viewValue: '2 - 3'},
    {value: '3 - 4', viewValue: '3 -4'},
    {value: '4 - 5', viewValue: '4 - 5'},
    {value: '5+', viewValue: '5+'},
  ]
  selectedexperience = this.pref_loc[0].value;

  selectexperience(event: Event) {
    console.log(this.selectedexperience);
    this.selectedexperience = (event.target as HTMLSelectElement).value;
   if(!this.selectedskill && !this.selectedlevel && !this.selectedlocation){
    // return this.profiledetailservice.getProductRecommendationsByExperience(this.selectedexperience).subscribe(data=>{
    //   this.abc=data;
    //   console.log(this.abc);

    //   });

      

     }
     else{
      // this.profiledetailservice.getProductRecommendationsByChoice(this.selectedlocation,this.selectedskill,this.selectedexperience,this.selectedlevel)
     }
   }
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
  selectedskill = this.pref_loc[0].value;

  selectskill(event: Event) {
    console.log(this.selectedskill);
    this.selectedskill = (event.target as HTMLSelectElement).value;
   if(!this.selectedexperience && !this.selectedlocation){
    // return this.profiledetailservice.getProductRecommendationsBySkill(this.selectedskill,this.selectedlevel).subscribe(data=>{
    //   this.abc=data;
    //   console.log(this.abc);
 
    //   });

      

     }
     else{
      // this.profiledetailservice.getProductRecommendationsByChoice(this.selectedlocation,this.selectedskill,this.selectedexperience,this.selectedlevel)
     }
   }
  pref_level: levelList[] = [
    {value: 'Basic', viewValue: 'Basic'},
    {value: 'Intermediate', viewValue: 'Intermediate'},
    {value: 'Advanced', viewValue: 'Advanced'},
  ];
  selectedlevel = this.pref_loc[0].value;

  selectlevel(event: Event) {
    console.log(this.selectedlevel);
    this.selectedlevel = (event.target as HTMLSelectElement).value;
   
    // this.profiledetailservice.getProductRecommendationsByChoice(this.selectedlevel,this.selectedexperience,this.selectedlocation,this.selectedskill).subscribe(data=>{
    //   this.abc=data;
    //   console.log(this.abc);

    //   });

      

     
   } 

  ngOnInit(): void {
   
  //   this.profiledetailservice.getAllProfile().subscribe((data:any)=>{
  //     console.log("data",data);
  //     for (let i= data.length-1; i >= 0; i--) {
  //     this.abc.push(data[i]);
  //     }
  //     this.abc.map(image=>{
  //       console.log(image);

  //     console.log(this.abc);
  //   });
  // }
  //   )}
  }

  search(event:any){
    console.log(this.profileForm.value);
    this.recommendedobj.location=this.profileForm.value.location
    this.recommendedobj.skill1 =this.profileForm.value.skill1
    this.recommendedobj.level1=this.profileForm.value.level1
    this.recommendedobj.experience=this.profileForm.value.experience

    
this.searchTerm = (event.target as HTMLInputElement).value;
     console.log(this.searchTerm);
  }
}

