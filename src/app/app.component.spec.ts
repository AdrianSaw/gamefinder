import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { LandingComponent } from './core/landing/landing.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { FaqComponent } from './core/faq/faq.component';
import { SharedModule } from './shared/shared.module';

export function HttpLoaderFactory(httpClient: HttpClient): any {
  return new TranslateHttpLoader(httpClient);
}

let translate: TranslateService;
let component: AppComponent;
let fixture: ComponentFixture<AppComponent>;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LandingComponent,
        NotFoundComponent,
        FaqComponent,
        NavComponent
      ],
      imports: [
        AppRoutingModule,
        NgxSpinnerModule,
        HttpClientModule,
        SharedModule,
        TranslateModule.forRoot({
          useDefaultLang: true,
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ],
      providers: [
        TranslateService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    translate = TestBed.get(TranslateService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should set language to browser lang', () => {
    const browserLang = translate.getBrowserLang();
    spyOn(translate, 'getBrowserLang').and.returnValue('de');
    translate.getBrowserLang();
    expect(component.language).toBe(browserLang);
  });

  it('should check language click', () => {
    spyOn(component, 'selectLangugage');
    fixture.debugElement.nativeElement.querySelector('#eng-language').click();
    expect(component.selectLangugage).toHaveBeenCalledWith('en');
  });

  it('should change language', () => {
    component.selectLangugage('en');
    translate.onLangChange.subscribe(current => {
      if (current.lang !== 'pl') {
        expect(current.lang).toBe('en');
      }
    });
  });

});
