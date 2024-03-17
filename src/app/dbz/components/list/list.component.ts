import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
	selector: 'dbz-list',
	templateUrl: './list.component.html',
	styleUrl: './list.component.css'
})
export class ListComponent {
	// the child emitt something to the father
	@Output()
	public onRemoveCharacter: EventEmitter<string> = new EventEmitter();

	public title: string = 'Characters'
	// @Input() decorator allow the communication between father component and its children, the children receives something from the father
	@Input()
	public charactersCollection: Character[] = [];

	public removeCharacter(id: string): void {
		this.onRemoveCharacter.emit(id);
	}
}
