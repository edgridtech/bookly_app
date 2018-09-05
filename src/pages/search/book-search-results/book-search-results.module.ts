import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BooksSearchResultsPage } from '../book-search-results/book-search-results';

@NgModule({
  declarations: [
    BooksSearchResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(BooksSearchResultsPage),
  ],
})
export class BooksSearchResultsPageModule {}
