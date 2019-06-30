import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MulticastingRoutingModule } from './multicasting-routing.module';
import { ShareReplayComponent } from './share-replay/share-replay.component';

@NgModule({
  declarations: [ShareReplayComponent],
  imports: [
    CommonModule,
    MulticastingRoutingModule
  ]
})
export class MulticastingModule { }
