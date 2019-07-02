import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilteringRoutingModule } from './filtering-routing.module';
import { TakeWhileComponent } from './take-while/take-while.component';
import { AuditComponent } from './audit/audit.component';
import { AuditTimeComponent } from './audit-time/audit-time.component';
import { DebounceComponent } from './debounce/debounce.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';
import { DistinctUntilKeyChangedComponent } from './distinct-until-key-changed/distinct-until-key-changed.component';
import { FilterComponent } from './filter/filter.component';
import { FindComponent } from './find/find.component';
import { FirstComponent } from './first/first.component';
import { IgnoreElementsComponent } from './ignore-elements/ignore-elements.component';
import { LastComponent } from './last/last.component';
import { SampleComponent } from './sample/sample.component';
import { SingleComponent } from './single/single.component';
import { SkipComponent } from './skip/skip.component';
import { SkipUntilComponent } from './skip-until/skip-until.component';
import { SkipWhileComponent } from './skip-while/skip-while.component';
import { TakeComponent } from './take/take.component';
import { TakeLastComponent } from './take-last/take-last.component';
import { TakeUntilComponent } from './take-until/take-until.component';
import { ThrottleComponent } from './throttle/throttle.component';
import { ThrottleTimeComponent } from './throttle-time/throttle-time.component';

@NgModule({
  declarations: [TakeWhileComponent, AuditComponent, AuditTimeComponent, DebounceComponent, DebounceTimeComponent, DistinctUntilChangedComponent, DistinctUntilKeyChangedComponent, FilterComponent, FindComponent, FirstComponent, IgnoreElementsComponent, LastComponent, SampleComponent, SingleComponent, SkipComponent, SkipUntilComponent, SkipWhileComponent, TakeComponent, TakeLastComponent, TakeUntilComponent, ThrottleComponent, ThrottleTimeComponent],
  imports: [
    CommonModule,
    FilteringRoutingModule
  ]
})
export class FilteringModule { }
