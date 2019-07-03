import { Component } from '@angular/core';

@Component({
  selector: 'rmp-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss'],
})
export class ContentContainerComponent {
  sourceCodePanelTitle = 'Source Code';
  codeExecutionPanelTitle = 'Code Execution';
}
