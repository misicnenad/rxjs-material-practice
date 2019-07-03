import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CatchErrorComponent } from './catch-error/catch-error.component';
import { ErrorHandlingRoutingModule } from './error-handling-routing.module';
import { RetryWhenComponent } from './retry-when/retry-when.component';
import { RetryComponent } from './retry/retry.component';

@NgModule({
  declarations: [
    RetryComponent,
    RetryWhenComponent,
    CatchErrorComponent,
  ],
  imports: [CommonModule, ErrorHandlingRoutingModule],
})
export class ErrorHandlingModule {}
