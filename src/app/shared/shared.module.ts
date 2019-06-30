import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

import { SidebarContentComponent } from './sidebar-content/sidebar-content.component';

@NgModule({
  declarations: [
    SidebarContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
  ],
  exports: [
    SidebarContentComponent,
    MatListModule,
    MatIconModule,
  ]
})
export class SharedModule { }
