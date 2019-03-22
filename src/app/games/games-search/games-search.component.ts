import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Game } from '../models/game';
import { FormControl } from '@angular/forms';

import { debounceTime, distinctUntilChanged, flatMap } from 'rxjs/operators';

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
  term = new FormControl();
  constructor() { }

  ngOnInit() {
    this.gamesNames = this.games.map(game => game.name);
    this.onSearch();
  }

  onSearch(): void {
    this.term.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    )
    .subscribe(term => {
      const games = this.games.filter(game => game.name.trim().toLowerCase().match(term.trim().toLowerCase()));
      this.filteredGames.emit(games);
    });
  }
}
