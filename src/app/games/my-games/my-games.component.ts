import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';
import * as moment from 'moment';
import { NgxSpinnerService } from 'ngx-spinner';

import { GamesService } from '../games.service';
import { CalendarDate } from '../calendar/calendar.interface';
import { Game } from '../models/game';

@Component({
  selector: 'app-my-games',
  templateUrl: './my-games.component.html',
  styleUrls: ['./my-games.component.scss']
})
export class MyGamesComponent implements OnInit {
  selectedDates: CalendarDate[] = null;
  games: Game[] = [];
  activeGames: Game[] = [];

  constructor(
    private gameService: GamesService,
    private spinnerSerive: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.gameService.getUserGames().subscribe(games => {
      this.games = games;
      const calendarDates = [];
      for (const game of this.games) {
        for (const date of game.gameDates) {
          calendarDates.push(date);
        }
      }
      const calendarCount = _.countBy(calendarDates);
      const calendarDatesWithCount = Object.keys(calendarCount).map(date => {
        return {
          mDate: moment(new Date(date)),
          events: calendarCount[date]
        };
      });
      this.selectedDates = calendarDatesWithCount;
      this.getActiveGamesForCurrentDate(moment(new Date()));
    });
  }

  onSelectDate(evt: any) {
    this.getActiveGamesForCurrentDate(evt.mDate);
  }

  getActiveGamesForCurrentDate(mDate: moment.Moment) {
    this.spinnerSerive.show();
    const activeGames = [];
    for (const game of this.games) {
      for (const date of game.gameDates) {
        if (moment(date).isSame(mDate, 'day')) {
          const activeGame = { ...game };
          activeGame.gameDates = [date];
          activeGames.push(activeGame);
        }
      }
    }
    setTimeout(() => {
      this.activeGames = [...activeGames];
      this.spinnerSerive.hide();
    }, 1000);
  }
}
