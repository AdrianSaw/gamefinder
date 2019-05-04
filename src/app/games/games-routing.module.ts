import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesListComponent } from './games-list/games-list.component';
import { MyGamesComponent } from './my-games/my-games.component';
import { GameDetailComponent } from './games-list/game-detail/game-detail.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: GamesListComponent
  },
  { path: 'my-games', component: MyGamesComponent, canActivate: [AuthGuard] },
  { path: 'game/:id', component: GameDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GamesRoutingModule { }
