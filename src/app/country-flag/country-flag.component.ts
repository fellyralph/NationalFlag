import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FlagService} from "../flag.service";
import {Flag} from "../flag";

@Component({
  selector: 'nf-country-flag',
  templateUrl: './country-flag.component.html'
})
export class CountryFlagComponent implements OnInit {



          selectedFlag : Flag;

          showDescription  : boolean;
          selectedCountry : string;

  constructor(private flagService : FlagService) { }

  ngOnInit() {
    this.showDescription = true;
    this.selectedCountry = 'Tanzania';
    this.selectedFlag = this.flagService.getFlagsByName(this.selectedCountry);


  }

  onSearch(selectedCountry){
    this.selectedCountry = selectedCountry;
    this.selectedFlag = this.flagService.getFlagsByName(this.selectedCountry);
  }

  onDescribe(){
    this.showDescription = false;

  }

}
