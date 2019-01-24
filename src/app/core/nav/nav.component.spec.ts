import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SignModule } from 'src/app/sign/sign.module';
import { SignRoutingModule } from 'src/app/sign/sign-routing.module';
import { SigninComponent } from 'src/app/sign/signin/signin.component';

import { SignupComponent } from 'src/app/sign/signup/signup.component';

import { NoAuthGuard } from '../auth/noauth.guard';
import { NavComponent } from './nav.component';

export function HttpLoaderFactory(httpClient: HttpClient): any {
  return new TranslateHttpLoader(httpClient);
}

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  const routes: Routes = [
    { path: 'signin', component: SigninComponent, canActivate: [NoAuthGuard] },
    { path: 'signup', component: SignupComponent, canActivate: [NoAuthGuard] }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavComponent ],
      imports: [
        SignModule,
        RouterModule.forRoot(routes, { useHash: true }),
        SignRoutingModule,
        HttpClientModule,
        TranslateModule.forRoot({
          useDefaultLang: true,
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
