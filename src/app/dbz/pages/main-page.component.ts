import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-main-page-component',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbzService: DbzService ){ }

  get characters(): Character[] {
    return [...this.dbzService.character]
  }

  onDeleteCharacter(id: string): void{
    this.dbzService.onDeleteCharacterById(id)
  }

  onNewCharacter(character: Character):void{
    this.dbzService.addCharacter( character )
  }
}
