import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../model/card';
import { Revenue } from '../model/revenue';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  constructor(private http: HttpClient) { }
  validatePayment(card: Card) {
    return this.http.post(baseURL + "/card/validate", card);
  }

  addRevenue(revenue: any) {
    return this.http.post(baseURL + "/revenue/", revenue);
  }
}
