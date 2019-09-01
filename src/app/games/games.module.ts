import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { SharedModule } from '../shared/shared.module';

import { GamesListComponent } from './games-list/games-list.component';
import { MyGamesComponent } from './my-games/my-games.component';
import { CalendarComponent } from './calendar/calendar.component';
import { GameAddComponent } from './game-add/game-add.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GamesSearchComponent } from './games-search/games-search.component';
import { MyGamesDetailComponent } from './my-games/my-games-detail/my-games-detail.component';
import { StoreModule } from '@ngrx/store';
import { GameListReducer } from './ngrx/game-list.reducer';

@NgModule({
  declarations: [
    GamesListComponent,
    GameDetailComponent,
    GameAddComponent,
    GamesSearchComponent,
    MyGamesComponent,
    CalendarComponent,
    MyGamesDetailComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    SharedModule,
    StoreModule.forFeature('gameList', GameListReducer)
  ],
  providers: [
    DatePipe
  ]
})
export class GamesModule { }
