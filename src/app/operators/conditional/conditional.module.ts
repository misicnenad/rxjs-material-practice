import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConditionalRoutingModule } from './conditional-routing.module';
import { DefaultIfEmptyComponent } from './default-if-empty/default-if-empty.component';

@NgModule({
  declarations: [DefaultIfEmptyComponent],
  imports: [
    CommonModule,
    ConditionalRoutingModule
  ]
})
export class ConditionalModule { }
