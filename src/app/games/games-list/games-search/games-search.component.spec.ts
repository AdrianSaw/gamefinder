import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from 'src/app/shared/shared.module';

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
    const games: Game[] = [
      {
        id: '2',
        name: 'test game #2 LFP 1 players',
        description: `
          Description...
        `,
        gameDates: [
          new Date('2019-03-15 16:30')
        ],
        location: 'Warszawa',
        user: {
          id: '1',
          name: 'test',
          avatar: 'https://dungeonblarg.files.wordpress.com/2011/04/jhonen2.jpg'
        }
      }
    ];
    component.games = games;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
