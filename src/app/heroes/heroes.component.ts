import { Component, } from '@angular/core';
import { Hero } from '../hero.model';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  heroes = HEROES;
  selecteHero?: Hero;

  onSelect(hero: Hero): void {
    this.selecteHero = hero;

  }
}
