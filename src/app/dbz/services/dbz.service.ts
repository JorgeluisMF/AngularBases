import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid'
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  public character: Character[] =[
    {
      id: uuid(),
      name: 'krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 8500
    }
  ]

  addCharacter( character: Character): void{
    const newCharacter: Character = {id: uuid(), ...character}

    this.character.push(newCharacter)
  }

  onDeleteCharacterById( id: string) {
    this.character = this.character.filter( character => character.id !== id)
  }

}
