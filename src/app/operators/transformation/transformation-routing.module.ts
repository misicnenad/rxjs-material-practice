import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BufferCountComponent } from './buffer-count/buffer-count.component';
import { BufferTimeComponent } from './buffer-time/buffer-time.component';
import { BufferToggleComponent } from './buffer-toggle/buffer-toggle.component';
import { BufferWhenComponent } from './buffer-when/buffer-when.component';
import { BufferComponent } from './buffer/buffer.component';
import { ConcatMapToComponent } from './concat-map-to/concat-map-to.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { GroupByComponent } from './group-by/group-by.component';
import { MapToComponent } from './map-to/map-to.component';
import { MapComponent } from './map/map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { MergeScanComponent } from './merge-scan/merge-scan.component';
import { PartitionComponent } from './partition/partition.component';
import { PluckComponent } from './pluck/pluck.component';
import { ReduceComponent } from './reduce/reduce.component';
import { ScanComponent } from './scan/scan.component';
import { SwitchMapToComponent } from './switch-map-to/switch-map-to.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { WindowCountComponent } from './window-count/window-count.component';
import { WindowTimeComponent } from './window-time/window-time.component';
import { WindowToggleComponent } from './window-toggle/window-toggle.component';
import { WindowWhenComponent } from './window-when/window-when.component';
import { WindowComponent } from './window/window.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'switch-map',
  },
  {
    path: 'buffer',
    component: BufferComponent,
  },
  {
    path: 'buffer-count',
    component: BufferCountComponent,
  },
  {
    path: 'buffer-time',
    component: BufferTimeComponent,
  },
  {
    path: 'buffer-toggle',
    component: BufferToggleComponent,
  },
  {
    path: 'buffer-when',
    component: BufferWhenComponent,
  },
  {
    path: 'concat-map',
    component: ConcatMapComponent,
  },
  {
    path: 'concat-map-to',
    component: ConcatMapToComponent,
  },
  {
    path: 'exhaust-map',
    component: ExhaustMapComponent,
  },
  {
    path: 'group-by',
    component: GroupByComponent,
  },
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: 'map-to',
    component: MapToComponent,
  },
  {
    path: 'merge-map',
    component: MergeMapComponent,
  },
  {
    path: 'merge-scan',
    component: MergeScanComponent,
  },
  {
    path: 'partition',
    component: PartitionComponent,
  },
  {
    path: 'pluck',
    component: PluckComponent,
  },
  {
    path: 'reduce',
    component: ReduceComponent,
  },
  {
    path: 'scan',
    component: ScanComponent,
  },
  {
    path: 'switch-map',
    component: SwitchMapComponent,
  },
  {
    path: 'switch-map-to',
    component: SwitchMapToComponent,
  },
  {
    path: 'to-array',
    component: ToArrayComponent,
  },
  {
    path: 'window',
    component: WindowComponent,
  },
  {
    path: 'window-count',
    component: WindowCountComponent,
  },
  {
    path: 'window-time',
    component: WindowTimeComponent,
  },
  {
    path: 'window-toggle',
    component: WindowToggleComponent,
  },
  {
    path: 'window-when',
    component: WindowWhenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransformationRoutingModule {}
