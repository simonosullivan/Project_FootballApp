import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';
import { MatchesPage } from '../matches/matches';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  Homepage = HomePage;
  MatchesPage = MatchesPage;
  SettingsPage = SettingsPage;

}
