import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class SearchProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SearchProvider Provider');
  }

  public getSearch():Observable<any>{
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Arsenal');
  }

}
