import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Game } from '../../models/game';
import * as GameListActions from '../ngrx/game-list.actions';
import * as fromGameList from '../ngrx/game-list.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-add',
  templateUrl: './game-add.component.html',
  styleUrls: ['./game-add.component.scss']
})
export class GameAddComponent implements OnInit, OnDestroy {

  constructor(private store: Store<fromGameList.FeatureState>) { }
  editedItem: Game;
  editMode: false;
  subscription: Subscription;

  ngOnInit() {
    this.subscription = this.store.select('gameList')
      .subscribe(
        data => {
          if (data.editedGameIndex > -1) {
              this.editedItem = data.editedGame;
          }
        }
      )

    const index = 1;
    this.store.dispatch(new GameListActions.StartEdit(index));
  }

  addGame() {
    const newGame = {
      id: '3',
      name: 'test game #1 LFP 3 players',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      `,
      gameDates: [
        new Date('2019-05-15 15:30'),
        new Date('2019-04-15 15:30')
      ],
      location: 'Warszawa',
      user: {
        id: '1',
        name: 'test',
        avatar: 'https://dungeonblarg.files.wordpress.com/2011/04/jhonen2.jpg'
      }
    }
    this.store.dispatch(new GameListActions.AddGame(newGame));
  }

  editGame() {
    const index = 1;

    const newGame = {
      id: '1',
      name: 'test game #1 LFP 5 players',
      description: `
        New Description
      `,
      gameDates: [
        new Date('2019-05-15 15:30'),
        new Date('2019-04-15 15:30')
      ],
      location: 'Warszawa',
      user: {
        id: '1',
        name: 'test',
        avatar: 'https://dungeonblarg.files.wordpress.com/2011/04/jhonen2.jpg'
      }
    }

    this.store.dispatch(new GameListActions.UpdateGame({ game: newGame}));
  }

  deleteGame() {
    const index = 1;
    this.store.dispatch(new GameListActions.DeleteGame());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
