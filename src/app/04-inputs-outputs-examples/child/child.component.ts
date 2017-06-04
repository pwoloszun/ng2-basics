import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../shared/person.model';

@Component({
  selector: 'my-child',
  templateUrl: './child.component.html'
})
export class ChildComponent {
  @Input() firstName: string;
  @Input() childNumbers: number[];

  @Output() numberClick: EventEmitter<number> = new EventEmitter<number>();
  @Output() nameClick: EventEmitter<Person> = new EventEmitter<Person>();

  numberBtnClick(n: number) {
    this.numberClick.emit(n);
  }

  nameBtnClick() {
    let person: Person = {
      name: this.firstName,
      age: Math.random() * 12
    };
    this.nameClick.emit(person);
  }
}
