import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global'

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html'
})
export class NotesPage {

  constructor(
    public navCtrl: NavController,
    // public navParams: NavParams,
    public globals: GlobalProvider
    ) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
    this.globals.headerOpen = false
    console.log(this.globals.headerOpen)
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.globals.headerOpen = false
    console.log(this.globals.headerOpen)

  }

}
