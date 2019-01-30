import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesListComponent } from './games-list/games-list.component';
import { GameDetailComponent } from './game-detail/game-detail.component';

const routes: Routes = [
  { path: 'games', component: GamesListComponent },
  { path: 'game/:id', component: GameDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class GamesRoutingModule { }
