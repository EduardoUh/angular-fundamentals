import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
	public title: string = 'My first Angular app';
	/* public counter: number = 0;

	public resetCounter(): void {
		this.counter = 0;
	}

	public increaseCounter(value: number = 1): void {
		this.counter += value;
	}

	public decreaseCounter(value: number = 1): void {
		if (this.counter === 0) return;
		this.counter -= value;
	} */
}
