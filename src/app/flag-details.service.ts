import { Injectable } from '@angular/core';
import {FlagDetails} from "./flag-details";

@Injectable()
export class FlagDetailsService {

  private flagDetailsArray : FlagDetails[] = [{cof:'Tanzania',
                                                            symbolism : [{color:'Black',meaning: 'The Black colour represents the swahili people'},
                                                            {color:'Blue',meaning: 'The Blue colour epitomizes the Indian Ocean,[3] as well as the nation\'s numerous lakes and rivers'},
                                                            {color:'Yellow',meaning: 'The yellow color stand for Tanzania\'s mineral wealth'},
                                                            {color:'Green',meaning: 'The green alludes to the natural vegetation and rich agricultural resources of the country'}],
                                                            yoa :'1964',
                                                            designer :'Unknown'
                                              },
                                              {cof:'France',
                                                          symbolism : [{color:'Blue',meaning: 'The Blue color is one the city of Paris color and is associated with saint Martin'},
                                                          {color:'White',meaning: 'The White color is the color of the King'},
                                                          {color:'Red',meaning: 'The Red color is on the Paris city\'s color and is associated with saint Denis '}],
                                                          yoa :'1964',
                                                          designer :'Unknown'
                                              },
                                              {cof:'Rwanda',
                                                symbolism : [{color:'Blue',meaning: 'The Blue color represents happiness and peace'},
                                                  {color:'Yellow',meaning: 'The Yellow band symbolizes the economic Development'},
                                                  {color:'Green',meaning: 'The Green band symbolizes hope of prosperity'},
                                                  {color :'Sun',meaning:'The Sun represents enlightenment'}],
                                                yoa :'2001',
                                                designer :'Alphonse Kirimobenecyo'
                                              },
                                            {cof:'Senegal',
                                              symbolism : [{color:'Yellow',meaning: 'The Yellow colour is the symbol of wealth it is also denoted as the colour of arts, literature, and intellect'},
                                                {color:'Green',meaning: 'The Green color for the muslims majority it represents the color of prophet, for the christians it represents hope and for the animists represents fecundity'},
                                                {color:'Red',meaning: 'recalls the colour of blood, therefore colour of life and the sacrifice accepted by the nation, and also of the strong determination to fight against underdevelopment'}],
                                              yoa :'1960',
                                              designer :'Unknown'
                                            },
                                            {cof:'Morocco',
                                              symbolism : [{color:'Red',meaning: 'The Red background represents hardiness, bravery, strength and valour'},
                                                {color:'Green',meaning: 'The green represents love, joy, and hope and it is also the color of Islam'},
                                                {color:'Star',meaning: 'It represents the seal of Solomon'}],
                                              yoa :'1915',
                                              designer :'Unknown'
                                            }
    ];


  constructor() { }

  getFlagsDetails(){
    return this.flagDetailsArray;
  };

  getFlagDetails(flagCountry : string){
    return this.flagDetailsArray.find(flagD => flagD.cof === flagCountry);
  }

}
