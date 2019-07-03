import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DelayWhenComponent } from './delay-when/delay-when.component';
import { DelayComponent } from './delay/delay.component';
import { DematerializeComponent } from './dematerialize/dematerialize.component';
import { FinalizeComponent } from './finalize/finalize.component';
import { LetComponent } from './let/let.component';
import { RepeatComponent } from './repeat/repeat.component';
import { TapComponent } from './tap/tap.component';
import { TimeIntervalComponent } from './time-interval/time-interval.component';
import { TimeoutWithComponent } from './timeout-with/timeout-with.component';
import { TimeoutComponent } from './timeout/timeout.component';
import { ToPromiseComponent } from './to-promise/to-promise.component';
import { UtilityRoutingModule } from './utility-routing.module';

@NgModule({
  declarations: [
    DelayComponent,
    DelayWhenComponent,
    DematerializeComponent,
    FinalizeComponent,
    LetComponent,
    RepeatComponent,
    TimeIntervalComponent,
    TimeoutComponent,
    TimeoutWithComponent,
    ToPromiseComponent,
    TapComponent,
  ],
  imports: [CommonModule, UtilityRoutingModule],
})
export class UtilityModule {}
