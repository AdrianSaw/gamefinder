import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesListComponent } from './games-list/games-list.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameAddComponent } from './game-add/game-add.component';
import { GamesSearchComponent } from './games-search/games-search.component';

@NgModule({
  declarations: [GamesListComponent, GameDetailComponent, GameAddComponent, GamesSearchComponent],
  imports: [
    CommonModule
  ]
})
export class GamesModule { }
