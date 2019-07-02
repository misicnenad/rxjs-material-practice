import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorHandlingRoutingModule } from './error-handling-routing.module';
import { CatchCatchErrorComponent } from './catch-catch-error/catch-catch-error.component';
import { RetryComponent } from './retry/retry.component';
import { RetryWhenComponent } from './retry-when/retry-when.component';

@NgModule({
  declarations: [CatchCatchErrorComponent, RetryComponent, RetryWhenComponent],
  imports: [
    CommonModule,
    ErrorHandlingRoutingModule
  ]
})
export class ErrorHandlingModule { }
