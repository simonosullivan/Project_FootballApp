import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
@Injectable()
export class SportsNewsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SportsNewsProvider Provider');
  }

  getSportsNews():Observable<any>{
    return this.http.get('https://newsapi.org/v2/everything?q=football&apiKey=8ac1b62b29be415ebe851469402a6c53');
  }
}
