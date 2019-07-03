import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rmp-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss'],
})
export class ContentContainerComponent implements OnInit {
  sourceCodePanelTitle = 'Source Code';
  codeExecutionPanelTitle = 'Code Execution';

  constructor() {}

  ngOnInit() {}
}
