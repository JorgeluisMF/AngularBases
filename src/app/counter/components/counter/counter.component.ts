import { Component, } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

  <h1>Counter: {{ counter }}</h1>

  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="reset()">reset</button>
  <button (click)="increaseBy(-1)">-1</button>

  `
})

export class CounterComponent {
  public counter: number = 10

  increaseBy(value: number): any {
    this.counter += value
  }

  reset(): any {
    this.counter = 10
  }
}
