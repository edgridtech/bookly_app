import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopicsSearchResultsPage } from './topics-search-results';

@NgModule({
  declarations: [
    TopicsSearchResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(TopicsSearchResultsPage),
  ],
})
export class TopicsSearchResultsPageModule {}
