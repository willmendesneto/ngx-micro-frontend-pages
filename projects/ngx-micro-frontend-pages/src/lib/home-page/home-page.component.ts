import { Component, OnInit, Input } from '@angular/core';
import { start, end } from 'perf-marks';

@Component({
  selector: 'ngx-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  private measureName = 'HomePageComponent';

  private startMark = `[START]: ${this.measureName}`;

  constructor() {
    start(this.startMark);
  }

  ngOnInit() {
    end(this.startMark);
  }
}
