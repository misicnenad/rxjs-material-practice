import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TapDoComponent } from './tap-do/tap-do.component';

const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      redirectTo: 'tap-do',
  },
  {
      path: 'tap-do',
      component: TapDoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilityRoutingModule { }
