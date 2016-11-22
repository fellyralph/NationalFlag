import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FlagService} from "../flag.service";
import {Flag} from "../flag";
import {FlagDetails} from "../flag-details";

import {FlagDetailsService} from "../flag-details.service";

@Component({
  selector: 'nf-country-flag',
  templateUrl: './country-flag.component.html'
})
export class CountryFlagComponent implements OnInit {



          selectedFlag : Flag;
          showDescription  : boolean;
          selectedCountry : string;
          selectedFlagDetails : FlagDetails;

  constructor(private flagService : FlagService, private flagDetailsService: FlagDetailsService) { }

  ngOnInit() {
    this.showDescription = true;
    this.selectedCountry = 'Tanzania';
    this.selectedFlag = this.flagService.getFlagsByName(this.selectedCountry);
  }

  onSearch(selectedCountry){
    this.showDescription = true;
    this.selectedCountry = selectedCountry;
    this.selectedFlag = this.flagService.getFlagsByName(this.selectedCountry);
  }

  onDescribe(){
    this.showDescription = false;
    this.selectedFlagDetails = this.flagDetailsService.getFlagDetails(this.selectedCountry);
  }

}
