import { Component, OnInit } from '@angular/core';
import { start, end } from 'perf-marks';
@Component({
  selector: 'ngx-docs-page',
  templateUrl: './docs-page.component.html',
  styleUrls: ['./docs-page.component.scss'],
})
export class DocsPageComponent implements OnInit {
  private measureName = 'DocsPageComponent';

  private startMark = `[START]: ${this.measureName}`;

  constructor() {
    start(this.startMark);
  }

  ngOnInit() {
    end(this.startMark);
  }
}
