import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SkillDetails } from './skill-details';
@Injectable({
  providedIn: 'root'
})
export class SkillDetaisService {

  
    constructor(private httpClient:HttpClient) { }

    addApi(skillDetailsData:SkillDetails ) {
      return this.httpClient.post<any>(
        "http://localhost:8088/rabbitmq/sender",skillDetailsData
      );
    }
  }

