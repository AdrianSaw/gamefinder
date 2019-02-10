import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import * as moment from 'moment';

import { Game } from './models/game';
import { Rating } from '../core/models/rating';

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
      startDate: moment('25-01-2019', 'DD-MM-YYYY'),
      finishDate: moment('21-02-2019', 'DD-MM-YYYY'),
      location: 'Warszawa',
      user: {
        id: '1',
        name: 'test',
        avatar: 'https://dungeonblarg.files.wordpress.com/2011/04/jhonen2.jpg',
        bio: 'User description',
        rating: new Rating({
          friendlyRate: 22,
          mentorRate: 77,
          veteranRate: 3
        })
      }
    }),
    new Game({
      id: '2',
      name: 'test game #2 LFP 1 players',
      description: `
        Description...
      `,
      startDate: moment('25-01-2019', 'DD-MM-YYYY'),
      finishDate: moment('21-02-2019', 'DD-MM-YYYY'),
      location: 'Warszawa',
      user: {
        id: '1',
        name: 'test',
        avatar: 'https://dungeonblarg.files.wordpress.com/2011/04/jhonen2.jpg',
        bio: 'User description',
        rating: new Rating({
          friendlyRate: 2,
          mentorRate: 7,
          veteranRate: 11
        })
      }
    }),
    new Game({
      id: '33',
      name: 'test game #33 LFP 1 players',
      description: `
        Description...
      `,
      startDate: moment('25-01-2019', 'DD-MM-YYYY'),
      finishDate: moment('21-02-2019', 'DD-MM-YYYY'),
      location: 'Warszawa',
      user: {
        id: '1',
        name: 'test',
        avatar: 'https://dungeonblarg.files.wordpress.com/2011/04/jhonen2.jpg',
        bio: 'User description',
        rating: new Rating({
          friendlyRate: 22,
          mentorRate: 7,
          veteranRate: 13
        })
      }
    }),
    new Game({
      id: '3',
      name: 'test game #3 LFP 1 players',
      description: `
        Description...
      `,
      startDate: moment('25-01-2019', 'DD-MM-YYYY'),
      finishDate: moment('21-02-2019', 'DD-MM-YYYY'),
      location: 'Warszawa',
      user: {
        id: '1',
        name: 'test',
        avatar: 'https://dungeonblarg.files.wordpress.com/2011/04/jhonen2.jpg',
        bio: 'User description',
        rating: new Rating({
          friendlyRate: 22,
          mentorRate: 7,
          veteranRate: 13
        })
      }
    }),
    new Game({
      id: '4',
      name: 'test game #4 LFP 1 players',
      description: `
        Description...
      `,
      startDate: moment('25-01-2019', 'DD-MM-YYYY'),
      finishDate: moment('21-02-2019', 'DD-MM-YYYY'),
      location: 'Warszawa',
      user: {
        id: '1',
        name: 'test',
        avatar: 'https://dungeonblarg.files.wordpress.com/2011/04/jhonen2.jpg',
        bio: 'User description',
        rating: new Rating({
          friendlyRate: 22,
          mentorRate: 7,
          veteranRate: 13
        })
      }
    }),
    new Game({
      id: '5',
      name: 'test game #5 LFP 1 players',
      description: `
        Description...
      `,
      startDate: moment('25-01-2019', 'DD-MM-YYYY'),
      finishDate: moment('21-02-2019', 'DD-MM-YYYY'),
      location: 'Warszawa',
      user: {
        id: '2',
        name: 'test #2',
        avatar: 'https://d3a1b16i91oc1g.cloudfront.net/full/b707f97316d5909601e4e7549eb36ac9.jpeg',
        bio: 'User description',
        rating: new Rating({
          friendlyRate: 22,
          mentorRate: 7,
          veteranRate: 13
        })
      }
    }),
    new Game({
      id: '6',
      name: 'test game #6 LFP 1 players',
      description: `
        Description...
      `,
      startDate: moment('25-01-2019', 'DD-MM-YYYY'),
      finishDate: moment('21-02-2019', 'DD-MM-YYYY'),
      location: 'Warszawa',
      user: {
        id: '2',
        name: 'test #2',
        avatar: 'https://d3a1b16i91oc1g.cloudfront.net/full/b707f97316d5909601e4e7549eb36ac9.jpeg',
        bio: 'User description',
        rating: new Rating({
          friendlyRate: 22,
          mentorRate: 7,
          veteranRate: 13
        })
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