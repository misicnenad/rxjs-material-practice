import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombineAllComponent } from './combine-all/combine-all.component';
import { CombinationRoutingModule } from './combination-routing.module';

@NgModule({
    declarations: [
        CombineAllComponent
    ],
    imports: [
        CommonModule,
        CombinationRoutingModule,
    ],
})
export class CombinationModule { }