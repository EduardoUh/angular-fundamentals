import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
	selector: 'dbz-form',
	templateUrl: './form.component.html',
	styleUrl: './form.component.css'
})
export class FormComponent {
	// decorator that allows to emit info to the components that are subscribed to this event in this case the father
	@Output()
	public onNewCharacter: EventEmitter<Character> = new EventEmitter();

	public title: string = 'Add new dbz character'
	public newCharacter: Character = {
		name: '',
		power: 0
	}

	public emitCharacter(): void {
		if (
			this.newCharacter.name.length === 0
			|| this.newCharacter.power < 0
		) return;

		// emitting the event
		this.onNewCharacter.emit({ ...this.newCharacter });

		this.newCharacter = { name: '', power: 0 };
	}
}
