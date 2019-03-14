import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

import { Game } from '../models/game';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  games: Game[];
  searchResults: Game[];
  constructor(
    private gamesService: GamesService
  ) { }

  ngOnInit() {
    this.gamesService.getGamesList().subscribe(games => {
      this.games = games;
      this.searchResults = games;
    });
  }

  filteredGames(searchResult: Game[]) {
    this.searchResults = this.games;
    if (searchResult) {
      this.searchResults = searchResult;
    }
  }
  getDate(date: Array<string>) {
    const currentTimestamp = moment().unix();
    const closestGameDate = date.sort().find(gameData => moment(gameData).unix() >= currentTimestamp );
    return closestGameDate;
  }
}
