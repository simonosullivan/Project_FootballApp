import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';


@Injectable()
export class SearchProvider {
  

  constructor(public http: HttpClient) {
    console.log('Hello SearchProvider Provider');
  }

  // ionViewWillEnter(){
  //   this.storage.get("searchTeam").then((val)=>{
  //     this.teamName = val;
  //     console.log(this.teamName);console.log(this.teamName);console.log(this.teamName);console.log(this.teamName);console.log(this.teamName);
  //   })
  // }

  public getSearch(name:string):Observable<any>{
    console.log("getSearch");
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t='+this.teamName);
  }

}
