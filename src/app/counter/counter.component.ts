import { Component } from "@angular/core";

@Component({
  // selector is the name of your component int he html
  // The CSS selector that identifies this directive in
  // a template and triggers instantiation of the directive.
  selector: 'app-counter',
  // template expects html and the templateUrl expects the relative path or absolute url to
  // the html file
  templateUrl: './counter.component.html',
  styleUrl: './counter-component.css'
})
export class CounterComponent {
  public counter: number = 0;

  public resetCounter(): void {
    this.counter = 0;
  }

  public increaseCounter(value: number = 1): void {
    this.counter += value;
  }

  public decreaseCounter(value: number = 1): void {
    if (this.counter === 0) return;

    this.counter -= value;
  }
}
