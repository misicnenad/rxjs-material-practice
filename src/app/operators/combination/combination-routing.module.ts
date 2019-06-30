import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CombineAllComponent } from './combine-all/combine-all.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'combine-all',
    },
    {
        path: 'combine-all',
        component: CombineAllComponent,
    },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CombinationRoutingModule { }
