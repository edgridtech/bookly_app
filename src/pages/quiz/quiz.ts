import { Component, ContentChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController  } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { SampleModalPage } from '../sample-modal/sample-modal';

/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {
  //testing
  public solutions: Array<{
    question: string, 
    answer: string
  }> = [];
  public showAnswers: Boolean
  public icon: string
  public quizActive: Boolean
  public payload: any
  public quizzes: any
  public activeQuestion: any
  public questionNo: number
  public bundle: any
  public nonsense: any
  public currentQuestion: any
  public currentOptions: any
  public selectedOption: string
  public correctAnswer: any
  public correctAnswerCount: number
  public medal: number
  public questionCount: number
  public myStyle1: any
  public myStyle2: any
  public myStyle3: any
  public myStyle4: any
  public progress: any
  public progressCalc: any
  public active: any
  public isDisabled: Boolean
  public congratsMessage: string
  public myModal: Boolean
  public answersPayload = []
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: Http,
    public modalCtrl: ModalController ,
    public alerts: AlertController 
  ) {
    this.payload = navParams.get("data")
  }
  ionViewWillEnter() {
    this.quizActive = true
    this.myModal = false
    this.showAnswers = false
    this.icon = 'fa fa-caret-down';
    // test
    this.solutions.push(
      {
        question: 'S',
        answer: 'Lorem ipsum.'
      }
    )
    // this.congratsMessage = 'Weldone Mate'
    // This is a hack to get past this silly angular drama that has kept me stuck for too long.  I AFF TIRE!!!
    this.nonsense = [{}]
    this.questionNo = 0
    this.quizzes = JSON.parse(this.payload._body).data
    this.computeAnswer()
    this.currentQuestion = this.quizzes[this.questionNo].question
    this.currentOptions = this.quizzes[this.questionNo].option 
    this.correctAnswer = this.quizzes[this.questionNo].answer
    this.correctAnswerCount = 0
    this.questionCount = this.quizzes.length
    this.bundle = [this.currentQuestion, this.currentOptions]
    this.isDisabled = true
    this.myStyle1 = this.myStyle2 = this.myStyle3 = this.myStyle4 = {
      'background-color': '#fff',
      'color': '#67747C',
      'border': '1px solid #DBE6EC'
    }
    this.progressCalc = (this.questionNo + 1) *100/this.questionCount
    this.progress = {
      width: `${this.progressCalc}%`
    }
    // console.log(this.progressCalc)
    console.log(this.quizzes)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizPage');
  }
  pick(e) {
    this.isDisabled = false
    switch (e) {
      case 1:
        this.myStyle1 = {
          'background-color': '#045DE9',
          'color': '#fff',
          'border': '1px solid #045DE9'
        }
        this.myStyle2 = this.myStyle3 = this.myStyle4 = {
          'background-color': '#fff',
          'color': '#67747C',
          'border': '1px solid #DBE6EC'
        } 
        this.selectedOption = 'a'
        break;
        case 2:
          this.myStyle2 = {
            'background-color': '#045DE9',
            'color': '#fff',
            'border': '1px solid #045DE9'
          }
          this.myStyle1 = this.myStyle3 = this.myStyle4 = {
            'background-color': '#fff',
            'color': '#67747C',
            'border': '1px solid #DBE6EC'
          }      
          this.selectedOption = 'b'
          break;
          case 3:
            this.myStyle3 = {
              'background-color': '#045DE9',
              'color': '#fff',
              'border': '1px solid #045DE9'
            }      
            this.myStyle1 = this.myStyle2 = this.myStyle4 = {
              'background-color': '#fff',
              'color': '#67747C',
              'border': '1px solid #DBE6EC'
            }  
            this.selectedOption = 'c'
            break;
            case 4:
              this.myStyle4 = {
                'background-color': '#045DE9',
                'color': '#fff',
                'border': '1px solid #045DE9'
              }     
              this.myStyle1 = this.myStyle2 = this.myStyle3 = {
                'background-color': '#fff',
                'color': '#67747C',
                'border': '1px solid #DBE6EC'
              }   
              this.selectedOption = 'd'
              break;
      default:
        break;
    }

  }
  next() {
    this.checkAnswer(this.selectedOption)
    this.message()
    this.questionNo = this.questionNo + 1
    if (this.questionNo < (this.questionCount - 1)) {
      this.currentQuestion = this.quizzes[this.questionNo].question
      this.currentOptions = this.quizzes[this.questionNo].option 
      this.bundle = [this.currentQuestion, this.currentOptions]
      this.isDisabled = true
      this.myStyle1 = this.myStyle2 = this.myStyle3 = this.myStyle4 = {
        'background-color': '#fff',
        'color': '#67747C',
        'border': '1px solid #DBE6EC'
      }
      this.progressCalc = (this.questionNo + 1) *100/this.questionCount
      this.progress = {
        width: `${this.progressCalc}%`
      }
      console.log(this.bundle)
    } else {
      this.quizActive = false
    }
  }
  checkAnswer(e) {
    if (e === this.correctAnswer) {
      this.correctAnswerCount = this.correctAnswerCount + 1
      console.log('correct', this.correctAnswerCount)
    } else {
      console.log('wrong', this.correctAnswerCount)
    }
  }
  message() {
    if (this.correctAnswerCount === 10) {
      this.congratsMessage = 'Congratulations! you rock.'
      this.medal = 1
    } 
    if (this.correctAnswerCount < 10 && this.correctAnswerCount > 7) {
      this.congratsMessage = 'Great Work!'      
      this.medal = 2
    }
    if (this.correctAnswerCount < 8 && this.correctAnswerCount > 5) {
      this.congratsMessage = 'Good Work'      
      this.medal = 3
    }
    if (this.correctAnswerCount < 6 && this.correctAnswerCount > 2) {
      this.congratsMessage = 'Good Try'    
      this.medal = 4  
    }
    if (this.correctAnswerCount === 2 || this.correctAnswerCount === 1) {
      this.congratsMessage = 'You can do better'  
      this.medal = 4 
    }
    if (this.correctAnswerCount === 0) {
      this.congratsMessage = 'Try again'
      this.medal = 5
    }
  }
  goBack() {
    this.navCtrl.pop()
  }
  openModal() {
    this.myModal = true
    // let alert = this.alerts.create({
    //   title: 'No Title',
    //   subTitle: 'Please add a title to your note',
    //   buttons: ['Dismiss']
    // });
    // alert.present();
  }
  closeModal() {
    this.myModal = false
  }
  // test
  toggleDetails() {
    console.log(this.solutions)
    if (this.showAnswers) {
        this.showAnswers = false;
        this.icon = 'fa fa-caret-down';
    } else {
      this.showAnswers = true;
      this.icon = 'fa fa-caret-up';
    }
  }
  computeAnswer() {
    this.quizzes.forEach(quiz => {
      if (quiz.answer === 'a') {
        this.answersPayload.push({'question': `${quiz.question}?`, 'answer': quiz.option.a})
      } else if (quiz.answer === 'b') {
        this.answersPayload.push({'question': `${quiz.question}?`, 'answer': quiz.option.b})
      } else if (quiz.answer === 'c') {
        this.answersPayload.push({'question': `${quiz.question}?`, 'answer': quiz.option.c})
      } else {
        this.answersPayload.push({'question': `${quiz.question}?`, 'answer': quiz.option.d})
      }
    })
    console.log(this.answersPayload)
  }
  retake() {
  //  console.log(JSON.parse(this.payload._body).subject)
    let options = {
      subject: JSON.parse(this.payload._body).subject
    }
    console.log(options)
    let url = 'https://questions.aloc.ng/api/m'
    this.http.get(url, {params: options})
    .subscribe(data => {
      this.quizzes = data
      this.quizActive = true
    })
  }
}
