import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, sample } from 'rxjs';
import { Revenue } from '../model/revenue';

@Injectable({
  providedIn: 'root'
})
export class RevenueService {

  private baseURL = "http://localhost:8080/revenue"
  constructor(private http: HttpClient) { }

  getRevenues(startDate: string, endDate: string): Observable<Revenue[]> {
    return this.http.get<Revenue[]>(this.baseURL + "/" + startDate + "/" + endDate);
  }
  getTotalRevenue():Observable<Number>{
    return this.http.get<Number>(this.baseURL+"/totalRevenue");
  }
}
