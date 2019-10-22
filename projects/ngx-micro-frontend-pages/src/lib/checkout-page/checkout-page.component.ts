import { Component, OnInit } from '@angular/core';
import { start, end } from 'perf-marks/marks';

@Component({
  selector: 'ngx-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
})
export class CheckoutPageComponent implements OnInit {
  private measureName = 'CheckoutPageComponent';

  constructor() {
    start(this.measureName);
  }

  ngOnInit() {
    end(this.measureName);
  }
}
