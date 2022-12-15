import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonalDetails } from 'src/app/service/personal-details/personal-details';



@Injectable({
  providedIn: 'root'
})
export class PersonalDetailsService {

  constructor(private httpClient:HttpClient) { }
  


  addApi(PersonalDetailsData: PersonalDetails ) {
    return this.httpClient.post<any>(
      "http://localhost:8080/personal-detail-service/sender",PersonalDetailsData
    );
  }
}