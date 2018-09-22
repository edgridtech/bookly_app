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
      {
        subject: 'Mathematics', 
        image: 'Mathematics',
        topics: [
          { title: 'Algebra', isLocked: false, isSearching: false },
          { title: 'Differentiation', isLocked: true, isSearching: false },
          { title: 'Integration - calculus', isLocked: false, isSearching: false },
          { title: 'Matrices', isLocked: false, isSearching: false },
          { title: 'Polynomials', isLocked: false, isSearching: false },
        ]
      },
      {
        subject: 'English Language', 
        image: 'English',
        topics: [
          { title: 'Comprehension', isLocked: false, isSearching: false },
          { title: 'Diphthongs', isLocked: true, isSearching: false },
          { title: 'consonant sounds', isLocked: false, isSearching: false },
          { title: 'Vowel sounds', isLocked: false, isSearching: false },
          { title: 'Letter Writing', isLocked: false, isSearching: false },
        ]
      },
      {
        subject: 'Literature', 
        image: 'Literature'
      },
      {
        subject: 'Chemistry', 
        image: 'Chemistry',
        topics: [
          { title: 'Oxygen and its compounds', isLocked: false, isSearching: false },
          { title: 'Nitrogen and its compounds', isLocked: true, isSearching: false },
          { title: 'Acids, Bases and salts', isLocked: false, isSearching: false },
          { title: 'Chemical Equations', isLocked: false, isSearching: false },
          { title: 'Ph', isLocked: false, isSearching: false },
          { title: 'Structure of an Atom', isLocked: false, isSearching: false },
          { title: 'Periodic Chemistry', isLocked: true, isSearching: false },
          { title: 'Bonding', isLocked: false, isSearching: false },
          { title: 'States of matter', isLocked: false, isSearching: false },
          { title: 'Redox Reactions', isLocked: false, isSearching: false },
          { title: 'Metals & their compounds', isLocked: false, isSearching: false },
          { title: 'Nitrogen and its compounds', isLocked: true, isSearching: false },
          { title: 'Acids and Bases', isLocked: false, isSearching: false },
          { title: 'Chemical Equations', isLocked: false, isSearching: false },
          { title: 'Ph', isLocked: false, isSearching: false },
        ]
      },
      {
        subject: 'Biology', 
        image: 'Biology',
        topics: [
          { title: 'Reproductive System', isLocked: false, isSearching: false },
          { title: 'Circulatory System', isLocked: true, isSearching: false },
          { title: 'Digestive System', isLocked: false, isSearching: false },
          { title: 'Taxonomy', isLocked: false, isSearching: false },
          { title: 'Plant Biology', isLocked: false, isSearching: false },
          { title: 'Concept of Living', isLocked: false, isSearching: false },
          { title: 'Circulatory System', isLocked: true, isSearching: false },
          { title: 'Cell structure and functions', isLocked: false, isSearching: false },
          { title: 'Excretion', isLocked: false, isSearching: false },
          { title: 'Skeletal System', isLocked: false, isSearching: false },
          { title: 'Respiratory System', isLocked: false, isSearching: false },
          { title: 'Nervous System', isLocked: true, isSearching: false },
          { title: 'Nutrition', isLocked: false, isSearching: false },
          { title: 'Ecosystem', isLocked: false, isSearching: false },
          { title: 'Heredity', isLocked: false, isSearching: false },
        ]
      },
      {
        subject: 'Economics', 
        image: 'Economics',
        topics: [
          { title: 'Intro. to Economics', isLocked: false, isSearching: false },
          { title: 'Micro Economics', isLocked: true, isSearching: false },
          { title: 'Consumer Behavious', isLocked: false, isSearching: false },
          { title: 'Demand', isLocked: false, isSearching: false },
          { title: 'Supply', isLocked: false, isSearching: false },
          { title: 'Trade', isLocked: false, isSearching: false },
          { title: 'Money and Inflation', isLocked: false, isSearching: false },
          { title: 'Public Finace', isLocked: false, isSearching: false },
          { title: 'Industrialization', isLocked: false, isSearching: false },
        ]
      },
      {
        subject: 'Commerce', 
        image: 'Commerce'
      },
      {
        subject: 'Physics', 
        image: 'Physics'
      },
      {
        subject: 'Geography', 
        image: 'Geography'
      },
      {
        subject: 'Civic Education', 
        image: 'Civic'},
      {
        subject: 'Commerce', 
        image: 'Commerce'},
      {
        subject: 'Agricultural Sci.', 
        image: 'Agricultural',
        topics: [
          { title: 'Meaning of Agriculture', isLocked: false, isSearching: false },
          { title: 'Agricultural Ecology', isLocked: true, isSearching: false },
          { title: 'Agricultural Mechanization', isLocked: false, isSearching: false },
          { title: 'Crop Production', isLocked: false, isSearching: false },
          { title: 'Forestry', isLocked: false, isSearching: false },
          { title: 'Animal Production', isLocked: false, isSearching: false },
          { title: 'Agricultural Economics', isLocked: false, isSearching: false },
          { title: 'Soil Profile', isLocked: false, isSearching: false },
          // { title: 'Industrialization', isLocked: false, isSearching: false },
        ]
      }
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
  
  toSubject (i) {
    let selectedSubject = this.subjects[i]
    this.navCtrl.push(TopicsPage, {
      selectedSubject
    })
  }

}
 