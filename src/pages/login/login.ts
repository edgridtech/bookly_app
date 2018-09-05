import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  passwordText: Boolean
  textType: string
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.passwordText = false;
    this.textType = 'password'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.togglePassword()
  }
  login () {
    this.navCtrl.push(TabsPage)
  }
  toSignup () {
    this.navCtrl.push(SignupPage)
    console.log('fhsih')
  }
  toForgot() {
    this.navCtrl.push(ForgotPasswordPage)
  }
  toggleType() {
    this.passwordText = !this.passwordText
  }
  togglePassword() {
    this.toggleType()
    if (this.passwordText === true) {
      this.textType = 'text'
      console.log(this.passwordText)
    } else {
      this.textType === 'password'
      console.log(this.passwordText)
    }
  }

}
