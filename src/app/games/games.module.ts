import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { SharedModule } from '../shared/shared.module';

import { GamesListComponent } from './games-list/games-list.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameAddComponent } from './game-add/game-add.component';
import { GamesSearchComponent } from './games-search/games-search.component';
import { ProfilePreviewComponent } from './profile-preview/profile-preview.component';
import { MyGamesComponent } from './my-games/my-games.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MyGamesDetailComponent } from './my-games-detail/my-games-detail.component';

@NgModule({
  declarations: [
    GamesListComponent,
    GameDetailComponent,
    GameAddComponent,
    GamesSearchComponent,
    ProfilePreviewComponent,
    MyGamesComponent,
    CalendarComponent,
    MyGamesDetailComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    SharedModule
  ]
})
export class GamesModule { }
