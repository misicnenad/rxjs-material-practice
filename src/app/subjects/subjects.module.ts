import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectsRoutingModule } from './subjects-routing.module';

@NgModule({
  declarations: [
    BehaviorSubjectComponent,
    SubjectComponent,
    AsyncSubjectComponent,
    ReplaySubjectComponent
  ],
  imports: [
    CommonModule,
    SubjectsRoutingModule
  ]
})
export class SubjectsModule { }
