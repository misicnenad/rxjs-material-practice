import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'operators',
    //   pathMatch: 'full',
    //   redirectTo: 'combination',
    // },
    children: [
      {
        path: 'combination',
        loadChildren: () => import('./combination/combination.module').then(m => m.CombinationModule),
      },
      {
        path: 'conditional',
        loadChildren: () => import('./conditional/conditional.module').then(m => m.ConditionalModule),
      },
      {
        path: 'creation',
        loadChildren: () => import('./creation/creation.module').then(m => m.CreationModule),
      },
      {
        path: 'error-handling',
        loadChildren: () => import('./error-handling/error-handling.module').then(m => m.ErrorHandlingModule),
      },
      {
        path: 'filtering',
        loadChildren: () => import('./filtering/filtering.module').then(m => m.FilteringModule),
      },
      {
        path: 'multicasting',
        loadChildren: () => import('./multicasting/multicasting.module').then(m => m.MulticastingModule),
      },
      {
        path: 'transformation',
        loadChildren: () => import('./transformation/transformation.module').then(m => m.TransformationModule),
      },
      {
        path: 'utility',
        loadChildren: () => import('./utility/utility.module').then(m => m.UtilityModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorsRoutingModule { }
