import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Storage} from '@ionic/storage';


@Injectable()
export class SearchProvider {
  teamName:string;

  constructor(public http: HttpClient, public storage:Storage) {
    console.log('Hello SearchProvider Provider');
    this.storage.get("searchTeam").then((val)=>{
      this.teamName = val;
      console.log(this.teamName); 
    })
  }

  // ionViewWillEnter(){
  //   this.storage.get("searchTeam").then((val)=>{
  //     this.teamName = val;
  //     console.log(this.teamName);console.log(this.teamName);console.log(this.teamName);console.log(this.teamName);console.log(this.teamName);
  //   })
  // }

  public getSearch():Observable<any>{
    console.log("getSearch");
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t='+this.teamName);
  }

}
