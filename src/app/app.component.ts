import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['pl', 'en']);
    translate.setDefaultLang('pl');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/pl|en/) ? browserLang : 'pl');
  }

  ngOnInit(): void {
    if (environment.production && location.protocol === 'http') {
      window.location.href = location.href.replace('http', 'https');
    }
  }

  selectLangugage(lang: string): void {
    this.translate.use(lang);
  }
}
