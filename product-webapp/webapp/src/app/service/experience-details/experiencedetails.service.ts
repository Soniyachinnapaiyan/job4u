import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencedetails } from './experiencedetails';
@Injectable({
  providedIn: 'root'
})
export class ExperiencedetailsService {

  constructor(private httpClient:HttpClient) { }

  addApi(experienceDetailsData:Experiencedetails ) {
    return this.httpClient.post<any>(
      "http://localhost:8080/experience-service/sender",experienceDetailsData
    );
  }
}
