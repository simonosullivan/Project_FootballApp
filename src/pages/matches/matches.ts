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
  fixDate:string="2019-04-08";
  constructor(public navCtrl: NavController, public navParams: NavParams, public fix: FixturesProvider) {
    console.log(this.fixDate);
  }

  ionChange(){
    console.log(this.fixDate);
    this.fix.getFixtures(this.fixDate).subscribe((data)=>{
      this.fixtures = data.events;
    })
  }

  ionViewDidLoad() {

    this.fix.getFixtures(this.fixDate).subscribe((data)=>{
      this.fixtures = data.events;
    })
  }

}
