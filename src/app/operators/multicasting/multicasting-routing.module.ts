import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MulticastComponent } from './multicast/multicast.component';
import { PublishComponent } from './publish/publish.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';
import { ShareComponent } from './share/share.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'publish',
  },
  {
    path: 'publish',
    component: PublishComponent,
  },
  {
    path: 'multicast',
    component: MulticastComponent,
  },
  {
    path: 'share',
    component: ShareComponent,
  },
  {
    path: 'share-replay',
    component: ShareReplayComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MulticastingRoutingModule {}
