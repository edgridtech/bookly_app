import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';
import { LearnPage } from '../learn/learn';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';

//NGRX imports
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INCREMENT, DECREMENT, RESET } from '../../store/counter';
import { AppState } from '../../app.state';
import * as userActons from '../../store/actions/user.actions'
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  subjects: any
  btnClass: any
  isActive: Boolean
  classes: any
  class: string
  public username: string
  public phoneNo: number
  public password: string
  swipeTrue: Boolean
  public one: Boolean
  selectedSubjectsDetails: any
  userDetails: any
  // manualSlide: {}
  constructor( 
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private store: Store<AppState>
    ) {
      store.select('userDetails').subscribe(test => {
        this.userDetails = test[0]
      })
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SignupPage');
    this.selectedSubjectsDetails = []
    this.one = true
    this.username = ''
    this.subjects = this.userDetails.subjects
    this.classes = [
      'ss1', 'ss2', 'ss3'
    ]
    this.swipeTrue  = false
    this.isActive = false
    this.active (0)
    this.active (1)
    // this.btnClass = 'subjectButton'
    console.log(this.userDetails)
  }
  active (i) {
    // this.isActive = !this.isActive
    this.subjects[i].selected = !this.subjects[i].selected
    // }
    if (this.subjects[i].selected === true) {
      this.subjects[i].value = this.subjects[i].style    
    } 
    if (this.subjects[i].selected === false) {
      this.subjects[i].value = ''
    }
  }
  continue () {
    this.one = false
    // this.swipeTrue = !this.swipeTrue
    // console.log(this.swipeTrue)
  }
  onChange(data) {
    this.class = data
    console.log(data)
  }
  signup () {
    // this.showAlert()
    let data = {
      username: this.username,
      class: this.class,
      password: this.password,
      phoneNo: this.phoneNo
    }
    // console.log(data)
    this.store.dispatch(new userActons.ChangeName(
      data.username 
    ))
    let selectedSubjects = this.subjects.filter(subject => {
      return subject.value != ''
    })
    if (selectedSubjects.length !== 0) {
      selectedSubjects = selectedSubjects
      console.log(this.userDetails)
      selectedSubjects.forEach(instance => {
        let test = this.userDetails.subjectDetails.filter(subject => {
          return subject.subject === instance.subject
        })
        this.selectedSubjectsDetails.push(...test)
        // console.log(instance)
        console.log(this.userDetails)
      })
    } else {
      selectedSubjects = []
    }
    this.store.dispatch(new userActons.AddSubjects(
      this.selectedSubjectsDetails  
    ))
    // console.log(selectedSubjects)
    this.navCtrl.push(TabsPage)
  }
  toLogin () {
    this.navCtrl.push(LoginPage)
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

}
