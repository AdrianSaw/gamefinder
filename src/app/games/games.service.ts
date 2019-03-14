import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Game } from './models/game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  games: Game[] = [
    {
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
      gameDates: [
        new Date('2019-05-15 15:30'),
        new Date('2019-04-15 15:30'),
        new Date('2019-05-18 16:30'),
        new Date('2019-05-22 16:30'),
        new Date('2019-05-30 17:30'),
        new Date('2019-05-17 16:30'),
        new Date('2019-06-15 16:30'),
        new Date('2019-10-15 16:30'),
        new Date('2019-03-15 16:30')
      ],
      location: 'Warszawa',
      user: {
        id: '1',
        name: 'test',
        avatar: 'https://dungeonblarg.files.wordpress.com/2011/04/jhonen2.jpg'
      }
    },
    {
      id: '2',
      name: 'test game #2 LFP 1 players',
      description: `
        Description...
      `,
      gameDates: [
        new Date('2019-04-15 19:30'),
        new Date('2019-03-15 19:30')
      ],
      location: 'Warszawa',
      user: {
        id: '1',
        name: 'test',
        avatar: 'https://dungeonblarg.files.wordpress.com/2011/04/jhonen2.jpg'
      }
    },
    {
      id: '3',
      name: 'test game #33 LFP 1 players',
      description: `
        Description...
      `,
      gameDates: [
        new Date('2019-06-15 17:30')
      ],
      location: 'Warszawa',
      user: {
        id: '2',
        name: 'test',
        avatar: 'https://d3a1b16i91oc1g.cloudfront.net/full/b707f97316d5909601e4e7549eb36ac9.jpeg'
      }
    }
  ];

  userGames: Game[] = [
    {
      id: '2',
      name: 'test game #2 LFP 1 players',
      description: `
        Description...
      `,
      gameDates: [
        new Date('2019-03-15 16:30')
      ],
      location: 'Warszawa',
      user: {
        id: '1',
        name: 'test',
        avatar: 'https://dungeonblarg.files.wordpress.com/2011/04/jhonen2.jpg'
      }
    },
    {
      id: '1',
      name: 'test game #2 LFP 1 players',
      description: `
        Description...
      `,
      gameDates: [
        new Date('2019-03-15 16:30')
      ],
      location: 'Warszawa',
      user: {
        id: '1',
        name: 'test',
        avatar: 'https://dungeonblarg.files.wordpress.com/2011/04/jhonen2.jpg'
      }
    },
    {
      id: '3',
      name: 'test game #2 LFP 1 players',
      description: `
        Description...
      `,
      gameDates: [
        new Date('2019-03-10 23:50'),
        new Date('2019-03-12 22:50')

      ],
      location: 'Warszawa',
      user: {
        id: '1',
        name: 'test',
        avatar: 'https://dungeonblarg.files.wordpress.com/2011/04/jhonen2.jpg'
      }
    }
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

  getUserGames(): Observable<Game[]> {
    return of(this.userGames);
  }

}
