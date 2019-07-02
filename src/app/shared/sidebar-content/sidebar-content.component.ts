import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Submenu } from './models';
import { SidebarContentService } from './sidebar-content.service';

@Component({
  selector: 'rmp-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.scss'],
})
export class SidebarContentComponent implements OnInit {
  menuItems$: Observable<Submenu[]>;

  constructor(private sidebarService: SidebarContentService) {}

  ngOnInit() {
    this.menuItems$ = this.sidebarService.content$;
  }
}
