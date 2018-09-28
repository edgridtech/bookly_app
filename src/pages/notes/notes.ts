import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global'
import { SearchPage } from '../search/search';

//NGRX imports
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INCREMENT, DECREMENT, RESET } from '../../store/counter';
import { AppState } from '../../app.state';

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html'
})
export class NotesPage {
  public notesCount: Boolean
  public addNote: Boolean
  public notes: any
  public noteTitle: string
  public noteText: string
  public selectedNotes: any
  public delete: Boolean
  public checkBox: any
  userDetails: any
  constructor(
    public navCtrl: NavController,
    // public navParams: NavParams,
    public globals: GlobalProvider,
    public alerts: AlertController,
    private store: Store<AppState>
    ) {
      store.select('userDetails').subscribe(test => {
        this.userDetails = test[0]
      })
  }
  ionViewDidLoad() {
    console.log(this.userDetails);
    this.globals.headerOpen = false
    this.notesCount = false
    this.addNote = false
    this.delete = false
    this.selectedNotes = []
    this.noteText = ''
    this.noteText = ''
    this.checkBox = {
      display: 'none'
    }
    this.notes = this.userDetails.notes
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.globals.headerOpen = false

  }
  ToAddNote() {
    this.addNote = true
  }
  saveNote() {
    let day = new Date()
    let month = day.getMonth()
    let mnthNo = ''
      switch (month) {
        case 1:
          mnthNo = 'Jan'
          break;
          case 2:
            mnthNo = 'Feb'
            break;
          case 3:
            mnthNo = 'Mar'
            break;
          case 4:
            mnthNo = 'Apr'
            break;
          case 5:
            mnthNo = 'May'
            break;
          case 6:
            mnthNo = 'Jun'
            break;
          case 7:
            mnthNo = 'Jul'
            break;
          case 8:
            mnthNo = 'Aug'
            break;
          case 9:
            mnthNo = 'Sep'
            break;
          case 10:
            mnthNo = 'Oct'
            break;
          case 11:
            mnthNo = 'Nov'
            break;
          case 12:
            mnthNo = 'Dec' 
            break;     
        default:
          break;
      }
    let newNote = {
      timeStamp: `${day.getDate()} ${mnthNo}`,
      title: this.noteTitle,
      text: this.noteText
    }
    if (this.noteTitle === '') {
      let alert = this.alerts.create({
        title: 'No Title',
        subTitle: 'Please add a title to your note',
        buttons: ['Dismiss']
      });
      alert.present();
    } else if (this.noteText === '') {
      let alert = this.alerts.create({
        title: 'No Text',
        subTitle: 'please add some text to your note',
        buttons: ['Dismiss']
      });
      alert.present();
    } else {
      this.notes.unshift(newNote)
      this.noteTitle = this.noteText = ''
      let alert = this.alerts.create({
        title: 'Note addded',
        subTitle: 'Note Sucessfully created',
        buttons: ['Dismiss']
      });
      alert.present();
      this.addNote = false
    }
  }

  openSelect() {
    this.checkBox = {
      display: 'block'
    }   
    this.delete = true 
    // switch (this.delete) {
    //   case true:
    //   this.delete = true
    //   break;
    //   case false:
    //   this.delete = false
    //   break;
    // }
  }

  selectNote(i) {
    // this.notes.forEach(note => {
    //   return note.selected = false
    // });
    // !this.delete ? this.readNote(i) : 
    if (this.delete) {
      this.select(i)
      console.log(this.delete)
    } else {
      this.readNote(i)
      console.log(this.delete)
    }
    
    console.log(this.selectedNotes)
    console.log(this.selectedNotes.length)
  }
  select (i) {
    // this.notes[i].selected = !this.notes[i].selected
    if (this.notes[i].selected === false ) {
      this.notes[i].selected = !this.notes[i].selectedNotes
      this.selectedNotes.push({item: i})
      // if (this.selectedNotes.length === 0) {
      //   this.delete = false
      // } else {
      //   this.delete = true
      // }
    } else {
      this.notes[i].selected = !this.notes[i].selected
      let newArray = this.selectedNotes.filter(selectedNote => {
        return selectedNote.item !== i
      })
      this.selectedNotes = newArray
      // if (this.selectedNotes.length === 0) {
      //   this.delete = false
      // } else {
      //   this.delete = true
      // }
    }
  }
  deleteNote() {
    // this.selectedNotes.forEach(index => {
      let newArray = this.notes.filter(note => {
        return note.selected === false
      })
    // })
    let alert = this.alerts.create({
      title: '',
      subTitle: 'Are you sure you want to delte these notes',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            // alert.dismiss();
            this.delete = true
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.notes = newArray
            this.delete = false
            this.checkBox = {
              display: 'none'
            }   
            this.selectedNotes = []
          }
        }]
    });
    alert.present();
  }
  readNote(i) {
    let alert = this.alerts.create({
      title: this.notes[i].title,
      subTitle: this.notes[i].text,
      buttons: [
        {
          text: 'Close',
          role: 'cancel',
          handler: () => {
          }
        }]
    });
    alert.present();
  }
  toSearch () {
    this.navCtrl.push(SearchPage)
  }
}
