import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MulticastingRoutingModule } from './multicasting-routing.module';
import { ShareReplayComponent } from './share-replay/share-replay.component';
import { PublishComponent } from './publish/publish.component';
import { MulticastComponent } from './multicast/multicast.component';
import { ShareComponent } from './share/share.component';

@NgModule({
  declarations: [ShareReplayComponent, PublishComponent, MulticastComponent, ShareComponent],
  imports: [
    CommonModule,
    MulticastingRoutingModule
  ]
})
export class MulticastingModule { }
