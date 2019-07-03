import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransformationRoutingModule } from './transformation-routing.module';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { BufferComponent } from './buffer/buffer.component';
import { BufferCountComponent } from './buffer-count/buffer-count.component';
import { BufferTimeComponent } from './buffer-time/buffer-time.component';
import { BufferToggleComponent } from './buffer-toggle/buffer-toggle.component';
import { BufferWhenComponent } from './buffer-when/buffer-when.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ConcatMapToComponent } from './concat-map-to/concat-map-to.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { ExpandComponent } from './expand/expand.component';
import { GroupByComponent } from './group-by/group-by.component';
import { MapToComponent } from './map-to/map-to.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { MergeScanComponent } from './merge-scan/merge-scan.component';
import { PartitionComponent } from './partition/partition.component';
import { PluckComponent } from './pluck/pluck.component';
import { ReduceComponent } from './reduce/reduce.component';
import { ScanComponent } from './scan/scan.component';
import { SwitchMapToComponent } from './switch-map-to/switch-map-to.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { WindowComponent } from './window/window.component';
import { WindowCountComponent } from './window-count/window-count.component';
import { WindowTimeComponent } from './window-time/window-time.component';
import { WindowToggleComponent } from './window-toggle/window-toggle.component';
import { WindowWhenComponent } from './window-when/window-when.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [SwitchMapComponent, BufferComponent, BufferCountComponent, BufferTimeComponent, BufferToggleComponent, BufferWhenComponent, ConcatMapComponent, ConcatMapToComponent, ExhaustMapComponent, ExpandComponent, GroupByComponent, MapToComponent, MergeMapComponent, MergeScanComponent, PartitionComponent, PluckComponent, ReduceComponent, ScanComponent, SwitchMapToComponent, ToArrayComponent, WindowComponent, WindowCountComponent, WindowTimeComponent, WindowToggleComponent, WindowWhenComponent, MapComponent],
  imports: [
    CommonModule,
    TransformationRoutingModule
  ]
})
export class TransformationModule { }
