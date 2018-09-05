import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global'
import { MyServiceProvider } from '../../providers/my-service/my-service'
import { TopicsPage } from '../topics/topics';

@Component({
  selector: 'page-learn',
  templateUrl: 'learn.html'
})
export class LearnPage {
  public subjects: any
  constructor(
    public navCtrl: NavController,
    // public navParams: NavParams,
    public globals: GlobalProvider
    ) {
    this.subjects = [
      {'subject': 'Mathematics', 'image': 'Mathematics'},
      {'subject': 'English Language', 'image': 'English'},
      {'subject': 'Literature', 'image': 'Literature'},
      {'subject': 'Chemistry', 'image': 'Chemistry'},
      {'subject': 'Biology', 'image': 'Biology'},
      {'subject': 'Economics', 'image': 'Economics'},
      {'subject': 'Commerce', 'image': 'Commerce'},
      {'subject': 'Physics', 'image': 'Physics'},
      {'subject': 'Geography', 'image': 'Geography'},
      {'subject': 'Civic Education', 'image': 'Civic'},
      {'subject': 'Commerce', 'image': 'Commerce'},
      {'subject': 'Agricultural Sci.', 'image': 'Agric'}
    ]
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
  
  toSubject () {
    this.navCtrl.push(TopicsPage)
  }

}
 