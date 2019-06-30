import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultIfEmptyComponent } from './default-if-empty/default-if-empty.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConditionalRoutingModule { }
