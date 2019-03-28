import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import {SearchTeamDbPage} from '../search-team-db/search-team-db';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  search:string;
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    
  }

  searchTeam(){
    //console.log(this.search); get value of search bar to search for team
    this.navCtrl.push(SearchTeamDbPage);
  }
}
