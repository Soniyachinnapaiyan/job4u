import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educationdetails } from 'src/app/service/education-details/educationdetails';

@Injectable({
  providedIn: 'root'
})
export class EducationdetailsService {

  constructor(private httpClient:HttpClient) { }


  
  addApi(educationDetailsData:Educationdetails ) {
    return this.httpClient.post<any>(
      "http://localhost:8082/rabbitmq/sender",educationDetailsData
    );
  }
}
