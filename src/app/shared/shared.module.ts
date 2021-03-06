import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TranslateModule } from '@ngx-translate/core';

import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';
import { LazyLoadDirective } from './directives/lazyload.directive';
import { GameDatePipe } from './pipes/game-date/game-date.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    CapitalizePipe,
    GameDatePipe,
    LazyLoadDirective,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [
    CapitalizePipe,
    HighlightDirective,
    GameDatePipe,
    ToastrModule,
    ModalModule,
    BsDropdownModule,
    CollapseModule,
    AccordionModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    LazyLoadDirective,
    TranslateModule
  ]
})
export class SharedModule { }
