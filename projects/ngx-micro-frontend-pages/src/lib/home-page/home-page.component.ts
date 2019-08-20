import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  private measureName = 'HomePageComponent';

  private startMark = `[START]: ${this.measureName}`;
  private endMark = `[END]: ${this.measureName}`;

  constructor() {
    performance.mark(this.startMark);
  }

  ngOnInit() {
    performance.mark(this.endMark);
    performance.measure(this.measureName, this.startMark, this.endMark);
    performance.clearMeasures(this.measureName);
    performance.clearMarks(this.startMark);
    performance.clearMarks(this.endMark);
  }
}
