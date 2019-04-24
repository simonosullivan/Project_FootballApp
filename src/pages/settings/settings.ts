import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert, AlertController } from 'ionic-angular';
import {SearchProvider} from '../../providers/search/search';
import {Storage} from '@ionic/storage';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  teams:any=[];
  pickedTeam:string;
  id:number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public search:SearchProvider, public storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    this.search.listAllTeams().subscribe((data)=>{
      this.teams = data.teams;
      //this.teams[0].idTeam
    })

  }

  teamsToStorage(){
   
    this.storage.set("pickedTeam" ,this.pickedTeam);
    //console.log(this.teams[0].idTeam);
    console.log(this.pickedTeam);
  }
  
  



}
