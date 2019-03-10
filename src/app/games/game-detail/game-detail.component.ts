import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

import * as moment from 'moment';

import { GamesService } from '../games.service';

import { Game } from '../models/game';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  gameId: string;
  gameDetail: Game;
  showAll = false;

  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService,
    private location: Location,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.gameId = this.route.snapshot.params.id;
    this.gamesService.getGameById(this.gameId).subscribe(game => {
      this.gameDetail = game;
    });
  }

  getGameDates(date: Array<Date>, showAll): String[] {
    const currentTimestamp = moment().unix();
    const gameDates = date.sort()
    .filter(date => {
      const dateTimestamp = moment(date).unix();
      if (dateTimestamp >= currentTimestamp) {
        return date;
      }
    })
    .map(date => {
      return moment(date).format('DD-MM-YYYY HH:mm');
    });

    if (gameDates.length > 5 && !showAll) {
      return gameDates.splice(0, 5);
    } else {
      return gameDates;
    }
  }

  submitPropose() {
    this.toastr.success('Proposal sent');
  }

  goBack() {
    this.location.back();
  }
}
