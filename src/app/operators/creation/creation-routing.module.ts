import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfComponent } from './of/of.component';

const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      redirectTo: 'of',
  },
  {
      path: 'of',
      component: OfComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreationRoutingModule { }
