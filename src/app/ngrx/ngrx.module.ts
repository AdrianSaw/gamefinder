import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './app.reducers';
import { CustomSerializer } from './reducers/serializer.reducer';

import { IsAuthEffect } from './effects/isAuth.effect';
import { SigninEffect } from './effects/signin.effect';
import { LogoutEffect } from './effects/logout.effect';
import { SignupEffect } from './effects/signup.effect';

import { environment } from '../../environments/environment';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      IsAuthEffect,
      SigninEffect,
      SignupEffect,
      LogoutEffect
    ]),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    })
  ],
  exports: [
    StoreModule,
    EffectsModule,
    StoreRouterConnectingModule
  ]
})
export class NgrxModule { }
