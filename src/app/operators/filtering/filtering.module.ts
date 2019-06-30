import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilteringRoutingModule } from './filtering-routing.module';
import { TakeWhileComponent } from './take-while/take-while.component';

@NgModule({
  declarations: [TakeWhileComponent],
  imports: [
    CommonModule,
    FilteringRoutingModule
  ]
})
export class FilteringModule { }
