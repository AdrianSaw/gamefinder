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
  gamesList: Game[];
  constructor(
    private gamesService: GamesService
  ) { }

  ngOnInit() {
    this.gamesService.getGamesList().subscribe(games => {
      this.games = games;
      this.gamesList = games;
    });
  }

  filteredGames(searchResult: Game[]) {
    this.gamesList = this.games;
    if (searchResult) {
      this.gamesList = searchResult;
    }
  }

}
