import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { FaqComponent } from './faq/faq.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
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
    loadChildren: './settings/settings.module#SettingsModule',
    canActivate: [AuthGuard]
  },
  { path: 'faq',
    loadChildren: './faq/faq.module#FaqModule'
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
