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
    NotesSearchResultsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
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
    NotesSearchResultsPage
    
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
