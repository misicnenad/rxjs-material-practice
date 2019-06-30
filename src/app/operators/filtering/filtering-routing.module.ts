import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TakeWhileComponent } from './take-while/take-while.component';

const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      redirectTo: 'take-while',
  },
  {
      path: 'take-while',
      component: TakeWhileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilteringRoutingModule { }
