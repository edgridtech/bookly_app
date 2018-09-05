import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global'

/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {
  public noNotification: Boolean
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public globals: GlobalProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
    this.globals.headerOpen = true
    console.log(this.globals.headerOpen)
    this.noNotification = true
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.globals.headerOpen = true
    console.log(this.globals.headerOpen)

  }
}
