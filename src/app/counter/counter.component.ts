import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  public counter = 10;
  constructor() {}

  ngOnInit(): void {}
  public operate(number: number) {
    this.counter = this.counter + number;
  }

  public reset() {
    this.counter = 10;
  }
}
