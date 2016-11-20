import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CountryFlagComponent } from './country-flag/country-flag.component';
import { HeaderComponent } from './header.component';
import {FlagService} from "./flag.service";

@NgModule({
  declarations: [
    AppComponent,
    CountryFlagComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FlagService],
  bootstrap: [AppComponent]
})
export class AppModule { }
