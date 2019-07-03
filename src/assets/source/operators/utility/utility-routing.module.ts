import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tap-do',
  },
  {
    path: 'tap',
    component: TapComponent,
  },
  {
    path: 'delay',
    component: DelayComponent,
  },
  {
    path: 'delay-when',
    component: DelayWhenComponent,
  },
  {
    path: 'dematerialize',
    component: DematerializeComponent,
  },
  {
    path: 'finalize',
    component: FinalizeComponent,
  },
  {
    path: 'let',
    component: LetComponent,
  },
  {
    path: 'repeat',
    component: RepeatComponent,
  },
  {
    path: 'time-interval',
    component: TimeIntervalComponent,
  },
  {
    path: 'timeout',
    component: TimeoutComponent,
  },
  {
    path: 'timeout-with',
    component: TimeoutWithComponent,
  },
  {
    path: 'to-promise',
    component: ToPromiseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilityRoutingModule {}
