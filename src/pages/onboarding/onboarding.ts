import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../../pages/tabs/tabs';
import { SignupPage } from '../signup/signup'
import { LoginPage } from '../login/login';

/**
 * Generated class for the OnboardingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.html',
})
export class OnboardingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnboardingPage');
  }
  toLogin () {
    this.navCtrl.push(LoginPage)
  }
  toSignup () {
    this.navCtrl.push(SignupPage)
  }
}
