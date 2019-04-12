import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SearchProvider} from '../../providers/search/search';
import { HomePage } from '../home/home';
//import {Storage} from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-search-team-db',
  templateUrl: 'search-team-db.html',
})
export class SearchTeamDbPage {
  team:any=[];
  hide:boolean=false;
  cnt:number = 0;
  teamName:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public search:SearchProvider) {
    console.log("searchTeamDB");
  }

  

  ionViewWillEnter() {
    console.log("hello searchTeamDB");
    // this.storage.get("searchTeam").then((val)=>{
    //   this.teamName = val;
    //   console.log(this.teamName); 
    // })
    
    this.openSearch();
  }

  openSearch(){
  //this.storage.ready();
    this.search.getSearch().subscribe((data)=>{
      this.team = data.teams;
    })
  }

  
  openIonCard(){
    this.cnt++;
    
    // toggle opening of Ion Cards
    if(this.cnt % 2 == 1){
      this.hide = true;
    }
    else if(this.cnt % 2 == 0){
      this.hide = false;
    }
  }

   


}
