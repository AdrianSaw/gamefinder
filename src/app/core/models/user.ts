import { Rating } from './rating';

export class User {
  id: number;
  name: string;
  avatar: string;
  email: string;
  bio: string;
  rating: Rating;

  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.avatar = user.avatar;
    this.email = user.email;
    this.bio = user.bio;
    this.rating = user.rating;
  }
}
