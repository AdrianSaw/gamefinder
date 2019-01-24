import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { SigninComponent } from 'src/app/sign/signin/signin.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AuthGuard', () => {
  let testForm: FormGroup;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SigninComponent
      ],
      providers: [AuthGuard],
      imports: [
        RouterTestingModule.withRoutes(
          [{ path: 'signin', component: SigninComponent }]
        ),
        FormsModule,
        ReactiveFormsModule
    ]
    });
  });

  it('if user is not logged redirect him to signin page',
    // inject your guard service AND Router
    async(inject([AuthGuard, Router], (auth, router) => {
      // add a spy
      spyOn(router, 'navigate');
      expect(auth.canActivate()).toBeFalsy();
    })
  ));

  it('if user is logged let him through AuthGuard',
    // inject your guard service AND Router
    async(inject([AuthGuard, Router], (auth, router) => {
      // set auth to true to check behavior if user is logged
      auth.authService.isAuthenticated$.next(true);
      // add a spy
      spyOn(router, 'navigate');
      expect(auth.canActivate()).toBeTruthy();
    })
  ));
});
