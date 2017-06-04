import { Component, OnInit } from '@angular/core';

import { Person } from '../shared/person.model';

@Component({
  selector: 'my-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit {
  childrenNames: string[];
  parentNumbers: number[];

  ngOnInit(): void {
    this.childrenNames = ['Hyzio', 'Dyzio', 'Zyzio'];
    this.parentNumbers = [34, 13, 41, 1, 24, 32];
  }

  chooseNumber(name: string, chosenNumber: number) {
    console.log('Parent received, child name:', name, ' chosen number:', chosenNumber);
  }

  logTick(event: Person) {
    console.log('Parent. Timer data', event);
  }

}
