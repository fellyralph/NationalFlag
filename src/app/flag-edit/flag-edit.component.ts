import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flag-edit',
  templateUrl: './flag-edit.component.html',
  styleUrls: ['./flag-edit.component.css']
})
export class FlagEditComponent implements OnInit {

   numbers;


  constructor() {
    this.numbers = Array(5).fill(3);
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log('......submitted..........');
  }

}
