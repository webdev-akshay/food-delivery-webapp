import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private foodData='assets/mockData.json'
  constructor(private http:HttpClient) { }

  getFoodData():Observable<any>{
    return this.http.get(this.foodData)
  }
}
