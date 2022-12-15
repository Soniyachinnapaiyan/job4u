import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SendEmail } from '../service/send-email/send-email';
import { SendEmailService } from '../service/send-email/send-email.service';
import { Route, Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { EmailDialogComponent } from '../email-dialog/email-dialog.component';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  centered = false;
  emailobj:SendEmail=new SendEmail();
  constructor(private formBuilder:FormBuilder,private router: Router,private emailservice: SendEmailService,private _snackBar: MatSnackBar,public dialog: MatDialog) {}
    profileForm = this.formBuilder.group({
      recipient:['',Validators.required],
      company_name: ['',Validators.required],
      message:['',Validators.required],
      recruiter_name:['',Validators.required],     
    });
  
  durationInSeconds = 2;
  sendmail(){
    console.log('Form data is ', this.profileForm.value);
    const {recipient,company_name,message,recruiter_name}=this.profileForm.value
    this.emailobj.recruiter_name=recruiter_name
    this.emailobj.recipient=recipient
    this.emailobj.company_name=company_name
    this.emailobj.message=message
    console.log(this.emailobj.recipient);
    this.emailservice
      .emailnotification(this.emailobj)
      .subscribe(
        (data) => {
          //  console.log("Personal Details Added SuccessFully!!");
          // {
          //   this._snackBar.open('Mail Sent Successfully!', 'close', {
          //     horizontalPosition: this.horizontalPosition,
          //     verticalPosition: this.verticalPosition,
          //     duration: this.durationInSeconds * 1000,
          //   });
           
          // } 
        
            this.dialog.open(EmailDialogComponent);
          
      
          
         },
         error => (console.log(error)),
      );
    
  }
  


}
