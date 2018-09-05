import { Component } from '@angular/core';
import { NavController, Searchbar } from 'ionic-angular';

import { LibraryPage } from '../library/library';
import { NotesPage } from '../notes/notes';
import { LearnPage } from '../learn/learn';
import { ProfilePage } from '../profile/profile'
import { SearchPage } from '../search/search';
import { NotificationsPage } from '../notifications/notifications';
import { GlobalProvider } from '../../providers/global/global'
import * as globalVariables from '../../global-variables/variables'

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // public navTitle: string
  public headerOpen: Boolean
  tab1Root = LearnPage;
  tab2Root = LibraryPage;
  tab3Root = NotesPage;
  tab4Root = ProfilePage

  constructor(
    public navCtrl: NavController,
    public globals: GlobalProvider
  ) {
    
  }
  
  ionViewDidLoad() {
    this.globals.headerOpen = true
  }
  changeTitle (data) {
    this.globals.navTitle = data
    console.log(data)
  }
  toSearch () {
    this.navCtrl.push(SearchPage)
  }

  toNotifications () {
    this.navCtrl.push(NotificationsPage)
  }
}
