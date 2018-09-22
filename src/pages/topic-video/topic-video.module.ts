import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopicVideoPage } from './topic-video';

@NgModule({
  declarations: [
    TopicVideoPage,
  ],
  imports: [
    IonicPageModule.forChild(TopicVideoPage),
  ],
})
export class TopicVideoPageModule {}
