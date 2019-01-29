import { Component, OnInit, Input } from '@angular/core';
import { Rating } from 'src/app/core/models/rating';

@Component({
  selector: 'app-profile-rating',
  templateUrl: './profile-rating.component.html',
  styleUrls: ['./profile-rating.component.scss']
})
export class ProfileRatingComponent implements OnInit {
  @Input() rating: Rating;
  constructor() { }

  ngOnInit() {
  }

}
