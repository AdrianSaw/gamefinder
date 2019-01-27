import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfileEmailComponent } from './profile-email.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('ProfileEmailComponent', () => {
  let component: ProfileEmailComponent;
  let fixture: ComponentFixture<ProfileEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfileEmailComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});