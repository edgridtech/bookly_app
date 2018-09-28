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
import { QuizPage } from '../quiz/quiz';

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
  public quizzes: any
  public subjectQuery: string
  public test: any
  // Subscription: Subscription;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public globals: GlobalProvider,
    public myService: MyServiceProvider,
    public http: Http
    ) {
      this.test = navParams.get("selectedSubject")
      this.topics = navParams.get("selectedSubject").topics
      this.topImg = navParams.get("selectedSubject").image
      this.subject = navParams.get("selectedSubject").subject
      this.subjectQuery = navParams.get("selectedSubject").value
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicsPage');
    console.log(this.test)
    // this.topics = [
    //   { title: 'Reproductive System', isLocked: false, isSearching: false },
    //   { title: 'Circulatory System', isLocked: true, isSearching: false },
    //   { title: 'Digestive System', isLocked: false, isSearching: false },
    //   { title: 'Taxonomy', isLocked: false, isSearching: false },
    //   { title: 'Plant Biology', isLocked: false, isSearching: false },
    // ]
    this.globals.headerOpen = false
    this.quizzes = [
      { title: 'WASSCE', year: '2011', isLoading: false },
      { title: 'UTME', year: '2002', isLoading: false },
      // { title: 'WAEC', year: '2003', isLoading: false },
      // { title: 'WAEC', year: '2004', isLoading: false },
      // { title: 'WASSCE', year: '2005', isLoading: false },
      // { title: 'WAEC', year: '2006', isLoading: false },
      // { title: 'WAEC', year: '2007', isLoading: false }
    ]
    // console.log(this.globals.headerOpen)
  }
  ionViewWillEnter() {
    // console.log('ionViewWillEnter');
    this.globals.headerOpen = false
    this.isSearching = false
    // console.log(this.globals.headerOpen)

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
  toQuiz(quizDetails, i) {
    this.quizzes[i].isLoading = true
    let options = {
      subject: this.subjectQuery,
      // year: quizDetails.year,
      // type: quizDetails.title
    }
    console.log(options)
    let url = 'https://questions.aloc.ng/api/m'
    this.http.get(url, {params: options})
    .subscribe(data => {
      console.log(data)
      this.quizzes[i].isLoading = false
      this.navCtrl.push(QuizPage, {data})
    })
  }
}
