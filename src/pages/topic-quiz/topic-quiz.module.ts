import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopicQuizPage } from './topic-quiz';

@NgModule({
  declarations: [
    TopicQuizPage,
  ],
  imports: [
    IonicPageModule.forChild(TopicQuizPage),
  ],
})
export class TopicQuizPageModule {}
