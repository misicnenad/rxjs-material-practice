import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConditionalRoutingModule } from './conditional-routing.module';
import { DefaultIfEmptyComponent } from './default-if-empty/default-if-empty.component';
import { EveryComponent } from './every/every.component';
import { IifComponent } from './iif/iif.component';
import { SequenceEqualComponent } from './sequence-equal/sequence-equal.component';

@NgModule({
  declarations: [DefaultIfEmptyComponent, EveryComponent, IifComponent, SequenceEqualComponent],
  imports: [
    CommonModule,
    ConditionalRoutingModule
  ]
})
export class ConditionalModule { }
