import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Testhistory } from '../model/testhistory';

@Injectable({
  providedIn: 'root'
})
export class TesthistoryService {
  private baseURL="http://localhost:8080/history"
  constructor(private _http: HttpClient) { }
//   public getTestHistory():Observable<Testhistory[]> {
   
//     return this._http.get<Testhistory[]>(`${this.baseURL}/gethistory`);
//   }
  public getTestHistoryById(id:number):Observable<any>{
    return this._http.get<Testhistory[]>(this.baseURL+"/gettesthistory/"+id);
  }
}
