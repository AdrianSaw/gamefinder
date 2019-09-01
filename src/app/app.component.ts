import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import * as fromAuth from './ngrx/reducers/auth.reducers';
import * as AuthActions from './ngrx/actions/auth.actions';
import * as fromApp from './ngrx/app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  language: string;
  authState: Observable<fromAuth.State>;
  constructor(
    public translate: TranslateService,
    private store: Store<fromApp.AppState>
  ) {
    // TODO: Add translations

    // translate.addLangs(['pl-Pl', 'en-En']);
    // const browserLang = translate.getBrowserLang();
    // this.language = browserLang.match(/pl|en/) ? browserLang : 'pl';
    translate.use('pl');
  }

  ngOnInit() {
    this.authState = this.store.select('auth');
    this.store.dispatch(new AuthActions.IsAuth());
  }

  selectLangugage(lang: string): void {
    this.translate.use(lang);
  }
}
