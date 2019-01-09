import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthenticated$: BehaviorSubject<boolean>;
  isAuthenticated: Observable<boolean>;

  constructor (
    private storageService: StorageService
  ) {
    const authStatus = this.getAuthenticated;
    this.isAuthenticated$ = new BehaviorSubject(authStatus);
    this.isAuthenticated = this.isAuthenticated$.asObservable();
    this.isAuthenticated.subscribe();
  }

  private get getAuthenticated(): boolean {
    return this.storageService.getItem('auth');
  }
}
