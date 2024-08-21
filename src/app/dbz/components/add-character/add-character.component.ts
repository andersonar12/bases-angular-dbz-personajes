import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, type OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dbz-add-character',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent implements OnInit {
  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  ngOnInit(): void {}

  emitCharacter() {
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);
    console.log(this.character);

    this.character = {
      name: '',
      power: 0,
    };
  }
}
