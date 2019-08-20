import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ResolveStart } from '@angular/router';

import { filter, map } from 'rxjs/operators';

const measureName = 'AppComponent';

const startMark = `[START]: ${measureName}`;
const endMark = `[END]: ${measureName}`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnInit {
  title = '';

  description = '';

  constructor(private router: Router) {
    performance.mark(startMark);
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof ResolveStart),
        map((event: ResolveStart) => {
          let data = null;
          let route = event.state.root;

          while (route) {
            data = route.data || data;
            route = route.firstChild;
          }

          return data;
        }),
      )
      .subscribe((data: { title: string; description: string }) => {
        this.title = data.title;
        this.description = data.description;
      });
  }

  ngAfterViewInit() {
    performance.mark(endMark);
    performance.measure(measureName, startMark, endMark);
    performance.clearMeasures(measureName);
    performance.clearMarks(startMark);
    performance.clearMarks(endMark);
  }
}
