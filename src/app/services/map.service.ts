import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private httpClient: HttpClient) { }

  // Not able to get a service which can provide location of IP
  public getIpLoc(){
    this.getIp().subscribe((res:any)=>{
      var ip = res.ip;
      var url = "" + ip + "/json";
      this.httpClient.get(url).subscribe((data)=>{
        return data;
      });
    });
  }

  private getIp(){
    var url = "http://api.ipify.org/?format=json";
    return this.httpClient.get(url);
  }

}
