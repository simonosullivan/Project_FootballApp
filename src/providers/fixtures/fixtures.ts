import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
/*
  Generated class for the FixturesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FixturesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FixturesProvider Provider');
  }

  public getFixtures(fixDate:string):Observable<any>{
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d='+fixDate+'&l=English_Premier_League');
  }

}
