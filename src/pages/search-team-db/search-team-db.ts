import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SearchProvider} from '../../providers/search/search';

@IonicPage()
@Component({
  selector: 'page-search-team-db',
  templateUrl: 'search-team-db.html',
})
export class SearchTeamDbPage {
  team:any=[];
  hide:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public search:SearchProvider) {
  }

  ionViewDidLoad() {
    this.search.getSearch().subscribe((data)=>{
      this.team = data.teams;
    })
  }

  openIonCard(){
    this.hide = false;
  }


}
