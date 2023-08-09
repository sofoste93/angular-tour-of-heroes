/*
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(){
    const heroes = [
      {"id": 1, "name":"SuperMario"},
      {"id":2,"name" : "SuperPatrick"},
      {"id":3,"name" :"SuperLuigi"},
      {"id":4,"name" :"SuperYoshi"},
      {"id":5,"name" :"SuperDonkeyKong"},
      {"id":6,"name" :"SuperWario"},
      { "id": 7, "name": "SuperRamona" },
      { "id": 8, "name": "SuperThomas" },
      { "id": 9, "name": "SuperMichael" },
      { "id": 10, "name": "SuperDenis" },
      { "id": 11, "name": "SuperDaniel" },
      { "id": 12, "name": "SuperPaul" },
      { "id": 13, "name": "SuperTarek" },
      { "id": 14, "name": "SuperLaurens" },
      { "id": 15, "name": "SuperAlex" },
      { "id": 16, "name": "SuperValeria" },
      { "id": 17, "name": "SuperAndreas" },
      { "id": 18, "name": "SuperRoman" },
      { "id": 19, "name": "SuperImo" },
      { "id": 20, "name": "SuperAnthony" },
      { "id": 21, "name": "SuperFabian" }
    ];
    return {heroes};
  }
  
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

}
*/
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}