import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global'

/**
 * Generated class for the TopicsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topics',
  templateUrl: 'topics.html',
})
export class TopicsPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public globals: GlobalProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicsPage');
    this.globals.headerOpen = false
    console.log(this.globals.headerOpen)
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.globals.headerOpen = false
    console.log(this.globals.headerOpen)

  }

}
