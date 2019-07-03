import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

import { ContentContainerComponent } from './content-container/content-container.component';
import { SidebarContentComponent } from './sidebar-content/sidebar-content.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [SidebarContentComponent, ContentContainerComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    MatToolbarModule,
  ],
  exports: [
    SidebarContentComponent,
    MatListModule,
    MatIconModule,
    ContentContainerComponent,
  ],
})
export class SharedModule {}
