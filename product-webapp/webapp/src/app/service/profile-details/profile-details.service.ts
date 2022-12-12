import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfileDetails } from './profile-details';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileDetailsService {
  constructor(private httpClient:HttpClient) { }
  


  private url = 'http://localhost:8090';
// deletePost(email){
//     return this.httpClient.delete(this.url+'/'+email);
//   }
// deleteMember(email) {
//   return this.httpClient.delete('http://localhost:8090/profile/delete' + email);
// }
deleteproductbyId(email:any){
  
  return this.httpClient.delete<ProfileDetails[]>(this.url+ "/profile/delete/" + email)
 }


}
