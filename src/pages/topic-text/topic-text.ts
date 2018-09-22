import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TopicVideoPage } from '../topic-video/topic-video';

/**
 * Generated class for the TopicTextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topic-text',
  templateUrl: 'topic-text.html',
})
export class TopicTextPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicTextPage');
  }

  toVideo() {
    this.navCtrl.push(TopicVideoPage)
  }
}
