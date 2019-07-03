import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuditTimeComponent } from './audit-time/audit-time.component';
import { AuditComponent } from './audit/audit.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { DebounceComponent } from './debounce/debounce.component';
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';
import { DistinctUntilKeyChangedComponent } from './distinct-until-key-changed/distinct-until-key-changed.component';
import { FilterComponent } from './filter/filter.component';
import { FindComponent } from './find/find.component';
import { FirstComponent } from './first/first.component';
import { IgnoreElementsComponent } from './ignore-elements/ignore-elements.component';
import { LastComponent } from './last/last.component';
import { SampleComponent } from './sample/sample.component';
import { SingleComponent } from './single/single.component';
import { SkipUntilComponent } from './skip-until/skip-until.component';
import { SkipWhileComponent } from './skip-while/skip-while.component';
import { SkipComponent } from './skip/skip.component';
import { TakeLastComponent } from './take-last/take-last.component';
import { TakeUntilComponent } from './take-until/take-until.component';
import { TakeWhileComponent } from './take-while/take-while.component';
import { TakeComponent } from './take/take.component';
import { ThrottleTimeComponent } from './throttle-time/throttle-time.component';
import { ThrottleComponent } from './throttle/throttle.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'take-while',
  },
  {
    path: 'audit',
    component: AuditComponent,
  },
  {
    path: 'audit-time',
    component: AuditTimeComponent,
  },
  {
    path: 'debounce',
    component: DebounceComponent,
  },
  {
    path: 'debounce-time',
    component: DebounceTimeComponent,
  },
  {
    path: 'distinct-until-changed',
    component: DistinctUntilChangedComponent,
  },
  {
    path: 'distinct-until-key-changed',
    component: DistinctUntilKeyChangedComponent,
  },
  {
    path: 'filter',
    component: FilterComponent,
  },
  {
    path: 'find',
    component: FindComponent,
  },
  {
    path: 'first',
    component: FirstComponent,
  },
  {
    path: 'ignore-elements',
    component: IgnoreElementsComponent,
  },
  {
    path: 'last',
    component: LastComponent,
  },
  {
    path: 'sample',
    component: SampleComponent,
  },
  {
    path: 'single',
    component: SingleComponent,
  },
  {
    path: 'skip',
    component: SkipComponent,
  },
  {
    path: 'skip-until',
    component: SkipUntilComponent,
  },
  {
    path: 'skip-while',
    component: SkipWhileComponent,
  },
  {
    path: 'take',
    component: TakeComponent,
  },
  {
    path: 'take-last',
    component: TakeLastComponent,
  },
  {
    path: 'take-until',
    component: TakeUntilComponent,
  },
  {
    path: 'take-while',
    component: TakeWhileComponent,
  },
  {
    path: 'throttle',
    component: ThrottleComponent,
  },
  {
    path: 'throttle-time',
    component: ThrottleTimeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilteringRoutingModule {}
