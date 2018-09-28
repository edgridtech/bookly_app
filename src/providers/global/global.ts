// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluginWarn } from '@ionic-native/core';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {
  public navTitle: string
  public headerOpen: Boolean
  constructor(
    // public http: HttpClient
  ) {
    // console.log('Hello GlobalProvider Provider');
  }

}
