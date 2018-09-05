import { Component } from '@angular/core';
import { NavController, Searchbar } from 'ionic-angular';
import { TopicsSearchResultsPage } from '../topics-search-results/topics-search-results';
import { BooksSearchResultsPage } from '../book-search-results/book-search-results';
import { NotesSearchResultsPage } from '../notes-search-results/notes-search-results';
import { SearchPage } from '../search';



@Component({
    selector: 'search-tabs',
    templateUrl: 'search-tabs.html'
    
})
export class SearchTabsPage {

  tab1Root = TopicsSearchResultsPage;
  tab2Root = BooksSearchResultsPage;
  tab3Root = NotesSearchResultsPage;

  constructor(public navCtrl: NavController) {
    
  }
  search () {
    console.log('re run search')
  }

//   toNotifications () {
//     this.navCtrl.push(NotificationsPage)
//   }
}
