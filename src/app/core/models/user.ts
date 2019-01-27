export class User {
  id: string;
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

export class Rating {
  friendlyRate: number;
  mentorRate: number;
  veteranRate: number;

  constructor(rating: Rating) {
    this.friendlyRate = rating.friendlyRate;
    this.mentorRate = rating.mentorRate;
    this.veteranRate = rating.veteranRate;
  }
}
