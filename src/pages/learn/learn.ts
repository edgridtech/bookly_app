import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global'
import { MyServiceProvider } from '../../providers/my-service/my-service'
import { TopicsPage } from '../topics/topics';

//NGRX imports
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INCREMENT, DECREMENT, RESET } from '../../store/counter';
import { AppState } from '../../app.state';
@Component({
  selector: 'page-learn',
  templateUrl: 'learn.html'
})
export class LearnPage {
  public subjects: any
  userDetails: any
  constructor(
    public navCtrl: NavController,
    // public navParams: NavParams,
    public globals: GlobalProvider,
    private store: Store<AppState>
    ) {
      store.select('userDetails').subscribe(test => {
        this.userDetails = test[0]
      })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
    this.globals.headerOpen = true
    this.subjects = this.userDetails.selectedSubjects
    // console.log(this.subjects)
  }
  ionViewWillEnter() {
    // console.log('ionViewWillEnter');
    this.globals.headerOpen = true
    // console.log(this.globals.headerOpen)
    // console.log(this.userDetails)

  }
  
  toSubject (i) {
    let selectedSubject = this.subjects[i]
    this.navCtrl.push(TopicsPage, {
      selectedSubject
    })
  }

}
 