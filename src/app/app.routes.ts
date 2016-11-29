import {CountryFlagComponent} from "./country-flag/country-flag.component";
import {FlagEditComponent} from "./flag-edit/flag-edit.component";
import {RouterModule} from "@angular/router";
/**
 * Created by fmatinya on 29/11/2016.
 */
const APPS_ROUTING = [
  {path : 'flag-details',component : CountryFlagComponent },
  {path : 'flag-edit',component : FlagEditComponent}
];

export const routing = RouterModule.forRoot(APPS_ROUTING);
