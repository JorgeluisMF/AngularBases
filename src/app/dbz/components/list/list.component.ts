import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',

})
export class ListComponent {


  @Input()
  public CharacterList: Character[] = []

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  OnDelete(id?: string): void{

    if( !id ) return;

    this.onDelete.emit(id)
    console.log({id})
  }

 }
