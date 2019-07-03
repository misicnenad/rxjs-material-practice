import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'rmp-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss'],
})
export class TabContentComponent {
  @Input() template: TemplateRef<any>;
}
