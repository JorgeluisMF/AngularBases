import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public HeroesName: string[] = ['Spiderman','Ironman','Hulk','She Hulk','Flash','Bumblebee'];
  public HeroDeleted?: string;

  RemoveLastHero(): void{
    this.HeroDeleted = this.HeroesName.pop();
  }
}
