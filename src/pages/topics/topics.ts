import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global'
// import {Subscription} from 'rxjs/Subscription';
import { Http } from '@angular/http';
// import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { SingleTopicPage } from '../single-topic/single-topic';
import { MyServiceProvider } from '../../providers/my-service/my-service'

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
  public subject: string
  public topics: any
  public isSearching: Boolean
  public topImg: string
  // Subscription: Subscription;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public globals: GlobalProvider,
    public myService: MyServiceProvider,
    public http: Http
    ) {
      this.topics = navParams.get("selectedSubject").topics
      this.topImg = navParams.get("selectedSubject").image
      this.subject = navParams.get("selectedSubject").subject
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicsPage');
    // this.topics = [
    //   { title: 'Reproductive System', isLocked: false, isSearching: false },
    //   { title: 'Circulatory System', isLocked: true, isSearching: false },
    //   { title: 'Digestive System', isLocked: false, isSearching: false },
    //   { title: 'Taxonomy', isLocked: false, isSearching: false },
    //   { title: 'Plant Biology', isLocked: false, isSearching: false },
    // ]
    this.globals.headerOpen = false
    console.log(this.globals.headerOpen)
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.globals.headerOpen = false
    this.isSearching = false
    console.log(this.globals.headerOpen)

  }
  toTopic(e, i) {
    // console.log(this.topics)
    // console.log(this.topImg)
    // console.log(this.subject)
    // this.myService.login()
    this.topics[i].isSearching = true
    let selectedSubject = this.subject
    let options = {
      'part': 'snippet',
      'key': 'AIzaSyBYzgYBvLtto8EW1aP3vyP9ZTeRP4AEfq0',
      'q': this.subject + '-' + e,
    }
    console.log(this.subject)
    let url = 'https://www.googleapis.com/youtube/v3/search'
    this.http.get(url, {params: options})
    .subscribe(data => {
      this.topics[i].isSearching = false
      // console.log(data)
      let payload = [{data}, e]
      this.navCtrl.push(SingleTopicPage, {
        payload
      })
    })
    // this.Subscription = this.myService.searchVideo(e).then()
  }

  goBack() {
    this.navCtrl.pop()
  }

}
