import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global'

//NGRX imports
import { Store, select } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { INCREMENT, DECREMENT, RESET } from '../../store/counter';
import { AppState } from '../../app.state';



/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// interface AppState {
//   counter: number;
// }

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public classes: any
  public fullname: string
  public achievement: string
  public achievementNo: number
  public achievements: any
  count$: any
  test: any
  userDetails: any
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public globals: GlobalProvider,
    private store: Store<AppState>
    ) {
      store.select('userDetails').subscribe(test => {
        this.userDetails = test[0]
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.globals.headerOpen = false
    // this.fullname = 'Adewale Williams'
    this.achievements = this.userDetails.achievements
    this.achievementNo = 1
    // this.achievements = 
    this.check()
    this.achievement = this.achievements[this.achievementNo - 1].name,
    this.classes = [
      {class: 'SS 1', value: 'SS 1'},
      {class: 'SS 2', value: 'SS 2'},
      {class: 'SS 3', value: 'SS 3'}
    ]
    console.log(this.globals.headerOpen)
  }
  ionViewWillEnter() {
    console.log(this.userDetails);
    this.fullname = this.userDetails.personalDetails[0].fullname
    this.globals.headerOpen = false
    console.log(this.fullname)

  }
  // increment(){
	// 	this.store.dispatch({ type: INCREMENT });
	// }
  check() {
    switch (this.achievementNo) {
      case 1:
        this.achievements[0].class = 'one'
        this.achievements[0].active = ''
        break;
      case 2:
        this.achievements[0].active = ''
        this.achievements[1].active = ''
        this.achievements[0].class = 'one'
        this.achievements[1].class = 'two'
        break;
      case 3:
        this.achievements[0].active = ''
        this.achievements[1].active = ''
        this.achievements[2].active = ''
        this.achievements[0].class = 'one'
        this.achievements[1].class = 'two'
        this.achievements[2].class = 'three'
        break;
      case 4:
        this.achievements[0].active = ''
        this.achievements[1].active = ''
        this.achievements[2].active = ''
        this.achievements[3].active = ''
        this.achievements[0].class = 'one'
        this.achievements[1].class = 'two'
        this.achievements[2].class = 'three'
        this.achievements[3].class = 'four'
        break;
      case 5:
        this.achievements[0].active = ''
        this.achievements[1].active = ''
        this.achievements[2].active = ''
        this.achievements[3].active = ''
        this.achievements[4].active = ''
        this.achievements[0].class = 'one'
        this.achievements[1].class = 'two'
        this.achievements[2].class = 'three'
        this.achievements[3].class = 'four'
        this.achievements[4].class = 'five'
      case 6:
        this.achievements[0].active = ''
        this.achievements[1].active = ''
        this.achievements[2].active = ''
        this.achievements[3].active = ''
        this.achievements[4].active = ''
        this.achievements[5].active = ''
        this.achievements[0].class = 'one'
        this.achievements[1].class = 'two'
        this.achievements[2].class = 'three'
        this.achievements[3].class = 'four'
        this.achievements[4].class = 'five'
        this.achievements[5].class = 'six'
        break;
    
      default:
        break;
    }
  }

}
