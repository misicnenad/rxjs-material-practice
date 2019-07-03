import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombineAllComponent } from './combine-all/combine-all.component';
import { CombinationRoutingModule } from './combination-routing.module';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ConcatComponent } from './concat/concat.component';
import { ConcatAllComponent } from './concat-all/concat-all.component';
import { EndWithComponent } from './end-with/end-with.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { MergeComponent } from './merge/merge.component';
import { MergeAllComponent } from './merge-all/merge-all.component';
import { PairwiseComponent } from './pairwise/pairwise.component';
import { RaceComponent } from './race/race.component';
import { StartWithComponent } from './start-with/start-with.component';
import { WithLatestFromComponent } from './with-latest-from/with-latest-from.component';
import { ZipComponent } from './zip/zip.component';
import { CombineAllSourceComponent } from './combine-all/combine-all-source.component';
import { CombineLatestSourceComponent } from './combine-latest/combine-latest-source.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        CombineAllComponent,
        CombineAllSourceComponent,
        CombineLatestComponent,
        ConcatComponent,
        ConcatAllComponent,
        EndWithComponent,
        ForkJoinComponent,
        MergeComponent,
        MergeAllComponent,
        PairwiseComponent,
        RaceComponent,
        StartWithComponent,
        WithLatestFromComponent,
        ZipComponent,
        CombineLatestSourceComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        SharedModule,
        CombinationRoutingModule,
    ],
})
export class CombinationModule { }