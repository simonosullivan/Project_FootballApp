import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FixturesProvider} from '../../providers/fixtures/fixtures';


/**
 * Generated class for the MatchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-matches',
  templateUrl: 'matches.html',
})
export class MatchesPage {
  fixtures:any=[];
  fixDate:string="2019-04-23";
  show:boolean = true;
  cnt: number =1;
  hide: boolean = false;
  id:number=1;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fix: FixturesProvider) {
    
  }

  ionChange(){
    this.fix.getFixtures(this.fixDate).subscribe((data)=>{
      this.fixtures = data.events;
    })
  }

  ionViewDidLoad() {

    this.fix.getFixtures(this.fixDate).subscribe((data)=>{
      this.fixtures = data.events;
    })
  }

  openGame(){
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
