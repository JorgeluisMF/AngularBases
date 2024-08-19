import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'My first app of Angular';
  public counter: number = 10 ;


  increment(value: number): any {
    this.counter += value
  }
  reset(): any{
    this.counter = 10
  }
}
