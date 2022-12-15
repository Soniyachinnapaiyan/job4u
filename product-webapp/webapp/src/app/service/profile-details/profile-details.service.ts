import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfileDetails } from './profile-details';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileDetailsService {
  constructor(private httpClient:HttpClient) { }
  


  private url = 'http://localhost:8080';
// deletePost(email){
//     return this.httpClient.delete(this.url+'/'+email);
//   }
// deleteMember(email) {
//   return this.httpClient.delete('http://localhost:8090/profile/delete' + email);
// }
deleteproductbyId(email:any){
  
  return this.httpClient.delete<ProfileDetails[]>(this.url+ "/profile-service/delete/" + email)
 }
 getProductRecommendationsByLocation(location:String){
  return this.httpClient.get<ProfileDetails[]>(this.url+ "/profile-service/recommendByCity/" +  location)
 }
 getAllProfile(){
  return this.httpClient.get<ProfileDetails[]>(this.url+ "/profile-service/getAllProfile")
 }
 getProductRecommendationsBySkill(skill1:String,level1:String){
  return this.httpClient.get<ProfileDetails[]>(`${this.url}/profile-service/recommendBySkill/${skill1}/${level1}`)
 }
 getProductRecommendationsBySLE(skill1:String,level1:String,experience:String){
  return this.httpClient.get<ProfileDetails[]>(`${this.url}/profile-service/recommendBySLE/${skill1}/${level1}/${experience}`)
 }
 getProductRecommendationsBySLL(skill1:String,level1:String,location:String){
  return this.httpClient.get<ProfileDetails[]>(`${this.url}/profile-service/recommendBySLL/${skill1}/${level1}/${location}`)
 }
 getProductRecommendationsByExperience(experience:String){
  return this.httpClient.get<ProfileDetails[]>(this.url+ "/profile-service/recommendByExperience/" +  experience)
 }
 getProductRecommendationsByChoice(location:String,skill1:String, experience:String,level1:String){
  return this.httpClient.get<ProfileDetails[]>(`${this.url}/profile-service/recommendByCity/${location}/${skill1}/${experience}/${level1}`)
  // return this.httpClient.get<ProfileDetails[]>(this.url+ "/profile/recommendByCity/" +'?location'+ location  + '?skill1'+skill1 +'?experience'+experience +'?level1'+level1)
 }


}
