import {Component, OnInit, Input} from '@angular/core';
import {FlagDetailsService} from "../flag-details.service";
import {FlagDetails} from "../flag-details";
import {Observable} from "rxjs";
import {Symbolism} from "../symbolism";

@Component({
  selector: 'nf-flag-details',
  templateUrl:'./flag-details.component.html'


})
export class FlagDetailsComponent implements OnInit {


  @Input() selectedFlagDetails : FlagDetails;



  constructor() { }

  ngOnInit() {

  }




}
