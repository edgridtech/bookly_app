import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import * as apiUrls from '../../services/apiUrls.service'

/*
  Generated class for the MyServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyServiceProvider {

  constructor(public http: Http) {
    console.log('Hello MyServiceProvider Provider');
  }

  login () {
    this.http.get(apiUrls.marketTickerDataUrl)
    .subscribe(res => {
      console.log(res)
    })
  }

}
