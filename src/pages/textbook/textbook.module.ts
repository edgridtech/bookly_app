import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TextbookPage } from './textbook';

@NgModule({
  declarations: [
    TextbookPage,
  ],
  imports: [
    IonicPageModule.forChild(TextbookPage),
  ],
})
export class TextbookPageModule {}
