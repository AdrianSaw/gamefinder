import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { NoAuthGuard } from './noauth.guard';

describe('NoAuthGuard', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoAuthGuard],
      imports: [
        RouterTestingModule
    ]
    });
  });

  it('if user is logged redirect him to landing page',
    // inject your guard service AND Router
    async(inject([NoAuthGuard, Router], (auth, router) => {
      // add a spy
      spyOn(router, 'navigate');
      expect(auth.canActivate()).toBeTruthy();
    })
  ));

  it('if user is not logged let him through NoAuthGuard',
    // inject your guard service AND Router
    async(inject([NoAuthGuard, Router], (auth, router) => {
      // set auth to true to check behavior if user is logged
      auth.authService.isAuthenticated$.next(true);
      // add a spy
      spyOn(router, 'navigate');
      expect(auth.canActivate()).toBeFalsy();
    })
  ));
});
