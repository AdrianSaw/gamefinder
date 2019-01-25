import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile/profile.component';
import { ProfileChangePasswordComponent } from './profile-change-password/profile-change-password.component';
import { ProfileBioComponent } from './profile-bio/profile-bio.component';
import { ProfileRatingComponent } from './profile-rating/profile-rating.component';
import { ProfileAvatarComponent } from './profile-avatar/profile-avatar.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { ProfileEmailComponent } from './profile-email/profile-email.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileChangePasswordComponent,
    ProfileBioComponent,
    ProfileRatingComponent,
    ProfileAvatarComponent,
    ProfileEmailComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ],
  exports: [
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
