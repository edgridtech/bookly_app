import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';

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
  swipeTrue: Boolean
  // manualSlide: {}
  constructor( 
    public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
    this.subjects = [
      {subject: 'English Language', value:  ''  ,style: 'EnglishStyle', seleted: true},
      {subject: 'Literature', value:  ''  ,style: 'LitStyle', seleted: false},
      {subject: 'Biology', value:  ''  ,style: 'BioStyle', seleted: false},
      {subject: 'Civic Education', value:  ''  ,style: 'CivStyle', seleted: false},
      {subject: 'Agricultural Science', value:  ''  ,style: 'AgricStyle', seleted: false},
      {subject: 'Mathematics', value:  ''  ,style: 'MathStyle', seleted: true},
      {subject: 'Chemistry', value:  ''  ,style: 'ChemStyle', seleted: false},
      {subject: 'Geography', value:  ''  ,style: 'GeoStyle', seleted: false},
      {subject: 'Physics', value:  ''  ,style: 'PhyStyle', seleted: false},
      {subject: 'Commerce', value:  ''  ,style: 'CommStyle', seleted: false},
      {subject: 'Economics', value:  ''  ,style: 'EcoStyle', seleted: false}
    ]
    // this.classes = [
    //   'ss1', 'ss2', 'ss3'
    // ]
    this.swipeTrue  = false
    this.isActive = false
    // this.btnClass = 'subjectButton'
    console.log(this.subjects)
  }
  active (i) {
    // this.isActive = !this.isActive
    this.subjects[i].seleted = !this.subjects[i].seleted
    // }
    if (this.subjects[i].seleted === true) {
      this.subjects[i].value = this.subjects[i].style    
    } 
    if (this.subjects[i].seleted === false) {
      this.subjects[i].value = ''
    }
  }
  continue () {
    this.swipeTrue = !this.swipeTrue
    console.log(this.swipeTrue)
  }
  signup () {
    this.showAlert()
    let selectedSubjects = this.subjects.filter(subject => {
      return subject.value != ''
    })
    console.log(selectedSubjects)
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
