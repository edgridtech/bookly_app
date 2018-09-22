import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
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
  searchVideo(searchTerm) {
    // let myHeaders = new Headers();
    // myHeaders.append('Content-Type', 'application/json');    
    // let myParams = new URLSearchParams();
    // myParams.append(
    //   'part', 'snippet'
    // )
    // myParams.append(
    //   'key', 'AIzaSyBYzgYBvLtto8EW1aP3vyP9ZTeRP4AEfq0'
    // )
    // myParams.append(
    //   'q', searchTerm
    // )
    let options = {
      'part': 'snippet',
      'key': 'AIzaSyBYzgYBvLtto8EW1aP3vyP9ZTeRP4AEfq0',
      'q': searchTerm,
    }
    let url = 'https://www.googleapis.com/youtube/v3/search'
    this.http.get(url, {params: options})
    .subscribe(data => {
      console.log(data)
    })
  }

}
