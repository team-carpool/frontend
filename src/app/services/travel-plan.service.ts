import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TravelPlanService {

  constructor(private httpClient: HttpClient) { }

  public updateCurrentUserLoc(coord: String){
    console.log(coord);
    return this.httpClient.post('http://localhost:8080/travel/currentloc', coord);
  }
}
