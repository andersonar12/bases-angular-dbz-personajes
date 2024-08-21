import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuidv4 } from 'uuid';
@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuidv4(),
      name: 'Krilin',
      power: 1000,
    },
    {
      id: uuidv4(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuidv4(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  constructor() {}
  onNewCharacter(character: Character) {
    const newCharacter: Character = {
      id: uuidv4(),
      ...character,
    };
    this.characters.push(newCharacter);
  }

  onDeleteCharacter(index: number) {
    this.characters.splice(index, 1);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
