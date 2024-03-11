import { Component } from '@angular/core';

@Component({
	selector: 'app-heroes-hero',
	templateUrl: './hero.component.html',
	styleUrl: './hero.component.css'
})
export class HeroComponent {
	public name: string = 'Spider-man';
	public age: number = 20;

	public get capitalizeName(): string {
		return this.name.toUpperCase();
	}

	public setHeroName(name: string): void {
		this.name = name;
	}

	public setHeroAge(age: number): void {
		this.age = age;
	}

	public getHeroDescription(): string {
		return `${this.name} is ${this.age} years old`;
	}

	public resetForm(): void {
		this.name = 'Spider-man';
		this.age = 20;
	}
}
