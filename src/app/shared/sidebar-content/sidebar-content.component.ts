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
  menuItemNumber = 0;

  menuItems$: Observable<Submenu[]>;

  constructor(private sidebarService: SidebarContentService) {}

  ngOnInit() {
    this.menuItems$ = this.sidebarService.content$;
  }

  setMenuExpanded(index: number) {
    this.menuItemNumber = index;
  }

  isMenuExpanded(index: number): boolean {
    return this.menuItemNumber === index;
  }
}
