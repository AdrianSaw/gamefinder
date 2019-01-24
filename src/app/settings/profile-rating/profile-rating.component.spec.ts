import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRatingComponent } from './profile-rating.component';

describe('ProfileRatingComponent', () => {
  let component: ProfileRatingComponent;
  let fixture: ComponentFixture<ProfileRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
