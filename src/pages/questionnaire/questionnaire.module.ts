import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionnairePage } from './questionnaire';

@NgModule({
  declarations: [
    QuestionnairePage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionnairePage),
  ],
  exports: [
    QuestionnairePage
  ]
})
export class QuestionnairePageModule {}
