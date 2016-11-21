import {Component, OnInit, Input} from '@angular/core';
import {FlagDetailsService} from "../flag-details.service";
import {FlagDetails} from "../flag-details";

@Component({
  selector: 'nf-flag-details',
  templateUrl:'./flag-details.component.html'
})
export class FlagDetailsComponent implements OnInit {

  selectedFlagDetails : FlagDetails;

  @Input() selectedFlagsCountry : string;

  constructor(private flagDetailsService : FlagDetailsService) { }

  ngOnInit() {
    this.selectedFlagDetails = this.flagDetailsService.getFlagDetails(this.selectedFlagsCountry);
  }



}
