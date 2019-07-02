import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublishComponent } from './publish/publish.component';
import { MulticastComponent } from './multicast/multicast.component';
import { ShareComponent } from './share/share.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';

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
