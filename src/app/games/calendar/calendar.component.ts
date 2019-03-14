import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import * as moment from 'moment';
import * as _ from 'lodash';

import { CalendarDate } from './calendar.interface';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  currentDate = moment();
  dayNames = ['Niedz', 'Pn', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob'];
  weeks: CalendarDate[][] = [];
  sortedDates: CalendarDate[] = [];

  @Input() selectedDates: CalendarDate[] = [];
  @Output() onSelectDate = new EventEmitter<CalendarDate>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.selectedDates);
    this.generateCalendar();
  }

  // select next month
  nextMonth() {
    this.currentDate = moment(this.currentDate).add(1, 'months');
    this.generateCalendar();
  }

  // select previous month
  prevMonth() {
    this.currentDate = moment(this.currentDate).subtract(1, 'months');
    this.generateCalendar();
  }

  // display current month
  getCurrentMonth() {
    return moment(this.currentDate).format('MMMM');
  }

  // check today date
  isToday(date: moment.Moment): boolean {
    return moment().isSame(moment(date), 'day');
  }

  // check active month for styling purpose
  isSelectedMonth(date: moment.Moment): boolean {
    return moment(date).isSame(this.currentDate, 'month');
  }

  isSelected(date: moment.Moment): boolean {
    return _.findIndex(this.selectedDates, (selectedDate) => {
      return moment(date).isSame(selectedDate.mDate, 'day');
    }) > -1;
  }

  countEvents(date: moment.Moment): number {
    const eventsCount = _.find(this.selectedDates, (selectedDate) => {
      return moment(date).isSame(selectedDate.mDate, 'day');
    });
    if (eventsCount) {
      return eventsCount.events;
    }
  }

  selectDate(date: CalendarDate): void {
    this.onSelectDate.emit(date);
  }

  // create calendar grid
  generateCalendar(): void {
    const dates = this.fillDates(this.currentDate);
    const weeks: CalendarDate[][] = [];
    while (dates.length > 0) {
      weeks.push(dates.splice(0, 7));
    }
    this.weeks = weeks;
  }

  // fill calendar with dates
  fillDates(currentMoment: moment.Moment): any {
    const firstOfMonth = moment(currentMoment).startOf('month').day();
    const firstDayOfGrid = moment(currentMoment).startOf('month').subtract(firstOfMonth, 'days');
    const start = firstDayOfGrid.date();
    return _.range(start, start + 42)
      .map((date: number): any => {
        const d = moment(firstDayOfGrid).date(date);
        return {
          today: this.isToday(d),
          selected: this.isSelected(d),
          mDate: d,
          activeMonth: this.isSelectedMonth(d),
          events: this.countEvents(d)
        };
      });
  }

}
