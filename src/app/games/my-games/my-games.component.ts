import { Component, OnInit } from '@angular/core';
import { CalendarDate } from '../calendar/calendar.interface';

import * as _ from 'lodash';
import * as moment from 'moment';
import { GamesService } from '../games.service';
import { Game } from '../models/game';

@Component({
  selector: 'app-my-games',
  templateUrl: './my-games.component.html',
  styleUrls: ['./my-games.component.scss']
})
export class MyGamesComponent implements OnInit {
  selectedDates: CalendarDate[] = null;
  games: Game[];

  constructor(
    private gameService: GamesService
  ) { }

  ngOnInit() {
    this.gameService.getUserGames().subscribe(games => this.games = games);
    const calendarDates = [];
    for (let game of this.games) {
      for (let date of game.gameDates) {
        calendarDates.push(date);
      }
    }
    const calendarCount = _.countBy(calendarDates);
    const calendarDatesWithCount = Object.keys(calendarCount).map(date => {
      return {
        mDate: moment(new Date(date)),
        events: calendarCount[date]
      }
    });
    this.selectedDates = calendarDatesWithCount;
  }

  onSelectDate(evt) {
    console.log(evt);
  }
}
