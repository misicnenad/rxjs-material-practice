import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorHandlingRoutingModule } from './error-handling-routing.module';
import { CatchCatchErrorComponent } from './catch-catch-error/catch-catch-error.component';

@NgModule({
  declarations: [CatchCatchErrorComponent],
  imports: [
    CommonModule,
    ErrorHandlingRoutingModule
  ]
})
export class ErrorHandlingModule { }
