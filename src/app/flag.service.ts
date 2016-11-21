import { Injectable } from '@angular/core';
import {Flag} from "./flag";
import {Http, Headers} from "@angular/http";






@Injectable()
export class FlagService {

  private flagArray : Flag[] = [{ countryName : 'Tanzania',flagUrl :'http://tanzania-physicalresources.weebly.com/uploads/1/2/3/1/12310602/7136585_orig.jpg'},
{ countryName : 'France',flagUrl :'https://images.alphacoders.com/958/95873.jpg'},
{ countryName : 'Rwanda',flagUrl :'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Rwanda.svg/2000px-Flag_of_Rwanda.svg.png'},
{ countryName : 'Senegal',flagUrl :'http://www.flagz.co.nz/wp-content/uploads/2015/04/Senegal-flag.jpg'},
{ countryName : 'Swaziland',flagUrl :'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Flag_of_Swaziland.svg/1280px-Flag_of_Swaziland.svg.png'},
{ countryName : 'Morocco',flagUrl :'https://studentaffairs.duke.edu/sites/default/files/u110/ws_Morocco_flag_1920x1080.jpg'},
{ countryName : 'Russia',flagUrl :'http://pngimg.com/upload/flags_PNG14711.png'}];

constructor(private http : Http) { }

  getFlags(){
    return this.flagArray;
  };

  getFlagsByName(country : string){
    return this.getFlags().find(fl => fl.countryName === country);
  }

  /*
  storeFlags(){
    const datas = JSON.stringify(this.flagArray);

    const headers = new Headers(
      {
        'Content-Type' : 'application/json'
      }
    );
    console.log('The flag log was called ................');
    return this.http.put('https://nationalflag-960dc.firebaseio.com/flags.json',datas,{ headers : headers });



  }*/
}
