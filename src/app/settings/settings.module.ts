import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ProfileChangePasswordComponent } from './profile-change-password/profile-change-password.component';
import { ProfileChangeEmailComponent } from './profile-change-email/profile-change-email.component';
import { ProfileBioComponent } from './profile-bio/profile-bio.component';
import { ProfileRatingComponent } from './profile-rating/profile-rating.component';
import { ProfileAvatarComponent } from './profile-avatar/profile-avatar.component';

@NgModule({
  declarations: [ProfileComponent, ProfileChangePasswordComponent, ProfileChangeEmailComponent, ProfileBioComponent, ProfileRatingComponent, ProfileAvatarComponent],
  imports: [
    CommonModule
  ]
})
export class SettingsModule { }
