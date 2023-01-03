import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import{SkillDetails} from '../service/skill-details/skill-details';
import{SkillDetaisService} from '../service/skill-details/skill-detais.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ProfileDetailsService} from '../service/profile-details/profile-details.service'
import { ProfileDetails } from '../service/profile-details/profile-details';

import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
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
  // pdfSrc: string = '/pdf-test.pdf';
  pdfSrc: string;
  pdfSrc1:string;
  public uploadFileName: string;
  public uploadFileContent:string;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  centered = false;
  public profiledata:any;
  user: ProfileDetails = new ProfileDetails();
    posts;
    username:String;
    location:String;
    email:string;
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
    profileurl:string;
    skill1:string;
    skill2:string;
    skill3:string;
    level1:string;
    level2:string;
    level3:string;
    selectedFile: File;
  imgURL: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  
  constructor(private httpClient: HttpClient,private formBuilder:FormBuilder,private router:Router,private profiledetailservice:ProfileDetailsService,private _snackBar: MatSnackBar){}
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
  onUpload() {
    console.log(this.selectedFile);
    const uploadImageData = new FormData();
    uploadImageData.append("file",this.selectedFile);
    uploadImageData.append("fullName",this.email)
    // uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    
  //   let headers = new Headers();
  // headers.append('Content-Type','multipart/form-data');
//post data missing(here you pass email and password)

const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
const body = { title: 'Angular POST Request Example' };
this.httpClient.post<any>('http://localhost:8091/profile-service/upload', uploadImageData, { headers,observe:'response' }).subscribe(
  (response) => {
        if (response.status === 200) {
          this.message = 'Document uploaded successfully';
        } else {
          this.message = 'Document not uploaded successfully';
        }
      }

    )
  }
//     const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
//     const body = { title: 'Angular POST Request Example' };
//     this.httpClient.post<any>('https://reqres.in/api/posts', body, { headers }).subscribe({data => {
//         this.postId = data.id;
//     },
//     error: error => {
//       this.errorMessage = error.message;
//       console.error('There was an error!', error);
//   }
// }
// );
    // this.httpClient.post('http://localhost:8080/upload', uploadImageData, { observe: 'response', })
    //   .subscribe((response) => {
    //     if (response.status === 200) {
    //       this.message = 'Image uploaded successfully';
    //     } else {
    //       this.message = 'Image not uploaded successfully';
    //     }
    //   }
    //   );


  

  // getImage() {
  //   this.httpClient.get('http://localhost:8082/image/get/' + this.imageName)
  //     .subscribe(
  //       res => {
  //         this.retrieveResonse = res;
  //         this.base64Data = this.retrieveResonse.picByte;
  //         this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
  //       }
  //     );
  // }

    // public async onFileSelected1(event:any) {

    //   const file:File = event.target.files[0];
    //   this.uploadFileName = file.name;
    //   this.uploadFileContent = await file.text(); 
      
    //   //get object from json file
    //   //let obj = JSON.parse(this.uploadFileContent);
    // }
  
  
  //   public uploaddata(): void {
       
  //     let fileName = "soniya" + '.' + '.pdf';
  //     // let fileContent = JSON.stringify( {name: "test name"} );
    
  //     const file = new Blob([this.pdfSrc], { type:"pdf"});
    
  //     const link = document.createElement("a");
  //     link.href = URL.createObjectURL(file);
  //     link.download = fileName;
  //     // link.download.pathname("/src/app/assets/resume");
  //     link.click();
  //     link.remove(); 
  //   }
  getfile(){
    const link = document.createElement("a");
    var splitted = this.email.split("@", 1); 
    console.log(splitted)
      link.href = "http://localhost:8091/uploads/files/"+splitted[0]+".pdf";
      link.target="_blank";
      // link.download.pathname("/src/app/assets/resume");
      link.click();
      link.remove(); 
  }
  //   onFileSelected() {
  //     let $img: any = document.querySelector('#file');
  
  //     if (typeof (FileReader) !== 'undefined') {
  //      let reader = new FileReader();
  
  //       reader.onload = (e: any) => {
  //         this.pdfSrc = e.target.result;
  //       };
  
  //       reader.readAsArrayBuffer($img.files[0]);
  //     }
  //  }
  //  previewdata(){
  //   // <pdf-viewer [src]="pdfSrc" [render-text]="true" [original-size]="false" 
  //   // style="height: 500px; width: 400px;">
  //   // </pdf-viewer>
  //   this.pdfSrc1 = this.pdfSrc;
  //   window.open("C:/Users/asus/Downloads/soniya.pdf");
  //   // var doc = document.createElement('pdf-viewer') as HTMLImageElement;
  //   // doc.src="pdfSrc";
    
  //  }
    // file:File;
    // upload(event) {
    //   this.file = event.target.files[0];
    //   console.log(this.file);
    // }
    
    
  form = this.formBuilder.group({
    username:['',Validators.required],
 
  })
  // });ngOnInit():void {
    // this.email=localStorage.getItem('loginEmail')
    // openFile("help.pdf");

    ngOnInit():void {
     
      // window.open("assets/resume/1.pdf");
   
        // window.open("D:/localfolder/Aadhaarcard");
    
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
                this.skill1=values.skill1
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
          console.log(data);
      window.localStorage.removeItem('STEP_1');
      window.localStorage.removeItem('STEP_2');
      window.localStorage.removeItem('STEP_3');
      window.localStorage.removeItem('STEP_4');
      // alert("Education Details Added SuccessFully!!");
      {
        this._snackBar.open('User Deleted SuccessFully!!', 'close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds * 1000,
        });
       
      } 
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
//       this.profiledetailservice.deleteproductbyId(this.profiledata)
//     .subscribe((data) =>{
//       localStorage.removeItem('STEP_1');
//       localStorage.removeItem('STEP_2');
//       localStorage.removeItem('STEP_3');
//       localStorage.removeItem('STEP_4');
//       // alert("Education Details Added SuccessFully!!");
//       {
//         this._snackBar.open('User Deleted SuccessFully!!', 'close', {
//           horizontalPosition: this.horizontalPosition,
//           verticalPosition: this.verticalPosition,
//           duration: this.durationInSeconds * 1000,
//         });
       
//       } 

 
      
//     },
//     error => (console.log(error)),

// );
  }
}