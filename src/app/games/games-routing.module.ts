import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesListComponent } from './games-list/games-list.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { ProfilePreviewComponent } from './profile-preview/profile-preview.component';
import { MyGamesComponent } from './my-games/my-games.component';

const routes: Routes = [
  { path: 'games', component: GamesListComponent },
  { path: 'my-games', component: MyGamesComponent },
  { path: 'game/:id', component: GameDetailComponent },
  { path: 'profile/:id', component: ProfilePreviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class GamesRoutingModule { }
