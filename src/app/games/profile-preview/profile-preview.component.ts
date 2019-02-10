import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-preview',
  templateUrl: './profile-preview.component.html',
  styleUrls: ['./profile-preview.component.scss']
})
export class ProfilePreviewComponent implements OnInit {
  @Input() user: any;
  constructor() { }

  ngOnInit() {
  }

}
