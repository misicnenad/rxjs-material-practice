import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatchErrorComponent } from './catch-error/catch-error.component';
import { RetryWhenComponent } from './retry-when/retry-when.component';
import { RetryComponent } from './retry/retry.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'catch-error',
  },
  {
    path: 'catch-error',
    component: CatchErrorComponent,
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
