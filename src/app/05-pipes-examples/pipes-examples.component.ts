import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipes-examples',
  templateUrl: './pipes-examples.component.html'
})

export class PipesExamplesComponent implements OnInit {

  jsonData: Object;

  ngOnInit() {
    this.jsonData = {
      'name': 'imba!',
      age: null,
      rows: [
        {id: 1, serialNo: 'xxx'},
        {id: 2, serialNo: 'yyy'},
        {id: 3, serialNo: 'zzz'}
      ]
    };
  }
}
