import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SendEmail } from './send-email';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {
  baseUrl="http://localhost:8897";
  // baseUrl="https://swapsquad.stackroute.io"

  constructor(private httpClient: HttpClient) { }


  emailnotification(details: SendEmail): Observable<Object> {
     return this.httpClient.post(this.baseUrl+"/sendMailWithAttachment",details);
  }

}
