import { Component, OnInit } from '@angular/core';
import {FlagService} from "../flag.service";
import {Flag} from "../flag";

@Component({
  selector: 'nf-country-flag',
  templateUrl: './country-flag.component.html'
})
export class CountryFlagComponent implements OnInit {
          flagName : string ='Tanzanian National Flag';
          flagUrl : string = 'http://tanzania-physicalresources.weebly.com/uploads/1/2/3/1/12310602/7136585_orig.jpg';

          selectedFlag : Flag;

          selectedCountry : string;

  constructor(private flagService : FlagService) { }

  ngOnInit() {
    this.selectedFlag = this.flagService.getFlagsByName(this.selectedCountry);

  }

  onSearch(selectedCountry){
    this.selectedCountry = selectedCountry;
  }

}
