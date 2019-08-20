import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
})
export class CheckoutPageComponent implements OnInit {
  private measureName = 'CheckoutPageComponent';

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
