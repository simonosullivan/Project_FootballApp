import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchTeamDbPage } from './search-team-db';

@NgModule({
  declarations: [
    SearchTeamDbPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchTeamDbPage),
  ],
})
export class SearchTeamDbPageModule {}
