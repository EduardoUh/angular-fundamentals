import { Component } from '@angular/core';

interface Character {
	name: string;
	power: number;
}

@Component({
	selector: 'dbz-list',
	templateUrl: './list.component.html',
	styleUrl: './list.component.css'
})
export class ListComponent {
	public title: string = 'Characters'
	public charactersCollection: Character[] = [{ name: 'Krillin', power: 500 }, { name: 'Goku', power: 10000 }];
}
