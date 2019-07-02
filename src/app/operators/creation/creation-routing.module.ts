import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'of',
  },
  {
    path: 'ajax',
    component: AjaxComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'defer',
    component: DeferComponent,
  },
  {
    path: 'empty',
    component: EmptyComponent,
  },
  {
    path: 'from',
    component: FromComponent,
  },
  {
    path: 'from-event',
    component: FromEventComponent,
  },
  {
    path: 'generate',
    component: GenerateComponent,
  },
  {
    path: 'interval',
    component: IntervalComponent,
  },
  {
    path: 'of',
    component: OfComponent,
  },
  {
    path: 'range',
    component: RangeComponent,
  },
  {
    path: 'throw',
    component: ThrowComponent,
  },
  {
    path: 'timer',
    component: TimerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationRoutingModule {}
