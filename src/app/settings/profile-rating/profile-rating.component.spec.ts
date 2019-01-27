import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rating } from 'src/app/core/models/user';

import { ProfileRatingComponent } from './profile-rating.component';


describe('ProfileRatingComponent', () => {
  let component: ProfileRatingComponent;
  let fixture: ComponentFixture<ProfileRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfileRatingComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileRatingComponent);
    component = fixture.componentInstance;
    component.rating = new Rating({
      friendlyRate: 1,
      mentorRate: 1,
      veteranRate: 1
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
