import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global'
import { TextbookPage } from '../textbook/textbook';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage {

  constructor(
    public navCtrl: NavController,
    // public navParams: NavParams,
    public globals: GlobalProvider
    ) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
    this.globals.headerOpen = true
    console.log(this.globals.headerOpen)
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.globals.headerOpen = true
    console.log(this.globals.headerOpen)

  }

  toBook() {
    this.navCtrl.push(TextbookPage)
  }

}
