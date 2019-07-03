import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { ContentContainerComponent } from './content-container/content-container.component';
import { SidebarContentComponent } from './sidebar-content/sidebar-content.component';
import { SourceCodeContainerComponent } from './source-code-container/source-code-container.component';
import { TabContentComponent } from './source-code-container/tab-content.component';

@NgModule({
  declarations: [
    SidebarContentComponent,
    ContentContainerComponent,
    SourceCodeContainerComponent,
    TabContentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
  ],
  exports: [
    SidebarContentComponent,
    MatListModule,
    MatIconModule,
    ContentContainerComponent,
    SourceCodeContainerComponent,
  ],
})
export class SharedModule {}
