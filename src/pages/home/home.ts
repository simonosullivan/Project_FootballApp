import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import {SearchTeamDbPage} from '../search-team-db/search-team-db';
import {Storage} from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  search:string;
  searchQuery:string;
  constructor(public navCtrl: NavController, public storage:Storage) {

  }

  ionViewWillEnter(){
    this.storage.clear();
  }

  searchTeam(){
    //console.log(this.searchQuery); //get value of search bar to search for team
    
    this.storage.set("searchTeam" ,this.searchQuery);
    this.navCtrl.push(SearchTeamDbPage);
  }
}
