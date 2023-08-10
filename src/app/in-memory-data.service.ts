import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(){
    let heroes = [
      { id: 1, name:'SuperMario' },
      { id: 2, name: 'SuperPatrick' },
      { id: 3, name:'SuperLuigi' },
      { id: 4, name:'SuperYoshi' },
      { id: 5, name:'SuperMessiah' },
      { id: 6, name:'SuperWario' },
      { id: 7, name: 'SuperRamona' },
      { id: 8, name: 'SuperThomass' },
      { id: 9, name: 'SuperMichaels' },
      { id: 10, name: 'SuperDenis' },
      { id: 11, name: 'SuperDaniels' },
      { id: 12, name: 'SuperPaul' },
      { id: 13, name: 'SuperTarek' },
      { id: 14, name: 'SuperLaurens' },
      { id: 15, name: 'SuperAlex' },
      { id: 16, name: 'SuperValeria' },
      { id: 17, name: 'SuperAndreas' },
      { id: 18, name: 'SuperRoman' },
      { id: 19, name: 'SuperImo' },
      { id: 20, name: 'SuperAnthony' },
      { id: 21, name: 'SuperFabian' },
      { id: 22, name: 'SuperSven' },
      { id: 23, name: 'SuperMartin' },
      { id: 24, name: 'SuperTanja' },
      { id: 25, name: 'SuperSteffen' },
      { id: 26, name: 'SuperCarsten' }
    ];
    return {heroes};
  }
  
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

}