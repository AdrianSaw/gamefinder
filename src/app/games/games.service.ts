import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import * as moment from 'moment';

import { Game } from './models/game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  games = [
    new Game({
      id: '1',
      name: 'test game #1 LFP 3 players',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor, leo eget rhoncus ornare,
        dolor ligula congue neque, eu pulvinar eros quam vel elit. Vivamus vitae fermentum lectus, et eleifend sapien.
        Donec ornare congue ante, malesuada tempor nisi pharetra id. 'M'aecenas sem quam, maximus in erat ac,
        ornare ornare leo. Nulla congue augue in ultrices consequat. Morbi vel orci felis. Phasellus luctus luctus cursus.
        Mauris egestas risus tortor, et maximus mauris eleifend et. Curabitur pulvinar, leo ac tincidun't' semper,
        enim lorem fermentum augue, ut imperdiet augue sapien ut risus. Mauris imperdiet iaculis tincidun't'.
      `,
      startDate: new Date('2019-03-15'),
      finishDate: new Date('2019-07-23'),
      location: 'Warszawa',
      user: {
        id: '1',
        name: 'test',
        avatar: 'https://dungeonblarg.files.wordpress.com/2011/04/jhonen2.jpg'
      }
    }),
    new Game({
      id: '2',
      name: 'test game #2 LFP 1 players',
      description: `
        Description...
      `,
      startDate: new Date('2019-03-15'),
      finishDate: new Date('2019-05-22'),
      location: 'Warszawa',
      user: {
        id: '1',
        name: 'test',
        avatar: 'https://dungeonblarg.files.wordpress.com/2011/04/jhonen2.jpg'
      }
    }),
    new Game({
      id: '3',
      name: 'test game #33 LFP 1 players',
      description: `
        Description...
      `,
      startDate: new Date('2019-03-15'),
      finishDate: new Date('2019-05-22'),
      location: 'Warszawa',
      user: {
        id: '2',
        name: 'test',
        avatar: 'https://d3a1b16i91oc1g.cloudfront.net/full/b707f97316d5909601e4e7549eb36ac9.jpeg'
      }
    })
  ];

  constructor() {
  }

  getGamesList(): Observable<Game[]> {
    return of(this.games);
  }

  getGameById(id: string): Observable<Game> {
    const gameDetail = this.games.find(game => game.id === id);
    return of(gameDetail);
  }
}
