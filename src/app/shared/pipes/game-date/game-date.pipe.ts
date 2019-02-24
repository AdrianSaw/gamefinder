import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'gameDate',
  pure: false
})

export class GameDatePipe implements PipeTransform {
  transform(date: Date): string {
    return moment(date).format('DD/MM/YYYY');
  }
}
