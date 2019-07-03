import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultIfEmptyComponent } from './default-if-empty/default-if-empty.component';
import { EveryComponent } from './every/every.component';
import { IifComponent } from './iif/iif.component';
import { SequenceEqualComponent } from './sequence-equal/sequence-equal.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'default-if-empty',
  },
  {
    path: 'default-if-empty',
    component: DefaultIfEmptyComponent,
  },
  {
    path: 'every',
    component: EveryComponent,
  },
  {
    path: 'iif',
    component: IifComponent,
  },
  {
    path: 'sequence-equal',
    component: SequenceEqualComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConditionalRoutingModule {}
