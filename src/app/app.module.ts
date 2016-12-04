import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CountryFlagComponent } from './country-flag/country-flag.component';
import { HeaderComponent } from './header.component';
import {FlagService} from "./flag.service";
import { FlagDetailsComponent } from './flag-details/flag-details.component';
import {FlagDetailsService} from "./flag-details.service";
import { FlagEditComponent } from './flag-edit/flag-edit.component';
import {routing} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    CountryFlagComponent,
    HeaderComponent,
    FlagDetailsComponent,
    FlagEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [FlagService,FlagDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
