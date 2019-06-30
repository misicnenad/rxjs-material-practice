import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwitchMapComponent } from './switch-map/switch-map.component';

const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      redirectTo: 'switch-map',
  },
  {
      path: 'switch-map',
      component: SwitchMapComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransformationRoutingModule { }
