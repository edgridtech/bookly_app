import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopicTextPage } from './topic-text';

@NgModule({
  declarations: [
    TopicTextPage,
  ],
  imports: [
    IonicPageModule.forChild(TopicTextPage),
  ],
})
export class TopicTextPageModule {}
