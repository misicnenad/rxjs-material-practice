import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreationRoutingModule } from './creation-routing.module';
import { OfComponent } from './of/of.component';

@NgModule({
  declarations: [
    OfComponent
  ],
  imports: [
    CommonModule,
    CreationRoutingModule
  ]
})
export class CreationModule { }
