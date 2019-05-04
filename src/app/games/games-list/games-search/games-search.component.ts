import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FormControl } from '@angular/forms';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Game } from '../../models/game';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import * as GameListActions from '../ngrx/game-list.actions';
import * as fromGameList from '../ngrx/game-list.reducer';

@Component({
  selector: 'app-games-search',
  templateUrl: './games-search.component.html',
  styleUrls: ['./games-search.component.scss']
})
export class GamesSearchComponent implements OnInit {
  @Input() games: Observable<{games: Game[]}>;
  @Output() filteredGames = new EventEmitter<Game[]>();
  term = new FormControl();

  constructor(private store: Store<fromGameList.FeatureState>) { }

  ngOnInit() {
    this.onSearch();
  }

  onSearch(): void {
    this.term.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((text: string) => of(text))
    )
    .subscribe((text: string) => this.store.dispatch(new GameListActions.SearchGames(text)));
  }
}
