import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Game } from '../models/game';

@Component({
  selector: 'app-games-search',
  templateUrl: './games-search.component.html',
  styleUrls: ['./games-search.component.scss']
})
export class GamesSearchComponent implements OnInit {
  @Input() games: Game[];
  @Output() filteredGames = new EventEmitter<Game[]>();
  gamesNames: string[];
  search: string;
  constructor() { }

  ngOnInit() {
    this.gamesNames = this.games.map(game => game.name);
  }

  onSearch(evt: string): void {
    const games = [...this.games];
    let results = [];
    if (evt.length > 3) {
      results = games.filter(game => game.name.trim().match(evt.trim()));
      this.filteredGames.emit(results);
    } else {
      this.filteredGames.emit(this.games);
    }
  }
}
