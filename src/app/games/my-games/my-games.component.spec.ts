import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGamesComponent } from './my-games.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { MyGamesDetailComponent } from '../my-games-detail/my-games-detail.component';

describe('MyGamesComponent', () => {
  let component: MyGamesComponent;
  let fixture: ComponentFixture<MyGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MyGamesComponent,
        CalendarComponent,
        MyGamesDetailComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
