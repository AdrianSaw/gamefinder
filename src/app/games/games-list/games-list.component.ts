import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

import { Game } from '../models/game';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromGameList from './ngrx/game-list.reducer';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  gamesListState: Observable<any>;
  games: Game[];
  constructor(
    private store: Store<fromGameList.FeatureState>
  ) { }

  ngOnInit() {
    this.gamesListState = this.store.select('gameList');
    this.gamesListState.subscribe(data => {
      this.games = data.games;
      if (data.term) {
        const filteredGames = this.games.filter(game => game.name.trim().toLowerCase().match(data.term.trim().toLowerCase()))
        this.games = filteredGames;
      }
    });
  }

  getDate(date: Array<string>) {
    const currentTimestamp = moment().unix();
    const closestGameDate = date.sort().find(gameData => moment(gameData).unix() >= currentTimestamp );
    return closestGameDate;
  }
}
