import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorsRoutingModule } from './operators-routing.module';
import { CombinationModule } from './combination/combination.module';
import { ConditionalModule } from './conditional/conditional.module';
import { CreationModule } from './creation/creation.module';
import { ErrorHandlingModule } from './error-handling/error-handling.module';
import { FilteringModule } from './filtering/filtering.module';
import { MulticastingModule } from './multicasting/multicasting.module';
import { TransformationModule } from './transformation/transformation.module';
import { UtilityModule } from './utility/utility.module';

@NgModule({
  imports: [
    CommonModule,
    OperatorsRoutingModule,
    CombinationModule,
    ConditionalModule,
    CreationModule,
    ErrorHandlingModule,
    FilteringModule,
    MulticastingModule,
    TransformationModule,
    UtilityModule,
  ]
})
export class OperatorsModule { }
