import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'text-field-with-delay',
  templateUrl: './text-field-with-delay.component.html'
})
export class TextFieldWithDelayComponent {

  @Input() myValue: string;
  @Output() myValueChange: EventEmitter<string>;
  private _timeoutId: any;

  constructor() {
    this.myValueChange = new EventEmitter<string>();
  }

  updateMyValue(text: string) {
    clearTimeout(this._timeoutId);
    this._timeoutId = setTimeout(() => {
      this.myValue = text; // update field value
      this.myValueChange.emit(text); // propagate changes to observers
    }, 800);
  }

}
