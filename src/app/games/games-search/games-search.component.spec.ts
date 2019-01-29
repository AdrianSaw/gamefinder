import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from 'src/app/shared/shared.module';
import * as moment from 'moment';

import { GamesSearchComponent } from './games-search.component';
import { Game } from '../models/game';

describe('GamesSearchComponent', () => {
  let component: GamesSearchComponent;
  let fixture: ComponentFixture<GamesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GamesSearchComponent
      ],
      imports: [
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesSearchComponent);
    component = fixture.componentInstance;
    const games = [new Game({
      id: 2,
      name: 'test',
      description: 'test',
      startDate: moment('25-01-2019', 'DD-MM-YYYY'),
      finishDate: moment('21-02-2019', 'DD-MM-YYYY'),
      location: 'test',
      user: {
        id: 1,
        name: 'test',
        avatar: 'img'
      }
    })];
    component.games = games;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
