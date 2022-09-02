import { Component, OnInit, } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selecteHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messagesService: MessageService) {}

  ngOnInit(): void {
  this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));

  }
 onSelect(hero: Hero): void {
  this.selecteHero = hero;
  this.messagesService.add(`HeroesComponent: Selected hero id=${hero.id}`);
 }
}
