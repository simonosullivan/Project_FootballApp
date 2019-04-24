import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import {SearchTeamDbPage} from '../search-team-db/search-team-db';
import {Storage} from '@ionic/storage';
import {SearchProvider} from '../../providers/search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  search:string;
  searchQuery:string;
  favTeam =[];
  teamId:number;
  constructor(public navCtrl: NavController, public storage:Storage, public find:SearchProvider) {

  }

  ionViewWillEnter(){

    this.find.favTeamSearch().subscribe((data)=>{
      this.favTeam = data.teams;
    })

  }

  searchTeam(){
    
    this.storage.set("searchTeam" ,this.searchQuery);
    this.navCtrl.push(SearchTeamDbPage);
  }

  
}
