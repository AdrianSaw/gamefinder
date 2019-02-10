import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  language: string;
  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['pl', 'en']);
    translate.setDefaultLang('pl');
    const browserLang = translate.getBrowserLang();
    this.language = browserLang.match(/pl|en/) ? browserLang : 'pl';
    translate.use(this.language);
  }

  ngOnInit() {}

  selectLangugage(lang: string): void {
    this.translate.use(lang);
  }
}
