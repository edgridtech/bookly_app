import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http'

import { LibraryPage } from '../pages/library/library';
import { NotesPage } from '../pages/notes/notes';
import { LearnPage } from '../pages/learn/learn';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login'
import { SignupPage } from '../pages/signup/signup'
import { OnboardingPage } from '../pages/onboarding/onboarding';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyServiceProvider } from '../providers/my-service/my-service';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { TopicsPage } from '../pages/topics/topics';
import { SearchPage } from '../pages/search/search';
import { SearchTabsPage } from '../pages/search/search-tabs/search-tabs';
import { BooksSearchResultsPage } from '../pages/search/book-search-results/book-search-results'
import { TopicsSearchResultsPage } from '../pages/search/topics-search-results/topics-search-results'
import { NotesSearchResultsPage } from '../pages/search/notes-search-results/notes-search-results'
import { NotificationsPage } from '../pages/notifications/notifications';
import { GlobalProvider } from '../providers/global/global';
import { SingleTopicPage } from '../pages/single-topic/single-topic';
import { TopicTextPage } from '../pages/topic-text/topic-text';
import { TopicVideoPage } from '../pages/topic-video/topic-video';
import { TopicQuizPage } from '../pages/topic-quiz/topic-quiz';
import { QuizPage } from '../pages/quiz/quiz';
import { SampleModalPage } from '../pages/sample-modal/sample-modal';
import { TextbookPage } from '../pages/textbook/textbook';

//Plugins
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';

//NGRX imports
import { StoreModule } from '@ngrx/store';
import { reducer } from '../store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { environment } from '../en';



@NgModule({
  declarations: [
    MyApp,
    LibraryPage,
    NotesPage,
    LearnPage,
    TabsPage,
    ProfilePage,
    OnboardingPage,
    LoginPage,
    SignupPage,
    ForgotPasswordPage,
    ResetPasswordPage,
    TopicsPage,
    SearchPage,
    NotificationsPage,
    SearchTabsPage,
    BooksSearchResultsPage,
    TopicsSearchResultsPage,
    NotesSearchResultsPage,
    SingleTopicPage,
    QuizPage,
    TopicTextPage,
    TopicVideoPage,
    TopicQuizPage,
    SampleModalPage,
    TextbookPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    PdfViewerModule,
    PdfJsViewerModule,
    IonicModule.forRoot(MyApp),
    StoreModule.forRoot({ userDetails: reducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LibraryPage,
    NotesPage,
    LearnPage,
    TabsPage,
    ProfilePage,
    OnboardingPage,
    LoginPage,
    SignupPage,
    ForgotPasswordPage,
    ResetPasswordPage,
    TopicsPage,
    SearchPage,
    NotificationsPage,
    SearchTabsPage,
    BooksSearchResultsPage,
    TopicsSearchResultsPage,
    NotesSearchResultsPage,
    SingleTopicPage,
    QuizPage,
    TopicTextPage,
    TopicVideoPage,
    TopicQuizPage,
    SampleModalPage,
    TextbookPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MyServiceProvider,
    GlobalProvider
  ]
})
export class AppModule {}
