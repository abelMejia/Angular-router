import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id) as Hero;
    return of(hero);
  }

  getHeroes(): Hero[] {
    return HEROES;
  }

}
