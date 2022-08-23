import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { observable, Observable, Subject } from 'rxjs';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  flag = false
  type!: string
  currentUser: any;
  name!: string;
  public loginStatusSubject = new Subject<boolean>();

  constructor(private http: HttpClient) {
  }

  addUser(user: User): Observable<Object> {
    return this.http.post(baseURL + "/user/signup", user);
  }

  loginUser(email: string, password: string) {
    return this.http.post(baseURL + "/user/login", { email, password }, { responseType: 'text' });
  }

  isLogged(str: string) {
    this.type = str;
    //this.currentUser = localStorage.getItem('data');
    //console.log("here"+this.currentUser);
    if (str === "ADMIN" || str === "NORMAL") {
      //if (getType != null || getType != undefined || getType != '') {
      //this.flag = true;
    }
    this.statusLog();
  }

  statusLog(): boolean {
    //if(localStorage.)
    let getType = localStorage.getItem('data')
    if (getType != null || getType != undefined || getType != '') {
      this.flag = true;
    }
    console.log(this.flag)
    return this.flag;
  }
  setUsername(name: string) {
    this.name = name;
  }
  getUsername(): string {
    return this.name
  }
  getCurrentUser(email: string): Observable<any> {
    return this.http.get<User>(baseURL + "/user/" + email);

  }

  public storeDetails(data: string, user: User) {
    //console.log("storeDetails()"+data);
    console.log("local storage is called")
    localStorage.setItem('data', data)
    localStorage.setItem('type', this.type)
    localStorage.setItem('name', user.username)
    localStorage.setItem('id', user.id.toString());
    //console.log("here"+localStorage.getItem('data'));
  }

  public logout() {
    console.log("done");
    localStorage.clear();
    localStorage.removeItem('data');
  }


}
