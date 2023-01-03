import { Component ,OnInit} from '@angular/core';
@Component({
  selector: 'app-moreinfo',
  templateUrl: './moreinfo.component.html',
  styleUrls: ['./moreinfo.component.css']
})
export class MoreinfoComponent implements OnInit {
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
  ngOnInit():void {
    // this.email=localStorage.getItem('loginEmail')
    if(localStorage.getItem("CURRENT_USER")!=null){
      var values =  JSON.parse(localStorage.getItem("CURRENT_USER"));
          this.username=values.username
          this.location=values.location
          this.email=values.email
          this.dob =values.dob
          this.gender=values.gender
          this.contactnumber=values.contactnumber
          this.highest_qualification=values.highest_qualification
          this.specialization=values.specialization
          this.institute_name=values.institute_name
          this.passing_year=values.passing_year
          this.cgpa=values.cgpa
          this.designation=values.designation
          this.companyname=values.companyname
          this.noticeperiod=values.noticeperiod
          this.experience=values.experience
          this.currentsalary=values.currentsalary
          this.skill1=values.skill1
          this.skill2=values.skill2
          this.skill3=values.skill3
          this.level1=values.level1
          this.level2=values.level2
          this.level3=values.level3
      }
    }
    getfile(){
      const link = document.createElement("a");
      var splitted = this.email.split("@", 1); 
      console.log(splitted)
        link.href = "http://localhost:8091/profile-service/uploads/files/"+splitted[0]+".pdf";
        link.target="_blank";
        // link.download.pathname("/src/app/assets/resume");
        link.click();
        link.remove(); 
    }
}