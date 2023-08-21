import { Component, AfterViewChecked  } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements AfterViewChecked  {
  count: number = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  constructor() { }

  ngAfterViewChecked() {
    console.log('Ansicht wurde aktualisiert. Counter: ' + this.count);
  }
}
