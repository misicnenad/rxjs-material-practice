import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatchCatchErrorComponent } from './catch-catch-error/catch-catch-error.component';
import { RetryComponent } from './retry/retry.component';
import { RetryWhenComponent } from './retry-when/retry-when.component';

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
  {
    path: 'retry',
    component: RetryComponent,
  },
  {
    path: 'retry-when',
    component: RetryWhenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorHandlingRoutingModule {}
