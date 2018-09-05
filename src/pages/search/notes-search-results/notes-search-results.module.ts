import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotesSearchResultsPage } from './notes-search-results';

@NgModule({
  declarations: [
    NotesSearchResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(NotesSearchResultsPage),
  ],
})
export class NotesSearchResultsPageModule {}
