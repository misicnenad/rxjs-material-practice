import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransformationRoutingModule } from './transformation-routing.module';
import { SwitchMapComponent } from './switch-map/switch-map.component';

@NgModule({
  declarations: [SwitchMapComponent],
  imports: [
    CommonModule,
    TransformationRoutingModule
  ]
})
export class TransformationModule { }
