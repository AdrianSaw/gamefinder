import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Game } from '../models/game';
import * as moment from 'moment';


@Component({
  selector: 'app-my-games-detail',
  templateUrl: './my-games-detail.component.html',
  styleUrls: ['./my-games-detail.component.scss']
})
export class MyGamesDetailComponent implements OnInit, OnChanges {

  @Input() activeGames: Game[];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.activeGames);
  }

  setTime(date: moment.Moment): string {
    return moment(date).format('HH:mm');
  }
}
