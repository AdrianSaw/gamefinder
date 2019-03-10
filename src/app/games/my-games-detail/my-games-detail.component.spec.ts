import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGamesDetailComponent } from './my-games-detail.component';

describe('MyGamesDetailComponent', () => {
  let component: MyGamesDetailComponent;
  let fixture: ComponentFixture<MyGamesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGamesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGamesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
