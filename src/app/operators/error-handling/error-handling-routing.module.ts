import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatchCatchErrorComponent } from './catch-catch-error/catch-catch-error.component';

const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      redirectTo: 'catch-catch-error',
  },
  {
      path: 'catch-catch-error',
      component: CatchCatchErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorHandlingRoutingModule { }
