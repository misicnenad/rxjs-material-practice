import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'rmp-source-code-container',
  templateUrl: './source-code-container.component.html',
  styleUrls: ['./source-code-container.component.scss'],
})
export class SourceCodeContainerComponent {
  @Input() htmlTemplate: TemplateRef<any>;
  @Input() typescriptTemplate: TemplateRef<any>;
  @Input() scssTemplate: TemplateRef<any>;
}
