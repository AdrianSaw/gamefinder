import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePreviewComponent } from './profile-preview.component';
import { GamesService } from '../games.service';

describe('ProfilePreviewComponent', () => {
  let component: ProfilePreviewComponent;
  let fixture: ComponentFixture<ProfilePreviewComponent>;
  let gameService: GamesService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfilePreviewComponent
      ],
      providers: [
        GamesService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('User should be undefined', () => {
    expect(component.user).toBe(undefined);
  });

  it('User should have data', () => {
    gameService = TestBed.get(GamesService);
    gameService.getGameById('1').subscribe(data => {
      component.user = data.user;
      expect(component.user).toBeTruthy();
    });
  });
});
