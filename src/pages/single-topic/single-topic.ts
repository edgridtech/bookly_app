import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global'
import { TopicTextPage } from '../topic-text/topic-text';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the SingleTopicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-single-topic',
  templateUrl: 'single-topic.html',
})
export class SingleTopicPage {
  public beforeSearch: Boolean
  public videoUrl: string
  public topics: any
  public data: any
  public videos: any
  public test: string
  public heading: string
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public globals: GlobalProvider,
    public sanitizer: DomSanitizer) {
      this.data = navParams.get("payload")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleTopicPage');
    this.globals.headerOpen = false
    this.beforeSearch = true
    this.topics = [
      {
        backImg: '../../assets/imgs/bio.png',
        videoUrl: 'https://www.youtube.com/embed/zyKFGcvkJxE?list=RDXA6WSrazyRs',
        title: 'An Introduction to Biology'
      }
    ]
    this.videos = JSON.parse(this.data[0].data._body).items
    this.heading = this.data[1]
    this.videoUrl = "https://www.youtube.com/embed/"
    this.test = 'T9VHfMRmKig'
    // console.log(heading)
  }
  ionViewWillEnter() {
    // console.log('ionViewWillEnter');
    // this.globals.headerOpen = false
    // console.log(this.data)

  }
  toText() {
    this.navCtrl.push(TopicTextPage)
  }
  goBack() {
    this.navCtrl.pop()
  }
  search() {
    console.log(JSON.parse(this.data[0]._body))
    console.log(this.videos)
  }

}
