import { Component, OnInit } from '@angular/core';
import {ProfileDetailsService} from '../service/profile-details/profile-details.service'
import { ProfileDetails } from '../service/profile-details/profile-details';
import { PageEvent } from '@angular/material/paginator';
import { Route, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { NoUserDialogComponent } from '../no-user-dialog/no-user-dialog.component';
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


@Component({
  selector: 'app-profilesearch',
  templateUrl: './profilesearch.component.html',
  styleUrls: ['./profilesearch.component.css']
})
export class ProfilesearchComponent implements OnInit{
  pageEvent: PageEvent;
  datasource: null;
  pageIndex:number;
  pageSize:number;
  length:number;
  lowValue: number = 0;
  highValue: number = 6;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  centered = false;
  public searchTerm : string='';
  recommendedobj:ProfileDetails=new ProfileDetails;
  public userlist:Array<ProfileDetails>=[
   
   ]
  
  skill:any;
  level:any;
  location:any;
  experience:any;

 
  constructor(private formBuilder:FormBuilder, private profiledetailservice:ProfileDetailsService,private _snackBar: MatSnackBar,private router:Router,public dialog: MatDialog){}
    profileForm = this.formBuilder.group({
      location:['',Validators.required],
      skill1:['',Validators.required],
      level1:['',Validators.required],
     experience:['',Validators.required]   
    });
  
  
  // profileForm = this.formBuilder.group({});
  pref_loc: Location[] = [
    
    {value: 'Hyderabad', viewValue: 'Hyderabad'},
    {value: 'Bangalore', viewValue: 'Bangalore'},
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
    return this.profiledetailservice.getProductRecommendationsByLocation(this.selectedlocation).subscribe(data=>{
      this.userlist=data;
      console.log(this.userlist);

      });
     }
     else{
      this.profiledetailservice.getProductRecommendationsByChoice(this.selectedlocation,this.selectedskill,this.selectedexperience,this.selectedlevel)
     }
   }
  
  pref_exp: Experience[] = [
    {value: 'Fresher', viewValue: 'Fresher'},
    {value: '1-2', viewValue: '1 - 2'},
    {value: '2-3', viewValue: '2 - 3'},
    {value: '3-4', viewValue: '3 - 4'},
    {value: '4-5', viewValue: '4 - 5'},
    {value: '5+', viewValue: '5+'},
  ]
  selectedexperience = this.pref_loc[0].value;

  selectexperience(event: Event) {
    console.log(this.selectedexperience);
    this.selectedexperience = (event.target as HTMLSelectElement).value;
   if(!this.selectedskill && !this.selectedlevel && !this.selectedlocation){
    return this.profiledetailservice.getProductRecommendationsByExperience(this.selectedexperience).subscribe(data=>{
      this.userlist=data;
      console.log(this.userlist);

      });
     }
     else{
      this.profiledetailservice.getProductRecommendationsByChoice(this.selectedlocation,this.selectedskill,this.selectedexperience,this.selectedlevel)
     }
   }
  pref_skill: SkillList[] = [
    {value: 'Angular', viewValue: 'Angular'},
    {value: 'Html', viewValue: 'Html'},
    {value: 'Css', viewValue: 'Css'},
    {value: 'Javascript', viewValue: 'JavaScript'},
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
    return this.profiledetailservice.getProductRecommendationsBySkill(this.selectedskill,this.selectedlevel).subscribe(data=>{
      this.userlist=data;
      console.log(this.userlist);
 
      });
     }
     else{
      this.profiledetailservice.getProductRecommendationsByChoice(this.selectedlocation,this.selectedskill,this.selectedexperience,this.selectedlevel)
     }
   }
  pref_level: levelList[] = [
    {value: 'Basic', viewValue: 'Basic'},
    {value: 'Intermediate', viewValue: 'Intermediate'},
    {value: 'Advance', viewValue: 'Advance'},
  ];
  selectedlevel = this.pref_loc[0].value;

  selectlevel(event: Event) {
    console.log(this.selectedlevel);
    this.selectedlevel = (event.target as HTMLSelectElement).value;
   
    this.profiledetailservice.getProductRecommendationsByChoice(this.selectedlevel,this.selectedexperience,this.selectedlocation,this.selectedskill).subscribe(data=>{
      this.userlist=data;
      console.log(this.userlist);

      });

      

     
   } 

  ngOnInit(): void {
    if(localStorage.getItem("SEARCH_KEY")!=null){
      var values =  JSON.parse(localStorage.getItem("SEARCH_KEY"));
      console.log(values);
        this.profileForm.setValue({
       location:values.location,
       skill1:values.skill1,
       experience:values.experience,
       level1:values.level1
     });
     this.search();
    }

}

public getPaginatorData(event: PageEvent): PageEvent {
  this.lowValue = event.pageIndex * event.pageSize;
  this.highValue = this.lowValue + event.pageSize;
  return event;}
// recommendedobj:ProfileDetails=new ProfileDetails;
  durationInSeconds = 2;
  gotomoreinfo(user){
     console.log(user);
     localStorage.setItem("CURRENT_USER",JSON.stringify(user));

  }
  search(){
    console.log("search is calling");
    const {skill1,location,level1,experience}=this.profileForm.value
      this.recommendedobj.skill1=skill1
      this.recommendedobj.location=location
      this.recommendedobj.level1=level1
      this.recommendedobj.experience=experience
      if(this.recommendedobj.skill1=="" &&  this.recommendedobj.level1=="" && this.recommendedobj.experience==""){
        return this.profiledetailservice.getProductRecommendationsByLocation(this.recommendedobj.location).subscribe(data=>{
          this.userlist=data;
          console.log(this.userlist);
    
          },
          error=>{console.log(error);
            this.dialog.open(NoUserDialogComponent);
  
          }
          );
         }
         if(this.recommendedobj.skill1=="" && this.recommendedobj.level1=="" && this.recommendedobj.location==""){
          return this.profiledetailservice.getProductRecommendationsByExperience(this.recommendedobj.experience).subscribe(data=>{
            this.userlist=data;
            console.log(this.userlist);
      
            },
            error=>{console.log(error);
              this.dialog.open(NoUserDialogComponent);
    
            }
            );
           }
           if(this.recommendedobj.experience=="" && this.recommendedobj.location==""){
            return this.profiledetailservice.getProductRecommendationsBySkill(this.recommendedobj.skill1,this.recommendedobj.level1).subscribe(data=>{
              this.userlist=data;
              console.log(this.userlist);
         
              },
              error=>{console.log(error);
                this.dialog.open(NoUserDialogComponent);
      
              }
              );
             }
             else{
    this.profiledetailservice.getProductRecommendationsByChoice(this.recommendedobj.location,this.recommendedobj.skill1,this.recommendedobj.experience,this.recommendedobj.level1).subscribe(
          (data) => {
            console.log(data);
            this.userlist=data;
            console.log(this.userlist);
         
            // alert("Education Details Added SuccessFully!!");
      
            
          },
          error=>{console.log(error);
            this.dialog.open(NoUserDialogComponent);
  
          }
        
       );
      }
  
}


}
export class TabGroupPaginatedExample {
  lotsOfTabs = new Array(30).fill(0).map((_, index) => `Tab ${index}`);
}