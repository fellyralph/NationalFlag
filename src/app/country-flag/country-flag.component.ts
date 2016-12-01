import { Component, OnInit,Input } from '@angular/core';
import {FlagService} from "../flag.service";
import {Flag} from "../flag";

@Component({
  selector: 'nf-country-flag',
  templateUrl: './country-flag.component.html'
})
export class CountryFlagComponent implements OnInit {

          selectedFlag : Flag;


   selectedCountry : string;

  constructor(private flagService : FlagService) { }

  ngOnInit() {
    this.selectedCountry = 'Tanzania';
    this.selectedFlag = this.flagService.getFlagsByName(this.selectedCountry);

  }

  onSearch(selectedCountry){
    console.log('Inside on search method');
    this.selectedCountry = selectedCountry;
    this.selectedFlag = this.flagService.getFlagsByName(this.selectedCountry);
  }

}
