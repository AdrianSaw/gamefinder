import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './core/not-found/not-found.component';
import { LandingComponent } from './core/landing/landing.component';
import { FaqComponent } from './core/faq/faq.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'sign',
    loadChildren: './sign/sign.module#SignModule'
  },
  {
    path: 'games',
    loadChildren: './games/games.module#GamesModule'
  },
  {
    path: 'profile',
    loadChildren: './settings/settings.module#SettingsModule'
  },
  { path: 'faq', component: FaqComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
