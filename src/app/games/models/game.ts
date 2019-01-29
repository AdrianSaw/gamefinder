import * as moment from 'moment';

export class Game {
  id: number;
  name: string;
  description: string;
  location: string;
  startDate: moment.Moment;
  finishDate: moment.Moment;
  user: object;

  constructor(game: Game) {
    this.id = game.id;
    this.name = game.name;
    this.description = game.description;
    this.location = game.location;
    this.startDate = game.startDate;
    this.finishDate = game.finishDate;
    this.user = game.user;
  }
}
