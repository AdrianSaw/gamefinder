import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '../core/models/user';
import { Rating } from '../core/models/rating';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor() {
  }

  getUserData(): Observable<User> {
    const user = new User({
      id: 1,
      name: 'GameFinder',
      avatar: 'https://dungeonblarg.files.wordpress.com/2011/04/jhonen2.jpg',
      email: 'test@gamefinder.com',
      bio: 'User description',
      rating: new Rating({
        friendlyRate: 22,
        mentorRate: 7,
        veteranRate: 13
      })
    });
    return of(user);
  }
}
