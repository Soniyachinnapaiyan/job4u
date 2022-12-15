import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SendEmail } from './send-email';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {
  baseUrl="http://localhost:8080";
  

  constructor(private httpClient: HttpClient) { }


  emailnotification(details: SendEmail): Observable<Object> {
     return this.httpClient.post(this.baseUrl+"/email-service/sendMailWithAttachment",details);
  }

}
