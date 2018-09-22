import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleTopicPage } from './single-topic';

@NgModule({
  declarations: [
    SingleTopicPage,
  ],
  imports: [
    IonicPageModule.forChild(SingleTopicPage),
  ],
})
export class SingleTopicPageModule {}
