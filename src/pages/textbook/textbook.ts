import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global'

/**
 * Generated class for the TextbookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-textbook',
  templateUrl: 'textbook.html',
})

export class TextbookPage {
  public pdfSrc: string
  public title: string
  zoom: number
  public searching: Boolean
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public globals: GlobalProvider
  ) {
  }

  // @ViewChild(TextbookPage) private pdfComponent: TextbookPage;
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad TextbookPage');
    this.globals.headerOpen = false
    this.zoom = 1.0;
    this.searching = false
    this.title = 'Angular 2'
    this.pdfSrc = '../../assets/pdf/AngularJs_2_A4.pdf'
  }
  incrementZoom(amount: number) {
    this.zoom += amount;   
  }
  openSearch() {
    this.searching = !this.searching
  }
  goBack() {
    this.navCtrl.pop()
  }
  // search(stringToSearch: string) {
  //   this.pdfComponent.pdfFindController.executeCommand('find', {
  //     caseSensitive: false, findPrevious: undefined, highlightAll: true, phraseSearch: true, query: stringToSearch
  //   });
  // }

}
