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
