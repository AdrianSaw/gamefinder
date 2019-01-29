import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from 'src/app/shared/shared.module';

import { ProfileComponent } from './profile.component';
import { ProfileBioComponent } from '../profile-bio/profile-bio.component';
import { ProfileAvatarComponent } from '../profile-avatar/profile-avatar.component';
import { ProfileEmailComponent } from '../profile-email/profile-email.component';
import { ProfileRatingComponent } from '../profile-rating/profile-rating.component';
import { ProfileChangePasswordComponent } from '../profile-change-password/profile-change-password.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfileComponent,
        ProfileBioComponent,
        ProfileAvatarComponent,
        ProfileEmailComponent,
        ProfileChangePasswordComponent,
        ProfileRatingComponent
      ],
      imports: [
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
