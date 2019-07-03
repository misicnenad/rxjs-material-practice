import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreationRoutingModule } from './creation-routing.module';
import { OfComponent } from './of/of.component';
import { AjaxComponent } from './ajax/ajax.component';
import { CreateComponent } from './create/create.component';
import { DeferComponent } from './defer/defer.component';
import { EmptyComponent } from './empty/empty.component';
import { FromComponent } from './from/from.component';
import { FromEventComponent } from './from-event/from-event.component';
import { GenerateComponent } from './generate/generate.component';
import { IntervalComponent } from './interval/interval.component';
import { RangeComponent } from './range/range.component';
import { ThrowComponent } from './throw/throw.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    OfComponent,
    AjaxComponent,
    CreateComponent,
    DeferComponent,
    EmptyComponent,
    FromComponent,
    FromEventComponent,
    GenerateComponent,
    IntervalComponent,
    RangeComponent,
    ThrowComponent,
    TimerComponent
  ],
  imports: [
    CommonModule,
    CreationRoutingModule
  ]
})
export class CreationModule { }
