import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //private baseURL = "http://localhost:8080";
  constructor(private httpClient: HttpClient) { }
  // getUserById(id: number): Observable<User>{
  //   return this.httpClient.get<User>(`${this.baseURL}+${id}`);
  // }

  getProfile(): Observable<any> {
    return this.httpClient.get<User>(`${baseURL + "/admin"}`);
  }
  // working
  // updateprofile(id:number,user:User):Observable<Object>{
  //   return this.httpClient.put(`${this.baseURL+"/profile"}/${id}`,user);
  // }
  updateprofile(id: number, user: User): Observable<Object> {
    // console.log("i am called from change password");
    return this.httpClient.put(baseURL + "/user/" + id, user);
  }
  // working
  // updateprofile(id: number,user: User):Observable<Object>{
  //   return this.httpClient.put(`${this.baseURL}`+"/profile/"+id,user);
  // }
  getProfiles(id: number): Observable<User> {
    return this.httpClient.get<User>(baseURL +"/user/getUser/"+id);
  }
}
